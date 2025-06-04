import { randomUUID } from 'crypto';

export interface RecipeProps {
  id?: string;
  title: string;
  description: string;
  ingredients: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class RecipeEntity {
  private readonly _id: string;
  private props: Required<Omit<RecipeProps, 'id'>>;

  private constructor(props: RecipeProps) {
    this._id = props.id ?? randomUUID();
    this.props = {
      title: props.title,
      description: props.description,
      ingredients: props.ingredients,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  static create(props: RecipeProps): RecipeEntity {
    return new RecipeEntity(props);
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  set title(value: string) {
    this.props.title = value;
  }

  get description(): string {
    return this.props.description;
  }

  set description(value: string) {
    this.props.description = value;
  }

  get ingredients(): string[] {
    return this.props.ingredients;
  }

  set ingredients(value: string[]) {
    this.props.ingredients = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
