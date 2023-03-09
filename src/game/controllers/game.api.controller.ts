import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {GameService} from '../services/game.service';
import {GameRequestDto, GameResponseDto} from '../dtos/game.dto';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags
} from "@nestjs/swagger";

@Controller('api/v1/games')
export class GameApiController {

    constructor(private gameService: GameService) {
    }

    @Get()
    @ApiTags('Game')
    @ApiOperation({
        description : 'This Api Gets all the available games'
    })
    @ApiOkResponse({
        status : 200,
        isArray:true,
        type : GameResponseDto,

    })
    async getAllGames(): Promise<GameResponseDto[]> {
        return await this.gameService.getAllGames();
    }

    @Get(':id')
    @ApiTags('Game')
    @ApiOperation({
        description : 'This Api takes the id of the game and returns the game details'
    })
    async getGameById(@Param('id')id: string): Promise<GameResponseDto> {
        return await this.gameService.getGame(id);
    }

    @Post()
    @ApiTags('Game')
    @ApiOperation({
        description : 'This Api creates a new game with the provided details'
    })
    @ApiBody({
        description : 'Takes Name of the Game, Author name, Date of publish and URL of the game for game creation',
        type : GameRequestDto,
        required: true,
    })
    @ApiCreatedResponse({ description: 'Game been successfully added.'})
    async addGame(@Body()game: GameRequestDto) {
        await this.gameService.addGame(game);
    }

    @Delete(':id')
    @ApiTags('Game')
    @ApiOperation({
        description : 'This Api takes the id of the game and deletes it from the store',
    })
    @ApiNoContentResponse({
        description: 'The Game has been deleted successfully',
    })
    async deleteGame() {

    }


}