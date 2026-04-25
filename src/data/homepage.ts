import raw from '../content/homepage.json';

export type Homepage = {
  heroImage: string;
  heroImagePosition: string;
};

export const homepage = raw as Homepage;
