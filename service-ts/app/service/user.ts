import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {


  public async signUp(userName: string, passWord: string, email: string) {
    try {
      const result = await this.ctx.model.User.create({ userName, passWord, email })
      if (result.userName) {
        return {
          result: result,
          resultCode: '1'
        }
      } else {
        return {
          result: result,
          resultCode: '0'
        }
      }
    } catch (e) {
      if (e.message.match('duplicate key')) {
        return { errorMessage: '用户名已存在', resultCode: '0' }
      }
    }


  }
  // public async signIn(userName:string,passWord:string,email:string){

  // }
}
