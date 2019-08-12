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
  public async signIn(userName: string, passWord: string) {
    try {
      const result = await this.ctx.model.User.findOne({ userName })
      this.ctx.logger.info('signIn-查询用户:',result)
      if (result.passWord === passWord) {
        return {
          resultCode: '1',
          result:result
        }
      }
    } catch (e) {
      this.ctx.logger.info('e:', e)
      return {
        resultCode: '0',
        result: ''
      }
    }
  }
}
