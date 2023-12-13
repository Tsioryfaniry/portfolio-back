import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getUser(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

}
