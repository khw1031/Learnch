/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    server_port: number
    allowed_origins: string[]
  }
  export const config: Config
  export type Config = IConfig
}
