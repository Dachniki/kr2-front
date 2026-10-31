document.addEventListener("DOMContentLoaded", () => {
    // Получаем ID товара из адресной строки (например, product.html?id=2)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Если мы не на странице товара или ID не передан — ничего не делаем
    if (!productId || !document.getElementById('product-title')) return;

    // База данных наших товаров
    const products = {
        '1': {
            title: 'Камень дешевый',
            price: '1 000 руб.',
            desc: 'Неинтересный, скучный, бесформенный.',
            img: 'https://avatars.mds.yandex.net/i?id=58567837ef26dea9fe3838b6d7ebc640ea1b782c-5487031-images-thumbs&n=13',
            badge: 'Новинка',
            badgeClass: 'bg-success'
        },
        '2': {
            title: 'Камень средний',
            price: '20 000 руб.',
            desc: 'Имеет отчетливую форму, можно поиграть с ним.',
            img: 'https://i.pinimg.com/originals/68/7c/38/687c38bbaa4721fd4ca36ad91a3ef34c.jpg?nii=t',
            badge: 'Хит',
            badgeClass: 'bg-warning text-dark'
        },
        '3': {
            title: 'Камень дорогой',
            price: '1 000 000 руб.',
            desc: 'Идеальная форма камня, крутая эстетика, очень интересный.',
            img: 'https://cs6.livemaster.ru/storage/e7/f3/16010c7eff672c072117bc1491xf.jpg',
            badge: 'Скидка',
            badgeClass: 'bg-danger'
        }
    };

    // Если товар с таким ID найден, подставляем его данные
    if (products[productId]) {
        const data = products[productId];
        
        document.getElementById('product-title').textContent = data.title;
        document.getElementById('product-price').textContent = data.price;
        document.getElementById('product-desc').textContent = data.desc;
        document.getElementById('product-img').src = data.img;
        
        // Меняем бейдж (текст и цвет)
        const badge = document.getElementById('product-badge');
        badge.textContent = data.badge;
        badge.className = 'badge mb-3 ' + data.badgeClass;
    }
});