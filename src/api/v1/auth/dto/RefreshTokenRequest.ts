import { IsString, IsDefined } from 'class-validator';

export class RefreshTokenRequest {
  @IsString()
  @IsDefined()
  refresh_token: string;
}
