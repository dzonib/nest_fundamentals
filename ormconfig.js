module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

// create migration
// npx typeorm migration:create -n CoffeeRefactor

//  npx typeorm migration:run

// npx typeorm migration:revert

// npx typeorm migration:generate -n SchemaSync auto generate migration with name...
