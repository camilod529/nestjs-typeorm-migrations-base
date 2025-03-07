export interface PostgresConfig {
  name: string;
  host: string;
  port: number;
  username: string;
  password: string;
}

export interface AppConfig {
  database: {
    postgres: PostgresConfig;
  };
}

export default (): AppConfig => ({
  database: {
    postgres: {
      name: process.env.POSTGRES_DB as string,
      host: process.env.POSTGRES_HOST as string,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER as string,
      password: process.env.POSTGRES_PASSWORD as string,
    },
  },
});
