import pool from '../../../config/config';
import { Corn, CornBody } from '../../../interfaces/corns';

export class CornRepository {
    public async createCorn(corn: CornBody): Promise<number> {
        const result = await pool.query<Corn>('INSERT INTO corns (quantity) VALUES ($1)', [corn.quantity]);
        return result.rowCount!;
    }
}
