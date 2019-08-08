import { Controller } from 'egg';
export default class UserController extends Controller {
  public async signUp() {
    const { ctx } = this
    ctx.body = 'signUp'
  }
}