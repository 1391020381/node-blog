import { Controller } from 'egg'
export default class UserController extends Controller {
  public async signUp() {
    const { ctx, service } = this
    const { userName, passWord, email } = ctx.request.body
    this.ctx.logger.info('session:', ctx.session)
    const result = await service.user.signUp(userName, passWord, email)
    ctx.body = result
  }
  public async signIn() {
    const { ctx, service } = this
    const { userName, passWord } = ctx.request.body
    const userInfo = ctx.session.userInfo
    // this.ctx.logger.info('session:', ctx.session)
    // this.ctx.logger.info('session-userInfo:', ctx.session.userInfo)
    if (userInfo) {
      ctx.body = {
        resultCode:'1',
        result:userInfo
      }
      return
    }
    const result = await service.user.signIn(userName, passWord)
    // this.ctx.logger.info('signIn-serve-result:',result&&result.result)
    ctx.session.userInfo = result&&result.result
    ctx.body = result
  }
  public async signOut (){
    const {ctx} = this
    ctx.session = null
    ctx.body = {
      result:'',
      resultCode:'1'
    }
  }
}