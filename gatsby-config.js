const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `런치 Learnch`,
    description: `하루에 30분 프로그래밍을 배워보세요. 하루에 한 번 런치 타임. HTML, Javascript, React, Vue, Svelte, CSS, Python, 함수형 프로그래밍, 웹 개발, 앱 개발 등의 튜토리얼`,
    author: {
      name: "Learnch Company",
    },
    pathPrefix: "/",
    siteUrl: "https://www.learnch.com",
    feedUrl: "https://www.learnch.com/rss.xml",
    logo: "https://www.learnch.com/images/logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: !isProd,
        ssr: true,
      },
    },
  ],
};
