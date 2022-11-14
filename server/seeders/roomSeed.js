module.exports = [
    {
        roomName: "Torture Room",
        message: "This is the torture room",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Wine Cellar'
            },
            {
                userDirection: 'right',
                nextRoom: 'Furnace'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
        ],
        deathMsg: "You died in the torture room"
    },
    {
        roomName: "Furnace",
        message: "This is the furnace",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Store Room'
            },
            {
                userDirection: 'right',
                nextRoom: 'Crypt'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Torture Room'
            }
        ],
        deathMsg: "You died in the furnace"
    },
    {
        roomName: "Wine Cellar",
        message: "This is the wine cellar",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'Store Room'
            },
            {
                userDirection: 'down',
                nextRoom: 'Torture Room'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            },
        ],
        deathMsg: "You died in the wine cellar"
    },
    {
        roomName: "Store Room",
        message: "This is the store room",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'down',
                nextRoom: 'Furnace'
            },
            {
                userDirection: 'left',
                nextRoom: 'Wine Cellar'
            },
        ],
        deathMsg: "You died in the store room"
    },
    {
        roomName: "Crypt",
        message: "This is the crypt",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#',
            },
            {
                userDirection: 'left',
                nextRoom: 'Furnace'
            },
        ],
        deathMsg: "You died in the crypt"
    },
    {
        roomName: "Elevator",
        message: "This is the elevator",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'down',
                nextRoom: 'Crypt'
            },
            {
                userDirection: 'left',
                nextRoom: 'Store Room'
            }
        ],
        deathMsg: "You died in the elevator"
    },
    {
        roomName: "First Floor Stairs",
        message: "You find yourself on a set of creaky stairs. The slightest chill breeze meets you from below. And was that a moaning you hear? ",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Foyer'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'left',
                nextRoom: 'Elevator'
            },
        ],
        deathMsg: "You died on the stairs"
    },
    {
        roomName: "First Floor Landing",
        message: "The stairs come to a landing. Shafts of moonlight slant down through the window, highlighting what appear to be footprints left by a pair of heavy boots in the layer of dust on the ancient carpet.",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'right',
                nextRoom: 'Study'
            },
            {
                userDirection: 'down',
                nextRoom: 'Sunroom'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
        ],
        deathMsg: "You died on the first floor landing"
    },
    {
        roomName: "Study",
        message: "You enter a richly appointed study. All dark leather and wood, the rich smell of cognac hits your nostrils. There's an immense desk facing away from the window, it seems to be so heavy it must have grown up with the house itself. A phonograph plays on a spindly side table, the record skipping and repeating the lyric 'And in the end, we all fall down/We all float down here below'.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get out of there",
                    resolutionMessage: "You get a bad vibe in your gut. Careful not to touch any of the furniture or tchotchkes, you slink from the room.",
                    severity: "low"
                },
                {
                    userResponse: "Stand very still",
                    resolutionMessage: "You stand still as a statue, your heartbeat slows. The music starts to swell and the lights pulse. Suddenly, the phonograph bursts into green flame and you think you hear a faint screaming from the flames. A spark lands on your forehead, you bat it away, but not before it singes you. You notice in the mirror on the wall that it has left a strange looping scar.",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate the phonograph",
                    resolutionMessage: "You try to lift the needle on the phonograph and a voice crackles from the horn 'Nuh uh uh, no touchie!' A sharp burst of electricity shocks your hand leaving your whole arm numb.",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Game Room'
            },
            {
                userDirection: 'left',
                nextRoom: 'First Floor Landing'
            },
        ],
        deathMsg: "You died in the study"
    },
    {
        roomName: "Game Room",
        message: "A menagerie of animal busts stare down at you from the walls, an almost unbelievable number packing every available inch of wall space. Beasts both great and small and some that you can't quite identify, they give the air of unknown worlds and deep forbidden places. You notice a bar cart laden with liquor bottles, including the Scotch you remember your grandfather always had on hand.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Take a closer look at an animal",
                    resolutionMessage: "You approach one of the animals you don't recognize on the wall. It resembles a small deer with twisting ebony antlers, but its fur has a greenish hue. You look closer and see a mosaic of what appear to be teeny tiny leaves covering the creature. As you lean in, a powder coughs out of the creature's nose and covers your face thoroughly. You manage to wipe it all away quickly, but you're left with a dry cough as you move from the room.",
                    severity: "medium"
                },
                {
                    userResponse: "Take a sip of Scotch",
                    resolutionMessage: "You cautiously open the bottle and are greeted by the familiar scent of your grandfather. You take a small sip and feel the liquor's warmth pass through your cells. But no sooner have you swallowed than the bottle and its contents dissolve into nothingness. You blink, look around you, and feel the stare of the assembled animals press down on you.",
                    severity: "low"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Study'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Patio'
            },
            {
                userDirection: 'left',
                nextRoom: 'First Floor Landing'
            },
        ],
        deathMsg: "You died in the game room"
    },
    {
        roomName: "Patio",
        message: "You walk out onto a patio paved hith heavy stone. There is a set of wrought-iron patio furniture: table, chairs, chaise lounge. You also see a self-standing hammock rolled up in the corner. Tall, thick shrubs stand above a low stone border wall bordering all sides except for one: a break in the wall with a sheer drop-off to a roaring river below. You peer over the edge, vertigo quickly washing over you.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get the heck out of there",
                    resolutionMessage: "You step back from the edge, a bit too quickly! A loose paving stone gives way under your foot, sending a rain of stone and rubble down into the river. You fall hard on your tailbone but manage to catch yourself before falling to a watery death.",
                    severity: "medium"
                },
                {
                    userResponse: "Try to get through the shrubs",
                    resolutionMessage: "You look for a gap in the shrubs you might be able to crawl through, but they prove to be nigh impassable. As a matter of fact, each place you try to exploit seems to grow back even thicker.",
                    severity: "low"
                },
                {
                    userResponse: "Call for help",
                    resolutionMessage: "You yell over the side of the cliff for help, you see twinkling lights in the distance. Maybe those are houses where someone might hear your cries. Alas, your calls are lost in the roar of the river below. The feelings of isolation and desperation deepen in your heart.",
                    severity: "low"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Game Room'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Sunroom'
            },
        ],
        deathMsg: "You died in the patio"
    },
    {
        roomName: "Sunroom",
        message: "You step into the sunroom. Cheap wicker furniture surrounds a low glass-topped coffee table, also in wicker. A deck of cards lies on the table, scattered. Whoever was playing seems to have left in a hurry. Curiously, a pile of wet towels, about as high as your waist, sits next to the door on your right.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Take a closer look at the towels",
                    resolutionMessage: "You investigate the tower of towels more closely to find that they seem to be soaked in some kind of alcohol, the sharp scent is overpowering and makes your eyes water.",
                    severity: "medium"
                },
                {
                    userResponse: "Take a closer look at the cards",
                    resolutionMessage: "You see someone was playing five card draw and had just laid down a winning hand.",
                    severity: "low"
                },
                {
                    userResponse: "Leave the room",
                    resolutionMessage: "The plasticness of it all skeeves you out, you swiftly exit the room.",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'right',
                nextRoom: 'Patio'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Graveyard'
            },
        ],
        deathMsg: "You died in the sunroom"
    },
    {
        roomName: "Graveyard",
        message: "You find yourself in a backyard graveyard, speckled with old, crumbling headstones and swathed in a low fog. The entire yard is ringed in 12ft high iron fences with sharp spikes along the top. You see a wheelbarrow among the headstones with a shovel leaning against it.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Investigate the wheelbarrow",
                    resolutionMessage: "You approach the wheelbarrow, wading through fog. You see it is filled with dirt, freshly excavated. You grasp the handle of the shovel and attempt to lift it, but you find you can not get it to budge. No matter how hard you try. The shovel does not move, as if it weighed a thousand pounds.",
                    severity: "low"
                },
                {
                    userResponse: "Read the headstones",
                    resolutionMessage: "You look at the headstone nearest you to see what it says. It simply reads 'I'm sorry' which chills you to your very bone.",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate the fence",
                    resolutionMessage: "The fence is far too high to climb. And it appears to have rusted thoroughly. No breaks or imperfections either. It's just as fence as fence gets.",
                    severity: "low"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'right',
                nextRoom: 'Sunroom'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
        ],
        deathMsg: "You died in the graveyard"
    },
    {
        roomName: "Dining Room",
        message: "You enter the dining room and find a grand, long dining table made from heavy wood. This is unsurprising. But that table is absolutely loaded with spoons of various sizes and materials. This is more suprising.",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Graveyard'
            },
            {
                userDirection: 'left',
                nextRoom: 'Kitchen'
            },
        ],
        deathMsg: "You died in the dining room"
    },
     {
        roomName: "Living Room",
        message: "In the living room, you find a very comfortable-looing sofa in front of a roaring fireplace. There's a pool table as well, with the balls arranged perfectly for the opening break.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Stand by the fire",
                    resolutionMessage: "You approach the fireplace but find that you cannot feel its warmth. It looks to be as real a fire as you've ever seen but you can simply feel no warmth from it at all.",
                    severity: "low"
                },
                {
                    userResponse: "Shoot some pool",
                    resolutionMessage: "You take up a cue and line up a shot that knocks every single ball into a pocket in perfect order. The pool cue then leaps out of your hand of its own accord and gives you a good whack across the head.",
                    severity: "high"
                },
                {
                    userResponse: "Sit on the sofa",
                    resolutionMessage: "You plop yourself down onto the sofa for a rest, but find it is covered in a sticky substance that you must free yourself from.",
                    severity: "medium"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Foyer'
            },
            {
                userDirection: 'down',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'left',
                nextRoom: 'First Floor Bathroom'
            }
        ],
        deathMsg: "You died in the living room"
    },
    {
        roomName: "Foyer",
        message: "In the foyer, you see a beautiful flower arrangement sitting in the center of the room on an elegant wood and glass table.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Keep on moving",
                    resolutionMessage: "Flowers? No thanks. You move through to the next room.",
                    severity: "low"
                },
                {
                    userResponse: "Give the flowers a sniff",
                    resolutionMessage: "You take a gentle sniff from one of the bulging blooms and are met with a sickly sweet smell. It's familiar but you can't put your finger on why.",
                    severity: "low"
                },
                {
                    userResponse: "Take a look down",
                    resolutionMessage: "You notice the ornate Persian rug you're standing on. It is soft and you feel mesmerized by the design, like it's calling to you.",
                    severity: "low"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'down',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'left',
                nextRoom: 'Living Room'
            }
           
        ],
        deathMsg: "You died in the foyer"
    },
    {
        roomName: "First Floor Bathroom",
        message: "The first floor bathroom if clean but old fashioned. For some reason, the light bulb is green. It bathes the room with its cool glow.",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'down',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
              }
        ],
        deathMsg: "You died in the first floor bathroom"
    },
    {
        roomName: "Kitchen",
        message: "The kitchen is large and scrupulously clean. It could easily prepare a meal large enough for a military brigade or a marching band, with room to spare. You see a craggly loaf of sourdough bread sitting on a cutting board on the counter in the center of the room. You can tell by your nose that it's fresh.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Check out the bread",
                    resolutionMessage: "You slice yourself a slice of bread with a serrated knife that was sitting beside the loaf. After another sniff, you take a bite and find that it's the most delicious bread you've ever tasted. And it didn't even have any butter!",
                    severity: "low"
                },
                {
                    userResponse: "Look in the fridge",
                    resolutionMessage: "You open the hulking refrigerator and find that it's empty except for an egg carton with only one remaining egg. It is also cleaner than seems possible.",
                    severity: "low"
                },
                {
                    userResponse: "Look for a phone",
                    resolutionMessage: "You see an old wall mounted phone by a desk in the corner of the kitchen, you pick it up to try to dial for help but you get no dial tone. All you hear is the sound of someone crying on the other end. You try to talk to them but they can't seem to hear you.",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'First Floor Bathroom'
            },
            {
                userDirection: 'right',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Second Floor Stairs'
            }
        ],
        deathMsg: "You died in the kitchen"
    },
    {
        roomName: "Second Floor Stairs",
        message: "This is the second floor stairs",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Bedroom 1'
            },
            {
                userDirection: 'right',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'down',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'left',
                nextRoom: 'Creaky Hallway'
            },
          
        ],
        deathMsg: "You died in the second floor stairs"
    },
    {
        roomName: "Bedroom 1",
        message: "This is the bedroom 1",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'down',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'left',
                nextRoom: 'Second Floor Bathroom'
            }
        ],
        deathMsg: "You died in the bedroom 1"
    },
    {
        roomName: "Second Floor Bathroom",
        message: "This is the second floor bathroom",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Bedroom 1'
            },
            {
                userDirection: 'down',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'left',
                nextRoom: 'Bedroom 2'
            }
        ],
        deathMsg: "You died in the second floor bathroom"
    },
    {
        roomName: "Bedroom 2",
        message: "This is the bedroom 2",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Safe Exit'
              },
              {
                userDirection: 'right',
                nextRoom: 'Second Floor Bathroom'
            },
            {
                userDirection: 'down',
                nextRoom: 'Pentagram Chamber'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
        ],
        deathMsg: "You died in the bedroom 2"
    },
    {
        roomName: "Creaky Hallway",
        message: "This is the creaky hallway",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Second Floor Bathroom'
            },
            {
                userDirection: 'right',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'down',
                nextRoom: 'Master Bedroom'
            },
            {
                userDirection: 'left',
                nextRoom: 'Pentagram Chamber'
            },
           
        ],
        deathMsg: "You died in the creaky hallway"
    },
    {
        roomName: "Pentagram Chamber",
        message: "This is the pentagram chamber",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Bedroom 2'
            },
            {
                userDirection: 'right',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'down',
                nextRoom: 'Attic'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
              }
            
        ],
        deathMsg: "You died in the pentagram chamber"
    },
    {
        roomName: "Laboratory",
        message: "This is the laboratory",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'left',
                nextRoom: 'Master Bedroom'
            }
        ],
        deathMsg: "You died in the laboratory"
    },
    {
        roomName: "Master Bedroom",
        message: "This is the master bedroom",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'right',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'down',
                nextRoom: 'Dangerous Exit'
            },
            {
                userDirection: 'left',
                nextRoom: 'Attic'
            }
        ],
        deathMsg: "You died in the master bedroom"
    },
    {
        roomName: "Attic",
        message: "This is the attic",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        deathMsg: "You died in the attic."
    },
    {
        roomName: "Safe Exit",
        message: "You exited safely!",
    },
    {
        roomName: "Dangerous Exit",
        message: "You exited but were injured",
        deathMsg: "You died while attempting to exit"
    },
]