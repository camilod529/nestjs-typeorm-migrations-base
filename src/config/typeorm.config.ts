import { DataSource, DataSourceOptions } from 'typeorm';
import configuration, { PostgresConfig } from './configuration';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const dbConfig = configuration().database.postgres;

export const loadTypeORMConfig = (
  databaseConfig: PostgresConfig,
): DataSourceOptions => {
  return {
    type: 'postgres',
    host: databaseConfig.host,
    port: databaseConfig.port,
    username: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.name,
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/**/migrations/*.js'],
  };
};

const AppDataSource = new DataSource(loadTypeORMConfig(dbConfig));

export default AppDataSource;
