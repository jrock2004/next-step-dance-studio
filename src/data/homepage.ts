import raw from '../content/homepage.json';

export type Homepage = {
  heroImage: string;
};

export const homepage = raw as Homepage;
