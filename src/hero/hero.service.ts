import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HeroService {
    constructor(private readonly prismaService:PrismaService){

    }
    async signUp(createCatDto:CreateCatDto){
        const {email,password,userName} = createCatDto
        const user = await this.prismaService.user.findUnique({where:{email}})
        if(user) throw new ConflictException('User already exist')
    }
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
