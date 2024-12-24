const crypto = require("crypto")

export class Hash {
    static make = (text: string): string => {
        const hash = crypto.createHash('sha256')
        hash.update(text)

        return hash.digest('hex')
    }

    static compare = (text: string, hashText: string): boolean => {
        return hashText === Hash.make(text)
    }
}