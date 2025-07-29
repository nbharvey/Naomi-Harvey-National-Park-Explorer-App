export interface BookData {
    id: number | string;
    title: string;
    author: string;
    genres: string[];
    description: string;
    spineColor: string;
    name?: string;
    isEditing?: boolean;
    note?: string;
  }
