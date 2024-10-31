import { Module } from '@nestjs/common';
import { PrismaModule } from '../services/prisma/prisma.module';
import { MenuModule } from './menu/menu.module';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, MenuModule, ReservationModule, AuthModule],
})
export class AppModule {}
