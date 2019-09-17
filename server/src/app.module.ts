import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ConfigModule } from "./config/config.module";
import { MoviesModule } from "./movies/movies.module";

@Module({
  imports: [TasksModule, ConfigModule, MoviesModule]
})
export class AppModule {}
