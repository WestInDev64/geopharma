import { InMemoryDrugstoresPort } from 'src/app/pharmacie/adapters/secondaries/inMemory/inMemoryDrugstores.port';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';
import { DrugstorePort } from 'src/app/pharmacie/domain/ports/drugstore.port';
import { DrugstoreHandler } from 'src/app/pharmacie/usecases/drugstore.handle';
import { StubDrugstoreBuilder } from './stubs/stubDrugstore.builder';


describe('Gestion des pharmacies', () => {
    it('doit afficher une liste vide de pharmacie si il y 0 pharmacie', (done) => {

        const drugstoreSource: DrugstorePort = new InMemoryDrugstoresPort([]);
        const drugstoreHandle: DrugstoreHandler = new DrugstoreHandler(drugstoreSource);


        drugstoreHandle.all().subscribe(drugstores => {
            expect(drugstores).toEqual([]);
            done();
        });

    });

    it('doit afficher une liste de 1 pharmacie si il y 1 pharmacie', (done) => {

        //const pharmacie: Drugstore = new Drugstore('Pharmacie Cypria');
        
        const pharmacie: Drugstore = new StubDrugstoreBuilder().build();
        const drugstoreSource: DrugstorePort = new InMemoryDrugstoresPort([pharmacie]);
        const drugstoreHandle: DrugstoreHandler = new DrugstoreHandler(drugstoreSource);


        drugstoreHandle.all().subscribe(drugstores => {
            expect(drugstores).toEqual([pharmacie]);
            done();
        });

    });

    it('doit afficher une liste de 2 pharmacies si il y 2 pharmacies', (done) => {

        //const pharmacie1: Drugstore = new Drugstore('Pharmacie Cypria');
        //const pharmacie2: Drugstore = new Drugstore('Pharmacie du Rond Point');
        const pharmacie1 = new StubDrugstoreBuilder().withName('Pharmacie Cypria').build();
        const pharmacie2 = new StubDrugstoreBuilder().withName('Pharmacie du Rond Point').build();

        const drugstoreSource: DrugstorePort = new InMemoryDrugstoresPort([pharmacie1, pharmacie2]);
        const drugstoreHandle: DrugstoreHandler = new DrugstoreHandler(drugstoreSource);


        drugstoreHandle.all().subscribe(drugstores => {
            expect(drugstores).toEqual([pharmacie1, pharmacie2]);
            done();
        });

    });
});
