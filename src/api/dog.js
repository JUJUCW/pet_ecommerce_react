import { apiHelper } from 'utils/helper';

export const getAllDogs = async () => {
    try {
        const { data } = await apiHelper.get('/dogs');
        // console.log('data', data)
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const getDog = async (SKU) => {
    try {
        const { data } = await apiHelper.get(`/dogs?SKU=${SKU}`);

        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
