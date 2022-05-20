const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
// const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        runtimeCaching,
    },
    // i18n,
});

// const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
    tr: "tr",
    en: "en",
};

// const map = new mapboxgl.Map({
//     container: this.mapContainer,
//     style: "mapbox://styles/mapbox/dark-v10",
//     center: [this.state.lng, this.state.lat],
//     zoom: this.state.zoom,
//     attributionControl: false,
// });

const config = {
    // reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // rewrites: async () => {
    //     return {
    //         beforeFiles: [
    //             {
    //                 source: "/hang-moi-ve",
    //                 has: [
    //                     {
    //                         type: "query",
    //                         key: "category",
    //                         value: "%2C", // Named capture group to match anything on the value
    //                     },
    //                 ],
    //                 destination: "/hang-moi-ve/:cmsId",
    //             },
    //         ],
    //     };
    // },
    redirects: async () => {
        return [
            {
                source: "/categories",
                destination: "/hang-moi-ve",
                permanent: true,
            },
            {
                source: "/my-account",
                destination: "/my-account/info",
                permanent: true,
            },
            {
                source: "/promotions",
                destination: "/hang-moi-ve",
                permanent: true,
            },
        ];
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
    images: {
        domains: [
            "assets.vercel.com",
            "images.ctfassets.net",
            "i.imgur.com",
            "usercontent.funipos.net",
            "a0.muscache.com",
            "events.mapbox.com",
            "media.discordapp.net",
        ],
    },

    env: {
        mapbox_key:
            "pk.eyJ1IjoiY210Y2t1b25nMTIzIiwiYSI6ImNsMnZzMGh3YjBlbjAzbHFtZWE5YnBnMnoifQ.FPz4FN_pEvJ7jn0OQNG_ow",
    },
};

module.exports = withPlugins([[withBundleAnalyzer, withPWA]], config);
