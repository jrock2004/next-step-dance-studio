import classesContent from '../content/classes.json'

type ClassInfo = {
  id: string;
  title: string;
  ages: string;
  price: string;
  image?: string | null;
  description: string;
  summary: string;
  note?: string | null;
  featured: boolean;
};

export const classes: ClassInfo[] = classesContent.classes as ClassInfo[]
