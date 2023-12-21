import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';
import { BlogModule } from './blog/blog.module';
import { HeroService } from './hero/hero.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PrismaModule } from './prisma/prisma.module';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tsiory',
      password: 'tsiory',
      database: 'tsiory',
      entities: [],
      synchronize: true,
      logging:true
    }),
    HeroModule, BlogModule,PrismaModule, CatsModule],
  controllers: [AppController, HeroController],
  providers: [AppService,HeroService],
})
export class AppModule {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
}
