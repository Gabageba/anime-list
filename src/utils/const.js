import {
  AnimeFilledSvg,
  AnimeOutlineSvg,
  MangaFilledSvg,
  MangaOutlineSvg,
  ProfileFilledSvg,
  ProfileOutlineSvg,
  SearchSvg,
} from '../components/svg/svgIcons'
import { Anime } from '../pages/Anime/Anime'
import { Manga } from '../pages/Manga/Manga'
import { Profile } from '../pages/Profile/Profile'
import { Search } from '../pages/Search/Search'

export const NAVIGATION_ITEM = {
  animeItem: {
    id: 'anime',
    name: 'Аниме',
    active: <AnimeFilledSvg />,
    unactive: <AnimeOutlineSvg />,
    page: <Anime />,
  },
  mangaItem: {
    id: 'manga',
    name: 'Манга',
    active: <MangaFilledSvg />,
    unactive: <MangaOutlineSvg />,
    page: <Manga />,
  },
  searchItem: {
    id: 'search',
    name: 'Поиск',
    active: <SearchSvg />,
    unactive: <SearchSvg />,
    page: <Search />,
  },
  profileItem: {
    id: 'profile',
    name: 'Профиль',
    active: <ProfileFilledSvg />,
    unactive: <ProfileOutlineSvg />,
    page: <Profile />,
  },
}

export const ANIME_SLIDER_ITEM = {
  plannedItem: {
    id: 'planned',
    name: 'Запланировано',
  },
  lookingItem: {
    id: 'watching',
    name: 'Смотрю',
  },
  // reviewingItem: {
  //   id: 'reviewing',
  //   name: 'Пересматриваю',
  // },
  viewedItem: {
    id: 'completed',
    name: 'Просмотрено',
  },
  postponedItem: {
    id: 'on_hold',
    name: 'Отложено',
  },
  abandonedItem: {
    id: 'dropped',
    name: 'Брошено',
  },
}

export const MANGA_SLIDER_ITEM = {
  plannedItem: {
    id: 'planned',
    name: 'Запланировано',
  },
  lookingItem: {
    id: 'watching',
    name: 'Читаю',
  },
  // reviewingItem: {
  //   id: 'reviewing',
  //   name: 'Перечитываю',
  // },
  viewedItem: {
    id: 'completed',
    name: 'Прочитано',
  },
  postponedItem: {
    id: 'on_hold',
    name: 'Отложено',
  },
  abandonedItem: {
    id: 'dropped',
    name: 'Брошено',
  },
}

export const ANIME_LIMIT = 20
export const MANGA_LIMIT = 20

export const ACCESS_TOKEN_LIFE = 86400000

export const AUTH = 'auth'
export const AUTH_CODE = 'authCode'
export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'
export const ACCESS_TOKEN_CREATED_AT = 'accessTokenCreatedAt'

export const DIAGRAM_COLORS = ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93']

export const ANIME_STATUSES = [
  {id: 'released', name: 'вышло', color: '#419541'},
  {id: 'ongoing', name: 'онгоинг', color: '#1D78B7'},
  {id: 'anons', name: 'анонс', color: '#ca4929'},
]

export const MANGA_STATUSES = [
  {id: 'released', name: 'издано', color: '#419541'},
  {id: 'ongoing', name: 'выходит', color: '#1D78B7'},
  {id: 'anons', name: 'анонс', color: '#ca4929'},
  {id: 'paused', name: 'приостановлено', color: '#A063CF'},
  {id: 'discontinued', name: 'прекращено', color: '#B19143'},
]

export const ANIME_TYPES = [
  {id: 'tv', name: 'сериал', color: '#DC7F9B'},
  {id: 'movie', name: 'фильм', color: '#54428E'},
  {id: 'ova', name: 'ova', color: '#78BC61'},
  {id: 'ona', name: 'ona', color: '#FF7700'},
  {id: 'special', name: 'спешл', color: '#087E8B'},
  {id: 'music', name: 'клип', color: '#590925'},
]

export const MANGA_TYPES = [
  {id: 'manga', name: 'манга', color: '#DC7F9B'},
  {id: 'manhwa', name: 'манхва', color: '#54428E'},
  {id: 'manhua', name: 'маньхуа', color: '#78BC61'},
  {id: 'one_shot', name: 'ваншот', color: '#FF7700'},
  {id: 'doujin', name: 'додзинси', color: '#087E8B'},
]

export const ANIME_CARD_TYPE = 'anime'
export const MANGA_CARD_TYPE = 'manga'

export const SHIKIMORI_URL = 'https://shikimori.one'

