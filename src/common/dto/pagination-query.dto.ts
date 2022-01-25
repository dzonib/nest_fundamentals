import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  //   @IsPositive()
  //   @Type(() => Number)  dont need because we have enableImplicitConversion se to true
  limit: number;

  @IsOptional()
  //   @IsPositive()
  //   @Type(() => Number) dont need because we have enableImplicitConversion se to true
  offset: number;
}
