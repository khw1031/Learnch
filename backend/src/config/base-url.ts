interface BaseUrl {
  [env: string]: string;
}

const baseUrl: BaseUrl = {
  development: "http://localhost:7000",
  master: "https://master.learnch.co",
  production: "https://learnch.co",
};

export { baseUrl };
