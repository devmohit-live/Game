import {GameResponseDto} from '../dtos/game.dto';
import {Game} from '../entities/game.entity';
import {GameBo} from '../bos/game.bo';
import {Injectable} from '@nestjs/common';

@Injectable()
export class GameMapper {

  mapGamesToGameBos(games : Game[]) : GameBo[] {
    return games.map(game=>this.mapGameToGameBo(game));
  }

  mapGameToGameBo(game : Game) : GameBo {
    const gameBo = new GameBo(game.id);
    gameBo.author = game.author;
    gameBo.name = game.name;
    gameBo.url = game.url;
    gameBo.publishedDate = game.publishedDate;
    gameBo.createdAt = game.createdAt;
    gameBo.modifiedAt = game.modifiedAt;
    return gameBo;
  }

  mapGameBosToGameResponseDtos(games : GameBo[]) : GameResponseDto[] {
    return games.map(game=>this.mapGameBoToGameResponseDto(game));
  }

  mapGameBoToGameResponseDto(game : GameBo) : GameResponseDto {
    return {
      name: game.name, author: game.author, publishedDate: game.publishedDate.toLocaleDateString('en-US'), url: game.url
    };
  }
}