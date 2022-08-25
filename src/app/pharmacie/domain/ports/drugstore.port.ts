import { Observable } from 'rxjs';
import { Drugstore } from '../entities/Drugstore';


export interface DrugstorePort {
    all(): Observable<Array<Drugstore>>;
}
