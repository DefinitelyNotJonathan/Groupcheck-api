function makeListsArray() {
    return [
      {
        id: 1,
        date_published: '2029-01-22T16:28:32.615Z',
        name: 'First test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
        author: 1
      },
      {
        id: 2,
        date_published: '2100-05-22T16:28:32.615Z',
        name: 'Second test post!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.',
        author: 1
      },
      {
        id: 3,
        date_published: '1919-12-22T16:28:32.615Z',
        name: 'Third test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.',
        author: 1
      },
      {
        id: 4,
        date_published: '1919-12-22T16:28:32.615Z',
        name: 'Fourth test post!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?',
        author: 1
      },
    ];
  }
  
  function makeMaliciousList() {
    const maliciousList = {
      id: 911,
      date_published: new Date().toISOString(),
      name: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }
    const expectedList = {
      ...maliciousList,
      name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousList,
      expectedList,
    }
  }
  
  module.exports = {
    makeListsArray,
    makeMaliciousList,
  }
