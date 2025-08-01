//type for genre object being fetched from API
export interface Genre {
  id: number;
  name: string;
}

//FormProps for Form component
export interface FormProps {
  book?: BookData; 
  onFormSubmit: (bookData: BookData) => void;
}

//represents a complete Book object as exists in the db
export interface BookData {
    id: number;
    title: string;
    author: string;
    genreIds: number[];
    description: string;
    spineColor: string;
    name?: string;
    isEditing?: boolean;
    note?: string;
  }

  //represents data the form submits to create a book
  export interface NewBookData {
    title: string;
    author: string;
    genreIds: number[];
    description: string;
    spineColor: string;
    name?: string;
    note?: string;
  }