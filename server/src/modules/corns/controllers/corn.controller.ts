import { Request, Response } from 'express';
import pool from '../../../config/config';
import { CornBody } from '../../../interfaces/corns';
import { CornService } from './corns.service';

export const buyCorn = async (req: Request<{}, {}, CornBody>, res: Response): Promise<Response> => {
    const cornService = new CornService();

    try {
        await cornService.createCornService(req.body);

        return res.status(200).json({
            message: 'The corn was successfully buyed'
        });
    } catch (error: any) {
        return res.status(500).json({ message: error });
    }
};

export const getCorns = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await pool.query('SELECT * FROM corns');
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
