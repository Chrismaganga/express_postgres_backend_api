import { Request } from 'express';

export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  created_at?: Date;
  updated_at?: Date;
  image_url?: string | null; 
}

export interface CustomRequest extends Request {
  file?: {
    filename: string;
  };
}