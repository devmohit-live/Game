import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    NotFoundException,
    Param,
    Post,
    Put
} from '@nestjs/common';
import {GameService} from '../services/game.service';
import {GameRequestDto, GameResponseDto} from '../dtos/game.dto';
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags
} from "@nestjs/swagger";
import {BAD_REQUEST_GENERIC_EXCEPTION, NOT_FOUND_EXCEPTION} from "../../common/constants/error";

@Controller('api/v1/games')
export class GameApiController {

    constructor(private gameService: GameService) {
    }

    @Get()
    @HttpCode(200)
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
    @ApiNotFoundResponse({
        description: 'No Game with given id exists',
    })
    @ApiOkResponse({
        status: 200,
        type: GameResponseDto,
    })
    async getGameById(@Param('id')id: string): Promise<GameResponseDto> {
        const game: GameResponseDto = await this.gameService.getGame(id);
        if (!game) throw new NotFoundException(NOT_FOUND_EXCEPTION);
        return game;
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
    async addGame(@Body()game: GameRequestDto): Promise<void> {
        await this.gameService.addGame(game);
    }

    @Delete(':id')
    @HttpCode(204)
    @ApiTags('Game')
    @ApiOperation({
        description: 'This Api takes the id of the game and deletes it from the store',
    })
    @ApiBadRequestResponse({
        description: 'Please provide the correct id for game'
    })
    @ApiNoContentResponse({
        description: 'The Game has been deleted successfully',
    })
    async deleteGame(@Param('id')id: string): Promise<void> {
        const gameDeleted: boolean = await this.gameService.deleteGameById(id);
        if (!gameDeleted) throw new NotFoundException(NOT_FOUND_EXCEPTION)
    }


    @Put(':id')
    @HttpCode(204)
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
    async updateGame(@Param('id')id: string, @Body()gameRequestDto: GameRequestDto): Promise<void> {
        const gameUpdated: boolean = await this.gameService.updateGame(id, gameRequestDto);
        if (!gameUpdated) {
            throw new BadRequestException(BAD_REQUEST_GENERIC_EXCEPTION);
        }
    }
}