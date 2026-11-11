import { Module } from '@nestjs/common';
import { LikeModule } from './like.module';

@Module({
  imports: [LikeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
