import { CoffeesAndFlavors } from './coffeesAndFlavors.entity';
import { Flavor } from './flavor.entity';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Coffee extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  brand: string;

  @BelongsToMany(() => Flavor, () => CoffeesAndFlavors)
  flavors: string[];
}
