import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { PrismaModule } from '../../services/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
