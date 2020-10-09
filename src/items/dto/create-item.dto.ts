import { Length, IsString, Min } from 'class-validator';

export class CreateItemDto{
    @Length(3, 40, {message:'Name must be between 3-40 chars'})
    name:string;
    @IsString({message:'Input should be a string'})
    description: string;
    @Min(1, {message:'qty value should be atleast 1'})
    qty: number;
}