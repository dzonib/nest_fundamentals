import { Flavor } from './flavor.entity';
import { Coffee } from './coffee.entity';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class CoffeesAndFlavors extends Model {
  @ForeignKey(() => Coffee)
  @Column
  coffeeId: number;

  @ForeignKey(() => Flavor)
  @Column
  flavorId: number;
}
