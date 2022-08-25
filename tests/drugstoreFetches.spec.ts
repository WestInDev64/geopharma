import { InMemoryDrugstoresPort } from 'src/app/pharmacie/adapters/secondaries/inMemory/inMemoryDrugstores.port';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';
import { DrugstorePort } from 'src/app/pharmacie/domain/ports/drugstore.port';
import { DrugstoreHandle } from 'src/app/pharmacie/usecases/drugstore.handle';


describe('Gestion des pharmacies', () => {
    it('doit afficher une liste vide de pharmacie si il y 0 pharmacie', (done) => {

        const drugstoreSource: DrugstorePort = new InMemoryDrugstoresPort([]);
        const drugstoreHandle: DrugstoreHandle = new DrugstoreHandle(drugstoreSource);


        drugstoreHandle.all().subscribe(drugstores => {
            expect(drugstores).toEqual([]);
            done();
        });

    });
});
