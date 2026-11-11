import { Injectable, NotFoundException } from '@nestjs/common';
import { LikeRepository } from './like.repository';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeEntity } from './like.entity';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeRepository
  ) {}

  public async create(dto: CreateLikeDto): Promise<LikeEntity> {
    const like = new LikeEntity({
      ...dto,
      createdAt: new Date(),
    });
    return this.likeRepository.save(like);
  }

  public async findAll(): Promise<LikeEntity[]> {
    return this.likeRepository.findAll();
  }

  public async findById(id: string): Promise<LikeEntity> {
    const existLike = await this.likeRepository.findById(id);
    if (!existLike) {
      throw new NotFoundException(`Like with id ${id} not found`);
    }
    return existLike;
  }

  public async delete(id: string): Promise<void> {
    await this.findById(id);
    return this.likeRepository.deleteById(id);
  }
}
