console.log("Script loaded!"); // Debugging check

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const gameContainer = document.getElementById("game-container");
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices");

    // Story Data (Placeholders for background images)
    const story = {
        start: {
            text: "Winterfell is lost. Arya Stark, the last true heir of House Stark, is on the run after the Red Wedding. Alone, with only Needle by her side, she must decide her next move. What will she do?",
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
                { text: "Target Joffery", next: "revenge2", background: "images/joffery.jpg" },
                { text: "Target Cersei Lannister", next: "revenge3", background: "images/cersi.jpg" },
                { text: "Target The Freys", next: "revenge4", background: "images/freys.jpg" },
                { text: "Find The Faceless Men", next: "braavos1", background: "images/faceless.jpg" }
            ]
        },
        revenge2: { text: "Arya hunts Joffery but is gravely injured. She must decide her next move.", background: "images/PLACEHOLDER9.jpg", choices: [ /* More choices */ ] },
        revenge3: { text: "Arya infiltrates the Red Keep to kill Cersei.", background: "images/PLACEHOLDER10.jpg", choices: [ /* More choices */ ] },
        revenge4: { text: "Arya executes the Freys in a feast of vengeance.", background: "images/PLACEHOLDER11.jpg", choices: [ /* More choices */ ] },

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

        // Northern Path (5-6 steps deep)
        north1: {
            text: "Arya seeks Jon Snow. The road is long and dangerous.",
            background: "images/travelling.jpg",
            choices: [
                { text: "Travel through the Riverlands", next: "north2", background: "images/riverland.jpeg" },
                { text: "Travel through the Vale", next: "north3", background: "images/vale.jpg" },
                { text: "Head directly North through the icy tundra", next: "north4", background: "images/north.jpeg" },
                { text: "Join a group of mercenaries for protection", next: "essos1", background: "images/mercinaries.jpg" }
            ]
        },

        // Essos Path (5-6 steps deep)
        essos1: {
            text: "Arya leaves Westeros behind. What will she do in Essos?",
            background: "images/PLACEHOLDER18.jpg",
            choices: [
                { text: "Join with the Hound", next: "essos2", background: "images/hound.jpg" },
                { text: "Search for ancient knowledge", next: "essos3", background: "images/PLACEHOLDER20.jpg" },
                { text: "Live a simple life, away from bloodshed", next: "essos4", background: "images/PLACEHOLDER21.jpg" },
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
                choiceButton.onclick = () => updateStory(choice.next);

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
        updateStory("start");
    });
});
