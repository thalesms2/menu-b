import { Controller, Get, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './interfaces/menu.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyAuthGuard } from '../auth/guard/apikey-auth.guard';

@ApiBasicAuth('apiKey')
@ApiTags('Menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all itens from the menu' })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: [Menu],
  })
  getItensFromMenu(): Promise<Menu[]> {
    return this.menuService.getItensFromMenu();
  }
}
