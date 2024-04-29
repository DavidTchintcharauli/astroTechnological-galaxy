import rss, { pagesGlobToRssItem } from '@astrojs/rss';

export async function GET(context) {
    return res({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItem(import.meta.globe('./**/*.md')),
        customData: `<language>en-us</language`,
    })
}