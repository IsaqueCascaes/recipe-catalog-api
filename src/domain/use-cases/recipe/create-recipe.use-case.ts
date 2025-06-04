import { CreateRecipeDto } from '@domain/dtos/create-recipe.dto';
import { Injectable, Logger } from '@nestjs/common';
import { RecipeRepository } from 'src/application/repository/recipe.repository';
import { RecipeEntity } from 'src/domain/entities/recipe/recipe.entity';

@Injectable()
export class CreateRecipeUseCase {
  private readonly logger = new Logger(CreateRecipeUseCase.name);

  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(input: CreateRecipeDto): Promise<RecipeEntity> {
    this.logger.log(`Starting recipe creation: ${input.title}`);

    const recipe = RecipeEntity.create({
      title: input.title,
      description: input.description,
      ingredients: input.ingredients,
    });

    await this.recipeRepository.create(recipe);

    this.logger.log(`Recipe created successfully. ID: ${recipe.id}`);

    return recipe;
  }
}
