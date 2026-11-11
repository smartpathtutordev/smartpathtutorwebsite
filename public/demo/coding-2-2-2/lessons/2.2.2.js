window.LESSON_META = {
 "id": "2.2.2",
 "title": "Keeping Score",
 "subtitle": "Change score by one",
 "mission": "Add 1 to score every time the basket catches a mango.",
 "scenes": [
  {
   "type": "title",
   "bg": "park",
   "lines": [
    "Hi there, players! Codi here, ready to code!",
    "Today we keep score in our game."
   ]
  },
  {
   "type": "talk",
   "bg": "garden",
   "lines": [
    "I'm catching mangoes from Lolo's tree.",
    "Every mango I catch, I count one more.",
    "Counting like this is how we keep score!"
   ],
   "props": [
    {
     "img": "mango",
     "label": "Catch!",
     "at": "L0@0.4"
    },
    {
     "img": "basket",
     "label": "Count",
     "at": "L1@0.5"
    }
   ],
   "pose": "up"
  },
  {
   "type": "code",
   "bg": "l2_game_canvas",
   "lines": [
    "Here is how a game keeps score.",
    "When the flag is clicked, set score to zero.",
    "If the basket touches a mango, change score by one."
   ],
   "style": "blocks",
   "code": [
    "when green flag clicked",
    "set score to 0",
    "forever",
    "  if touching mango then",
    "    change score by 1"
   ],
   "run": "L1@0.0",
   "output": {
    "kind": "text",
    "lines": [
     "Score 1"
    ],
    "at": "L2@0.8"
   },
   "heading": "Keep score"
  },
  {
   "type": "steps",
   "bg": "garden",
   "lines": [
    "Let's catch some mangoes!",
    "One mango, and the score is one.",
    "Another mango, and the score is two.",
    "One more, and the score is three!"
   ],
   "heading": "Watch the score grow",
   "cards": [
    {
     "img": "mango",
     "label": "Score 1",
     "at": "L1@0"
    },
    {
     "img": "mango",
     "label": "Score 2",
     "at": "L2@0"
    },
    {
     "img": "mango",
     "label": "Score 3",
     "at": "L3@0"
    }
   ]
  },
  {
   "type": "concept",
   "bg": "algorithm",
   "lines": [
    "A score is a variable that counts points.",
    "Set it to zero at the start, then add as you play."
   ],
   "word": "SCORE",
   "defn": "= a variable that counts your points",
   "chips": [
    "Set to 0",
    "Change by 1"
   ]
  },
  {
   "type": "yourturn",
   "bg": "play",
   "lines": [
    "Your turn to keep score!",
    "Add one to the score every time a mango is caught."
   ],
   "cards": [
    "mango",
    "basket"
   ]
  }
 ]
};