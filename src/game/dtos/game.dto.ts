import {IsDate, IsString, IsUrl} from "class-validator";
import {Type} from "class-transformer";
import {ApiBody, ApiProperty, ApiTags} from "@nestjs/swagger";
import * as Url from "url";
import {type} from "os";
import {DateTime} from "luxon";


@ApiTags('Game')
class GameDto {
    @IsString()
    @ApiProperty({
        name : 'name',
        description: 'Name of the Game',
        type : String,
        example : 'Super Mario'
    })
    name: string;

    @IsUrl()
    @ApiProperty({
        name : 'url',
        description: 'URL corresponding to the Game',
        type : String,
        example : 'http://somegameurl.com/super-mario'
    })
    url: string;

    @IsString()
    @ApiProperty({
        name : 'author',
        description: 'Author of the Game',
        type : String,
        example : 'Nitendo'
    })
    author: string;
}

@ApiTags('Game')
export class GameResponseDto extends GameDto {
    @ApiProperty({
        name : 'publishedDate',
        description : 'Date when the Game was published(Readable format)',
        type : String,
        example : '03/05/2022'

    })
    publishedDate: string;
}

@ApiTags('Game')
export class GameRequestDto extends GameDto {
    @Type(() => Date)
    @IsDate()
    @ApiProperty({
        name : 'publishedDate',
        description: 'Date when the Game was published',
        type : Date,
        example : new Date()
    })
    publishedDate: Date;
}