import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({ example: 'Chocolate Cake' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Delicious and moist chocolate cake' })
  @IsString()
  description: string;

  @ApiProperty({ example: ['flour', 'sugar', 'cocoa', 'eggs'] })
  @IsArray()
  @ArrayNotEmpty()
  ingredients: string[];
}
