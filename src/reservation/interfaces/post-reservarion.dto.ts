import { ApiProperty } from '@nestjs/swagger';

const date = new Date(Date.now());
date.setMonth(date.getMonth() + 1);

export class PostReservationDto {
  @ApiProperty({ required: true, default: 'Fulano' })
  name: string;
  @ApiProperty({ required: true, default: 2 })
  persons: number;
  @ApiProperty({ required: true, default: date })
  date: Date;
}
