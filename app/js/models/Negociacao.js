class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data; // "_" indica que os valores não podem ser alterados fora dos métodos da própria classe
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
