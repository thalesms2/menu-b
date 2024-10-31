import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { PostReservationDto } from './interfaces/post-reservarion.dto';
import { validateOrReject } from 'class-validator';
import { Reservation } from './interfaces/reservation.dto';
@Injectable()
export class ReservationService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async makeReservation(data: PostReservationDto) {
    try {
      const reservation = new Reservation();
      reservation.id = await this.getLastIndex();
      reservation.name = data.name;
      reservation.persons = data.persons;
      reservation.date = new Date(data.date);
      await validateOrReject(reservation);
      return await this.prismaService.reservation.create({
        data: reservation,
      });
    } catch (errors) {
      const result = errors.map((error) => ({
        property: error.property,
        message: error.constraints[Object.keys(error.constraints)[0]],
      }));
      throw new BadRequestException(result);
    }
  }
  private async getLastIndex() {
    return await this.prismaService.reservation.count();
  }
}
