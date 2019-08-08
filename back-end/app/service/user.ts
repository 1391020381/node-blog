import { Service } from 'egg';

export default class User extends Service {

  /**
   * sayHi to you
   * @param userName 
   */
  public async signUp(userName: string, passWord: string, email: string) {
    this.ctx.logger.info('signUp', userName, passWord, email)
    const user = new this.ctx.model.User()
    user.name = userName
    user.password = passWord
    user.email = email
    return  user.save() 
    // return await this.ctx.model.User.create({ name: userName, password: passWord, email })
  }
}