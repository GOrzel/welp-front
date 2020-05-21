export class Api {
  private static DATA_BASE_END_POINT = 'http://127.0.0.1:8080/rest/';

  static FOODPLACES_END_POINT = Api.DATA_BASE_END_POINT + 'foodplace';
  static USERS_END_POINT = Api.DATA_BASE_END_POINT + 'user';
  static CHECK_USERS_END_POINT = Api.DATA_BASE_END_POINT + 'user/check';
  static CATEGORIES_END_POINT = Api.DATA_BASE_END_POINT + 'category';
  static RATINGS_END_POINT = Api.DATA_BASE_END_POINT + 'rating';
}
