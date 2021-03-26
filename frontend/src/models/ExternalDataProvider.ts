// @todo move to common/models/user.ts
import Parse from 'parse'

import {SecureObject} from './base/SecureObject'

class ExternalDataProvider extends SecureObject {

  constructor () {
    super('ExternalDataProvider', [
      'credentials'
    ])
  }

}

Parse.Object.registerSubclass('ExternalDataProvider', ExternalDataProvider)

export {
  ExternalDataProvider
}
