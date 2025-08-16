import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('services')
  getServices() {
    return this.appService.getServices();
  }

  @Get('stats')
  getStats() {
    return this.appService.getStats();
  }

  @Post('contact')
  submitContact(@Body() contactData) {
    return this.appService.submitContact(contactData);
  }

  @Get('health')
  healthCheck() {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }
}
