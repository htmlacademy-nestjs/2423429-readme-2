import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LikeController } from './like.controller';
import { LikeRepository } from './like.repository';
import { LikeService } from './like.service';
import { LikeModel, LikeSchema } from './like.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LikeModel.name, schema: LikeSchema },
    ]),
  ],
  controllers: [LikeController],
  providers: [LikeService, LikeRepository],
  exports: [LikeRepository],
})
export class LikeModule {}
