import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  //   Res
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  // use native express response
  // best practice is to use nest standard approach
  //   findAll(@Res() response) {
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    // express native response
    // response.status(200).send(`This action returns all coffees flavors`);
    return this.coffeeService.findAll(paginationQuery);
    // return `This action returns all coffees flavors. Limit ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  // findById(@Param() params) {
  findById(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
    // return `This action returns #${id} of coffee`;
  }

  @Post()
  // add http status
  @HttpCode(HttpStatus.GONE)
  // create(@Body('name) body) {
  create(@Body() createBodyDto: CreateCoffeeDto) {
    console.log(createBodyDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createBodyDto);
    // return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    console.log('HELOOO', id);
    return this.coffeeService.update(id, updateCoffeeDto);
    // return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
    // return `This action removes #${id} coffee`;
  }
}
