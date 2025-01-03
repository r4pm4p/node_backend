import AdminDTO from "../../infrastructure/dto/AdminDTO";

export default class Session {

    static user: any;
    static mc: any;
    static owner: any;
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

    public static getMc = () => {
        return Session.mc ?? false
    }

    public static setMc = (mc: any) => {
        Session.mc = mc
    }

    public static setOwner = () => {
        return Session.owner ?? false
    }

    public static getOwner = (owner: any) => {
        Session.owner = owner
    }
}