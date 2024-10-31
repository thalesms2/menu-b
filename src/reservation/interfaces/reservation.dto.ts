import { IsDate, IsNumber, IsString, Min, MinLength } from 'class-validator';
import { IsToday } from '../../../services/utils/decorator';
import { ApiProperty } from '@nestjs/swagger';

export class Reservation {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Id da reserva',
  })
  id: number;
  @IsString()
  @ApiProperty({
    example: 'Fulano',
    description: 'Nome do responsável pela reserva',
  })
  @MinLength(1, { message: 'Nome é muito curto.' })
  name: string;
  @IsNumber()
  @Min(1, { message: 'Quantidade de pessoas inválida.' })
  @ApiProperty({
    example: 2,
    description: 'Número de pessoas que irão ao restaurante',
  })
  persons: number;
  @IsDate()
  @IsToday({ message: 'Data inválida' })
  @ApiProperty({
    example: '2024-10-29T14:42:10.000Z',
    description: 'Data e hora que foi reservado no restaurante',
  })
  date: Date;
}
