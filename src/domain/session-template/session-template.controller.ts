import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSessionTemplateDto } from './dto/create-session-template.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperationDecorator } from 'src/common/decorator/api-operation.decorator';
import { UpdateSessionTemplateDto } from './dto/update-session-tamplate.dto';

@ApiTags('session-template')
@Controller('/session-template')
export class SessionTemplateController {
  constructor() {}
  @ApiOperationDecorator({
    type: CreateSessionTemplateDto,
    summary: 'get  a  session template',
    description: 'get a  session template',
  })
  @Get(':sessionTemplateId')
  findById() {}

  @ApiOperationDecorator({
    type: CreateSessionTemplateDto,
    summary: 'Create a new session template',
    description: 'Create a new session template',
  })
  @Post()
  create(@Body() data: CreateSessionTemplateDto) {
    console.log(data);
    return data;
  }
  //update session template
  @ApiOperationDecorator({
    type: CreateSessionTemplateDto,
    summary: 'Update a  session template',
    description: 'Update a  session template',
  })
  @Patch(':sessionTemplateId')
  updateById(
    @Param('sessionTemplate') sessionTemplateId: number,
    @Body() data: UpdateSessionTemplateDto,
  ) {
    console.log(sessionTemplateId,data)

  }
}
