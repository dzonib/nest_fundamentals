import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  //   every item in array
  @IsString({ each: true })
  readonly flavors: string[];
}
