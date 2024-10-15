const loadArticle = async (cb) => {
  const result = await fetch('https://gorest.co.in/public-api/posts');

  const data = await result.json();
  cb(data.data);
};

const renderArticle = (data) => {
  const blogsList = document.querySelector('.blogs');
  blogsList.innerHTML = '';

  const goods = data.map(item => {
    const blogsItem = document.createElement('li');
    blogsItem.innerHTML = `
        <a class="blogs__item" href="#">
                        <img src="https://loremflickr.com/400/400?${item.id}" alt="${item.title}" class="blogs__item-image__picture">
                        <p class="blogs__item-text">${item.title}</p>
                    </a>
      `;
    return blogsItem;
  });

  blogsList.append(...goods);
};

loadArticle(renderArticle);


