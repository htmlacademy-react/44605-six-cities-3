/** string[] - указываю тип, что это будет массив [] с строковыми значениями string */
export const NameOfCities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

/** Маршрутизация страниц */
export enum AppRoute {
  root = '/',
  login = '/login',
  favorites = '/favorites',
  offer = '/offer/:id'
}
