import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // If we transition to URL-based routing (e.g., /en/...), use this:
  // const [, lang] = url.pathname.split('/');
  // if (lang in ui) return lang as keyof typeof ui;
  
  // For now, if we use a client-side state / cookie:
  return defaultLang; 
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
