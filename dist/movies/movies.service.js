"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let MoviesService = class MoviesService {
    async getAllMovies(apiKey) {
        const { data, status } = await axios_1.default.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        if (+status === 200) {
            return data.results;
        }
        throw new common_1.HttpException('Error', status);
    }
};
MoviesService = __decorate([
    common_1.Injectable()
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map