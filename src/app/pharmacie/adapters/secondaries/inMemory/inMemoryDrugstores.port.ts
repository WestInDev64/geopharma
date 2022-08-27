import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';
import { DrugstorePort } from 'src/app/pharmacie/domain/ports/drugstore.port';

export class InMemoryDrugstoresPort implements DrugstorePort {

    private drugstores$: Subject<Array<Drugstore>> = new BehaviorSubject(this.drugstores);

    constructor(private drugstores: Array<Drugstore>) { }

    all(): Observable<Drugstore[]> {
        return this.drugstores$;
    }

}
