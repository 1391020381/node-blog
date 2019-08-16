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
      const id = ctx.query.id  // 文章
      this.ctx.logger.info('ctx.query.id', ctx.query)
      const authorId = ctx.session.userInfo._id  // 作者
      const result = await service.post.getArticlesDetail(id, authorId)
      ctx.body = result
    } catch (e) {
      this.ctx.logger.info(e)
    }
  }
  public async updateArticles() {
    try {
      const { ctx, service } = this
      const { id, title, content } = ctx.request.body
      // const authorId = ctx.session.userInfo._id
      const result = await service.post.updateArticles(id, title, content)
      ctx.body = result
    } catch (e) {
      this.ctx.logger.info(e)
    }
  }
  public async deleteArticles() {
    try {
      const { ctx, service } = this
      const { id } = ctx.request.body  // ctx.request.body 是一个对象需要把 id 解构出来
      const result = await service.post.deleteArticles(id)
      ctx.body = result
    } catch (e) {
      this.ctx.logger.info(e)
    }
  }
} 