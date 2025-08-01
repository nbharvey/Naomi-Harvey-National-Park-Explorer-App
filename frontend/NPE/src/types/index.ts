interface Genre {
  id: number;
  name: string;
}

export interface BookData {
    id: number;
    title: string;
    author: string;
    genreIDs: number[];
    description: string;
    spineColor: string;
    name?: string;
    isEditing?: boolean;
    note?: string;
  }
