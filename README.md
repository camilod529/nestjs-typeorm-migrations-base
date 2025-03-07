# NestJS TypeORM Migrations Base

A base template for building back-end applications with [NestJS](https://nestjs.com) and [TypeORM](https://typeorm.io) that simplifies migration management and fosters development with a robust architecture.

## Dependencies Versions 🚀

- 🌀 **@nestjs:** 11.0.1
- 🗄️ **typeorm:** 0.3.21  

## Prerequisites

- [Node.js](https://nodejs.org) (v14 or higher)
- [pnpm](https://pnpm.io) (or npm/yarn as an alternative)
- A compatible database (PostgreSQL, MySQL, SQLite, etc.)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/camilod529/nestjs-typeorm-migrations-base.git
   cd nestjs-typeorm-migrations-base
   ```

2. **Install the dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure the environment variables:**

   Copy the `.env.template` file to `.env` and edit the values according to your environment configuration:

   ```bash
   cp .env.template .env
   ```

## Usage

### Run in Development Mode

```bash
pnpm run start:dev
```

### Run in Production Mode

```bash
pnpm run start:prod
```

### Compile the Project

```bash
pnpm run build
```

## Migration Management

This project uses TypeORM for database management and migrations. To work with migrations, you can use the following commands:

1. **Generate a New Migration:**

   ```bash
   pnpm typeorm migration:generate -n MigrationName
   ```

2. **Run Pending Migrations:**

   ```bash
   pnpm typeorm migration:run
   ```

3. **Revert the Last Migration (if needed):**

   ```bash
   pnpm typeorm migration:revert
   ```

> Make sure to properly configure your database connection in the `.env` file and the TypeORM configuration.

## Deployment

Before deploying to production, ensure that you:

- Properly configure the environment variables.
- Run the database migrations using `pnpm typeorm migration:run`.
- Follow the [NestJS deployment best practices](https://docs.nestjs.com).

## Contributing

Contributions are welcome! To collaborate:

1. Open an issue to discuss changes or improvements.
2. Submit a pull request with your proposals.

Please ensure you follow best practices and keep the code clean and well-documented.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author:** [Camilo Duran](https://github.com/camilod529)
- **Repository:** [NestJS TypeORM Migrations Base on GitHub](https://github.com/camilod529/nestjs-typeorm-migrations-base)