import { Controller } from 'egg';

export default class PostController extends Controller{
  public async publishArticles(){
    const {ctx} = this
   ctx.body = 'markdown'
  }
} 