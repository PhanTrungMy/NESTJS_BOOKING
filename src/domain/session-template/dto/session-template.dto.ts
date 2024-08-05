import { ApiProperty } from "@nestjs/swagger";

export class SessionTemplateDto{
    @ApiProperty(
    {
        type: Number,
        required: true,
        description: 'The id of the session template',
        example:1
    })

    id: number;
    @ApiProperty(
    {
        type: String,
        required: true,
        description: 'The name of the session template',
        example:'session template 1'
    })
    name: string;
    @ApiProperty(
    {
        type: Number,
        required: true,
        description: 'The duration of the session template',
        example: 30
    })
    duration: number;
    @ApiProperty(
    {
        type: Boolean,
        required: true,
        description: 'session template status',
        example: true
    })
    IsActive: boolean;
    @ApiProperty(
    {
        type: Date,
        required: true,
        description: 'The date and time when the session template was created',
        example: new Date()
    })

    createdAt: Date;

    @ApiProperty(
    {
        type: Date,
        required: true,
        description: 'The date and time when the session template was last updated',
        example: new Date()
    })
    updatedAt: Date;
    
}