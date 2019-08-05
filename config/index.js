module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'The Northern Dev', // Navigation and Site Title
  siteTitleAlt: 'The Northern Dev - blog', // Alternative Site title for SEO
  siteTitleManifest: 'MinimalBlog',
  siteUrl: 'https://thenorthern.devsla', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription:
    'Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.', // Your site description
  author: 'Hank Andre', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hankandre', // Twitter Username - Optional
  ogSiteName: 'The Northern Dev', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: 'hsl(343,72%,65%)',
  backgroundColor: 'hsl(222,100%,3%)',
};
