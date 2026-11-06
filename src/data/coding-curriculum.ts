export interface LessonItem {
  id: string;
  title: string;
  subtitle: string;
  mission_text: string;
  badge: string;
}

export interface UnitItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface TrackItem {
  id: string;
  title: string;
  grades: string;
  color: string;
  units: UnitItem[];
  capstone?: LessonItem;
}

export const CODING_TRACKS: TrackItem[] = [
  {
    "id": "L0",
    "title": "Level 0 \u00b7 Little Explorers",
    "grades": "K\u2013Grade 1",
    "color": "#FFB300",
    "units": [
      {
        "id": "0.1",
        "title": "Algorithms",
        "lessons": [
          {
            "id": "0.1.1",
            "title": "What Is a Computer?",
            "subtitle": "Meet Codi!",
            "mission_text": "Press the big green button to wake Codi up.",
            "badge": "Codi's Programmer"
          },
          {
            "id": "0.1.2",
            "title": "What Is an Algorithm?",
            "subtitle": "",
            "mission_text": "Put 3 sandwich cards in order",
            "badge": "Sandwich Chef"
          },
          {
            "id": "0.1.3",
            "title": "Order Matters",
            "subtitle": "Getting ready for school",
            "mission_text": "Order 4 morning-routine cards.",
            "badge": "Order Expert"
          },
          {
            "id": "0.1.4",
            "title": "Step Forward!",
            "subtitle": "Moving one step at a time",
            "mission_text": "Move Codi forward to the store.",
            "badge": "Forward Walker"
          },
          {
            "id": "0.1.5",
            "title": "Turn Left, Turn Right",
            "subtitle": "Changing direction",
            "mission_text": "Guide a puppy through a 3x3 garden to the bone.",
            "badge": "Turn Champion"
          }
        ]
      },
      {
        "id": "0.2",
        "title": "Debugging",
        "lessons": [
          {
            "id": "0.2.1",
            "title": "Oops, a Bug!",
            "subtitle": "Mistakes happen",
            "mission_text": "Spot the step that went wrong.",
            "badge": "Bug Finder"
          },
          {
            "id": "0.2.2",
            "title": "Find the Wrong Step",
            "subtitle": "Checking step by step",
            "mission_text": "Tap the wrong arrow.",
            "badge": "Step Checker"
          },
          {
            "id": "0.2.3",
            "title": "Fix It!",
            "subtitle": "Debugging",
            "mission_text": "Swap one card to fix the path.",
            "badge": "Debugger"
          },
          {
            "id": "0.2.4",
            "title": "Try, Test, Try Again",
            "subtitle": "Never give up",
            "mission_text": "Test a path, then improve it.",
            "badge": "Never Give Up"
          },
          {
            "id": "0.2.5",
            "title": "Many Ways to Get There",
            "subtitle": "More than one answer",
            "mission_text": "Find 2 different paths to the same goal.",
            "badge": "Path Explorer"
          }
        ]
      },
      {
        "id": "0.3",
        "title": "Loops",
        "lessons": [
          {
            "id": "0.3.1",
            "title": "Spot the Pattern",
            "subtitle": "Things that repeat",
            "mission_text": "Finish the pattern.",
            "badge": "Pattern Spotter"
          },
          {
            "id": "0.3.2",
            "title": "Repeat It!",
            "subtitle": "The repeat block",
            "mission_text": "Use a Repeat 4 Times [Forward] block.",
            "badge": "Repeat Hero"
          },
          {
            "id": "0.3.3",
            "title": "Loops Save Steps",
            "subtitle": "Shorter algorithms",
            "mission_text": "Replace 6 blocks with 1 loop.",
            "badge": "Step Saver"
          },
          {
            "id": "0.3.4",
            "title": "Loops All Around Us",
            "subtitle": "Loops in daily life",
            "mission_text": "Match daily activities to loops.",
            "badge": "Loop Finder"
          },
          {
            "id": "0.3.5",
            "title": "Dance Loop",
            "subtitle": "Repeating a group of steps",
            "mission_text": "Build a repeating dance.",
            "badge": "Dance Looper"
          }
        ]
      },
      {
        "id": "0.4",
        "title": "Thinking Like a Computer",
        "lessons": [
          {
            "id": "0.4.1",
            "title": "Input and Output",
            "subtitle": "Press and see",
            "mission_text": "Match buttons to what they do.",
            "badge": "Input Output Pro"
          },
          {
            "id": "0.4.2",
            "title": "If It Rains...",
            "subtitle": "Making choices",
            "mission_text": "Pick the right action for the weather.",
            "badge": "Weather Wizard"
          },
          {
            "id": "0.4.3",
            "title": "Sort It Out",
            "subtitle": "Grouping by a rule",
            "mission_text": "Sort by color, then by size.",
            "badge": "Super Sorter"
          },
          {
            "id": "0.4.4",
            "title": "Big Problem, Small Steps",
            "subtitle": "Breaking it down",
            "mission_text": "Split a big task into 3 small tasks.",
            "badge": "Small Steps Star"
          },
          {
            "id": "0.4.5",
            "title": "Be a Kind Coder",
            "subtitle": "Safe and kind with technology",
            "mission_text": "Choose the safe, kind action.",
            "badge": "Kind Coder"
          }
        ]
      }
    ],
    "capstone": {
      "id": "0.C",
      "title": "Treasure Maze Adventure",
      "subtitle": "Capstone project",
      "mission_text": "Plan, test and fix a full maze path.",
      "badge": "Treasure Hunter"
    }
  },
  {
    "id": "L1",
    "title": "Level 1 \u00b7 Story and Animation Crafters",
    "grades": "Grades 1\u20132",
    "color": "#FF7043",
    "units": [
      {
        "id": "1.1",
        "title": "Events",
        "lessons": [
          {
            "id": "1.1.1",
            "title": "The Start Button",
            "subtitle": "When green flag clicked",
            "mission_text": "Add a green flag block so the cat says Kumusta.",
            "badge": "Flag Starter"
          },
          {
            "id": "1.1.2",
            "title": "When Clicked",
            "subtitle": "Click a sprite to make it act",
            "mission_text": "Make the cat say Meow when it is clicked.",
            "badge": "Tap Master"
          },
          {
            "id": "1.1.3",
            "title": "Arrow Keys",
            "subtitle": "Moving with the keyboard",
            "mission_text": "Use arrow-key events to drive the jeepney to the store.",
            "badge": "Key Driver"
          },
          {
            "id": "1.1.4",
            "title": "When Two Things Touch",
            "subtitle": "Touching sprites",
            "mission_text": "Make the puppy say Yum when it touches the bone.",
            "badge": "Touch Detective"
          },
          {
            "id": "1.1.5",
            "title": "Many Events, One Story",
            "subtitle": "Putting events together",
            "mission_text": "Use three different events in one fiesta story.",
            "badge": "Fiesta Maker"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Motion and Loops",
        "lessons": [
          {
            "id": "1.2.1",
            "title": "Move and Glide",
            "subtitle": "Two ways to move",
            "mission_text": "Use a glide block to fly the kite to the top.",
            "badge": "Glide Pilot"
          },
          {
            "id": "1.2.2",
            "title": "Spin and Bounce",
            "subtitle": "Turning and bouncing",
            "mission_text": "Make the ball bounce from edge to edge.",
            "badge": "Spin and Bounce"
          },
          {
            "id": "1.2.3",
            "title": "Forever Loops",
            "subtitle": "Loops that never stop",
            "mission_text": "Use a forever loop to spin the electric fan.",
            "badge": "Forever Looper"
          },
          {
            "id": "1.2.4",
            "title": "Repeat with Waits",
            "subtitle": "Slowing down a loop",
            "mission_text": "Make the frog jump 4 times with waits in the loop.",
            "badge": "Hop Timer"
          },
          {
            "id": "1.2.5",
            "title": "Paths and Patterns",
            "subtitle": "Moves that make shapes",
            "mission_text": "Use a repeat to make a zigzag path to the mango tree.",
            "badge": "Path Painter"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Looks and Sounds",
        "lessons": [
          {
            "id": "1.3.1",
            "title": "Costumes and Flipbooks",
            "subtitle": "Animating with costumes",
            "mission_text": "Loop next costume to animate the cat jumping.",
            "badge": "Flipbook Artist"
          },
          {
            "id": "1.3.2",
            "title": "Speech Bubbles",
            "subtitle": "Making sprites talk",
            "mission_text": "Make the cat say Pabili po! at the sari-sari store.",
            "badge": "Bubble Talker"
          },
          {
            "id": "1.3.3",
            "title": "Sound Effects",
            "subtitle": "Adding sounds",
            "mission_text": "Make the rooster crow when it is clicked.",
            "badge": "Sound Maker"
          },
          {
            "id": "1.3.4",
            "title": "Backdrops and Scenes",
            "subtitle": "Where the story happens",
            "mission_text": "Pick and switch to a backdrop that fits the story.",
            "badge": "Scene Setter"
          },
          {
            "id": "1.3.5",
            "title": "Show and Hide",
            "subtitle": "Appear and disappear",
            "mission_text": "Use show and hide in a loop to make the firefly blink.",
            "badge": "Firefly Light"
          }
        ]
      },
      {
        "id": "1.4",
        "title": "Storytelling",
        "lessons": [
          {
            "id": "1.4.1",
            "title": "Plan a Story",
            "subtitle": "Beginning, middle, end",
            "mission_text": "Order 3 story cards: beginning, middle, end.",
            "badge": "Story Planner"
          },
          {
            "id": "1.4.2",
            "title": "Two Characters Talk",
            "subtitle": "Taking turns in a conversation",
            "mission_text": "Make two characters take turns talking using say and wait.",
            "badge": "Chat Buddies"
          },
          {
            "id": "1.4.3",
            "title": "Scene Changes",
            "subtitle": "Moving the story to new places",
            "mission_text": "Switch backdrops 3 times with waits to tell a trip story.",
            "badge": "Scene Traveler"
          },
          {
            "id": "1.4.4",
            "title": "Timing a Story",
            "subtitle": "When things happen",
            "mission_text": "Use waits so the rooster crows after the sunrise.",
            "badge": "Story Timer"
          },
          {
            "id": "1.4.5",
            "title": "Debug Your Story",
            "subtitle": "Find and fix story bugs",
            "mission_text": "Find and fix the out-of-order block in a story.",
            "badge": "Bug Hunter"
          }
        ]
      }
    ],
    "capstone": {
      "id": "1.C",
      "title": "The Lost Star",
      "subtitle": "Capstone story",
      "mission_text": "Build The Lost Star: plan, animate the bird, and return the star to the sky.",
      "badge": "Star Story Maker"
    }
  },
  {
    "id": "L2",
    "title": "Level 2 \u00b7 Game Creators",
    "grades": "Grades 2\u20133",
    "color": "#22C55E",
    "units": [
      {
        "id": "2.1",
        "title": "Decisions",
        "lessons": [
          {
            "id": "2.1.1",
            "title": "If It Rains, Bring an Umbrella",
            "subtitle": "The if block",
            "mission_text": "Add an if block that switches to the umbrella costume when it rains.",
            "badge": "If Thinker"
          },
          {
            "id": "2.1.2",
            "title": "If and Else",
            "subtitle": "Two paths to choose",
            "mission_text": "Use if/else so Codi buys a mango or saves up.",
            "badge": "Two Path Planner"
          },
          {
            "id": "2.1.3",
            "title": "True or False",
            "subtitle": "Questions with two answers",
            "mission_text": "Sort sentences into true or false.",
            "badge": "True or False Pro"
          },
          {
            "id": "2.1.4",
            "title": "Bounce off the Wall",
            "subtitle": "If touching edge, bounce",
            "mission_text": "Make the ball bounce with forever + if touching edge.",
            "badge": "Bounce Boss"
          },
          {
            "id": "2.1.5",
            "title": "And, Or, Not",
            "subtitle": "Checking two things",
            "mission_text": "Use AND so the coin is collected only when touching it and pressing space.",
            "badge": "And Or Not Ace"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Variables",
        "lessons": [
          {
            "id": "2.2.1",
            "title": "The Labeled Box",
            "subtitle": "What is a variable?",
            "mission_text": "Make a variable called mangoes and set it to 3.",
            "badge": "Box Keeper"
          },
          {
            "id": "2.2.2",
            "title": "Keeping Score",
            "subtitle": "Change score by one",
            "mission_text": "Add 1 to score every time the basket catches a mango.",
            "badge": "Score Keeper"
          },
          {
            "id": "2.2.3",
            "title": "Lives and Health",
            "subtitle": "Counting down",
            "mission_text": "Subtract 1 life when the puppy touches a rock.",
            "badge": "Life Saver"
          },
          {
            "id": "2.2.4",
            "title": "Timers",
            "subtitle": "Counting time",
            "mission_text": "Build a 10-second countdown timer.",
            "badge": "Time Keeper"
          },
          {
            "id": "2.2.5",
            "title": "High Scores",
            "subtitle": "Comparing numbers",
            "mission_text": "Update high score when score is bigger.",
            "badge": "Record Breaker"
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Game Mechanics",
        "lessons": [
          {
            "id": "2.3.1",
            "title": "Player Controls",
            "subtitle": "Arrow keys move the player",
            "mission_text": "Program left and right arrow keys to move the puppy.",
            "badge": "Control Master"
          },
          {
            "id": "2.3.2",
            "title": "Collectibles",
            "subtitle": "Things to pick up",
            "mission_text": "Make a coin that adds 1 point and hides when touched.",
            "badge": "Treat Collector"
          },
          {
            "id": "2.3.3",
            "title": "Obstacles",
            "subtitle": "Things to avoid",
            "mission_text": "Guide the puppy around a rock, and lose a life on touch.",
            "badge": "Obstacle Dodger"
          },
          {
            "id": "2.3.4",
            "title": "Levels and Speed",
            "subtitle": "Getting harder",
            "mission_text": "Increase asteroid speed at level 2.",
            "badge": "Level Up Hero"
          },
          {
            "id": "2.3.5",
            "title": "Win and Game Over",
            "subtitle": "How a game ends",
            "mission_text": "Add a win at 10 points and game over at 0 lives.",
            "badge": "Game Ender"
          }
        ]
      },
      {
        "id": "2.4",
        "title": "Game Design",
        "lessons": [
          {
            "id": "2.4.1",
            "title": "What Makes a Game Fun",
            "subtitle": "Goal, challenge, reward",
            "mission_text": "Choose a goal, a challenge and a reward for a game.",
            "badge": "Fun Designer"
          },
          {
            "id": "2.4.2",
            "title": "Plan on Paper",
            "subtitle": "Sketch before you code",
            "mission_text": "Sketch a game screen and write one win rule.",
            "badge": "Game Planner"
          },
          {
            "id": "2.4.3",
            "title": "Playtesting",
            "subtitle": "Let friends try it",
            "mission_text": "Watch a friend play and note 2 pieces of feedback.",
            "badge": "Playtester"
          },
          {
            "id": "2.4.4",
            "title": "Fixing Bugs from Players",
            "subtitle": "From feedback to fixes",
            "mission_text": "Fix the coin bug so it gives only 1 point.",
            "badge": "Bug Fixer"
          },
          {
            "id": "2.4.5",
            "title": "Polish and Share",
            "subtitle": "Finishing touches",
            "mission_text": "Add a sound and a sparkle effect, then share with family.",
            "badge": "Game Polisher"
          }
        ]
      }
    ],
    "capstone": {
      "id": "2.C",
      "title": "Space Coin Collector",
      "subtitle": "Capstone project",
      "mission_text": "Build Space Coin Collector: rocket controls, coins (+1), asteroids (-1 life), win at 10.",
      "badge": "Space Game Creator"
    }
  },
  {
    "id": "L3",
    "title": "Level 3 \u00b7 Code Apprentices",
    "grades": "Grades 4\u20135",
    "color": "#2EA8F5",
    "units": [
      {
        "id": "3.1",
        "title": "Blocks to Python",
        "lessons": [
          {
            "id": "3.1.1",
            "title": "Under the Hood",
            "subtitle": "Blocks become Python",
            "mission_text": "Match 3 blocks to their Python lines.",
            "badge": "Python Peeker"
          },
          {
            "id": "3.1.2",
            "title": "print() and Messages",
            "subtitle": "Showing words on the screen",
            "mission_text": "Print 3 fiesta announcements.",
            "badge": "Fiesta Announcer"
          },
          {
            "id": "3.1.3",
            "title": "Strings",
            "subtitle": "Text inside quotes",
            "mission_text": "Join strings to make a store sign.",
            "badge": "String Weaver"
          },
          {
            "id": "3.1.4",
            "title": "Comments",
            "subtitle": "Notes for people",
            "mission_text": "Add comments to a recipe program.",
            "badge": "Note Keeper"
          },
          {
            "id": "3.1.5",
            "title": "Reading Errors",
            "subtitle": "Errors are clues",
            "mission_text": "Read an error message and fix the line.",
            "badge": "Bug Hunter"
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Numbers and Variables",
        "lessons": [
          {
            "id": "3.2.1",
            "title": "Python Math",
            "subtitle": "Python as a calculator",
            "mission_text": "Find the total cost of 3 snacks with Python math.",
            "badge": "Math Wizard"
          },
          {
            "id": "3.2.2",
            "title": "Variables in Python",
            "subtitle": "Named boxes for values",
            "mission_text": "Store the jeepney fare in a variable and print it.",
            "badge": "Variable Driver"
          },
          {
            "id": "3.2.3",
            "title": "input() Questions",
            "subtitle": "Asking the user",
            "mission_text": "Ask the user's name and greet them.",
            "badge": "Question Asker"
          },
          {
            "id": "3.2.4",
            "title": "Number or Text?",
            "subtitle": "Strings vs numbers",
            "mission_text": "Fix a program so it adds numbers instead of joining text.",
            "badge": "Type Detective"
          },
          {
            "id": "3.2.5",
            "title": "Mini Calculator",
            "subtitle": "Input, math and output together",
            "mission_text": "Build a change calculator for the sari-sari store.",
            "badge": "Calculator Builder"
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Decisions and Loops",
        "lessons": [
          {
            "id": "3.3.1",
            "title": "if, elif, else",
            "subtitle": "Choosing one path",
            "mission_text": "Print the right advice for 3 kinds of weather.",
            "badge": "Choice Maker"
          },
          {
            "id": "3.3.2",
            "title": "Comparing Values",
            "subtitle": "True or False",
            "mission_text": "Check which kids are tall enough for the ride.",
            "badge": "Fair Judge"
          },
          {
            "id": "3.3.3",
            "title": "for Loops",
            "subtitle": "Repeating a set number of times",
            "mission_text": "Print the jeepney stops with a for loop.",
            "badge": "Loop Lantern Maker"
          },
          {
            "id": "3.3.4",
            "title": "while Loops",
            "subtitle": "Repeat while it's true",
            "mission_text": "Save coins with a while loop until reaching 20.",
            "badge": "Steady Saver"
          },
          {
            "id": "3.3.5",
            "title": "Lists",
            "subtitle": "Many values in one variable",
            "mission_text": "Make a shopping list and print each item.",
            "badge": "List Champion"
          }
        ]
      },
      {
        "id": "3.4",
        "title": "Functions",
        "lessons": [
          {
            "id": "3.4.1",
            "title": "def and Call",
            "subtitle": "Naming a group of steps",
            "mission_text": "Define a cheer function and call it twice.",
            "badge": "Function Crafter"
          },
          {
            "id": "3.4.2",
            "title": "Parameters",
            "subtitle": "Giving a function information",
            "mission_text": "Write a greet function and welcome 3 friends.",
            "badge": "Parameter Pro"
          },
          {
            "id": "3.4.3",
            "title": "Return Values",
            "subtitle": "Getting an answer back",
            "mission_text": "Write a function that returns a total price.",
            "badge": "Return Ranger"
          },
          {
            "id": "3.4.4",
            "title": "Reusing Code",
            "subtitle": "Write once, use many times",
            "mission_text": "Use one fare function for 4 groups.",
            "badge": "Code Recycler"
          },
          {
            "id": "3.4.5",
            "title": "Planning a Program",
            "subtitle": "Think first, then code",
            "mission_text": "Write a plan as comments, then code it.",
            "badge": "Master Planner"
          }
        ]
      }
    ],
    "capstone": {
      "id": "3.C",
      "title": "Wizard's Text Quest",
      "subtitle": "Capstone project",
      "mission_text": "Build a branching text quest with choices and health.",
      "badge": "Quest Wizard"
    }
  },
  {
    "id": "A",
    "title": "Track A \u00b7 AI Explorers",
    "grades": "Grades 4\u20136",
    "color": "#A855F7",
    "units": [
      {
        "id": "A.1",
        "title": "How Computers Learn",
        "lessons": [
          {
            "id": "A.1.1",
            "title": "What Is AI?",
            "subtitle": "Computers that learn",
            "mission_text": "Tap the gadgets that use AI.",
            "badge": "AI Explorer"
          },
          {
            "id": "A.1.2",
            "title": "Learning from Examples",
            "subtitle": "Ripe or not yet?",
            "mission_text": "Sort 10 mangoes into ripe and unripe to teach the computer.",
            "badge": "Example Teacher"
          },
          {
            "id": "A.1.3",
            "title": "Pixels and Pictures",
            "subtitle": "How computers see",
            "mission_text": "Color pixels on a grid to draw a mango.",
            "badge": "Pixel Painter"
          },
          {
            "id": "A.1.4",
            "title": "Training Data",
            "subtitle": "Many good examples",
            "mission_text": "Add 20 varied, correctly labeled mango photos to the training data.",
            "badge": "Data Detective"
          },
          {
            "id": "A.1.5",
            "title": "Making Predictions",
            "subtitle": "Smart guesses",
            "mission_text": "Show new fruits to the sorter and check each prediction.",
            "badge": "Prediction Pro"
          }
        ]
      },
      {
        "id": "A.2",
        "title": "Seeing and Hearing",
        "lessons": [
          {
            "id": "A.2.1",
            "title": "Train a Thumbs Up Detector",
            "subtitle": "Teaching the camera",
            "mission_text": "Train a thumbs up detector with 10 examples of each group.",
            "badge": "Detector Builder"
          },
          {
            "id": "A.2.2",
            "title": "Sorting Fruit with a Camera",
            "subtitle": "A camera fruit sorter",
            "mission_text": "Train a camera to sort mangoes and calamansi into baskets.",
            "badge": "Fruit Sorter"
          },
          {
            "id": "A.2.3",
            "title": "Sounds and Voices",
            "subtitle": "How computers hear",
            "mission_text": "Train a sound sorter to tell a rooster from a dog bark.",
            "badge": "Sound Sorter"
          },
          {
            "id": "A.2.4",
            "title": "Say \"Light\" (or \"Ilaw\")",
            "subtitle": "Voice commands",
            "mission_text": "Train a lamp to turn on when you say light or ilaw.",
            "badge": "Voice Commander"
          },
          {
            "id": "A.2.5",
            "title": "When AI Gets It Wrong",
            "subtitle": "Errors and fixes",
            "mission_text": "Find the wrong guesses and add better examples to fix them.",
            "badge": "AI Fixer"
          }
        ]
      },
      {
        "id": "A.3",
        "title": "Smart Characters",
        "lessons": [
          {
            "id": "A.3.1",
            "title": "Rules vs Learning",
            "subtitle": "Two ways to be smart",
            "mission_text": "Choose rules or learning for each problem card.",
            "badge": "Rules and Learning"
          },
          {
            "id": "A.3.2",
            "title": "A Helper Bot with Scripted Replies",
            "subtitle": "Meet Bida",
            "mission_text": "Write 3 scripted replies for a helper bot.",
            "badge": "Bot Builder"
          },
          {
            "id": "A.3.3",
            "title": "Choosing Good Answers",
            "subtitle": "Kind, true and safe",
            "mission_text": "Pick the best reply for each message.",
            "badge": "Kind Reply Pro"
          },
          {
            "id": "A.3.4",
            "title": "Game Characters That React",
            "subtitle": "Meet Slimy",
            "mission_text": "Make a game character react to 2 gestures.",
            "badge": "Game Maker"
          },
          {
            "id": "A.3.5",
            "title": "Testing a Smart Character",
            "subtitle": "Try many inputs",
            "mission_text": "Run 4 tests on a smart character and fix the one that fails.",
            "badge": "Chief Tester"
          }
        ]
      },
      {
        "id": "A.4",
        "title": "Safe and Fair AI",
        "lessons": [
          {
            "id": "A.4.1",
            "title": "Is It Fair?",
            "subtitle": "AI for everyone",
            "mission_text": "Add varied voices so the lamp works for everyone.",
            "badge": "Fairness Champion"
          },
          {
            "id": "A.4.2",
            "title": "Privacy and My Data",
            "subtitle": "Keep it safe",
            "mission_text": "Sort information cards into okay to share or keep private.",
            "badge": "Privacy Guard"
          },
          {
            "id": "A.4.3",
            "title": "Real or Made by AI?",
            "subtitle": "Be a picture detective",
            "mission_text": "Spot the clues in 4 pictures: real or made by AI?",
            "badge": "Picture Detective"
          },
          {
            "id": "A.4.4",
            "title": "Asking AI Good Questions",
            "subtitle": "Clear and safe prompts",
            "mission_text": "Turn 3 vague questions into clear ones for the helper bot.",
            "badge": "Question Expert"
          },
          {
            "id": "A.4.5",
            "title": "Being a Responsible AI User",
            "subtitle": "Safe, kind and honest",
            "mission_text": "Choose the responsible action in 5 short stories.",
            "badge": "Responsible User"
          }
        ]
      }
    ],
    "capstone": {
      "id": "A.C",
      "title": "Fruit sorter and friendly helper bot",
      "subtitle": "Capstone project",
      "mission_text": "Build and test a fruit sorter with a scripted helper bot, then share it with a grown-up.",
      "badge": "AI Explorer Champion"
    }
  },
  {
    "id": "B",
    "title": "Track B \u00b7 Robotics and IoT Inventors",
    "grades": "Grades 4\u20136",
    "color": "#14B8A6",
    "units": [
      {
        "id": "B.1",
        "title": "Robot Anatomy",
        "lessons": [
          {
            "id": "B.1.1",
            "title": "Brain, Eyes, Muscles",
            "subtitle": "The parts of a robot",
            "mission_text": "Label the sensor, controller and motor of a robot.",
            "badge": "Robot Builder"
          },
          {
            "id": "B.1.2",
            "title": "Microcontrollers",
            "subtitle": "A tiny computer brain",
            "mission_text": "Upload a blink program to the virtual board.",
            "badge": "Blink Boss"
          },
          {
            "id": "B.1.3",
            "title": "Lights and Buttons",
            "subtitle": "Press to light up",
            "mission_text": "Make an LED light up only while a button is pressed.",
            "badge": "Button Pro"
          },
          {
            "id": "B.1.4",
            "title": "Motors",
            "subtitle": "Making things spin",
            "mission_text": "Spin a motor slow, then fast, then stop it.",
            "badge": "Motor Master"
          },
          {
            "id": "B.1.5",
            "title": "Circuits Are Loops",
            "subtitle": "Electricity needs a full path",
            "mission_text": "Close the gap in a virtual circuit to light the LED.",
            "badge": "Loop Closer"
          }
        ]
      },
      {
        "id": "B.2",
        "title": "Sensors",
        "lessons": [
          {
            "id": "B.2.1",
            "title": "Distance Sensors",
            "subtitle": "Seeing with echoes",
            "mission_text": "Move a box and watch the distance reading change.",
            "badge": "Echo Explorer"
          },
          {
            "id": "B.2.2",
            "title": "Stop Before the Wall",
            "subtitle": "Using a sensor to stay safe",
            "mission_text": "Make the rover stop before it reaches a wall.",
            "badge": "Safe Stopper"
          },
          {
            "id": "B.2.3",
            "title": "Light Sensors",
            "subtitle": "Bright or dark?",
            "mission_text": "Cover and uncover a light sensor and watch the reading.",
            "badge": "Light Scientist"
          },
          {
            "id": "B.2.4",
            "title": "Temperature",
            "subtitle": "Measuring hot and cold",
            "mission_text": "Warm a virtual temperature sensor and watch the reading rise.",
            "badge": "Heat Detective"
          },
          {
            "id": "B.2.5",
            "title": "Reading Sensor Numbers",
            "subtitle": "Numbers help us decide",
            "mission_text": "Find the light threshold that switches a lamp on.",
            "badge": "Threshold Finder"
          }
        ]
      },
      {
        "id": "B.3",
        "title": "Automation",
        "lessons": [
          {
            "id": "B.3.1",
            "title": "Smart Fan",
            "subtitle": "A fan that decides by itself",
            "mission_text": "Program a model fan to spin when the temperature is high.",
            "badge": "Smart Fan Maker"
          },
          {
            "id": "B.3.2",
            "title": "Night Light",
            "subtitle": "Light for a brownout",
            "mission_text": "Make a lamp glow automatically when it gets dark.",
            "badge": "Brownout Hero"
          },
          {
            "id": "B.3.3",
            "title": "Plant Watering Alert",
            "subtitle": "Help for thirsty plants",
            "mission_text": "Make a buzzer beep when the soil is too dry.",
            "badge": "Plant Protector"
          },
          {
            "id": "B.3.4",
            "title": "Flood Warning Model",
            "subtitle": "Keeping the barangay safe",
            "mission_text": "Set water levels that trigger green, yellow and siren warnings.",
            "badge": "Flood Guardian"
          },
          {
            "id": "B.3.5",
            "title": "Testing Devices",
            "subtitle": "Check every case",
            "mission_text": "Run bright, dark and threshold tests on the night light.",
            "badge": "Super Tester"
          }
        ]
      },
      {
        "id": "B.4",
        "title": "Rovers",
        "lessons": [
          {
            "id": "B.4.1",
            "title": "Driving Forward and Turning",
            "subtitle": "How a rover steers",
            "mission_text": "Drive the rover around a box to Lola's house.",
            "badge": "Rover Driver"
          },
          {
            "id": "B.4.2",
            "title": "Following a Line",
            "subtitle": "Sensors that look down",
            "mission_text": "Program the rover to follow a straight black line.",
            "badge": "Line Follower"
          },
          {
            "id": "B.4.3",
            "title": "Curves and Corners",
            "subtitle": "Turning more when the path bends",
            "mission_text": "Guide the rover around a track with two sharp corners.",
            "badge": "Corner Champ"
          },
          {
            "id": "B.4.4",
            "title": "Deliveries on a Map",
            "subtitle": "Planning a route",
            "mission_text": "Plan a rover route that delivers pandesal to two houses.",
            "badge": "Pandesal Courier"
          },
          {
            "id": "B.4.5",
            "title": "Debugging a Rover",
            "subtitle": "Trace and fix",
            "mission_text": "Find and fix the bug in a rover's route to school.",
            "badge": "Bug Hunter"
          }
        ]
      }
    ],
    "capstone": {
      "id": "B.C",
      "title": "Line-Following Delivery Rover",
      "subtitle": "Capstone project",
      "mission_text": "Build and test a line-following rover that delivers pandesal.",
      "badge": "Delivery Inventor"
    }
  },
  {
    "id": "C",
    "title": "Track C \u00b7 Web and App Creators",
    "grades": "Grades 4\u20136",
    "color": "#FF6B8B",
    "units": [
      {
        "id": "C.1",
        "title": "HTML",
        "lessons": [
          {
            "id": "C.1.1",
            "title": "How Websites Work",
            "subtitle": "From your browser to the server and back",
            "mission_text": "Make a first web page with one heading and see it in the live preview.",
            "badge": "First Page Maker"
          },
          {
            "id": "C.1.2",
            "title": "Headings and Paragraphs",
            "subtitle": "Big titles and small sentences",
            "mission_text": "Build a pet page with one heading and two paragraphs.",
            "badge": "Heading Hero"
          },
          {
            "id": "C.1.3",
            "title": "Images",
            "subtitle": "Pictures on your page",
            "mission_text": "Add an image with src and alt text to a recipe page.",
            "badge": "Picture Pro"
          },
          {
            "id": "C.1.4",
            "title": "Links",
            "subtitle": "Jumping from page to page",
            "mission_text": "Link a fiesta home page to a second page.",
            "badge": "Link Builder"
          },
          {
            "id": "C.1.5",
            "title": "Lists",
            "subtitle": "Bullets and numbers",
            "mission_text": "Make a halo-halo recipe with a bullet list and a numbered list.",
            "badge": "List Maker"
          }
        ]
      },
      {
        "id": "C.2",
        "title": "CSS",
        "lessons": [
          {
            "id": "C.2.1",
            "title": "Colors",
            "subtitle": "Painting your page with CSS",
            "mission_text": "Style a heading with a text color and a background color.",
            "badge": "Color Painter"
          },
          {
            "id": "C.2.2",
            "title": "Fonts",
            "subtitle": "How letters look",
            "mission_text": "Change the font family and font size of a paragraph.",
            "badge": "Font Fixer"
          },
          {
            "id": "C.2.3",
            "title": "Boxes and Spacing",
            "subtitle": "Every part is a box",
            "mission_text": "Style a card with padding, a border and a margin.",
            "badge": "Box Builder"
          },
          {
            "id": "C.2.4",
            "title": "Layouts",
            "subtitle": "Putting boxes side by side",
            "mission_text": "Use flex to place three menu boxes side by side.",
            "badge": "Layout Boss"
          },
          {
            "id": "C.2.5",
            "title": "Buttons That Glow",
            "subtitle": "Styling the hover",
            "mission_text": "Make a button glow on hover.",
            "badge": "Glow Master"
          }
        ]
      },
      {
        "id": "C.3",
        "title": "JavaScript",
        "lessons": [
          {
            "id": "C.3.1",
            "title": "Click Events",
            "subtitle": "Making pages listen",
            "mission_text": "Make a button show a message when it is clicked.",
            "badge": "Click Commander"
          },
          {
            "id": "C.3.2",
            "title": "Changing Text",
            "subtitle": "JavaScript writes on the page",
            "mission_text": "Use a button to change the text of a heading.",
            "badge": "Text Wizard"
          },
          {
            "id": "C.3.3",
            "title": "Variables on the Web",
            "subtitle": "Remembering numbers",
            "mission_text": "Build a like button that counts clicks with a variable.",
            "badge": "Variable Keeper"
          },
          {
            "id": "C.3.4",
            "title": "A Simple Quiz",
            "subtitle": "Checking answers with if",
            "mission_text": "Make a three-question quiz that checks each answer with if and else.",
            "badge": "Quiz Master"
          },
          {
            "id": "C.3.5",
            "title": "A Mini Game",
            "subtitle": "Events, variables and if together",
            "mission_text": "Build a click game that keeps score and shows a win message.",
            "badge": "Game Maker"
          }
        ]
      },
      {
        "id": "C.4",
        "title": "Design and Safety",
        "lessons": [
          {
            "id": "C.4.1",
            "title": "Designing for Users",
            "subtitle": "Who will use your page?",
            "mission_text": "Sketch a page for a chosen user and list what that user needs.",
            "badge": "User Designer"
          },
          {
            "id": "C.4.2",
            "title": "Making Pages Easy to Use",
            "subtitle": "Clear, readable, simple",
            "mission_text": "Fix a hard-to-use page with bigger text and a bigger button.",
            "badge": "Easy Page Fixer"
          },
          {
            "id": "C.4.3",
            "title": "Safe Sharing Online",
            "subtitle": "Keep private things private",
            "mission_text": "Sort details into safe to share or keep private.",
            "badge": "Safety Shield"
          },
          {
            "id": "C.4.4",
            "title": "Testing on a Phone",
            "subtitle": "Pages for every screen",
            "mission_text": "Use a media query so a menu stacks on a phone screen.",
            "badge": "Phone Tester"
          },
          {
            "id": "C.4.5",
            "title": "Publishing with a Grown-Up",
            "subtitle": "Sharing your site safely",
            "mission_text": "Check a page for private info, then publish it with a grown-up.",
            "badge": "Safe Publisher"
          }
        ]
      }
    ],
    "capstone": {
      "id": "C.C",
      "title": "My Super Coder portfolio site",
      "subtitle": "Capstone project",
      "mission_text": "Build, test and publish a portfolio site with three projects.",
      "badge": "Super Coder"
    }
  }
];
