import { IsString, IsDefined, IsOptional } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  password: string;

  @IsString()
  @IsOptional()
  avatar_url: string;
}
