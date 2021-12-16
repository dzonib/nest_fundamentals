import { CoffeesAndFlavors } from './../coffees/entities/coffeesAndFlavors.entity';
import { Flavor } from './../coffees/entities/flavor.entity';
import { Coffee } from './../coffees/entities/coffee.entity';
import { SEQUELIZE } from './../util/constants';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
      });
      sequelize.addModels([Coffee, Flavor, CoffeesAndFlavors]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
