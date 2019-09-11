import { MoviesService } from './movies.service';
import { ConfigService } from '../config/config.service';
export declare class MoviesController {
    private moviesService;
    private apiKey;
    constructor(moviesService: MoviesService, config: ConfigService);
    getAllMovies(): Promise<any>;
}
