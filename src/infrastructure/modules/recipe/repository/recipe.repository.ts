import { RecipeRepository } from '@application/repository/recipe.repository';
import { Injectable } from '@nestjs/common';
import { RecipeEntity } from 'src/domain/entities/recipe/recipe.entity';

@Injectable()
export class RecipeModuleRepository implements RecipeRepository {
  private readonly recipes: RecipeEntity[] = [];

  create(recipe: RecipeEntity): Promise<void> {
    this.recipes.push(recipe);
    return Promise.resolve();
  }

  findAll(): Promise<RecipeEntity[]> {
    return Promise.resolve([...this.recipes]);
  }

  findById(id: string): Promise<RecipeEntity | null> {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    return Promise.resolve(recipe ?? null);
  }
}
