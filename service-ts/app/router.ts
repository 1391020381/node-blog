import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/signUp', controller.user.signUp)
  router.post('/signIn', controller.user.signIn)
  router.post('/signOut', controller.user.signOut)
  router.post('/publishArticles', controller.post.publishArticles)
  router.get('/articlesDetail', controller.post.getArticlesDetail)
  router.post('/updateArticle', controller.post.updateArticles)
  router.post('/deleteArticles',controller.post.deleteArticles)
};
