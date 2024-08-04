import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.PS_HOST,
  port: parseInt(process.env.PS_PORT, 10),
  username: process.env.PS_USER,
  password: process.env.PS_PASSWORD,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}));
