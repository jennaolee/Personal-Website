var piggy_bank_info = [
    "PIGGY BANK: ESCAPE FROM HAMMER",
    "images/piggy-bank-game.PNG",
    "Java",
    "This was a group project for CMPT 276: Introduction to Software Engineering. I worked in a group of 4 and collaborated using GitLab to create a 2D maze game. We used Maven for build automation and JUnit to test our game.",
    "N/A"
];

var pig_tracker_info = [
    "PIG TRACKER",
    "images/pig-tracker.PNG",
    "Angular - TypeScript, HTML, CSS/Bootstrap",
    "This was my final project for CMPT 272: Web I - Client-side Development. This is an Angular application that allows users to add, edit, delete, and view various pig reports. Using Leaflet and MapBox, I created an interactive map that displays the locations of the pigs. I explored the use of services, pipes, and routing to implement the navigation and functionality of the application.",
    "https://github.com/jennaolee/Pig-Tracker"
];

var pig_inventory_info = [
    "PIG INVENTORY",
    "images/pig-inventory.PNG",
    "TypeScript, HTML, CSS/Bootstrap",
    "This was an assignment for CMPT 272: Web I - Client-side Development. Users can add, delete, and view pigs in the inventory.",
    "https://jennaolee.github.io/Pig-Inventory/"
];

var histogram_generator_info = [
    "HISTOGRAM GENERATOR",
    "images/histogram-generator.PNG",
    "JavaScript, HTML, CSS",
    "This was an assignment for CMPT 272: Web I - Client-side Development. Users can edit the grade boundaries and upload a .csv file with student names and grades. Given the input, the application will display the highest, lowest, mean, and median grade, as well as a histogram of the grade distribution.",
    "https://jennaolee.github.io/Histogram-Generator/"
];

var website_project_info = [
    "PERSONAL WEBSITE",
    "images/website-project.png",
    "JavaScript, HTML, CSS",
    "This is an ongoing personal project to share my programming projects and portfolio! I plan on growing this project as I develop my web development skills.",
    "https://jennaolee.github.io/Personal-Website/"
];

var art_links = [

]


function openForm(id) {
    let title = (document.getElementById("title"));
    let source = document.getElementById("modal-img");
    let built_with = (document.getElementById("built-with"));
    let summary = (document.getElementById("summary"));
    let link = (document.getElementById("link"));

    if (id == "piggy-bank-game") {
        title.innerHTML = piggy_bank_info[0];
        source.src = piggy_bank_info[1];
        built_with.innerHTML = piggy_bank_info[2];
        summary.innerHTML = piggy_bank_info[3];
        link.innerHTML = piggy_bank_info[4];
        link.href = "";

    } else if (id == "pig-tracker") {
        title.innerHTML = pig_tracker_info[0];
        source.src = pig_tracker_info[1];
        built_with.innerHTML = pig_tracker_info[2];
        summary.innerHTML = pig_tracker_info[3];
        link.innerHTML = pig_tracker_info[4];
        link.href = pig_tracker_info[4]

    } else if (id == "pig-inventory") {
        title.innerHTML = pig_inventory_info[0];
        source.src = pig_inventory_info[1];
        built_with.innerHTML = pig_inventory_info[2];
        summary.innerHTML = pig_inventory_info[3];
        link.innerHTML = pig_inventory_info[4];
        link.href = pig_inventory_info[4]

    } else if (id == "histogram-generator") {
        title.innerHTML = histogram_generator_info[0];
        source.src = histogram_generator_info[1];
        built_with.innerHTML = histogram_generator_info[2];
        summary.innerHTML = histogram_generator_info[3];
        link.innerHTML = histogram_generator_info[4];
        link.href = histogram_generator_info[4]

    } else if (id == "website-project") {
        title.innerHTML = website_project_info[0];
        source.src = website_project_info[1];
        built_with.innerHTML = website_project_info[2];
        summary.innerHTML = website_project_info[3];
        link.innerHTML = website_project_info[4];
        link.href = website_project_info[4]
    } 
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function openArtModal(id) {

    let title = (document.getElementById("art-title"));
    let source = document.getElementById("art-modal-img");
    

    if (id == "flurry") {
        title.innerHTML = "FLURRY";
        source.src = "images/christmas-market.png";
       

    } else if (id == "sword") {
        title.innerHTML = "SUNSET SWORD";
        source.src = "images/sword.png";
       

    } else if (id == "who") {
        title.innerHTML = "WHO"
        source.src = "images/unknown.jpg";
       

    } else if (id == "imd") {
        title.innerHTML = "IMD";
        source.src = "images/interactive-multimedia-design.png";
        

    } else if (id == "waves") {
        title.innerHTML = "WAVES";
        source.src = "images/koi.JPG";
        
    } else if (id == "lillies") {
        title.innerHTML = "LILLIES";
        source.src = "images/ponder.png";
       
    } else if (id == "lighthouse") {
        title.innerHTML = "LIGHTHOUSE";
        source.src = "images/lighthouse.jpg";
       
    } 
    document.getElementById("artModal").style.display = "block";

}

function closeArtModal() {
    document.getElementById("artModal").style.display = "none";
}
