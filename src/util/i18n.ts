const defaultLocale = 'en'
const locales = ['en', 'it']

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

const parseSlug = (slug: string = '/'): { lang: string; cleanSlug: string } => {
  const parts = slug.split('/').filter((p) => !!p)
  const lang = locales.includes(parts[0]) ? parts.shift()! : defaultLocale
  const cleanSlug = parts.length ? `${parts.join('/')}` : '/'

  return { lang, cleanSlug }
}

export { createSlug, defaultLocale, parseSlug }
