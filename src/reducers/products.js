var initialState = [
    {
        id: 1,
        name: 'Iphone 13',
        image: 'https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-silver-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1200,
        inventory: 10,
        rating: 5,
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 20',
        image: 'https://images.samsung.com/sg/smartphones/galaxy-note20/buy/005-galaxynote20ultra-mysticbronze-mo-720.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 1000,
        inventory: 15,
        rating: 5,
    },
    {
        id: 3,
        name: 'OPPO Reno6 Z',
        image: 'https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 20,
        rating: 4,
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state]
    }
}

export default products