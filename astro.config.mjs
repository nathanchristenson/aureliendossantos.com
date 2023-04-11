import { defineConfig } from "astro/config"
import AutoImport from "astro-auto-import"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
	experimental: { assets: true },
	image: {
		service: "astro/assets/services/sharp",
	},
	site: "https://aureliendossantos.com",
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
		AutoImport({
			imports: [
				"$components/mdx/ArticleRef.astro",
				"$components/mdx/Book.astro",
				"$components/mdx/Figure.astro",
				"$components/mdx/Gallery.astro",
				"$components/mdx/Game.astro",
				"$components/mdx/GoogleMaps.astro",
				"$components/mdx/MapsMention.astro",
				"$components/mdx/Note.astro",
				"$components/mdx/PhotoGallery.astro",
				"$components/mdx/Sidenote.astro",
				"$components/mdx/Video.astro",
				// Tabs is not imported by default because it loads a CSS file
				// on every page. It seems complicated to change the code to
				// remove the CSS... Same for YouTube/Vimeo/Tweet from astro-embed.
			],
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: {
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: "slack-ochin", // "vitesse-light", //"slack-ochin", //github-light //dark: nord
		},
		remarkRehype: { footnoteLabel: "Notes et références" },
		smartypants: true,
	},
})
