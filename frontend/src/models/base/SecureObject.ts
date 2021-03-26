// @todo move to common/models/user.ts

import {Crypto} from '../../../../common/Crypto'
import {Session} from '../../store/auth'
import Parse from 'parse'

export class SecureObject extends Parse.Object {

    private secureFields: string[] = []
    private decryptedFields = {}

    constructor(className: string, secureFields: string[]) {
        super(className)

        this.secureFields = secureFields
    }

    public get<T>(attr: string): T {
        const val = super.get(attr)

        if (!this.secureFields.includes(attr)) {
            return val
        }

        if (this.decryptedFields[attr] !== undefined) {
            // @todo need more testing
            //return this.decryptedFields[attr]
        }

        this.decryptedFields[attr] = Crypto.decrypt(Session.get('encryptionKey'), val)

        return this.decryptedFields[attr]
    }


    public set<T>(key: string | unknown, value: T | undefined, options = undefined): this | false {

        if (key && typeof key === 'object') {

            for (const k in key) {
                // Avoid  set({a : 1 , b:2 , c:3}) when one field need to be encrypted
                if (this.secureFields.includes(k)) {
                    throw `When setting Secure Fields, you need to perform a separate "set('${k}', value )"`
                }
            }
        } else if (typeof key === 'string' && this.secureFields.includes(key)) {

            const encryptionKey = Session.get<string>('encryptionKey')

            if (!encryptionKey) {
                throw `Encryption key not set"`
            }

            const encryptedValue = Crypto.encrypt(encryptionKey, value)

            return super.set(encryptionKey, encryptedValue, options)

        }

        return super.set(key as string, value, options)
    }

}


