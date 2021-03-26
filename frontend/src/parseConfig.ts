/**
 *
 *
 *
 */

import Parse from 'parse'
import * as process from "process";


Parse.initialize('goplan-finance')

window.Parse.serverURL = 'https://goplan.finance/parse'

if (process.env.VITE_APP_PARSE_API_LOCATION === 'local') {
  window.Parse.serverURL = 'http://local.goplan.finance:1337/parse'
}

window.Parse.enableLocalDatastore()

// @ts-ignore
Parse.CoreManager.setStorageController(Parse.IndexedDB)

// @todo move to common/models/User

