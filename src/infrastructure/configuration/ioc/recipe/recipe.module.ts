import { Module } from '@nestjs/common';
import { RecipeRepositoryProvider } from './providers/recipe-repository.provider';

@Module({
  providers: [RecipeRepositoryProvider],
  exports: [RecipeRepositoryProvider],
})
export class RecipeModule {}
