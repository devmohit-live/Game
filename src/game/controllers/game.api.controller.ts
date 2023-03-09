import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {GameService} from '../services/game.service';
import {GameRequestDto, GameResponseDto} from '../dtos/game.dto';
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags
} from "@nestjs/swagger";

@Controller('api/v1/games')
export class GameApiController {

    constructor(private gameService: GameService) {
    }

    @Get()
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api Gets all the available games'
    })
    @ApiOkResponse({
        status: 200,
        isArray: true,
        type: GameResponseDto,

    })
    async getAllGames(): Promise<GameResponseDto[]> {
        return await this.gameService.getAllGames();
    }

    @Get(':id')
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api takes the id of the game and returns the game details'
    })
    @ApiNoContentResponse({
        description : 'No Game with given id exists'
    })
    @ApiOkResponse({
        status: 200,
        type: GameResponseDto,
    })
    async getGameById(@Param('id')id: string): Promise<GameResponseDto> {
        return await this.gameService.getGame(id);
    }

    @Post()
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api creates a new game with the provided details'
    })
    @ApiBody({
        description: 'Takes Name of the Game, Author name, Date of publish and URL of the game for game creation',
        type: GameRequestDto,
        required: true,
    })
    @ApiCreatedResponse({description: 'Game been successfully added.'})
    @ApiBadRequestResponse({
        description: 'Please provide the correct data(request body) for game'
    })
    async addGame(@Body()game: GameRequestDto) {
        await this.gameService.addGame(game);
    }

    @Delete(':id')
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api takes the id of the game and deletes it from the store',
    })
    @ApiBadRequestResponse({
        description: 'Please provide the correct id xx  for game'
    })
    @ApiNoContentResponse({
        description: 'The Game has been deleted successfully',
    })
    async deleteGame(@Param('id')id: string) {
        return await this.gameService.deleteGameById(id);
    }


    @Put(':id')
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api takes the id of the game along with the game details and updates the old game data',
    })
    @ApiBadRequestResponse({
        description: 'Please provide the correct id and data(request body) for game'
    })
    @ApiNoContentResponse({
        description: 'The Game has been updated successfully',
    })
    async updateGame(@Param('id')id: string, @Body()gameRequestDto : GameRequestDto){
        return await this.gameService.updateGame(id, gameRequestDto);
    }


}