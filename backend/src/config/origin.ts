interface Origin {
  [env: string]: string | Array<string>;
}

const origin: Origin = {
  development: "http://localhost:3000",
  master: "https://master.learnch.co",
  production: ["https://learnch.co", "https://www.learnch.co"],
};

export { origin };
