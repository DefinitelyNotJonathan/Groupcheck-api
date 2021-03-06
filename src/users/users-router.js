const path = require('path');
const express = require('express');
const xss = require('xss');
const md5 = require('md5');
const UsersService = require('./users-service');

const usersRouter = express.Router();
const jsonParser = express.json();

const serializeUser = (user) => ({
  id: user.id,
  firstname: xss(user.firstname),
  lastname: xss(user.lastname),
  email: xss(user.email),
  date_created: user.date_created,
});

usersRouter
  .route('/:user_id')
  .get((req, res, next) => {
    UsersService.getById(
      req.app.get('db'),
      req.params.user_id
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            error: { message: "User doesn't exist" },
          });
        } else if (user.params === null) {
          return res.status(404).json({
            error: { message: "bad request" },
          });
        }
        res.user = user;
        res.status(200);
        next();
      })
      .catch(next);
  })
  .get((req, res ) => {
    return res.json(serializeUser(res.user));
  })
  .delete((req, res, next) => {
    UsersService.deleteUser(
      req.app.get('db'),
      req.params.user_id
    )
      .then((user) => {
        if (!user){
          return res.status(404).json({
            error: {message: "Not found"}
          });
        }
        return res.status(204).end();
      })
      .catch(next);
  })
  .patch(jsonParser, (req, res, next) => {
    const { firstname, lastname, email } = req.body;
    const userToUpdate = { firstname, lastname, email };
    const numberOfValues = Object.values(userToUpdate).filter(Boolean).length;
    if (numberOfValues === 3) {
      return res.status(400).json({
        error: {
          message: "Request body must contain either 'firstname', 'lastname', or 'email'",
        },
      });
    }

    UsersService.updateUser(
      req.app.get('db'),
      req.params.user_id,
      userToUpdate
    )
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
});
usersRouter
  .route('/')
  .post(jsonParser, async (req, res, next) => {
    let { firstname, lastname, email, p_word } = req.body;
    const newUser = { firstname, lastname, email, p_word };
    for (const [key, value] of Object.entries(newUser)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` },
        });
      }
    }
    let allUsers = await UsersService.lookForUser(req.app.get('db'), newUser.email)
    if (allUsers) {
      return res.status(400).json({
        error: { message: 'email is already in use' },
      });
    }
    UsersService.insertUser(
      req.app.get('db'),
      newUser
    )
    .then((user) => {
      res
        .status(201)
        .location(path.posix.join(req.originalUrl, `/${user.id}`))
        .json(serializeUser(user));
      })
      .catch(next);
});

module.exports = usersRouter;
