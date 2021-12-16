import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { COFFEE_REPOSITORY, FLAVOR_REPOSITORY } from '../util/constants';

export const coffeeProvider = [
  {
    provide: COFFEE_REPOSITORY,
    useValue: Coffee,
  },
];

export const flavorProvider = [
  {
    provide: FLAVOR_REPOSITORY,
    useValue: Flavor,
  },
];
