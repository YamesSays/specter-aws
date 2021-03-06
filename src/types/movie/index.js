const typeDefs = `
  type Genre {
    id: ID!
    name: String!
  }
  type ProductionCompany {
    id: ID!
    name: String!
    logo_path: String
    origin_country: String!
  }
  type ProductionCountry {
    iso_3166_1: String!
    name: String!
  }
  type SpokenLanguage {
    iso_639_1: String!
    name: String!
  }
  
  type MovieCast {
    id: ID!
    adult: Boolean!
    gender: Int
    character: String!
    cast_id: String!
    department: String!
    job: String!
    name: String!
    profile_path: String
  }
  type MovieCrew {
    credit_id: String!
    department: String!
    gender: Int
    id: ID!
    job: String!
    name: String!
    profile_path: String
  }
  type MovieCredits {
    id: ID!
    cast: [MovieCast!]!
    crew: [MovieCrew!]!
  }
  type AlternativeTtitle {
    iso_3166_1: String!
    title: String!
    type: String!
  }
  type ExternalIds {
    imdb_id: String
    facebook_id: String
    instagram_id: String
    twitter_id: String
    id: ID!
  }
  type Image {
    aspect_ratio: Int!
    file_path: String!
    height: Int!
    iso_639_1: String
    vote_average: Float!
    vote_count: Int!
    width: Int!
  }
  type MovieImage {
    id: ID!
    backdrops: [Image!]!
    posters: [Image!]!
  }
  type Keyword {
    id: ID!
    name: String!
  }
  type ReleaseDate {
    certification: String!
    iso_639_1: String!
    release_date: String!
    type: Int!
    note: String
  }
  type MovieReleaseDate {
    iso_3166_1: String!
    release_dates: [ReleaseDate!]
  }
  
  type TranslationData {
    title: String!
    overview: String!
    homepage: String!
  }
  type Translation {
    iso_3166_1: String!
    iso_639_1: String!
    name: String!
    english_name: String!
    data: TranslationData!
  }
  type Video {
    iso_3166_1: String!
    iso_639_1: String!
    key: String!
    name: String!
    site: String!
    size: Int!
    type: String!
  }
  type Videos {
    results: [Video]
  }
  type Movie {
    adult: Boolean!
    alternative_titles: [AlternativeTtitle!]!
    backdrop_path: String
    budget: Int
    image: MovieImage
    credits: MovieCredits
    external_ids: ExternalIds
    keywords: [Keyword!]!
    genres: [Genre!]!
    homepage: String
    id: ID!
    imdb_id: Int
    original_language: String!
    original_title: String!
    overview: String
    popularity: Int!
    poster_path: String
    productionCompanies: [ProductionCompany!]!
    productionCountries: [ProductionCountry!]!
    release_date: String!
    release_dates: [MovieReleaseDate]
    revenue: Int!
    runtime: Int
    spokenLanguages: [SpokenLanguage]
    status: String!
    tagline: String
    translations: [Translation!]!
    title: String
    video: Boolean
    videos: Videos
    vote_average: Int!
    vote_count: Int!
  }
  type RecommendedMovie {
    page: Int!
    results: [Movie]!
    total_pages: Int!
    total_results: Int!
  }
  type SimilarMovie {
    page: Int!
    results: [Movie]!
    total_pages: Int!
    total_results: Int!
  }
  type Review {
    id: ID!
    author: String!
    content: String!
    url: String!
  }
  type MovieReviews {
    page: Int!
    results: [Review!]!
    total_pages: Int!
    total_results: Int!
  }
  type MovieLists {
    page: Int!
    results: [MovieList!]!
    total_pages: Int!
    total_results: Int!
  }
  type MovieList {
    description: String
    favorite_count: Int
    id: ID!
    item_count: Int
    iso_639_1: String
    list_type: String
    name: String
    poster_path: String
  }
  input AppendSettings {
    includeCredits: Boolean
    includeVideos: Boolean
  }
  extend type Query {
    movie(movie_id: Int!, appendToResponse: String): Movie
  }
`;

module.exports = typeDefs;
