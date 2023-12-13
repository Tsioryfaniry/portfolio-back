import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    constructor(private heroService:HeroService){}
    @Post()
    async postHero(@Body() body){
        console.log(body)
        return await this.heroService.createOrUpdateHero(body.title, body.image).then(data=>data)

    }
   
    @Get()
    async getHero(@Body() body){
        return await this.heroService.createOrUpdateHero(body.title,body.image).then(data=>data)
    }
}
