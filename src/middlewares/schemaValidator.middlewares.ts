import { AnyZodObject, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        }));
        return res.status(400).json({
          res: false,
          issues,
        });
      }
      return res
        .status(500)
        .json({ res: false, message: `Internal Server Error` });
    }
  };
