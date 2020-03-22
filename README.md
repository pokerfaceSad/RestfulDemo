- # Todo list

  Requirements

  - node@10.15.0
  - express@4.17.1
  - nodemon@2.0.2
  - mocha@7.1.1
  - supertest@4.0.2

  Run

  ```bash
$ npm run start # OR npm run debug
  ```
  
  Test
  
```bash
  $ npm run test
```
  
Test Report
  
  ```bash
  app
    get request
    ✓ should get all tasks when request url pattern is '/tasks'
    ✓ should get specific task when request url patten is '/tasks/:id'
    post request
  ✓ should create a task when the corresponding id does not exist in the datasource
    ✓ should not create the task when its id has already existed in the datasource

  4 passing (56ms)
  ```
  
  
  
  使用node框架，构建一个Restful API，能够完成Todo list的以下功能。
  
  - 返回所有Todo任务
  - 创建一个新的Todo任务
  - 返回一个指定ID的Todo任务
  - 删除一个Todo任务
  
  为简化流程，不引入数据存储，即，不需要做数据持久化，可以在服务器运行时满足功能即可。
  
  Todo中一个任务的JSON格式定义为：
  
  ```
    {
      "id": 1,
      "content": "Restful API homework",
      "createdTime": "2019-05-15T00:00:00Z"
    }
  ```
  
  进一步的功能提示：需完成的四个功能的Restful API定义如下，实现即可。
  
  ```
  GET /api/tasks/
  POST /api/tasks/
  GET /api/tasks/{id}
  DELETE /api/tasks/{id}
  ```

