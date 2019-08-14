import { Service } from 'egg';

export default class PostService extends Service {
  public async publishArticles(title: string, content: string, author: string) {
    try {
      const result = await this.ctx.model.Post.create({ title, content, author })
      if (result) {
        return {
          result: result,
          resultCode: '1'
        }
      } else {
        return {
          result: '',
          resultCode: '0'
        }
      }
    } catch (e) {
      this.ctx.logger.info(e)
    }

  }
}