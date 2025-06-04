import { RecipeRepository } from 'src/application/repository/recipe.repository';
import { RecipeModuleRepository } from 'src/infrastructure/modules/recipe/repository/recipe.repository';
import { Provider } from '@nestjs/common';

export const RecipeRepositoryProvider: Provider = {
  provide: RecipeRepository,
  useClass: RecipeModuleRepository,
};
