import { IsString, IsDefined } from 'class-validator';

export class LoginRequest {
  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  password: string;
}
