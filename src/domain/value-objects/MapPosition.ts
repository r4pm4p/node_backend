export default class MapPosition {
    private latitude: string;
    private longitude: string;

    constructor(mapPosition: Object) {
        //@ts-expect-error
        const { latitude, longitude } = { ...mapPosition }
        this.latitude = latitude
        this.longitude = longitude
    }

    /**
     * @description Data is stored divided by comma (;)
     * @returns latidude;longitude
     */
    public toString() {
        return `${this.latitude}; ${this.longitude}`
    }

}
