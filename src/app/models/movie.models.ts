export interface MovieModel{
    
    movieId: number
    internalId: string
    corporateId: string
    directorId: number
    title: string
    originalTitle: string
    description: string
    shortDescription: string
    poster: string
    startDate: string
    shortUrl: string
    runTime: number
    active: boolean
    createdAt: string
    updatedAt: null
    director: {
      directorId: number
      name: string
      createdAt: string
    }
    movieActors: [
      {
        movieActorId: 1
        movieId: 1
        actorId: 1
        actor: {
          actorId: 1
          name: Gerard Butler
          createdAt: 2025-03-03T21:48:47.000Z
        }
      }
      {
        movieActorId: 2
        movieId: 1
        actorId: 2
        actor: {
          actorId: 2
          name: Salvatore Esposito
          createdAt: 2025-03-03T21:48:47.000Z
        }
      }
      {
        movieActorId: 3
        movieId: 1
        actorId: 3
        actor: {
          actorId: 3
          name: O'Shea Jackson Jr.
          createdAt: 2025-03-03T21:48:47.000Z
        }
      }
      {
        movieActorId: 4
        movieId: 1
        actorId: 4
        actor: {
          actorId: 4
          name: Swen Temmel
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
      {
        movieActorId: 5
        movieId: 1
        actorId: 5
        actor: {
          actorId: 5
          name: Evin Ahmad
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
      {
        movieActorId: 6
        movieId: 1
        actorId: 6
        actor: {
          actorId: 6
          name: Meadow Williams
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
    ]
    movieGenres: [
      {
        movieGenreId: 1
        movieId: 1
        genreId: 1
        genre: {
          genreId: 1
          name: Drama
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
      {
        movieGenreId: 2
        movieId: 1
        genreId: 2
        genre: {
          genreId: 2
          name: Akcija
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
      {
        movieGenreId: 3
        movieId: 1
        genreId: 3
        genre: {
          genreId: 3
          name: Kriminalistički
          createdAt: 2025-03-03T21:48:48.000Z
        }
      }
    ]
  }
    
  
