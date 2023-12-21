import { Global, Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
    controllers:[HeroController],
    providers: [HeroService],
})
export class HeroModule {

}
