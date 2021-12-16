import { Coffee } from './coffee.entity';
import {
  Column,
  PrimaryKey,
  Model,
  Table,
  BelongsToMany,
  AutoIncrement,
} from 'sequelize-typescript';
import { CoffeesAndFlavors } from './coffeesAndFlavors.entity';

@Table
export class Flavor extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @BelongsToMany(() => Coffee, () => CoffeesAndFlavors)
  coffees: string[];
}
