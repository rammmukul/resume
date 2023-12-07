import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
        service: passthroughImageService()
    },
    site: 'https://rammmukul.github.io',
    base: '/resume',
});
