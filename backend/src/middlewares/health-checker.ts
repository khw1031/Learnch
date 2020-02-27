import { RequestHandler, Request, Response } from "express";

export const healthChecker: RequestHandler = (_req: Request, res: Response): Response =>
  res.status(200).json({ env: process.env.NODE_ENV });
