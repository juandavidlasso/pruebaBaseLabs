import axios, { AxiosError, AxiosResponse } from 'axios';
import { CornPayload } from '@/interfaces/corns';

export async function POST(request: Request) {
    try {
        const { quantity }: CornPayload = await request.json();

        const response: AxiosResponse<{ message: string }> = await axios.post(
            `${process.env.NEXT_PUBLIC_API_ROUTE}/corn`,
            { quantity },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return Response.json(response.data, { status: response.status });
    } catch (error) {
        if (error instanceof AxiosError) {
            return Response.json(error.response?.data, { status: error.status });
        }
        return Response.json(error, { status: 500 });
    }
}
