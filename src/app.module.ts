import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';
import { BlogModule } from './blog/blog.module';
import { HeroService } from './hero/hero.service';

@Module({
  imports: [HeroModule, BlogModule],
  controllers: [AppController, HeroController],
  providers: [AppService,HeroService],
})
export class AppModule {}
