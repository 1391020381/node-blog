import { Service } from 'egg';

export default class CommentService extends Service {
  public async createComment(id: string, content: string, author: string) {
    const result = await this.ctx.model.Comment.create({ postId: id, from: author, content })
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
  }
  public async getComment(id: string) {
    // 在建 Comment model的时候 from 是保存 User model 中的 _id
    const result = await this.ctx.model.Comment.find({ postId: id }).populate({ path: 'from', select: 'userName' })
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
  }
} 