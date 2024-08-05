import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateSessionTemplateDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'The name of the session template',
    example: 'session template 1',
  })
  @IsOptional() // them dau ?
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  name?: string;

  @ApiProperty({
    type: Number,
    required: true,
    description: 'The duration of the session template',
    example: 30,
  })
  @IsOptional()
  @IsNumber()
  @Min(15)
  duration?: number;
}
