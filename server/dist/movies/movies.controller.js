"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const movies_service_1 = require("./movies.service");
const config_service_1 = require("../config/config.service");
let MoviesController = class MoviesController {
    constructor(moviesService, config) {
        this.moviesService = moviesService;
        this.apiKey = config.get('API_TOKEN');
        console.log("config ====>", this.apiKey);
    }
    async getAllMovies() {
        return await this.moviesService.getAllMovies(this.apiKey);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAllMovies", null);
MoviesController = __decorate([
    common_1.Controller('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService, config_service_1.ConfigService])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map