import AdminDTO from "../../infrastructure/dto/AdminDTO";

export default class Session {

    static user: any;
    static isAdmin: boolean = false;

    public static setUser = (user: any) => {
        Session.user = user
    }

    public static getUser = () => {
        return Session.user
    }

    public static setAdminSession = () => {
        Session.isAdmin = true
    }
    public static isAdminSession = () => {
        return Session.isAdmin
    }
}