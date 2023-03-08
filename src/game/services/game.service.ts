import {Injectable} from '@nestjs/common';
import {Game} from '../entities/game.entity';
import {GameResponseDto} from '../dtos/game.dto';
import {GameMapper} from '../mappers/game.mapper';

@Injectable()
export class GameService {

  constructor(private gameMapper : GameMapper) {}

  private game1  : Game = { author: 'B', createdAt: new Date() , id: 'id1', modifiedAt: new Date(), name: 'Game1', publishedDate: new Date(), url: 'someURL'};
  private game2  : Game = { author: 'A', createdAt: new Date() , id: 'id2', modifiedAt: new Date(), name: 'Game2', publishedDate: new Date(), url: 'someURL'};
  private games : Game[] = [this.game1, this.game2];

  async getAllGames() : Promise<GameResponseDto[]> {
    const games : Game[] =  this.games;
    return this.gameMapper.mapGameBosToGameResponseDtos(this.gameMapper.mapGamesToGameBos(this.games));
  }

  async getGame(id : string) : Promise<GameResponseDto> {

    return this.gameMapper.mapGameBoToGameResponseDto(this.gameMapper.mapGameToGameBo(this.game1));
  }
}