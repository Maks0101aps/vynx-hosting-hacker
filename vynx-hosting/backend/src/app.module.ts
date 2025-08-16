import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouchdbService } from './couchdb.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend', 'build'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CouchdbService],
})
export class AppModule {}
