import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { AppService } from 'src/app.service';
import { HeroService } from './hero.service';

@Module({
    controllers:[HeroController],
    providers: [HeroService]

})
export class HeroModule {

}
