import { CreateCoffeeDto } from './dto/create-coffee.dto';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Great black coffee',
      brand: 'turkish',
      flavors: ['great', 'vanilla'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find((c) => c.id === id);
    if (!coffee) {
      // throw new HttpException(
      //   `Coffee #${id} could not be found`,
      //   HttpStatus.NOT_FOUND,
      // );
      // throw 'error name' -> maps to 500 with given description
      throw new NotFoundException(`Coffee #${id} could not be found`);
    }

    return coffee;
  }

  create(createCoffeeDto) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //   update
    }
  }

  delete(id: string): void {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
