// common
export interface PaginationType {
  page: number;
  search: string;
  limit: number;
}

// types
export type AnimeType =
  | "tv"
  | "movie"
  | "ova"
  | "special"
  | "ona"
  | "cm"
  | "pv"
  | "tv_special";
export type AnimeStatus = "airing" | "complete" | "upcoming";
export type AnimeRating = "g" | "pg" | "pg13" | "r17" | "r" | "rx";
export type AnimeOrderBy =
  | "mal_id"
  | "title"
  | "start_date"
  | "end_date"
  | "episodes"
  | "score"
  | "scored_by"
  | "rank"
  | "popularity"
  | "members"
  | "favorites";

// special

export type AnimeIndexParams = Partial<PaginationType & {
  q: string;
  type: AnimeType | ""
  score: number
  min_score: number
  max_score: number
  status: AnimeStatus | ""
  rating: AnimeRating | ""
  sfw: 0 | 1
  genres: string
  genres_exclude: string
  order_by: AnimeOrderBy | ""
  sort: "desc" | "asc",
  letter: string;
  producers: string;
  start_date: string;
  end_date: string;
}>
