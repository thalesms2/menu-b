import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { ReservationService } from './reservation.service';
import { PrismaClient } from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../services/prisma/prisma.service';
describe('ReservationService', () => {
  let service: ReservationService;
  let prisma: DeepMockProxy<PrismaClient>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get(ReservationService);
    prisma = module.get(PrismaService);
  });
  it('make a reservation', async () => {
    const date = new Date(Date.now());
    const reservation = {
      name: 'Fulano',
      persons: 2,
      date: new Date(`${date.getFullYear() + 1}-10-29T14:42:10.000Z`),
    };
    const reservationResult = {
      id: 2,
      name: 'Fulano',
      persons: 2,
      date: new Date(`${date.getFullYear() + 1}-10-29T14:42:10.000Z`),
    };
    prisma.reservation.create.mockResolvedValueOnce(reservationResult);
    prisma.reservation.count.mockResolvedValueOnce(2);
    const result = await service.makeReservation(reservation);
    expect(result).toEqual(reservationResult);
  });
});
