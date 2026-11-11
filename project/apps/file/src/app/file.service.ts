import { Injectable, NotFoundException } from '@nestjs/common';
import { FileRepository } from './file.repository';
import { CreateFileDto } from './dto/create-file.dto';
import { FileEntity } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    private readonly fileRepository: FileRepository
  ) {}

  public async create(dto: CreateFileDto): Promise<FileEntity> {
    const file = new FileEntity({
      ...dto,
      createdAt: new Date(),
    });
    return this.fileRepository.save(file);
  }

  public async findAll(): Promise<FileEntity[]> {
    return this.fileRepository.findAll();
  }

  public async findById(id: string): Promise<FileEntity> {
    const existFile = await this.fileRepository.findById(id);
    if (!existFile) {
      throw new NotFoundException(`File with id ${id} not found`);
    }
    return existFile;
  }
}
