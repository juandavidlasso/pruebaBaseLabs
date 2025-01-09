import { CornBody } from '../../../interfaces/corns';
import { CornRepository } from './corns.repository';

export class CornService {
    private cornRepository = new CornRepository();

    public async createCornService(payload: CornBody): Promise<number> {
        return this.cornRepository.createCorn(payload);
    }
}
