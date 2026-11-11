import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../authentication.constant';

export class CreateUserDto {
  @ApiProperty({ description: 'User unique email', example: 'user@user.ru' })
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email: string;

  @ApiProperty({ description: 'User first name', example: 'Keks' })
  @IsString()
  @Length(3, 50)
  public firstname: string;

  @ApiProperty({ description: 'User last name', example: 'Ivanov' })
  @IsString()
  @Length(3, 50)
  public lastname: string;

  @ApiProperty({ description: 'User password', example: '123456' })
  @IsString()
  @Length(6, 12)
  public password: string;
}
