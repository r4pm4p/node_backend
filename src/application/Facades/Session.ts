export default class Session {

    private id: number;

    constructor(id: number) {
        this.id = id
    }

    public setGlobalId = (id: number) => {
        this.id = id
    }

    public getGlobalId = (id: number) => {
        return this.id
    }
}