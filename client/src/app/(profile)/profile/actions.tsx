import axios, { AxiosError, AxiosResponse } from 'axios';
import { Corn, CornPayload } from '@/interfaces/corns';
import { API_ROUTE } from '@/lib/API-routes';

export const getCorns = async (): Promise<Corn[]> => {
    try {
        const response: AxiosResponse<Corn[]> = await axios.get(`${API_ROUTE}/corns`);
        return response.data;
    } catch (error) {
        return [];
    }
};

export const postCorn = async (payload: CornPayload): Promise<{ message: string; status: number }> => {
    try {
        const response: AxiosResponse<{ message: string }> = await axios.post(`${API_ROUTE}/corn`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            status: response.status,
            message: response.data.message
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                status: error.status!,
                message: error.response?.data?.error
            };
        }
        return { status: 500, message: 'Internal Server Error' };
    }
};
