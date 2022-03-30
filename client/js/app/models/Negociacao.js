class Negociacao {

    constructor(data, quatidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quatidade;
        this._valor = valor;

        Object.freeze(this);
    }

/* 
"get" criar uma espécie de método, mas que é acessado como se fosse uma propriedade
*/

    get volume(){
        return this._valor * this._quantidade;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}