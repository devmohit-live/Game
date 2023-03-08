import {BaseEntity} from './base.entity';

export interface Game extends BaseEntity{
  name : string;
  url : string;
  author : string;
  publishedDate : Date;
}