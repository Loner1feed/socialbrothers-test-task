import { $api } from "./AxiosInstance";

export class ApiService {
  // params: {
  //   page: number,
  //   perPage: number,
  //   sortBy: created_at / title,
  //   sortDirection: asc / desc,
  //   searchPhrase: string,
  //   categoryId: number
  // }
  static getPosts(params) {
    return $api.get("/posts", { params })
  };

  // params: {
  //   title: String,
  //   content: String,
  //   categoryId: number,
  //   image
  // }
  static setPost(params) {
    return $api.post("/posts", params);
  }

  static getCategories() {
    return $api.get("/categories");
  }
}