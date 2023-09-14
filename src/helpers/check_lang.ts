const host = window.location.hostname
export const russian_host = 'the-eteri.ru'
const is_russian = host === russian_host

export const default_lang = is_russian ? 'ru' : 'en'