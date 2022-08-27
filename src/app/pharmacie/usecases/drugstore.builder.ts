/* eslint no-underscore-dangle: off */

import { Drugstore } from '../domain/entities/Drugstore';

export class DrugstoreBuilder {

    protected _id: String;
    protected _name: String;
    protected _url: String;
    protected _tel: number;
    protected _address: String;
    protected _zipCode: number;
    protected _city: String;
    protected _gardeJour: boolean;
    protected _gardeNuit: boolean;
    protected _schedules: JSON;


    withId(value: String): DrugstoreBuilder {
        this._id = value;
        return this;
    }


    withName(value: String): DrugstoreBuilder {
        this._name = value;
        return this;
    }

    withUrl(value: String): DrugstoreBuilder {
        this._url = value;
        return this;
    }

    withTel(value: number): DrugstoreBuilder {
        this._tel = value;
        return this;
    }

    withAddress(value: String): DrugstoreBuilder {
        this._address = value;
        return this;
    }

    withZipCode(value: number): DrugstoreBuilder {
        this._zipCode = value;
        return this;
    }

    withCity(value: String): DrugstoreBuilder {
        this._city = value;
        return this;
    }

    withGardeJour(value: boolean): DrugstoreBuilder {
        this._gardeJour = value;
        return this;
    }

    withGardeNuit(value: boolean): DrugstoreBuilder {
        this._gardeNuit = value;
        return this;
    }

    withSchedules(value: JSON): DrugstoreBuilder {
        this._schedules = value;
        return this;
    }

    build(): Drugstore {
        return new Drugstore(
            this._id,
            this._name,
            this._url,
            this._tel,
            this._address,
            this._zipCode,
            this._city,
            this._gardeJour,
            this._gardeNuit,
            this._schedules,
        )
    }
}
