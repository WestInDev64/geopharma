export class Drugstore {




    constructor(
        private _id: String,
        private _name: String,
        private _url: String,
        private _tel: number,
        private _address: String,
        private _zipCode: number,
        private _city: String,
        private _dist: number,
        private _drivetime: number,
        private _img: String,
        private _gardeJour: boolean,
        private _gardeNuit: boolean,
        private _schedules: JSON) { }


    public get id(): String {
        return this._id;
    }
    public get name(): String {
        return this._name;
    }
    public get url(): String {
        return this._url;
    }

    public get tel(): number {
        return this._tel;
    }

    public get address(): String {
        return this._address;
    }
    public get city(): String {
        return this._city;
    }

    public get zipCode(): number {
        return this._zipCode;
    }

    public get schedules(): JSON {
        return this._schedules;
    }

    public get gardeNuit(): boolean {
        return this._gardeNuit;
    }

    public get gardeJour(): boolean {
        return this._gardeJour;
    }

    public get drivetime(): number {
        return this._drivetime;
    }

    public get dist(): number {
        return this._dist;
    }
    
    public get img(): String {
        return this._img;
    }
}
