import {Controller, Get, Param} from '@nestjs/common';
import {GameService} from '../services/game.service';
import {Game} from '../entities/game.entity';
import {GameResponseDto} from '../dtos/game.dto';

@Controller('api/v1/games')
export class GameApiController {

  constructor(private gameService : GameService) {}

  @Get()
  async getAllGames() : Promise<GameResponseDto[]>{
    return await this.gameService.getAllGames();
  }

  @Get(':id')
  async getGameById(@Param('id')id: string) : Promise<GameResponseDto>{
    return await this.gameService.getGame(id);
  }
}