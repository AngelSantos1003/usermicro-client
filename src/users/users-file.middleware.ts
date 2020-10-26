import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import fromidable from 'formidable';
// import multer from "multer";
@Injectable()
export class FileMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
      console.log('Request...', req);
      next();
    }
  }
  