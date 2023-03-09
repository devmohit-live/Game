import {IsDate, IsString, IsUrl} from "class-validator";
import {Type} from "class-transformer";

class GameDto {
    @IsString()
    name: string;
    @IsUrl()
    url: string;
    @IsString()
    author: string;
}

export class GameResponseDto extends GameDto {
    publishedDate: string;
}

export class GameRequestDto extends GameDto {
    @Type(() => Date)
    @IsDate()
    publishedDate: Date;
}