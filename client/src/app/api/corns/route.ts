import axios, { AxiosResponse } from 'axios';
import { Corn } from '@/interfaces/corns';
import { API_ROUTE } from '@/lib/API-routes';

export async function GET() {
    try {
        const response: AxiosResponse<Corn[]> = await axios.get(`${API_ROUTE}/corns`);

        return Response.json(response.data);
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}
