import { Logger } from '@nestjs/common';
import AppDataSource from 'src/config/typeorm.config';

export const runMigrations = async () => {
  const database = AppDataSource;

  if (!database.isInitialized) await database.initialize();

  Logger.verbose('Running migrations...');
  const migrationsRan = await database.runMigrations();
  const migrationsLog =
    migrationsRan.map((migration) => migration.name).join(', ') ||
    'No migrations ran';

  Logger.verbose(`Migrations ran: ${migrationsLog}`);
};
