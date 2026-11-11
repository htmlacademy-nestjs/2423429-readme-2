import { Module } from '@nestjs/common';
import { FileModule } from './file.module';

@Module({
  imports: [FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
