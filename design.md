* 通过用户名来标识用户,用户名是唯一的,注册时需要判断是否和数据里面的重复,登录时需要判断是否和该用户名的密码一致

* Discriminator 复制 pre / post 钩子
* Discriminator 会继承他的基础 schema 的pre 和 post 中间件。 不过,你也可以为 discriminator 添加中间件,这不会影响到基础 schema

* mongoDB与关系型数据库的建模还是有许多不同,因为mongoDB支持内嵌对象和数组类型。MongoDB建模有两种方式,一种是内嵌(Embed) 另一种是连接(Link)

* 一对一的关系:Embed,比如用户信息集合有 Address 字段,Address字段有省市县三个字段。

```

UserInfo = {
  id:'',
  name:'',
  address:{
    province:'',
    city:'',
    county:''
  }
}


```

* 一对多关系: 一篇文章有多条评论,为 1对多关系
* `由于MongoDB对单个文档(document)有大小限制16M(高于v1.8),设计时也要将这个限制纳入考虑中`
```


Post = {
  id:'',
  title:'',
  body:'',
  created:'',
  comments:[
    {
    title:'',
    body:'',
    created:''
  }
  ]
}





```

* 多对多关系:学生和课程是多对多的关系,一个学生可以选多门课程,一门课程有多名学生参与
* `多对多使用了连接(Linking),连接时通过引用(References)来连接两个集合。MongoDB  References有两种:一种是手动引用(Manual References),另一种是DBRefs`
```

User = {
  _id:'UserId',
  pwd:'',
  age:'',
  created:storeName,
  gender:''
}

Post = {
  _id:'id',
  title:'',
  body:'',
  author:'UserId'
}

```
* Post的author的UserId 就是Manual References,如果想查询一篇文章的作者信息,首先在post集合找出那篇文章,然后在user集合查找出用户的全部信息。但是假设有这么一个场景:用户可以对图片 文章等各种资源评论,所有的评论都放在comment集合中,如果只是使用Manual References,就分不清楚到底是属于哪类资源了,图片 文章

* DBRef的形式
 ```
{ $ref : <value>, $id : <value>, $db : <value> }

// $ref:集合名称;$id:引用的id;$db数据库名称

// MongoDB提供了函数解析DBRef,不用像Manual References 需要自己提供手动查询


var User = { _id:'foo',age:35}

var Post = {_id:'',author:{$ref:user,$id:'foo'}}



db.post.find('author.$id':'foo')

 ``` 

 # Populate 填充

 * MongoDB 3.2之后,也有像sql里join的聚合操作,那就是 $lookup而Mongoose,拥有更强大的 populate() ,可以让你在别的collection中引用 document
 * Population可以自动替换 document中的指定字段，替换内容从其他collection获取。我们可以填充(populate)单个或多个document,单个或多个纯对象,甚至是query返回的一切对象。