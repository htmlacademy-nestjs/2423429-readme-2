import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { FileRdo } from './rdo/file.rdo';

@ApiTags('files')
@Controller('files')
export class FileController {
  constructor(
    private readonly fileService: FileService
  ) {}

  @ApiResponse({ status: HttpStatus.CREATED, description: 'File created.' })
  @Post()
  public async create(@Body() dto: CreateFileDto) {
    const newFile = await this.fileService.create(dto);
    return fillDto(FileRdo, newFile.toPOJO());
  }

  @ApiResponse({ type: FileRdo, status: HttpStatus.OK, description: 'Files found.' })
  @Get()
  public async index() {
    const files = await this.fileService.findAll();
    return files.map((file) => fillDto(FileRdo, file.toPOJO()));
  }

  @ApiResponse({ type: FileRdo, status: HttpStatus.OK, description: 'File found.' })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const file = await this.fileService.findById(id);
    return fillDto(FileRdo, file.toPOJO());
  }
}
