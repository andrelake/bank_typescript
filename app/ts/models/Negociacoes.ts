class negociacoes {

    private _negociacoes: Negociacao[] = []

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao)
    }

    paraArray() {

        return this._negociacoes
    }
}