import { Controller } from 'egg'
export default class UserController extends Controller {
  public async signUp() {
    const { ctx, service } = this
    const { userName,passWord,email } = ctx.request.body
    const result = await service.user.signUp(userName,passWord,email)
    ctx.body = result
  }
}