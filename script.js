// The story information is stored inside this object.
const scenes = {
    prologue: {
        title: "Before the Dream",
        character: "Narrator",
        image: "images/1.png",

        text: "Tomorrow is your first city art exhibition. You worked on your painting for months, but old voices still make you doubt yourself.\n\nYour mother once told you that you had no talent. Classmates laughed at your body. A high school teacher complained about your English. Only your close friend made you feel safe.\n\nYou fall asleep at your desk. When you open your eyes, the sunset has not moved and your painting is gone.",

        choices: [
            {
                text: "Begin the search",
                next: "bedroom"
            }
        ]
    },

    bedroom: {
        title: "A Quiet Room",
        character: "Main Character",
        image: "images/1.png",
        text: "The clock reads 6:07 and does not change. Your laptop is glowing, but the easel is empty.\n\n\"The painting was here. Why can't I remember what happened to it?\"",
        choices: [
            {
                text: "Check the computer",
                next: "computer"
            },
            {
                text: "Examine the empty easel",
                next: "easel"
            }
        ]
    },

    computer: {
        title: "The Exhibition Email",
        character: "Computer Screen",
        image: "images/1.1.png",

        text: "The screen shows an email from the city art exhibition.\n\nEmail: \"Thank you for joining this year's exhibition. Please bring your finished painting tomorrow morning.\"\n\nFriend's Message: \"You don't have to impress everyone. I'm proud of you. Call me if you want company tomorrow.\"\n\nMain Character: \"She sounds so sure of me. I wish I could feel that way.\"",

        choices: [
            {
                text: "Return to the room",
                next: "bedroom"
            },
            {
                text: "Examine the empty easel",
                next: "easel"
            }
        ]
    },

    easel: {
        title: "The Empty Easel",
        character: "Main Character",
        image: "images/1.2.png",

        text: "A clean line in the dust shows where the canvas rested. Small marks of blue paint lead toward the door. The same blue paint is dry on your fingertips.\n\n\"Why is the paint on my hands? Did I move the painting?\"\n\nThe bedroom changes into an old art classroom.",

        choices: [
            {
                text: "Follow the blue paint",
                next: "artClassroom"
            },
            {
                text: "Check the computer first",
                next: "computer"
            }
        ]
    },

    artClassroom: {
        title: "A Room Full of Paintings",
        character: "Narrator",
        image: "images/2.png",

        text: "Morning light fills the art classroom. Students work at every table, but nobody sees you. Near the window, a younger version of you stands beside an unfinished drawing.\n\nMain Character: \"This isn't happening now. This is a memory.\"",

        choices: [
            {
                text: "Look at the students' paintings",
                next: "studentPaintings"
            },
            {
                text: "Examine your unfinished drawing",
                next: "unfinishedDrawing"
            }
        ]
    },

    studentPaintings: {
        title: "Comparison",
        character: "Mother's Memory",
        image: "images/2.1.png",

        text: "One student painted a beautiful garden. Another drew a careful portrait. You compare every line with your own work.\n\nMother: \"Look at the other children's paintings. Why can't you do something like that?\"\n\nMain Character: \"I still do this. I see someone else's work, and mine suddenly feels worthless.\"",

        choices: [
            {
                text: "Return to the classroom",
                next: "artClassroom"
            },
            {
                text: "Examine your drawing",
                next: "unfinishedDrawing"
            }
        ]
    },

    unfinishedDrawing: {
        title: "I Want to Finish This",
        character: "Main Character",
        image: "images/2.2.png",

        text: "The drawing shows a girl beside a window. Half the sky is orange, and the other half is empty. There are deep eraser marks around the girl's face.\n\n\"I kept changing it because I was afraid Mom would hate it.\"\n\nIn one corner are the words: \"I want to finish this.\"\n\n\"Even then, I wanted to keep drawing.\"",

        choices: [
            {
                text: "Leave the classroom",
                next: "hallway"
            },
            {
                text: "Look at the other paintings",
                next: "studentPaintings"
            }
        ]
    },

    hallway: {
        title: "The Hallway",
        character: "Main Character",
        image: "images/3.png",

        text: "The hallway has lights, but it is empty. A class photograph hangs on the wall. Voices come from a half-open classroom door.\n\n\"I know both of these memories. I tried not to think about them.\"",

        choices: [
            {
                text: "Examine the class photograph",
                next: "classPhoto"
            },
            {
                text: "Listen at the half-open door",
                next: "teacherTalk"
            }
        ]
    },

    classPhoto: {
        title: "The Girl at the Edge",
        character: "Main Character",
        image: "images/3.1.png",

        text: "You are near the edge of the class photograph, pulling your shirt down and trying to look smaller.\n\nClassmate: \"Why are you so chubby?\"\n\nAnother student laughs.\n\nMain Character: \"I started hiding from photographs. There was nothing wrong with that girl's body. They were being cruel.\"",

        choices: [
            {
                text: "Return to the hallway",
                next: "hallway"
            },
            {
                text: "Listen at the classroom door",
                next: "teacherTalk"
            }
        ]
    },

    teacherTalk: {
        title: "What She Said in Private",
        character: "Female Teacher",
        image: "images/3.2.png",

        text: "Inside the classroom, your female teacher talks with another teacher while they drink coffee.\n\nFemale Teacher: \"Her English is still weak. She slows the class down. It may be better if she transfers.\"\n\nYou remember that she smiled earlier and told you to ask her for help.\n\nMain Character: \"I believed her. I thought she wanted to help me.\"",

        choices: [
            {
                text: "Next",
                next: "nervousHands"
            }
        ]
    },

    nervousHands: {
        title: "Trying Not to Be Seen",
        character: "Younger You",
        image: "images/3.25.png",

        text: "You look down and press your fingers together. You want to disappear before the classroom door opens.\n\nYounger You: \"Maybe she is right. Maybe I am the problem.\"\n\nMain Character: \"No. I was learning a new language. I needed patience, not humiliation.\"",

        choices: [
            {
                text: "Enter the classroom",
                next: "highSchool"
            }
        ]
    },

    highSchool: {
        title: "Several Memories at Once",
        character: "Narrator",
        image: "images/4.png",

        text: "A computer is on at the teacher's desk. Your old journal lies on a student's table. Near the window, a memory of your mother waits for a meeting.\n\nThis room holds several memories at once.",

        choices: [
            {
                text: "Check the computer",
                next: "assignment"
            },
            {
                text: "Read your old journal",
                next: "journal"
            },
            {
                text: "Speak to your mother",
                next: "motherAtHome"
            }
        ]
    },

    assignment: {
        title: "Keep Up",
        character: "Teacher",
        image: "images/4.1.png",

        text: "An unfinished assignment appears on the computer. You remember asking the teacher for help.\n\nYounger You: \"Could you explain that part again?\"\n\nTeacher: \"I already explained it. You need to keep up.\"\n\nMain Character: \"I needed help learning a language. Instead, I felt like I was the problem.\"",

        choices: [
            {
                text: "Return to the classroom",
                next: "highSchool"
            },
            {
                text: "Read the journal",
                next: "journal"
            }
        ]
    },

    journal: {
        title: "What Nobody Saw",
        character: "Old Journal",
        image: "images/4.2.png",

        text: "Journal: \"I practiced what to say before class, but I still couldn't say it. I don't know who I can trust at school. When I get home, I feel even more tired.\"\n\nAnother entry says: \"I laughed with my friend today. For a little while, I didn't feel so alone.\"\n\nMain Character: \"Nobody could see how much effort it took just to get through the day.\"",

        choices: [
            {
                text: "Return to the classroom",
                next: "highSchool"
            },
            {
                text: "Speak to your mother",
                next: "motherAtHome"
            }
        ]
    },

    motherAtHome: {
        title: "I Needed Someone to Listen",
        character: "Mother",
        image: "images/4.3.png",

        text: "Younger You: \"I'm having a hard time at school.\"\n\nMother: \"Then work harder. Spending time drawing won't fix your English.\"\n\nYou put your journal away and say nothing more. Your phone lights up.\n\nFriend's Message: \"I'm at our bench. You can sit with me. You don't have to explain everything.\"",

        choices: [
            {
                text: "Go to the sunset bench",
                next: "sunsetBench"
            },
            {
                text: "Return to the classroom",
                next: "highSchool"
            }
        ]
    },

    sunsetBench: {
        title: "Someone Notices You",
        character: "Friend",
        image: "images/5.png",

        text: "Your friend sits on a wooden bench beneath a tree. The sky is pink and gold. She moves her bag to make room.\n\nFriend: \"You look tired. Want to sit down?\"",

        choices: [
            {
                text: "Tell her about the painting",
                next: "friendTalk"
            },
            {
                text: "Ask about the folded note",
                next: "friendNote"
            }
        ]
    },

    friendTalk: {
        title: "Permission",
        character: "Friend",
        image: "images/5.1.png",

        text: "Main Character: \"My painting is gone. Part of me is scared of finding it because then I will have to show it.\"\n\nFriend: \"I can't promise everyone will like it. But their opinions don't decide whether you're allowed to paint. You can ask me to stand beside you.\"\n\nMain Character: \"I think I've been waiting for permission to keep going.\"",

        choices: [
            {
                text: "Look at the folded note",
                next: "friendNote"
            },
            {
                text: "Return to the bench",
                next: "sunsetBench"
            }
        ]
    },

    friendNote: {
        title: "Friend's Note",
        character: "Friend",
        image: "images/5.2.png",

        text: "Your friend gives you a folded note.\n\nFriend's Note: \"You deserve kindness, especially from yourself. You don't need a prize to prove that your work matters. I'm glad you're here.\"\n\nBeyond the trees, your childhood home appears in the sunset.",

        item: "Friend's Note",

        choices: [
            {
                text: "Go to the childhood home",
                next: "childhoodHome"
            },
            {
                text: "Talk a little longer",
                next: "friendTalk"
            }
        ]
    },

    childhoodHome: {
        title: "The Beginning of the Fear",
        character: "Main Character",
        image: "images/6.png",

        text: "The house changes into the home you remember from childhood. At the kitchen table, a small girl holds up a drawing for her mother.\n\nMain Character: \"That's me. This is where I began believing I should hide my art.\"",

        choices: [
            {
                text: "Watch the memory",
                next: "motherMemory"
            },
            {
                text: "Search for the old sketchbook",
                next: "sketchbook"
            },
            {
                text: "Talk to your younger self",
                next: "youngerSelf"
            }
        ]
    },

    motherMemory: {
        title: "You Have No Talent",
        character: "Mother's Memory",
        image: "images/6.1.png",

        text: "Younger You: \"Mom, look. I finished it.\"\n\nMother: \"You have no talent for this. Stop wasting your time.\"\n\nThe girl lowers the drawing.\n\nMain Character: \"She worked hard on that. But I don't have to keep repeating your words to myself.\"",

        choices: [
            {
                text: "Return to the house",
                next: "childhoodHome"
            },
            {
                text: "Search for the sketchbook",
                next: "sketchbook"
            }
        ]
    },

    sketchbook: {
        title: "Somewhere I Want to Stay",
        character: "Main Character",
        image: "images/6.2.png",

        text: "Under a small bed, you find a sketchbook wrapped in cloth. It contains drawings of windows, birds, and girls with paintbrushes.\n\nOn the last page, you read: \"When I draw, I can make somewhere I want to stay.\"\n\nMain Character: \"I didn't start drawing to win. I started because I loved it.\"",

        item: "Old Sketchbook",

        choices: [
            {
                text: "Return to the house",
                next: "childhoodHome"
            },
            {
                text: "Find your younger self",
                next: "youngerSelf"
            }
        ]
    },

    youngerSelf: {
        title: "If Nobody Sees It",
        character: "Younger Self",
        image: "images/6.3.png",

        text: "The little girl sits beside a large picture covered with cloth.\n\nYounger Self: \"If nobody sees it, nobody can laugh at it.\"\n\nMain Character: \"Is that why the painting disappeared?\"\n\nYounger Self: \"I thought hiding it would keep us safe.\"\n\nYou recognize the cloth from your bedroom.",

        choices: [
            {
                text: "Try to share the memories",
                next: "memoryGate"
            },
            {
                text: "Search the house",
                next: "childhoodHome"
            }
        ]
    },

    memoryGate: {
        title: "Something Is Missing",
        character: "Younger Self",
        image: "images/6.35.png",

        text: "Younger Self: \"You say it's safe, but I don't believe you yet.\"\n\nYou need the Old Sketchbook and Friend's Note before you can continue.",

        special: "checkItems",

        choices: []
    },

    sharedMemories: {
        title: "No One Stole It",
        character: "Main Character and Younger Self",
        image: "images/6.35.png",

        text: "You place the sketchbook and your friend's note between you.\n\nMain Character: \"You were learning. You didn't deserve to be mocked. We can make another painting. We don't have to hide everything we love.\"\n\nYounger Self: \"So someone wants us here?\"\n\nMain Character: \"Yes. And I don't want to leave you alone anymore.\"\n\nYour memory returns. Before you fell asleep, you wrapped the painting and placed it under your bed.\n\nMain Character: \"No one stole it. I hid it.\"",

        choices: [
            {
                text: "Take the painting with you",
                next: "wakeUp"
            },
            {
                text: "Hide the painting again",
                next: "failure"
            }
        ]
    },

    wakeUp: {
        title: "Awake",
        character: "Main Character",
        image: "images/7.png",

        text: "You wake at your desk. You pull the wrapped painting from under the bed and place it on the easel.\n\nYou send your friend a message: \"Can you come with me to the exhibition tomorrow?\"\n\nFriend: \"Yes. I'll be there.\"\n\nMain Character: \"I'm still scared. But this time, I want to let it be seen.\"",

        choices: [
            {
                text: "Go to the exhibition",
                next: "success"
            }
        ]
    },

    success: {
        title: "First Place",
        character: "Good Ending",
        image: "images/7.1.png",

        text: "Your friend walks into the exhibition beside you. You do not look away when your painting is uncovered.\n\nLater, the judges announce that your painting received first place.\n\nMain Character: \"The award matters, but I chose to show the painting before I knew I would win. That choice was mine.\"\n\nThe painting was hidden. Your voice does not have to be.",

        choices: [
            {
                text: "Play Again",
                action: "restart"
            },
            {
                text: "Return Home",
                action: "home"
            }
        ]
    },

    failure: {
        title: "Hidden Again",
        character: "Hidden Ending",
        image: "images/8.png",

        text: "Main Character: \"I'm sorry. I can't do it yet.\"\n\nYou wake and push the wrapped painting farther under the bed. You do not message your friend. The exhibition begins without you.\n\nThe easel remains empty, not because you have no talent, but because fear made the choice for you.\n\nThis ending can still be changed.",

        choices: [
            {
                text: "Try Again",
                next: "memoryGate"
            },
            {
                text: "Start Over",
                action: "restart"
            },
            {
                text: "Return Home",
                action: "home"
            }
        ]
    }
};


