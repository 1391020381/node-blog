* 通过用户名来标识用户,用户名是唯一的,注册时需要判断是否和数据里面的重复,登录时需要判断是否和该用户名的密码一致

* Discriminator 复制 pre / post 钩子
* Discriminator 会继承他的基础 schema 的pre 和 post 中间件。 不过,你也可以为 discriminator 添加中间件,这不会影响到基础 schema