/**
 * Defines all possible operator for filtering by query
 * @see https://docs.directus.io/api/reference.html#filtering
 */
export type FilterOperator =
  | "="
  | "eq"
  | "<>"
  | "!="
  | "neq"
  | "<"
  | "lt"
  | "<="
  | "lte"
  | ">"
  | "gt"
  | ">="
  | "gte"
  | "in"
  | "nin"
  | "null"
  | "nnull"
  | "contains"
  | "like"
  | "ncontains"
  | "nlike"
  | "rlike"
  | "nrlike"
  | "between"
  | "nbetween"
  | "empty"
  | "nempty"
  | "all"
  | "has";