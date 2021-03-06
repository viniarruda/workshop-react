import { Controller, Get, Req } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { ConfigService } from "../config/config.service";

@Controller("movies")
export class MoviesController {
  private apiKey: string;
  constructor(private moviesService: MoviesService, config: ConfigService) {
    this.apiKey = config.get("API_TOKEN");
    console.log("config ====>", this.apiKey);
  }

  @Get()
  async getAllMovies() {
    return await this.moviesService.getAllMovies(this.apiKey);
  }
}
