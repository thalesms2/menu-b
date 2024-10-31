import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
@Injectable()
export class MenuService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getItensFromMenu() {
    return await this.prismaService.menu.findMany();
  }
}
