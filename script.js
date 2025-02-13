console.log("Script loaded!"); // Debugging check

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const gameContainer = document.getElementById("game-container");
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices");
    const bgMusic = document.getElementById("bg-music");


// Play music when the game starts
function startGame() {
    bgMusic.play(); // Play background music
    bgMusic.volume = 0.5; // Adjust volume (0.0 - 1.0)
    console.log("Game of Thrones theme is playing...");
}


function playSwordSound() {
    const swordSound = document.getElementById("sword-sound"); // Get the audio element
    if (swordSound) {
        swordSound.currentTime = 0; // Reset sound to start
        swordSound.play().catch(error => console.log("Sound play error:", error)); // Play the sound
    }
}




    

    
    const story = {
        start: {
            text: "Winterfell is lost. Arya Stark, the last true heir of House Stark, is on the run after the Red Wedding. Alone, she must decide her next move. What will she do?",
            background: "images/winterfell.jpg",
            choices: [
                { text: "Seek Revenge – 'I will make them pay for what they did!'", next: "revenge1", background: "images/revenge.jpg" },
                { text: "Go to Braavos – 'I must become stronger before I act.'", next: "braavos1", background: "images/bravoos.jpeg" },
                { text: "Find Jon Snow – 'Family is all that matters.'", next: "north1", background: "images/aryajon.jpeg" },
                { text: "Escape to Essos – 'The past is gone. I must survive.'", next: "essos1", background: "images/essos.jpg" }
            ]
        },

        // Revenge Path (5-6 steps deep)
revenge1: {
    text: "Arya sharpens Needle, fueled by vengeance. She must choose her first target.",
    background: "images/needle.jpg",
    choices: [
        { text: "Target Joffrey", next: "revenge2", background: "images/joffery.jpg" },
        { text: "Target Cersei Lannister", next: "revenge3", background: "images/cersi.jpg" },
        { text: "Target The Freys", next: "revenge4", background: "images/freys.jpg" },
        { text: "Find The Faceless Men", next: "braavos1", background: "images/faceless.jpg" }
    ]
},

// Target Joffrey Path
revenge2: {
    text: "Arya hunts Joffrey but is gravely injured. She must decide her next move.",
    background: "images/injured.jpg",
    choices: [
        { text: "Retreat and recover in secret", next: "revenge2a", background: "images/recovery.jpg" },
        { text: "Push forward despite the pain", next: "revenge2b", background: "images/push.jpeg" }
    ]
},
revenge2a: {
    text: "Arya hides in a brothel’s basement, but time is running out. She must act.",
    background: "images/hiding.jpg",
    choices: [
        { text: "Seek help from a healer", next: "deathScene", background: "images/healer.jpg" },
        { text: "Wait for a better opportunity to strike", next: "deathScene", background: "images/strike.jpg" }
    ]
},

deathScene: {
    text: "Arya got killed by Joffery", // No text, only background image
    background: "images/dead.jpg",
    choices: [
        
    ]
}

,
revenge2b: {
    text: "Arya fights on but collapses from blood loss. She wakes up as a prisoner.",
    background: "images/fights.jpg",
    choices: [
        { text: "Attempt to escape", next: "deathScene", background: "images/prisoner.jpg" },
        { text: "Convince a guard to help", next: "deathScene", background: "images/hound.jpg" }
    ]
},
deathScene: {
    text: "Arya got killed while trying to escape", // No text, only background image
    background: "images/dead.jpg",
    choices: [
        
    ]
},
// Target Cersei Path
revenge3: {
    text: "Arya infiltrates the Red Keep to kill Cersei.",
    background: "images/redkeep.jpg",
    choices: [
        { text: "Disguise as a servant", next: "revenge3a", background: "images/servant.jpg" },
        { text: "Sneak through the dungeons", next: "revenge3b", background: "images/dungeons.jpg" }
    ]
},
revenge3a: {
    text: "Arya blends in as a servant and gets close to Cersei. Should she strike now?",
    background: "images/cersi.jpg",
    choices: [
        { text: "Strike immediately", next: "revenge4", background: "images/killl.jpg" },
        { text: "Wait for a more private moment", next: "revenge4", background: "images/waitt.jpg" }
    ]
},


// Target The Freys Path
revenge4: {
    text: "Arya executes the Freys in a feast of vengeance.",
    background: "images/freyfeast.jpg",
    choices: [
        { text: "Poison their wine", next: "revenge4a", background: "images/poison.jpeg" },
        { text: "Slit their throats one by one", next: "revenge4b", background: "images/slitthroat.jpg" }
    ]
},
revenge4a: {
    text: "Arya poisons their wine. Some start collapsing, but a few suspect foul play.",
    background: "images/poisoned.jpg",
    choices: [
        { text: "Escape before being caught", next: "revenge4c", background: "images/escape.jpg" },
        { text: "Stay to finish the job", next: "revenge4d", background: "images/finishjob.jpg" }
    ]
},
revenge4b: {
    text: "Arya slits their throats one by one, leaving no Frey alive to tell the tale. The halls of the Twins run red with vengeance.",
    background: "images/vengence.jpg",
    choices: [
        { text: "Witness your victory", next: "revengeEnding"}
    ]
},

revengeEnding: {
   
    background: "images/end.jpg",
    choices: [
        { text: "Restart the journey", next: "start" }
    ]
}
,



        // Braavos Path (5-6 steps deep)
        braavos1: {
            text: "Arya arrives in Braavos and finds the House of Black and White. What will she do?",
            background: "images/houseofblackandwhite.jpg",
            choices: [
                { text: "Train as a Faceless Assassin", next: "braavos2", background: "images/training.jpg" },
                { text: "Abandon the training and return home", next: "north1", background: "images/stoptraining.jpg" },
                { text: "Hunt her own targets outside the House", next: "revenge1", background: "images/own.jpg" },
                { text: "Sail further into the unknown", next: "essos1", background: "images/sailing.jpg" }
            ]
        },

        // Northern Path
north1: {
    text: "Arya seeks Jon Snow. The road is long and dangerous.",
    background: "images/travelling.jpg",
    choices: [
        { text: "Travel through the Riverlands", next: "northDeath1", background: "images/riverland.jpeg" },
        { text: "Travel through the Vale", next: "northDeath2", background: "images/vale.jpg" },
        { text: "Head directly North through the icy tundra", next: "north5", background: "images/north.jpeg" },
        { text: "Join a group of mercenaries for protection", next: "essos1", background: "images/mercinaries.jpg" }
    ]
},

// Death in the Riverlands
northDeath1: {
    text: "Arya is ambushed by bandits in the Riverlands. Outnumbered and alone, she meets a tragic end.",
    background: "images/dead.jpg",
   
},

// Death in the Vale
northDeath2: {
    text: "Arya gets lost in the treacherous mountain passes of the Vale. She succumbs to the cold and exhaustion.",
    background: "images/dead.jpg",
   
},


// White Walker Encounter in the Icy Tundra
north5: {
    text: "Arya trudges through the icy tundra, but something stirs in the blizzard... A White Walker appears!",
    background: "images/whitewalker.jpg",
    choices: [
        { text: "Fight the White Walker", next: "north6", background: "images/fightwhitewalker.jpg" },
        { text: "Run for safety", next: "north7", background: "images/rundfrmww.jpg" }
    ]
},

// Fighting the White Walker
north6: {
    text: "Arya draws Valarian steel dagger and fights bravely, she defeats the undead.",
    background: "images/fights.jpg",
    choices: []
},

// Escaping from the White Walker
north7: {
    text: "Arya barely escapes and reaches a Night's Watch outpost. She is safe... for now.",
    background: "images/ww.jpg",
    choices: [
        { text: "Continue towards Jon Snow", next: "north8", background: "images/castleblack.jpg" }
    ]
},

// Reaching Jon Snow
north8: {
    text: "Arya finally reaches Jon Snow at Castle Black. She is home.",
    background: "images/reuinte.jpg",
    choices: [
        { text: "Celebrate your reunion", next: "northWin", background: "images/reuinion.jpg" }
    ]
},

// Victory Ending
northWin: {
    text: "Arya is reunited with her brother. The North remembers, and she has found her family again.",
    background: "images/reuinion.jpg",
    choices: []
}
,

        // Essos Path (5-6 steps deep)
        essos1: {
            text: "Arya leaves Westeros behind. What will she do in Essos?",
            background: "images/essosw.jpeg",
            choices: [
                { text: "Join with the Hound", next: "essos2", background: "images/hound.jpg" },
                { text: "Search for ancient knowledge", next: "essos3", background: "images/knowledge.jpg" },
                { text: "Live a simple life, away from bloodshed", next: "essos4", background: "images/life.jpg" },
                { text: "Return to Westeros one day", next: "start", background: "images/wallpapers.jpg" }
            ]
        },

        // Endings
        revengeEnd: { text: "Arya fulfills her vengeance but loses herself in the process. THE END.", background: "images/PLACEHOLDER22.jpg" },
        braavosEnd: { text: "Arya becomes a true Faceless Assassin. THE END.", background: "images/PLACEHOLDER23.jpg" },
        northEnd: { text: "Arya reunites with Jon and fights for the North. THE END.", background: "images/PLACEHOLDER24.jpg" },
        essosEnd: { text: "Arya disappears into the unknown. THE END.", background: "images/PLACEHOLDER25.jpg" }
    };

    function updateStory(storyKey) {
        console.log("Updating story:", storyKey);
        const scene = story[storyKey];

        if (!scene) {
            console.error("Invalid story key:", storyKey);
            return;
        }



        


        

        // Update background image (replace PLACEHOLDER later)
        document.body.style.background = `url('${scene.background}') no-repeat center center/cover`;

        storyText.textContent = scene.text;
        choicesContainer.innerHTML = "";

        if (scene.choices) {
            scene.choices.forEach(choice => {
                const choiceButton = document.createElement("button");
                choiceButton.classList.add("choice-button");
                choiceButton.onclick = () => {
                    playSwordSound(); // Play sword sound when clicking an option
                    updateStory(choice.next);
                };
    

                // Add choice image
                if (choice.background) {
                    const img = document.createElement("img");
                    img.src = choice.background;
                    img.alt = choice.text;
                    img.classList.add("choice-image");
                    choiceButton.appendChild(img);
                }

                // Add choice text
                const textElement = document.createElement("span");
                textElement.textContent = choice.text;
                textElement.classList.add("choice-text");
                choiceButton.appendChild(textElement);

                choicesContainer.appendChild(choiceButton);
            });
        } else {
            const restartButton = document.createElement("button");
            restartButton.textContent = "Restart Game";
            restartButton.classList.add("choice-button");
            restartButton.onclick = () => {
                document.body.style.background = "images/wallpapers.jpg"; // Start page wallpaper
                gameContainer.classList.add("hidden");
                startScreen.classList.remove("hidden");
            };
            choicesContainer.appendChild(restartButton);
        }
    }

    startButton.addEventListener("click", function () {
        console.log("Start button clicked!");
        startScreen.classList.add("hidden");
        gameContainer.classList.remove("hidden");
        startGame(); // Call the function to play music
        updateStory("start");
    });
    
});
document.getElementById("exitButton").onclick = function() {
    window.location.href = "index.html"; // Redirect to index page
};

