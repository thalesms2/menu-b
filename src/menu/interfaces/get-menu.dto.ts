import { IsString } from 'class-validator';

export class GetMenuDto {
  @IsString()
  search?: string;
}
