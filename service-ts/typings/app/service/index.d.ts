// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComment from '../../../app/service/comment';
import ExportPost from '../../../app/service/post';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    comment: ExportComment;
    post: ExportPost;
    test: ExportTest;
    user: ExportUser;
  }
}
