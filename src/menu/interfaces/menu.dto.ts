import { IsEnum, IsNumber, IsString, IsDecimal } from 'class-validator';
import { Category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Menu {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Id',
  })
  id: number;
  @IsString()
  @ApiProperty({
    example: 'Risoto',
    description: 'Nome do prato',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example:
      'O risoto é um prato típico italiano, de origem da região da Lombardia, no norte do país, e que se caracteriza por ser cremoso e saboroso',
    description: 'Descrição',
  })
  description: string;
  @IsDecimal()
  @ApiProperty({
    example: 110.99,
    description: 'Preço do prato',
  })
  price: number;
  @IsEnum(Category, { each: true })
  @ApiProperty({
    example: 'ENTRY',
    description: 'Category of the item (ENTRY | MAIN_DISH | DESSERT | DRINK)',
  })
  category: Category;
}
