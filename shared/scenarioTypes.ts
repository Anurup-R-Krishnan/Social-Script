export interface Choice {
  id: string;
  text: string;
  result: 'positive' | 'neutral' | 'negative';
  explanation: string;
  feedback?: string;
}

export interface Step {
  id: string;
  prompt: { text: string };
  choices: Choice[];
}

export interface Scenario {
  id: string;
  title: string;
  ageRange: string;
  difficulty: number;
  metadata: { tags: string[]; illustration?: string };
  context: { text: string; altText: string };
  steps: Step[];
  teacherNotes?: string;
  privacy: { containsPii: boolean };
}
