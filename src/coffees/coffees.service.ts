import { CoffeesAndFlavors } from './entities/coffeesAndFlavors.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_REPOSITORY, FLAVOR_REPOSITORY } from './../util/constants';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEE_REPOSITORY)
    private coffeeRepository: typeof Coffee,
    @Inject(FLAVOR_REPOSITORY)
    private flavorRepository: typeof Coffee,
  ) {}

  async findAll() {
    return await this.coffeeRepository.findAll({
      include: [{ model: Flavor, attributes: ['name', 'id'] }],
    });
    // return await this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne({
      where: { id: id },
      include: [Flavor],
    });
    // const coffee = await this.coffeeRepository.findOne(id);
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

  async create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = await this.coffeeRepository.create(createCoffeeDto, {
      include: [],
    });
    // const coffee = await this.coffeeRepository.create(createCoffeeDto);
    return coffee;
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    // const coffee = await this.coffeeRepository.preload({
    //   id: +id,
    //   ...updateCoffeeDto,
    // });
    // if (!coffee) {
    //   throw new NotFoundException(`Coffee #${id} not found`);
    // }
    // return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    // const coffee = await this.coffeeRepository.findOne(id);
    // return this.coffeeRepository.remove(coffee);
  }

  // private async preloadFlavorByName(name: string): Promise<Flavor> {
  //   const existingFlavor = await this.flavorRepository.findOne({
  //     where: { name: name },
  //   });

  //   if (existingFlavor) {
  //     return existingFlavor;
  //   }

  //   return this.flavorRepository.create();
  // }
}
