import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommentController } from './comment.controller';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentModel, CommentSchema } from './comment.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentModel.name, schema: CommentSchema },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: [CommentRepository],
})
export class CommentModule {}
