import { Controller } from 'egg';

export default class PostController extends Controller {
  public async publishArticles() {
    try {
      const { ctx, service } = this
      const { title, content } = ctx.request.body
      const authorId = ctx.session.userInfo._id
      //  this.ctx.logger.info('userInfo:', ctx.session.userInfo)
      const result = await service.post.publishArticles(title, content, authorId)
      ctx.body = result
    } catch (e) {
      this.ctx.logger.info(e)
    }
  }
  public async getArticlesDetail() {
    try {
      const { ctx, service } = this
      const id = ctx.params.id  // 文章
      this.ctx.logger.info('ctx.params.id', ctx.params)
      const authorId = ctx.session.userInfo._id  // 作者
      const result = await service.post.getArticlesDetail(id, authorId)
      ctx.body = result
    } catch (e) {
      this.ctx.logger.info(e)
    }
  }
} 