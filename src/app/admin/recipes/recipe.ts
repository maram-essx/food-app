
export interface ICategory {
  id?: number;
  name: string;
  creationDate: string;
  modificationDate: string;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  creationDate: string;
  modificationDate: string;
  price: number;
  imagePath: string;
  tag: ITag;
  category: ITag[];
  description: string;
}

export interface ITag {
  id: number;
  name: string;
  creationDate: string;
  modificationDate: string;
}

export interface ICategoryData {
  data: ICategoryResponse[];
  pageSize: number;
  pageNumber: number;
  totalNumberOfRecords: number;
  totalNumberOfPages: number;
}
