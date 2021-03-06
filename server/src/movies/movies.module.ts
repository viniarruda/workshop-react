import { Module } from "@nestjs/common";

import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";
import { ConfigService } from "../config/config.service";

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, ConfigService]
})
export class MoviesModule {}
