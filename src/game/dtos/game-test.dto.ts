import {GameResponseDto} from "./game.dto";
import {ApiProperty} from "@nestjs/swagger";

//This dto is used for api testing purpose
export class GameTestDto extends GameResponseDto {
    @ApiProperty({
        name: 'GameId',
        type: String,
        description: 'Game Id',
        example: 'GM123ABC6G7J'
    })
    id: string
}