import raw from '../content/summerSession.json';

export type ClassPricingTier = {
  label: string;
  price: string;
};

export type LessonOption = {
  label: string;
  price: string;
};

export type SummerSession = {
  enabled: boolean;
  headline: string;
  tagline: string;
  sessionStart: string;
  sessionEnd: string;
  closedWeekNote: string;
  pricingNote: string;
  classPricing: ClassPricingTier[];
  lessonOptions: LessonOption[];
};

export const summerSession = raw as SummerSession;
