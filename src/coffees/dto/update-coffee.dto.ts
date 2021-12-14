import { CreateCoffeeDto } from './create-coffee.dto';
import { PartialType } from '@nestjs/mapped-types';

// inherits validation and adds is optional to fields
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
