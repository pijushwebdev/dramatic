import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env')});

export const config = {
    base_url: process.env.NEXT_PUBLIC_BASE_URL,
    api_key: process.env.DATA_API_KEY || process.env.NEXT_PUBLIC_API_KEY,
    IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    client_url: process.env.NEXT_PUBLIC_CLIENT_URL,
}