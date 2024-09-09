// filename: src/services/apiService.js

import { getProducts } from '../data/productos';

export const fetchAPI = ({ categoryId = null, productId = null } = {}) => {
    return getProducts({ categoryId, productId });
};
