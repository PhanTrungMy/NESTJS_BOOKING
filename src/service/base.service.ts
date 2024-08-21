import { DatabaseService } from 'src/database/database.service';
// khai bao dang enjectable de su dung trong cac service khac
export class BaseService<CreateDto, UpdateDto> {

    constructor(private DatabaseService: DatabaseService,
        private readonly modeName: string,
    ) { }
    
    findMany(){
        return this.DatabaseService[this.modeName].findMany();
    }

// create
     create(data: CreateDto) {
        return this.DatabaseService[this.modeName].create({data});
     }

    // updateOneById(){}
    update(data: UpdateDto){
        return this.DatabaseService[this.modeName].update({data});
    }
// TODO: implement 
    // findById(){}

    // findOrFailById(){}
    // updateOrFaiById(){}
    // deleteOrById(){}
}
