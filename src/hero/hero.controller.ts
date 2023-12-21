import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroService } from './hero.service';


@Controller('hero')
export class HeroController {
    constructor(private heroService:HeroService ){}
    @Post('/api/v1')
    async postHero(@Body() body){
        console.log(body)
        // return await this.heroService.signUp(email,password,userName)
        return await this.heroService.createOrUpdateHero(body.title, body.image).then(data=>data)   
    }
   
    @Get()
    async getHero(@Body() body){
        return await this.heroService.createOrUpdateHero(body.title,body.image).then(data=>data)
    }
    @Get('/test')
    async getTest(){
        return 
    }
}
