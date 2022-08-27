import { DrugstoreBuilder } from 'src/app/pharmacie/usecases/drugstore.builder';

export class StubDrugstoreBuilder extends DrugstoreBuilder {
    protected override _id: String = "PHARMA01";
    protected override _name: String = "Pharmacie Cypria";
    protected override _url: String = "http://www.pharmao.fr/annuaire/pharmacies/liste/france-d-outre-mer/martinique/fort-de-france/pharmacie-cypria_21658";
    protected override _tel: number = 596632225;
    protected override _address: String = "40 bd Général de Gaulle";
    protected override _zipCode: number = 97200;
    protected override _city: String = "Fort-de-France";
    protected override _gardeJour: boolean = false;
    protected override _gardeNuit: boolean = false;
    protected override _schedules: JSON;
}

