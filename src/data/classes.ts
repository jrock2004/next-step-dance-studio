export type ClassInfo = {
  title: string;
  ages: string;
  price: string;
  image?: string;
  description: string;
  summary: string;
  note?: string;
  featured: boolean;
};

export const classes: ClassInfo[] = [
  {
    title: "Creative Movement",
    ages: "Ages 3–4",
    price: "Call for pricing",
    image:
      "https://nebula.wsimg.com/a1393eca7721170dd144b399128551e1?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "A special class for a special age. Dance activities emphasize the fun and excitement of discovering the world through movement. Children will enjoy learning the basic skills of ballet, tap, jazz, and tumbling with the use of music and props to develop basic motor and locomotor skills.",
    summary:
      "Discovering the world through movement using music and props to develop motor skills in ballet, tap, jazz, and tumbling.",
    featured: false,
  },
  {
    title: "Combo Class",
    ages: "Ages 5–6",
    price: "Call for pricing",
    description:
      "Basic dance skills and vocabulary are introduced at an age-appropriate level with an emphasis on self-expression and creativity. This class combining ballet, tap, jazz, and tumbling will help prepare students for future participation in any type of structured dance class.",
    summary:
      "Ballet, tap, jazz, and tumbling combined to build a strong foundation for future dance classes.",
    featured: false,
  },
  {
    title: "Tap",
    ages: "All Ages & Levels",
    price: "Call for pricing",
    image:
      "https://nebula.wsimg.com/d3cddc424f310dc233740115a3b5a60f?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "Our tap program offers skill development from beginner through advanced levels. Classes emphasize the development and strengthening of technique and terminology, while highlighting the importance of rhythm and sound.",
    summary: "From beginner through advanced, emphasizing rhythm, sound, and technical precision.",
    featured: true,
  },
  {
    title: "Jazz",
    ages: "All Ages & Levels",
    price: "Call for pricing",
    image:
      "https://nebula.wsimg.com/59bb6bc9e6c761e32bf3dce386ed394d?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "Classes teach basic jazz dance technique, terminology, and movement quality with an emphasis on proper execution of jazz isolations, rhythms, and style performed to contemporary music. Jazz dance promotes flexibility, timing, and musical awareness. We recommend jazz be taken in conjunction with ballet.",
    summary:
      "Jazz isolations, rhythm, and style to contemporary music — promoting flexibility and musical awareness.",
    featured: true,
  },
  {
    title: "Ballet",
    ages: "All Ages & Levels",
    price: "Call for pricing",
    image:
      "https://nebula.wsimg.com/46b5df54a3964821600367f607fe0be5?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "Emphasizes the development of classical ballet skills with a focus on proper placement and alignment. Students will learn ballet vocabulary through barre and center work while building strength and flexibility. Ballet is the foundation of all structured forms of dance.",
    summary:
      "Classical technique with barre and center work, building strength, grace, and the foundation of all dance styles.",
    featured: false,
  },
  {
    title: "Hip Hop",
    ages: "All Ages & Levels",
    price: "$55",
    image:
      "https://nebula.wsimg.com/025e9f6e19f84ce9e7e7ea2fecddc84a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "A high-energy class that uses the latest sounds in rap, R&B, and pop music together with today's hottest movements presented in an age-appropriate manner. This fun class gives students the opportunity to develop their own sense of style.",
    summary:
      "High-energy movement to the latest sounds in rap, R&B, and pop — presented in an age-appropriate way.",
    featured: true,
  },
  {
    title: "Lyrical",
    ages: "All Ages & Levels",
    price: "Call for pricing",
    description:
      "This class focuses on teaching dancers about creative expression. Lyrical dance is the fusion of ballet and jazz technique bound by the dancer's inner emotion, interpreting music and words to show the audience the emotion of a piece.",
    summary:
      "The fusion of ballet and jazz driven by emotion — translating music and lyrics into expressive movement.",
    note: "Instructor approval required. Ballet must be taken in conjunction with this class.",
    featured: false,
  },
  {
    title: "Acrobatics",
    ages: "Ages 5–11 (grouped)",
    price: "Call for pricing",
    image:
      "https://nebula.wsimg.com/66af31581edc26aad9501e2c33bfe6f0?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1",
    description:
      "Centered on fundamental acrobatic technique to increase flexibility, strength, balance, coordination, endurance, timing, body awareness, self-discipline, and confidence. Moves range from forward rolls and cartwheels at level 1 through aerials and back handsprings at advanced levels.",
    summary:
      "Fundamental tumbling skills from cartwheels to aerials, building flexibility, strength, balance, and confidence.",
    featured: false,
  },
];
