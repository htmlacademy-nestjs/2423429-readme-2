import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  public async create(dto: CreateCommentDto): Promise<CommentEntity> {
    const comment = new CommentEntity({
      ...dto,
      createdAt: new Date(),
    });
    return this.commentRepository.save(comment);
  }

  public async findAll(): Promise<CommentEntity[]> {
    return this.commentRepository.findAll();
  }

  public async findById(id: string): Promise<CommentEntity> {
    const existComment = await this.commentRepository.findById(id);
    if (!existComment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    return existComment;
  }

  public async delete(id: string): Promise<void> {
    await this.findById(id);
    return this.commentRepository.deleteById(id);
  }
}
