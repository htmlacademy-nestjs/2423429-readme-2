import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongoConfig from './mongo.config';

const ENV_USER_FILE_PATH = 'apps/user/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [mongoConfig],
      envFilePath: ENV_USER_FILE_PATH,
    }),
  ],
})
export class ConfigUserModule {}
