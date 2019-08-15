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
  public async getArticlesDetail(id: string, authorId: string) {
    try {
      const result = await this.ctx.model.Post.findById(id).populate({ path: 'author', select: 'userName', match: { _id: authorId } })
      if (result) {
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
      this.ctx.logger.info(e)
    }
  }
  public async updateArticles(id: string, title: string, content: string) {
    try {
      const result = await this.ctx.model.Post.findByIdAndUpdate(id, { title, content, updatedAt: Date.now() })
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
  public async deleteArticles(id: string) {
    try {
      const result = await this.ctx.model.Post.findByIdAndRemove(id)
      this.ctx.logger.info('deleteArticles:', result)
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