import { Injectable, HttpException } from '@nestjs/common';

import axios from 'axios';

@Injectable()
export class MoviesService {
  async getAllMovies(apiKey: string) {
    const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    if (+status === 200) {
      return data.results;
    }

    throw new HttpException('Error', status);
  }
}
