// src/data/mockAPI.js


export function getProducts({ categoryId = null, productId = null } = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (productId) {
                resolve(products.find(product => product.id === productId));
            } else if (categoryId) {
                resolve(products.filter(product => product.category === categoryId));
            } else {
                resolve(products);
            }
        }, 1000);
    });
}

const products = [
    {
        id: '1',
        category: 'Remeras',
        name: 'Remera gris',
        description: 'Remera gris bien fachera.',
        price: '$10.000',
        image: '/products-assets/remera-gris.png',
        stock: 10,
    },
    {
        id: '2',
        category: 'Remeras',
        name: 'Remera roja',
        description: 'Remera roja aún más fachera.',
        price: '$5.000',
        image: '/products-assets/remera-roja.png',
        stock: 5,
    },
    {
        id: '3',
        category: 'Pantalones',
        name: 'Jeans azules',
        description: 'Jeans clásicos y siempre divinos para usar.',
        price: '$15.000',
        image: '/products-assets/jean-azul.png',
        stock: 15,
    },
    {
        id: '4',
        category: 'Pantalones',
        name: 'Joggin negro',
        description: 'Otro pantalón clásico aún más divinos.',
        price: '$12.000',
        image: '/products-assets/joggin-negro.png',
        stock: 17,
    },
    {
        id: '5',
        category: 'Zapatillas',
        name: 'Zapatillas azules',
        description: 'Zapatillas azules ideales para tirar facha.',
        price: '$100.000',
        image: '/products-assets/zapas-azules.png',
        stock: 14,
    },

    {
        id: '6',
        category: 'Zapatillas',
        name: 'Zapatillas verdes',
        description: 'Zapas verdes de los más increíbles y cómodos que hay.',
        price: '$80.000',
        image: '/products-assets/zapas-verdes.png',
        stock: 22,
    },

];

