import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST || '',
        port: Number.parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME || '',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: false,
    },
    // Pick up all our schema files
    schema: ['./src/db/schema.ts'],
    out: './migrations',
});
