// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResponseOk from '../../../app/middleware/responseOk';

declare module 'egg' {
  interface IMiddleware {
    responseOk: typeof ExportResponseOk;
  }
}
