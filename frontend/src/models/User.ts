// @todo move to common/models/user.ts
import Parse from '@/parseConfig';

Parse.User.allowCustomUserClass(true)


class User extends Parse.User {


}

Parse.Object.registerSubclass('_User', User)

export {
  User
}
