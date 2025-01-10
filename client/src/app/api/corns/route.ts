import axios, { AxiosResponse } from 'axios';
import { Corn } from '@/interfaces/corns';

export async function GET() {
    try {
        const response: AxiosResponse<Corn[]> = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/corns`);

        return Response.json(response.data);
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}
