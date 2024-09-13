import { config } from 'dotenv';
import { get } from 'env-var';

config();

export const envs = {
  PORT_APP: get('PORT_APP').required().asPortNumber(),
};
