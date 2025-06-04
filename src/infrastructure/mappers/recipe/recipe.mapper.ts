import { RecipeEntity } from 'src/domain/entities/recipe/recipe.entity';
type RawRecipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  createdAt: Date;
  updatedAt: Date;
};

export class RecipeMapper {
  static toDomain(raw: RawRecipe): RecipeEntity {
    return RecipeEntity.create({
      id: raw.id,
      title: raw.title,
      description: raw.description,
      ingredients: raw.ingredients,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toPersistence(entity: RecipeEntity): RawRecipe {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      ingredients: entity.ingredients,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
