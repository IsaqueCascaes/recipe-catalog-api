import { RecipeEntity } from 'src/domain/entities/recipe/recipe.entity';

export abstract class RecipeRepository {
  abstract create(recipe: RecipeEntity): Promise<void>;

  abstract findAll(): Promise<RecipeEntity[]>;

  abstract findById(id: string): Promise<RecipeEntity | null>;
}
