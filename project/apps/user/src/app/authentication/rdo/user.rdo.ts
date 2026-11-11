import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({ description: 'The unique user ID', example: '13' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'User email', example: 'user@user.local' })
  @Expose()
  public email: string;

  @ApiProperty({ description: 'User first name', example: 'Keks' })
  @Expose()
  public firstname: string;

  @ApiProperty({ description: 'User last name', example: 'Ivanov' })
  @Expose()
  public lastname: string;

  @ApiProperty({ description: 'User avatar path', example: '/images/user.png' })
  @Expose()
  public avatar?: string;

  @ApiProperty({ description: 'User registration date', example: '2024-03-27T23:04:17.000Z' })
  @Expose()
  public createdAt?: Date;
}
