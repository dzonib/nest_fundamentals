import { coffeeProvider, flavorProvider } from './coffee.provider';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [CoffeesService, ...coffeeProvider, ...flavorProvider],
})
export class CoffeesModule {}
