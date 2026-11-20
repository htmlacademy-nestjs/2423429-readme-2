import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FileController } from './file.controller';
import { FileRepository } from './file.repository';
import { FileService } from './file.service';
import { FileModel, FileSchema } from './file.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileModel.name, schema: FileSchema },
    ]),
  ],
  controllers: [FileController],
  providers: [FileService, FileRepository],
  exports: [FileRepository],
})
export class FileModule {}
