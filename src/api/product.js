import { apiHelper } from 'utils/helper';

export const getAllProducts = async () => {
    try {
        const { data } = await apiHelper.get('/products');
        // console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}


