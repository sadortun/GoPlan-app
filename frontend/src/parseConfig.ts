/**
 *
 *
 *
 */

const Parse = require('parse')
import * as process from 'process'


Parse.initialize('goplan-finance')
console.log(process.env.PARSE_API_LOCATION)
Parse.serverURL = 'http://local.goplan.finance:1337/parse'
if (process.env.PARSE_API_LOCATION === 'prod') {
  Parse.serverURL = 'https://goplan.finance/parse'
}

Parse.enableLocalDatastore()

// @ts-ignore
Parse.CoreManager.setStorageController(Parse.IndexedDB)

// @todo move to common/models/User

export default Parse
