import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { PostReservationDto } from './interfaces/post-reservarion.dto';
import { Reservation } from './interfaces/reservation.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyAuthGuard } from '../auth/guard/apikey-auth.guard';

@ApiBasicAuth('apiKey')
@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly ReservationService: ReservationService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Make a reservation' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: Reservation,
  })
  makeReservation(@Body() data: PostReservationDto): Promise<Reservation> {
    return this.ReservationService.makeReservation(data);
  }
}
