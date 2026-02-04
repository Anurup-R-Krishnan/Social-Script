
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

export const SCENARIOS: Scenario[] = [
  {
    "id": "greet_classmate_detailed",
    "title": "Greeting a classmate",
    "ageRange": "6-10",
    "difficulty": 1,
    "metadata": { "tags": ["school","greeting"], "illustration": "👋" },
    "context": {
      "text": "You see a classmate, Jordan, standing in the hallway before school starts.",
      "altText": "Two children in a school hallway"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "Jordan looks at you and says, 'Hi!'" },
        "choices": [
          {
            "id": "s1c1",
            "text": "Hi, Jordan!",
            "result": "positive",
            "explanation": "A friendly greeting using their name is very polite.",
            "feedback": "Nice start! Using their name makes the greeting friendlier."
          },
          {
            "id": "s1c2",
            "text": "Go away",
            "result": "negative",
            "explanation": "This is hurtful.",
            "feedback": "That might make them feel sad. Let's try something friendlier."
          },
          {
            "id": "s1c3",
            "text": "(Walk past without looking)",
            "result": "negative",
            "explanation": "Ignoring someone can be confusing for them.",
            "feedback": "Even a wave is better than ignoring them."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "Jordan asks: 'How are you doing?'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "I'm good! How are you?",
            "result": "positive",
            "explanation": "Answering and asking back keeps the conversation going.",
            "feedback": "Great turn-taking. Asking 'How are you?' back is polite."
          },
          {
            "id": "s2c2",
            "text": "Fine.",
            "result": "neutral",
            "explanation": "Short answer works but stops the conversation.",
            "feedback": "That works, but asking about them helps make friends."
          },
          {
            "id": "s2c3",
            "text": "Why do you care?",
            "result": "negative",
            "explanation": "This sounds angry/defensive.",
            "feedback": "They are just being nice. Try answering simply."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Jordan says: 'Did you see the new superhero movie this weekend?'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Yes! It was awesome. Did you?",
            "result": "positive",
            "explanation": "Sharing excitement connects you with others.",
            "feedback": "Sharing your opinion and asking for theirs is great conversation."
          },
          {
            "id": "s3c2",
            "text": "No, I didn't see it.",
            "result": "neutral",
            "explanation": "Honest, but could say more.",
            "feedback": "You can add 'Was it good?' to keep talking."
          },
          {
            "id": "s3c3",
            "text": "I hate movies.",
            "result": "negative",
            "explanation": "Being very negative can end the chat awkwardly.",
            "feedback": "It's okay to dislike things, but maybe say 'I prefer video games' instead."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Jordan says: 'I haven't seen it yet. Maybe I'll go Saturday.'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "You should! It's really funny.",
            "result": "positive",
            "explanation": "Encouraging them is kind.",
            "feedback": "Nice comment."
          },
          {
            "id": "s4c2",
            "text": "Don't go, it's boring.",
            "result": "neutral",
            "explanation": "It's okay to share an opinion, but be gentle.",
            "feedback": "Honesty is good, but remember everyone likes different things."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "The bell rings for class. How do you end the chat?" },
        "choices": [
          {
            "id": "s5c1",
            "text": "There's the bell. I'll see you at lunch!",
            "result": "positive",
            "explanation": "Acknowledging the bell and suggesting a future time to talk.",
            "feedback": "Perfect closing. You signaled the end clearly and politely."
          },
          {
            "id": "s5c2",
            "text": "Bye.",
            "result": "neutral",
            "explanation": "A bit abrupt, but polite enough.",
            "feedback": "Short and sweet works too."
          },
          {
            "id": "s5c3",
            "text": "(Run away screaming)",
            "result": "negative",
            "explanation": "Very unexpected behavior.",
            "feedback": "Just walking to class is better!"
          }
        ]
      }
    ],
    "teacherNotes": "Focus on the 'ping-pong' nature of questions (ask/answer).",
    "privacy": { "containsPii": false }
  },
  {
    "id": "join_game_detailed",
    "title": "Asking to join a game",
    "ageRange": "6-12",
    "difficulty": 1,
    "metadata": { "tags": ["playground","asking"], "illustration": "⚽" },
    "context": {
      "text": "A group is playing kickball. You want to play too.",
      "altText": "Children playing kickball outside"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "The game is active. The ball is rolling around." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Stand on the side and watch for a second.",
            "result": "positive",
            "explanation": "Observing helps you understand the game and find a break.",
            "feedback": "Smart — watching first lets you see who is playing and when to ask."
          },
          {
            "id": "s1c2",
            "text": "Run into the middle of the field.",
            "result": "negative",
            "explanation": "This interrupts the game and upsets players.",
            "feedback": "Running in might stop the game. Try waiting on the sideline."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "The ball goes out of bounds near you. A player runs over." },
        "choices": [
          {
            "id": "s2c1",
            "text": "Pick up the ball, hand it to them, and ask 'Can I play?'",
            "result": "positive",
            "explanation": "Helping + Asking is a great combination.",
            "feedback": "Very helpful! It's a perfect time to ask."
          },
          {
            "id": "s2c2",
            "text": "Hold the ball and refuse to give it back.",
            "result": "negative",
            "explanation": "This is aggressive.",
            "feedback": "Holding the ball hostage makes people angry. Give it back to show you're a team player."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "The player says: 'Sure! We need one more for the Red Team.'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Awesome, thanks! Where should I stand?",
            "result": "positive",
            "explanation": "Accepting and asking for instructions.",
            "feedback": "Great enthusiasm."
          },
          {
            "id": "s3c2",
            "text": "I hate Red Team. I want Blue.",
            "result": "negative",
            "explanation": "Being picky when joining can change their mind.",
            "feedback": "If you are joining late, it's polite to take the spot they offer."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "You get to the outfield, but you don't know the rule for 'outs'." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Ask the person next to you: 'Do we catch it or throw it at them?'",
            "result": "positive",
            "explanation": "Clarifying rules prevents arguments.",
            "feedback": "Good job asking quietly so you know how to play."
          },
          {
            "id": "s4c2",
            "text": "Make up your own rules.",
            "result": "negative",
            "explanation": "Confusing for everyone.",
            "feedback": "Follow the group's rules."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "The bell rings and the game ends. Your team lost." },
        "choices": [
          {
            "id": "s5c1",
            "text": "High five the other team and say 'Good game'.",
            "result": "positive",
            "explanation": "Sportsmanship is important.",
            "feedback": "Excellent sportsmanship! Everyone likes playing with good sports."
          },
          {
            "id": "s5c2",
            "text": "Yell 'You cheated!'",
            "result": "negative",
            "explanation": "Being a sore loser.",
            "feedback": "Getting angry makes people not want to play with you next time."
          }
        ]
      }
    ],
    "teacherNotes": "Discuss 'Good Sportsmanship' specifically in Step 5.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "order_food_detailed",
    "title": "Ordering food politely",
    "ageRange": "7-14",
    "difficulty": 2,
    "metadata": { "tags": ["daily-life","politeness"], "illustration": "🥪" },
    "context": {
      "text": "At the school cafeteria, it’s your turn. It is loud and busy.",
      "altText": "Student at a cafeteria counter"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "You step up to the counter. The worker is looking down." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Say 'Hi' clearly to get their attention.",
            "result": "positive",
            "explanation": "A verbal cue helps them know you are there.",
            "feedback": "Good volume control."
          },
          {
            "id": "s1c2",
            "text": "Tap them on the shoulder.",
            "result": "negative",
            "explanation": "Touching strangers is generally not okay.",
            "feedback": "Use your voice, not your hands."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "Worker looks up: 'What can I get for you?'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "I'll have the pizza, please.",
            "result": "positive",
            "explanation": "Clear request + politeness marker.",
            "feedback": "Simple and polite."
          },
          {
            "id": "s2c2",
            "text": "Pizza.",
            "result": "neutral",
            "explanation": "Correct, but abrupt.",
            "feedback": "Try adding 'please' next time."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Worker: 'Sorry, no pizza left. We have tacos or salad.'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "That's okay. I'll take tacos, please.",
            "result": "positive",
            "explanation": "Handling disappointment with flexibility.",
            "feedback": "Great job being flexible!"
          },
          {
            "id": "s3c2",
            "text": "Ugh, this place is the worst.",
            "result": "negative",
            "explanation": "Complaining to the worker is rude.",
            "feedback": "The worker didn't mean to run out. Be kind to them."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Worker: 'Here you go. Need a milk?'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "Yes, chocolate please.",
            "result": "positive",
            "explanation": "Direct answer.",
            "feedback": "Good choice."
          },
          {
            "id": "s4c2",
            "text": "No thank you.",
            "result": "positive",
            "explanation": "Polite decline.",
            "feedback": "Polite refusal is a great skill."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "You take your tray. There is a line behind you." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Say 'Thank you' and walk away quickly.",
            "result": "positive",
            "explanation": "Keeps the line moving.",
            "feedback": "Considerate of others waiting."
          },
          {
            "id": "s5c2",
            "text": "Stand there and check your food.",
            "result": "neutral",
            "explanation": "Blocks the line.",
            "feedback": "Move to a table first, then check your food."
          }
        ]
      }
    ],
    "teacherNotes": "Practice handling the 'Out of Stock' disappointment specifically.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "ask_help_detailed",
    "title": "Asking for help with schoolwork",
    "ageRange": "6-14",
    "difficulty": 1,
    "metadata": { "tags": ["school","help"], "illustration": "🙋" },
    "context": {
      "text": "You are in math class. You don't understand the worksheet.",
      "altText": "Child looking at homework with pencil"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "The teacher is talking to another student." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Raise your hand and wait.",
            "result": "positive",
            "explanation": "Waiting your turn is key.",
            "feedback": "Patience is hard but important."
          },
          {
            "id": "s1c2",
            "text": "Yell 'Teacher!'",
            "result": "negative",
            "explanation": "Interrupting is rude.",
            "feedback": "Quiet hand up is better."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "The teacher comes over: 'Yes?'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "I'm stuck on number 4.",
            "result": "positive",
            "explanation": "Being specific helps the teacher.",
            "feedback": "Good, specific question."
          },
          {
            "id": "s2c2",
            "text": "I don't get it.",
            "result": "neutral",
            "explanation": "Vague.",
            "feedback": "Try pointing to the specific part that is hard."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "The teacher explains it quickly. You still don't get it." },
        "choices": [
          {
            "id": "s3c1",
            "text": "Could you show me one more time, slower?",
            "result": "positive",
            "explanation": "Self-advocacy.",
            "feedback": "It is brave to ask again. Good job."
          },
          {
            "id": "s3c2",
            "text": "Nod and pretend you know.",
            "result": "negative",
            "explanation": "You won't learn.",
            "feedback": "Don't pretend! Teachers want to help you understand."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Teacher writes it out. Now you understand." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Oh, I see now! Thank you.",
            "result": "positive",
            "explanation": "Confirming understanding.",
            "feedback": "Excellent."
          },
          {
            "id": "s4c2",
            "text": "Finally you explained it right.",
            "result": "negative",
            "explanation": "Rude to the teacher.",
            "feedback": "Be polite to people helping you."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "The teacher leaves. You see your friend is stuck too." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Whisper: 'Do you want me to show you?'",
            "result": "positive",
            "explanation": "Helping others solidifies your learning.",
            "feedback": "Being a helper is a great way to make friends."
          },
          {
            "id": "s5c2",
            "text": "Laugh at them.",
            "result": "negative",
            "explanation": "Mean.",
            "feedback": "Never laugh at someone who is learning."
          }
        ]
      }
    ],
    "teacherNotes": "Roleplay the 'Asking a second time' step, as this causes the most anxiety.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "teasing_response_detailed",
    "title": "Responding to teasing",
    "ageRange": "8-16",
    "difficulty": 2,
    "metadata": { "tags": ["emotions","conflict"], "illustration": "🛡️" },
    "context": {
      "text": "You are wearing a new shirt. A classmate laughs at it.",
      "altText": "One child teasing another"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "They say: 'That shirt is ugly.'" },
        "choices": [
          {
            "id": "s1c1",
            "text": "Say calmly: 'I like it.'",
            "result": "positive",
            "explanation": "Deflecting with confidence.",
            "feedback": "Good. You don't have to agree with them."
          },
          {
            "id": "s1c2",
            "text": "Start crying.",
            "result": "neutral",
            "explanation": "It's okay to be sad, but there are stronger ways to respond.",
            "feedback": "It hurts, I know. Let's try to use our words first."
          },
          {
            "id": "s1c3",
            "text": "You're ugly!",
            "result": "negative",
            "explanation": "Fighting fire with fire makes a bigger fire.",
            "feedback": "Don't be mean back. Be the bigger person."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "They say: 'Why do you wear weird clothes?'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "Please stop. That's not nice.",
            "result": "positive",
            "explanation": "Setting a boundary.",
            "feedback": "Clear and firm."
          },
          {
            "id": "s2c2",
            "text": "Ignore them and walk away.",
            "result": "positive",
            "explanation": "Removing their audience works well.",
            "feedback": "Walking away is a very strong choice."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "They follow you and keep laughing." },
        "choices": [
          {
            "id": "s3c1",
            "text": "Find a teacher or yard duty.",
            "result": "positive",
            "explanation": "Seeking safety.",
            "feedback": "If they follow you, always get an adult."
          },
          {
            "id": "s3c2",
            "text": "Push them.",
            "result": "negative",
            "explanation": "Physical violence gets you in trouble.",
            "feedback": "Keep your hands to yourself, even if you are mad."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "You find the teacher. They ask what is wrong." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Sam is following me and making fun of my shirt.",
            "result": "positive",
            "explanation": "Reporting facts.",
            "feedback": "Very clear reporting."
          },
          {
            "id": "s4c2",
            "text": "Sam is being a jerk.",
            "result": "neutral",
            "explanation": "Name calling isn't helpful info.",
            "feedback": "Tell the teacher *what* Sam did."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "The teacher talks to Sam. Sam apologizes." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Say 'Okay' and go play somewhere else.",
            "result": "positive",
            "explanation": "Accepting apology and creating space.",
            "feedback": "You don't have to play with Sam right now. Taking space is smart."
          },
          {
            "id": "s5c2",
            "text": "Say 'I'll never forgive you!'",
            "result": "neutral",
            "explanation": "A bit dramatic.",
            "feedback": "Just say okay and move on."
          }
        ]
      }
    ],
    "teacherNotes": "Emphasize that 'reporting' is not 'tattling' when someone is being mean.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "end_conversation_detailed",
    "title": "Ending a conversation politely",
    "ageRange": "6-12",
    "difficulty": 1,
    "metadata": { "tags": ["social","politeness"], "illustration": "👋" },
    "context": {
      "text": "A friend is talking about Minecraft, but you need to go to the bathroom badly.",
      "altText": "Child looking uncomfortable while another talks"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "They are in the middle of a story about a zombie." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Wait for a tiny pause.",
            "result": "positive",
            "explanation": "Polite listening.",
            "feedback": "Wait for a breath, then jump in."
          },
          {
            "id": "s1c2",
            "text": "Just walk away while they speak.",
            "result": "negative",
            "explanation": "Very rude.",
            "feedback": "That makes them feel ignored."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "There is a pause. What do you say?" },
        "choices": [
          {
            "id": "s2c1",
            "text": "Cool story! I have to use the bathroom, be right back.",
            "result": "positive",
            "explanation": "Validating + Reason for leaving.",
            "feedback": "Perfect interrupt."
          },
          {
            "id": "s2c2",
            "text": "Stop talking!",
            "result": "negative",
            "explanation": "Rude.",
            "feedback": "Use polite words."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "They say: 'Wait, let me finish this one part!'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Sorry, I really have to go! Tell me later.",
            "result": "positive",
            "explanation": "Holding boundary for your needs.",
            "feedback": "It's an emergency, so you have to be firm."
          },
          {
            "id": "s3c2",
            "text": "Okay fine.",
            "result": "neutral",
            "explanation": "You might have an accident!",
            "feedback": "Take care of your body first."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "You come back from the bathroom." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Okay, what happened to the zombie?",
            "result": "positive",
            "explanation": "Resuming the chat shows you care.",
            "feedback": "That makes your friend feel important."
          },
          {
            "id": "s4c2",
            "text": "I'm back.",
            "result": "neutral",
            "explanation": "A bit dry.",
            "feedback": "Ask them to finish their story."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "Lunch is over now." },
        "choices": [
          {
            "id": "s5c1",
            "text": "See you in class!",
            "result": "positive",
            "explanation": "Final goodbye.",
            "feedback": "Nice closing."
          }
        ]
      }
    ],
    "teacherNotes": "Practice 'Interruption' phrases.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "borrow_item_detailed",
    "title": "Asking to borrow something",
    "ageRange": "7-14",
    "difficulty": 1,
    "metadata": { "tags": ["school","sharing"], "illustration": "✏️" },
    "context": {
      "text": "You broke your pencil tip. You need to borrow one.",
      "altText": "Child holding broken pencil"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "You look at your neighbor, Sarah." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Sarah, excuse me?",
            "result": "positive",
            "explanation": "Getting attention politely.",
            "feedback": "Good start."
          },
          {
            "id": "s1c2",
            "text": "Grab a pencil off her desk.",
            "result": "negative",
            "explanation": "Taking without asking is stealing.",
            "feedback": "Never take things without asking."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "Sarah looks at you." },
        "choices": [
          {
            "id": "s2c1",
            "text": "My pencil broke. Could I borrow one?",
            "result": "positive",
            "explanation": "Reason + Request.",
            "feedback": "Clear and reasonable."
          },
          {
            "id": "s2c2",
            "text": "Give me a pencil.",
            "result": "negative",
            "explanation": "Demanding.",
            "feedback": "Ask nicely."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Sarah says: 'This is my favorite one, so be careful.'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "I promise I will be careful.",
            "result": "positive",
            "explanation": "Reassuring the owner.",
            "feedback": "Good promise."
          },
          {
            "id": "s3c2",
            "text": "Whatever.",
            "result": "negative",
            "explanation": "Dismissive.",
            "feedback": "If it's special to her, treat it with respect."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "You finish your work. The pencil is safe." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Hand it back and say 'Thank you'.",
            "result": "positive",
            "explanation": "Closing the loop.",
            "feedback": "Responsible."
          },
          {
            "id": "s4c2",
            "text": "Put it in your own pocket.",
            "result": "negative",
            "explanation": "That is stealing.",
            "feedback": "Give it back immediately."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "Sarah smiles and says 'You're welcome.'" },
        "choices": [
          {
            "id": "s5c1",
            "text": "Smile back.",
            "result": "positive",
            "explanation": "Non-verbal connection.",
            "feedback": "Nice interaction!"
          }
        ]
      }
    ],
    "teacherNotes": "Emphasize return of property.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "introduce_self_detailed",
    "title": "Introducing yourself",
    "ageRange": "6-14",
    "difficulty": 1,
    "metadata": { "tags": ["social","introduction"], "illustration": "🤝" },
    "context": {
      "text": "A new student sits at your table. You haven't met them.",
      "altText": "Two children at a table"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "They are setting up their books silently." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Smile and say 'Hi, I'm Alex.'",
            "result": "positive",
            "explanation": "Breaing the ice.",
            "feedback": "Brave start!"
          },
          {
            "id": "s1c2",
            "text": "Stare at them.",
            "result": "negative",
            "explanation": "Staring makes people uncomfortable.",
            "feedback": "Say hi instead of staring."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "They look shy but say: 'Hi, I'm Sam.'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "Nice to meet you, Sam.",
            "result": "positive",
            "explanation": "Polite acknowledgment.",
            "feedback": "Standard polite response."
          },
          {
            "id": "s2c2",
            "text": "Sam is a funny name.",
            "result": "negative",
            "explanation": "Insulting names is bad.",
            "feedback": "Don't make fun of names."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "You want to know more about them." },
        "choices": [
          {
            "id": "s3c1",
            "text": "Where did you go to school before?",
            "result": "positive",
            "explanation": "Good background question.",
            "feedback": "Good question."
          },
          {
            "id": "s3c2",
            "text": "Do you like Minecraft?",
            "result": "positive",
            "explanation": "Finding shared interests.",
            "feedback": "Great question - gaming is a common connector."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Sam says: 'I love Minecraft! I play Creative mode.'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "Me too! We should build something sometime.",
            "result": "positive",
            "explanation": "Building a friendship bridge.",
            "feedback": "You found a match!"
          },
          {
            "id": "s4c2",
            "text": "Creative mode is for babies.",
            "result": "negative",
            "explanation": "Gatekeeping fun.",
            "feedback": "Don't yuck their yum."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "Teacher starts talking." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Shh, teacher is talking. Talk later?",
            "result": "positive",
            "explanation": "Respecting class rules.",
            "feedback": "Good job paying attention."
          }
        ]
      }
    ],
    "teacherNotes": "Practice 'Interest Questions'.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "losing_game",
    "title": "Handling Losing a Game",
    "ageRange": "6-12",
    "difficulty": 2,
    "metadata": { "tags": ["emotions", "play"], "illustration": "🎲" },
    "context": {
      "text": "You are playing a board game with your friend. Your friend wins the game.",
      "altText": "Two children playing a board game, one is cheering"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "The game ends and your friend cheers, 'I won!'" },
        "choices": [
          {
            "id": "s1c1",
            "text": "Say 'Good game!'",
            "result": "positive",
            "explanation": "This shows good sportsmanship.",
            "feedback": "Excellent! Congratulating the winner is very polite."
          },
          {
            "id": "s1c2",
            "text": "Scream 'You cheated!'",
            "result": "negative",
            "explanation": "Accusing people makes them not want to play with you.",
            "feedback": "Losing is hard, but saying mean things hurts the fun."
          },
          {
            "id": "s1c3",
            "text": "Cross your arms and don't speak.",
            "result": "negative",
            "explanation": "Pouting brings down the mood.",
            "feedback": "It's okay to be sad, but try to say something nice."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "You feel hot and angry inside because you wanted to win." },
        "choices": [
          {
            "id": "s2c1",
            "text": "Take three deep breaths.",
            "result": "positive",
            "explanation": "Calming your body helps you control your words.",
            "feedback": "Great strategy. Breathing helps the anger go away."
          },
          {
            "id": "s2c2",
            "text": "Flip the board over.",
            "result": "negative",
            "explanation": "Breaking things is never the answer.",
            "feedback": "That ruins the game for everyone."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Your friend says: 'That was really fun.'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Yeah, it was close!",
            "result": "positive",
            "explanation": "Focusing on the fun part of playing.",
            "feedback": "Nice attitude."
          },
          {
            "id": "s3c2",
            "text": "It was only fun for you.",
            "result": "neutral",
            "explanation": "Honest feelings, but a bit sour.",
            "feedback": "Try to be happy for your friend, even if you are sad you lost."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Friend asks: 'Do you want to play again?'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "Yes, maybe I'll win this time!",
            "result": "positive",
            "explanation": "Optimism and resilience.",
            "feedback": "That's the spirit!"
          },
          {
            "id": "s4c2",
            "text": "No, I need a break.",
            "result": "positive",
            "explanation": "Knowing when to stop is a good skill.",
            "feedback": "Good self-care. Taking a break is smart if you are upset."
          },
          {
            "id": "s4c3",
            "text": "No, you always win.",
            "result": "negative",
            "explanation": "Complaining.",
            "feedback": "If you practice, you might win next time."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "You help put the game away." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Put the pieces in the box neatly.",
            "result": "positive",
            "explanation": "Taking care of the game.",
            "feedback": "Helpful and responsible."
          }
        ]
      }
    ],
    "teacherNotes": "Practice the 'Deep Breath' technique physically.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "unwanted_gift",
    "title": "Receiving a Gift You Don't Like",
    "ageRange": "7-14",
    "difficulty": 2,
    "metadata": { "tags": ["family", "politeness"], "illustration": "🎁" },
    "context": {
      "text": "Grandma gives you a birthday present. You open it and it is a very itchy sweater.",
      "altText": "Child holding a sweater looking uncertain"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "Grandma is watching you open the box." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Smile and look at her.",
            "result": "positive",
            "explanation": "Smiling shows you appreciate the gesture.",
            "feedback": "A smile makes Grandma feel good."
          },
          {
            "id": "s1c2",
            "text": "Make a disgusted face.",
            "result": "negative",
            "explanation": "This hurts her feelings.",
            "feedback": "Try to keep a neutral or happy face, even if you don't like it."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "She asks: 'Do you like it? I knitted it myself.'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "Thank you for making it, Grandma.",
            "result": "positive",
            "explanation": "You can thank the effort without lying about the object.",
            "feedback": "Perfect. You thanked her for her hard work."
          },
          {
            "id": "s2c2",
            "text": "No, it's ugly.",
            "result": "negative",
            "explanation": "Very rude.",
            "feedback": "Even if true, we don't say that to the gift giver."
          },
          {
            "id": "s2c3",
            "text": "It's... interesting.",
            "result": "neutral",
            "explanation": "A safe middle ground.",
            "feedback": "Okay, but 'Thank you' is better."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Mom says: 'Why don't you try it on?'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Okay, I'll try it on for a minute.",
            "result": "positive",
            "explanation": "Cooperating pleases your family.",
            "feedback": "Good job being flexible."
          },
          {
            "id": "s3c2",
            "text": "No! It will touch my skin!",
            "result": "negative",
            "explanation": "Refusal causes conflict.",
            "feedback": "Try it over your t-shirt for just 10 seconds to be nice."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "You put it on. It is indeed very itchy." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Wear it for a photo, then ask to take it off.",
            "result": "positive",
            "explanation": "Compromise.",
            "feedback": "Smart. Grandma gets her photo, and you get comfort."
          },
          {
            "id": "s4c2",
            "text": "Rip it off and throw it.",
            "result": "negative",
            "explanation": "Too aggressive.",
            "feedback": "Take it off gently."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "Grandma says: 'You look so handsome/pretty!'" },
        "choices": [
          {
            "id": "s5c1",
            "text": "Thanks Grandma. Can I have some cake now?",
            "result": "positive",
            "explanation": "Politely changing the subject.",
            "feedback": "Great redirection!"
          }
        ]
      }
    ],
    "teacherNotes": "Discuss 'Social Lies' vs 'Politeness' - we thank the *thought*, not necessarily the *object*.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "personal_space",
    "title": "Asking for Personal Space",
    "ageRange": "6-12",
    "difficulty": 1,
    "metadata": { "tags": ["boundaries", "school"], "illustration": "📏" },
    "context": {
      "text": "You are reading a book in the library. A classmate sits right next to you, touching your arm.",
      "altText": "Two children sitting very close on a bench"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "They sit down and lean on your shoulder to see the book." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Lean away slightly.",
            "result": "neutral",
            "explanation": "A body language cue.",
            "feedback": "Good first step, but they might not notice."
          },
          {
            "id": "s1c2",
            "text": "Push them off.",
            "result": "negative",
            "explanation": "Physical aggression.",
            "feedback": "Use words, not hands."
          },
          {
            "id": "s1c3",
            "text": "Say: 'Excuse me, could you move over a little?'",
            "result": "positive",
            "explanation": "Polite verbal request.",
            "feedback": "Excellent clear communication."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "They don't move. They ask: 'What are you reading?'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "Slide your own chair over to make space.",
            "result": "positive",
            "explanation": "Taking control of your own space.",
            "feedback": "If they won't move, you can move. Good problem solving."
          },
          {
            "id": "s2c2",
            "text": "Scream 'Get away!'",
            "result": "negative",
            "explanation": "Too loud for the library.",
            "feedback": "Keep your voice calm."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "They follow you. 'I want to see the pictures.'" },
        "choices": [
          {
            "id": "s3c1",
            "text": "Hold the book so they can see, but keep your body separate.",
            "result": "positive",
            "explanation": "Sharing while maintaining boundaries.",
            "feedback": "Nice compromise."
          },
          {
            "id": "s3c2",
            "text": "Close the book loudly.",
            "result": "negative",
            "explanation": "Rude.",
            "feedback": "You can share without being touched."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "They are still too close. It makes you feel wiggly." },
        "choices": [
          {
            "id": "s4c1",
            "text": "Say: 'I need a space bubble, please.'",
            "result": "positive",
            "explanation": "Using 'space bubble' is common school language.",
            "feedback": "Very clear."
          },
          {
            "id": "s4c2",
            "text": "Run away.",
            "result": "neutral",
            "explanation": "Escaping works but ends your reading time.",
            "feedback": "Okay choice if you feel unsafe."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "They say: 'Oh, sorry.' and move back." },
        "choices": [
          {
            "id": "s5c1",
            "text": "Say: 'Thanks.' and keep reading.",
            "result": "positive",
            "explanation": "Reinforcing their good behavior.",
            "feedback": "Good job protecting your space politely."
          }
        ]
      }
    ],
    "teacherNotes": "Teach the 'Hula Hoop' concept for personal space visualization.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "making_apology",
    "title": "Apologizing for a Mistake",
    "ageRange": "6-14",
    "difficulty": 2,
    "metadata": { "tags": ["home", "responsibility"], "illustration": "🏺" },
    "context": {
      "text": "You were running in the house and accidentally knocked over a vase. It broke.",
      "altText": "Broken vase pieces on the floor"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "The vase crashes. Mom runs into the room." },
        "choices": [
          {
            "id": "s1c1",
            "text": "Hide behind the sofa.",
            "result": "negative",
            "explanation": "Hiding makes you look guilty.",
            "feedback": "Face the mistake bravely."
          },
          {
            "id": "s1c2",
            "text": "Stand still and look at her.",
            "result": "positive",
            "explanation": "Staying present shows responsibility.",
            "feedback": "Good. Stay calm."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "Mom asks: 'What happened?!'" },
        "choices": [
          {
            "id": "s2c1",
            "text": "It was an accident. I was running.",
            "result": "positive",
            "explanation": "Telling the truth is the most important thing.",
            "feedback": "Honesty is brave. Good job telling the truth."
          },
          {
            "id": "s2c2",
            "text": "The cat did it.",
            "result": "negative",
            "explanation": "Lying gets you in more trouble.",
            "feedback": "Don't blame others."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "Mom looks upset and starts getting the broom." },
        "choices": [
          {
            "id": "s3c1",
            "text": "Ask: 'Can I help clean it up?'",
            "result": "positive",
            "explanation": "Trying to fix the mistake.",
            "feedback": "Helping fix it shows you are sorry."
          },
          {
            "id": "s3c2",
            "text": "Go watch TV.",
            "result": "negative",
            "explanation": "Ignoring the problem is rude.",
            "feedback": "Stay and help."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Mom says: 'This was my favorite vase. I am sad.'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "I'm really sorry I broke it.",
            "result": "positive",
            "explanation": "A sincere apology.",
            "feedback": "Saying sorry helps hearts heal."
          },
          {
            "id": "s4c2",
            "text": "It was ugly anyway.",
            "result": "negative",
            "explanation": "Very hurtful.",
            "feedback": "Never say that."
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "Mom sighs. 'Please don't run inside again.'" },
        "choices": [
          {
            "id": "s5c1",
            "text": "I promise I won't.",
            "result": "positive",
            "explanation": "Making a plan for the future.",
            "feedback": "Keeping your promise is the best apology."
          }
        ]
      }
    ],
    "teacherNotes": "Discuss that 'Sorry' doesn't fix the vase, but it helps the relationship.",
    "privacy": { "containsPii": false }
  },
  {
    "id": "group_project",
    "title": "Compromising in a Group",
    "ageRange": "8-16",
    "difficulty": 3,
    "metadata": { "tags": ["school", "work"], "illustration": "📝" },
    "context": {
      "text": "Your teacher assigns partners for a poster project. You want to do Dinosaurs. Your partner wants Space.",
      "altText": "Two students looking at a blank poster board"
    },
    "steps": [
      {
        "id": "s1",
        "prompt": { "text": "Partner says: 'Let's do the Solar System!'" },
        "choices": [
          {
            "id": "s1c1",
            "text": "No, that's boring. I want Dinosaurs.",
            "result": "negative",
            "explanation": "Shutting down their idea is rude.",
            "feedback": "Try to be nicer about their idea."
          },
          {
            "id": "s1c2",
            "text": "Space is cool, but I was thinking about Dinosaurs.",
            "result": "positive",
            "explanation": "Validating them before sharing your idea.",
            "feedback": "Great negotiation tactic."
          }
        ]
      },
      {
        "id": "s2",
        "prompt": { "text": "Partner says: 'But I already drew a planet.' They look stubborn." },
        "choices": [
          {
            "id": "s2c1",
            "text": "Say: 'How about we do Rock, Paper, Scissors?'",
            "result": "positive",
            "explanation": "A fair way to decide.",
            "feedback": "Fair games are a good way to solve deadlocks."
          },
          {
            "id": "s2c2",
            "text": "Scribble on their planet.",
            "result": "negative",
            "explanation": "Aggressive.",
            "feedback": "Never destroy work."
          }
        ]
      },
      {
        "id": "s3",
        "prompt": { "text": "You don't want to lose the game. You want to compromise." },
        "choices": [
          {
            "id": "s3c1",
            "text": "What if we do Dinosaurs in Space?",
            "result": "positive",
            "explanation": "Combining ideas is the best compromise.",
            "feedback": "Brilliant idea! Everyone gets what they want."
          },
          {
            "id": "s3c2",
            "text": "Fine, we'll do Space.",
            "result": "neutral",
            "explanation": "Giving in is okay, but you might feel resentful.",
            "feedback": "It's generous of you, but try combining ideas first."
          }
        ]
      },
      {
        "id": "s4",
        "prompt": { "text": "Partner says: 'Whoa! Astronaut T-Rex? Yes!'" },
        "choices": [
          {
            "id": "s4c1",
            "text": "Yeah! And a Stegosaurus on the moon.",
            "result": "positive",
            "explanation": "Building on the shared idea.",
            "feedback": "Now you are collaborating!"
          }
        ]
      },
      {
        "id": "s5",
        "prompt": { "text": "The teacher walks by: 'How is it going?'" },
        "choices": [
          {
            "id": "s5c1",
            "text": "Great! We combined our ideas.",
            "result": "positive",
            "explanation": "Showing off your teamwork.",
            "feedback": "Teachers love to hear that you compromised."
          }
        ]
      }
    ],
    "teacherNotes": "Explain 'Compromise' vs 'Giving In'.",
    "privacy": { "containsPii": false }
  }
];
