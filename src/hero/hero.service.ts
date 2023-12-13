import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
    createOrUpdateHero(title:string, image:string): Promise<any>{
        return new Promise((resolve, reject)=>{
            resolve(
                {
                    title,
                    image
                })
        })
    }
    async getHero(){
        return 1
//     return new Promise((resolve,reject)=>{
   
    
// })

    }

}
