const jsonwebtoken = require("jsonwebtoken")
require('dotenv').config()

export default class Jwt {
    public static make = (user: any) => {
        const jwtToken = jsonwebtoken.sign({
            user: user,
        }, process.env.JWT_KEY, { expiresIn: "60m" })

        return jwtToken
    }

    public static validate(token: string): boolean {
        const payload = jsonwebtoken.verify(token, process.env.JWT_KEY)
        console.log("AAAAAAAAA")
        console.log(payload)
        return payload ?? false
    }
}