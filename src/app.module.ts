import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';
import { BlogModule } from './blog/blog.module';
import { HeroService } from './hero/hero.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DataSource } from 'typeorm';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),   
    
    HeroModule, BlogModule,PrismaModule],
  controllers: [AppController, HeroController],
  providers: [AppService,HeroService],
})
export class AppModule {

}