// These variables keep track of the player.
let currentScene = "prologue";
let inventory = [];
let courage = 20;


// Connect JavaScript to the HTML.
const sceneTitle =
    document.getElementById("scene-title");

const characterName =
    document.getElementById("character-name");

const sceneImage =
    document.getElementById("scene-image");

const sceneText =
    document.getElementById("scene-text");

const choicesContainer =
    document.getElementById("choices-container");

const healthDisplay =
    document.getElementById("health-display");

const inventoryDisplay =
    document.getElementById("inventory-display");

const messageDisplay =
    document.getElementById("message-display");


// Display the selected scene.
function updateScene(sceneName) {
    const scene = scenes[sceneName];

    currentScene = sceneName;

    sceneTitle.textContent = scene.title;
    characterName.textContent = scene.character;
    sceneImage.src = scene.image;
    sceneImage.alt = scene.title;
    sceneText.textContent = scene.text;

    messageDisplay.textContent = "";

    if (scene.item) {
        pickUpItem(scene.item);
    }

    if (sceneName === "success") {
        courage = 100;
    }

    if (sceneName === "failure") {
        courage = 10;
    }

    updatePlayerInformation();
    displayChoices(scene.choices);

    if (scene.special === "checkItems") {
        checkRequiredItems();
    }
}


