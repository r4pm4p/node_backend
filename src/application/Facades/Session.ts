export default class Session {

    static user: any;

    public static setUser = (user: any) => {
        Session.user = user
    }

    public static getUser = () => {
        return Session.user
    }
}