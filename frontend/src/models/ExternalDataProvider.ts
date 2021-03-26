// @todo move to common/models/user.ts

import {SecureObject} from './base/SecureObject'
import Parse from '@/parseConfig';


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
