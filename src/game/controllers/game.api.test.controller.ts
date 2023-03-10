import {Controller, Get, HttpCode} from "@nestjs/common";
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {GameTestDto} from "../dtos/game-test.dto";
import {GameService} from "../services/game.service";


@Controller('/api/v1/test/games')
export class GameApiTestController {

    constructor(private gameService: GameService) {
    }

    //For Test
    @Get('test')
    @HttpCode(200)
    @ApiTags('GameTest')
    @ApiOperation({
        description: 'This Api Gets all the available games along with their Ids'
    })
    @ApiOkResponse({
        status: 200,
        isArray: true,
        type: GameTestDto,
    })
    async getAllGamesWithIds(): Promise<GameTestDto[]> {
        return await this.gameService.getAllGamesWithIds();
    }
}