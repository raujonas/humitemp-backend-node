export default class HumiTemp {
    private _humi: number;
    private _temp: number;
    private _time: string;

    constructor(humi: number, temp: number, time: string) {
        this._humi = humi;
        this._temp = temp;
        this._time = time;
    }

    get humi(): number {
        return this._humi;
    }

    set humi(value: number) {
        this._humi = value;
    }

    get temp(): number {
        return this._temp;
    }

    set temp(value: number) {
        this._temp = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }
}
