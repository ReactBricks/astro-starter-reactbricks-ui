const defaultLocale = 'en';

const createSlug = (lang: string, slug: string): string => {
  if (lang === defaultLocale) {
    return slug
  }
  if (slug === '/') {
    return '/' + lang
  }
  let createdSlug = '/' + lang + '/' + slug
  return createdSlug
}

export { defaultLocale, createSlug };