import { Controller } from 'egg'
export default class CommentController extends Controller {
  public async createComment() {
    const { ctx, service } = this
    const { content, id } = ctx.request.body
    const author = ctx.session.userInfo._id
    const result = await service.comment.createComment(id, content, author)
    ctx.body = result
  }
  public async getComment() {
    const { ctx, service } = this
    const { id } = ctx.request.body
    const result = await service.comment.getComment(id)
    ctx.body = result
  }
}