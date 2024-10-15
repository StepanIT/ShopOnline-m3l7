async function loadPosts() {
    try {
        const response = await fetch('https://gorest.co.in/public-api/posts');
        const data = await response.json();

        if (data && data.data) {
            const blogsList = document.querySelector('.blogs');
            blogsList.innerHTML = '';

            data.data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a class="blogs__item" href="#">
                        <img src="https://loremflickr.com/400/400?${post.id}" alt="${post.title}" class="blogs__item-image__picture">
                        <p class="blogs__item-text">${post.title}</p>
                    </a>
                `;
                blogsList.appendChild(listItem);
            });
        } else {
            console.error('Не удалось получить данные статей');
        }
    } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
    }
}


window.addEventListener('DOMContentLoaded', loadPosts);
