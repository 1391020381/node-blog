import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {


  public async signUp(userName: string, passWord: string, email: string) {
    const result = await this.ctx.model.User.create({ userName, passWord, email })
    return result
  }
}
