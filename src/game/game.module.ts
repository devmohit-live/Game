import { Module } from '@nestjs/common';
import {GameApiController} from './controllers/game.api.controller';
import {GameService} from './services/game.service';
import {GameMapper} from './mappers/game.mapper';

@Module({
  imports :[],
  controllers: [GameApiController],
  providers: [GameService, GameMapper],
  exports : [],

})
export class GameModule {}
