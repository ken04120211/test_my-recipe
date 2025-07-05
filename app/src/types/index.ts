export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  mealType: string;
  tags: string[];
  hashTags: string[];
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: string[];
  steps: string[];
  likes: number;
  comments: number;
  isFavorite: boolean;
  reactions: {
    good: number;
    delicious: number;
    healthy: number;
    wantToMake: number;
  };
  dateCooked: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
}
