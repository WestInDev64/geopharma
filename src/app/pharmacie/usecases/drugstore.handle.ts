import { Observable } from 'rxjs';
import { Drugstore } from '../domain/entities/Drugstore';
import { DrugstorePort } from '../domain/ports/drugstore.port';


export class DrugstoreHandler {

    constructor(private drugstoreSource: DrugstorePort) { }

    all(): Observable<Array<Drugstore>> {
        return this.drugstoreSource.all();
    }

}