// Create the choice buttons.
function displayChoices(choices) {
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
        const button =
            document.createElement("button");

        button.textContent = choices[i].text;

        button.addEventListener(
            "click",
            function () {
                makeChoice(choices[i]);
            }
        );

        choicesContainer.appendChild(button);
    }
}


// Decide what happens after a choice.
function makeChoice(choice) {
    if (choice.action === "restart") {
        restartGame();
    } else if (choice.action === "home") {
        window.location.href = "index.html";
    } else {
        updateScene(choice.next);
    }
}


// Add an item to the inventory.
function pickUpItem(itemName) {
    if (!inventory.includes(itemName)) {
        inventory.push(itemName);

        courage = courage + 25;

        messageDisplay.textContent =
            itemName + " was added to your inventory.";
    }
}


// Update courage and inventory.
function updatePlayerInformation() {
    healthDisplay.textContent =
        courage + " / 100";

    if (inventory.length === 0) {
        inventoryDisplay.textContent = "Empty";
    } else {
        inventoryDisplay.textContent =
            inventory.join(", ");
    }
}


// Check for the two required items.
function checkRequiredItems() {
    const hasNote =
        inventory.includes("Friend's Note");

    const hasSketchbook =
        inventory.includes("Old Sketchbook");

    choicesContainer.innerHTML = "";

    if (hasNote && hasSketchbook) {
        createSpecialButton(
            "Share the memories",
            "sharedMemories"
        );

        messageDisplay.textContent =
            "You have both memories. You can continue.";
    } else {
        messageDisplay.textContent =
            "You are missing an important memory.";

        if (!hasNote) {
            createSpecialButton(
                "Return to the sunset bench",
                "sunsetBench"
            );
        }

        if (!hasSketchbook) {
            createSpecialButton(
                "Search for the sketchbook",
                "sketchbook"
            );
        }

        createSpecialButton(
            "Return to the childhood home",
            "childhoodHome"
        );
    }
}


// Create a button for the conditional scene.
function createSpecialButton(
    buttonText,
    nextScene
) {
    const button =
        document.createElement("button");

    button.textContent = buttonText;

    button.addEventListener(
        "click",
        function () {
            updateScene(nextScene);
        }
    );

    choicesContainer.appendChild(button);
}


// Start the game again.
function restartGame() {
    inventory = [];
    courage = 20;

    updateScene("prologue");
}


// Start the first scene.
updateScene("prologue");