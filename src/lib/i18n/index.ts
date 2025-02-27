import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

register('ja', () => import('./locales/ja.json'));
register('en', () => import('./locales/en.json'));
register('pt', () => import('./locales/pt.json'));
register('pt-BR', () => import('./locales/pt.json'));
register('ko', () => import('./locales/ko-kr.json'));
register('fa', () => import('./locales/fa.json'));
register('ar', () => import('./locales/ar.json'));
register('bg', () => import('./locales/bg.json'));
register('zh-CN', () => import('./locales/zh-cn.json'));
register('ru', () => import('./locales/ru.json'));
register('fr', () => import('./locales/fr-fr.json'));

register('ja', () => import('./locales/languageMap/ja.json'));
register('en', () => import('./locales/languageMap/en.json'));
register('ko', () => import('./locales/languageMap/ko-kr.json'));
register('bg', () => import('./locales/languageMap/bg.json'));
register('zh-CN', () => import('./locales/languageMap/zh-cn.json'));
register('ru', () => import('./locales/languageMap/ru.json'));
register('fr', () => import('./locales/languageMap/fr-fr.json'));

register('ja', () => import('./locales/labeling/ja.json'));
register('en', () => import('./locales/labeling/en.json'));

register('ja', () => import('./locales/labelingInfo/ja.json'));
register('en', () => import('./locales/labelingInfo/en.json'));

register('ja', () => import('./locales/plyr/ja.json'));
register('en', () => import('./locales/plyr/en.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})
