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

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get('flavors')
  // use native express response
  // best practice is to use nest standard aproach
  //   findAll(@Res() response) {
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    // express native response
    // response.status(200).send(`This action returnst all coffies flavors`);
    return this.coffeeService.findAll();
    // return `This action returnst all coffies flavors. Limit ${limit}, offset: ${offset}`;
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
    return this.coffeeService.update(id, updateCoffeeDto);
    // return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.delete(id);
    // return `This action removes #${id} coffee`;
  }
}