function loadSpotifyData() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer BQBOvq7YAV1y4T7Xr0BptiNA8GuFDllwlDVntr2NRrJZgUdAZgwbRACgcVRB15h8XdzYokaDKzWGt5AXnPeh503_1wHYsuy7oBLa_SjPzF2u0rSyAqhZR593_K_GQl5qn7DR48XB8KgJDAUhuva3gGR_gkd0veg9KmF73-mFUylPGUBH0R-YjSCsBMw");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.spotify.com/v1/me/player/recently-played", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

async function getToken() {

    const clientId = "f4246ce9fbb44fd9a47a2386f25d7224";
    const clientSecret = "06712f0cc2f547d594393d4a36542393";

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic ZjQyNDZjZTlmYmI0NGZkOWE0N2EyMzg2ZjI1ZDcyMjQ6MDY3MTJmMGNjMmY1NDdkNTk0MzkzZDRhMzY1NDIzOTM=");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("scope", "user-read-recently-played");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      

    let result = await fetch('https://accounts.spotify.com/api/token', requestOptions)
    const data = await result.json();
    console.log("DATA: " + data.access_token);
    return data.access_token;
}

async function getRecentlyPlayed(token) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer BQCYFCPwF7QgwGz2nKJbmh5jzbTaPchSqWrabJvegLkJAHJfogwosm_Ahx3MYWWizvYOukDmXX57oWMYNujv7VABIfvwT6OuAcmVp--R09M3337PPUlGCXgwRBy1gKL3CRul916C7BFdSJ6VfRwbU9w0tg1ird5_xC90TKzTB0B4mFkUnl1Zpf9di_Q");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const result = await fetch("https://api.spotify.com/v1/me/player/recently-played", requestOptions)
    //const data = result.json().items[0].track;
    console.log("DATA: " + result.items);
    // return {
    //     trackName: data.name,
    //     artist: data.artists[0].name,
    //     coverURL: data.album.images[0].url,
    // }
}

function addProjects() {

    const projects = [
        {
            title: "bim - Workouts with personal trainers",
            subtitle: "End of studies internship — Development of an App-Store featured iOS/watchOS App.",
            date: "Febuary 2022 - August 2022",
            images: ["project_bim.PNG", "project_bim_watch.png"]
        },
        {
            title: "Parkiz",
            subtitle: "Allowing users to see the number of parking spots near them in real-time.",
            date: "2020-2021",
            text: "Available in 12 cities in France",
            images: ["project_parkiz1.jpeg", "project_parkiz2.PNG", "project_parkiz3.jpeg"]
        },
        {
            title: "Knee testing",
            subtitle: "An app developed for the French Association of Arthroscopy.",
            date: "July-December 2021",
            text: "Allowing doctors to quickly assess a patient's knee with a series of questions.",
            images: ["project_knee.jpeg"]
        },
        {
            title: "AMO",
            subtitle: "A short-circuit sale app.",
            date: "October 2021 - January 2022",
            images: ["project_amo.PNG"]
        },
        {
            title: "Students' Union App",
            date: "September 2019 - December 2020",
            images: ["project_union.PNG"]
        },
        {
            title: "Campaign App",
            date: "December 2018 - April 2019",
            images: ["project_campaign.PNG"]
        },
    ]


    for(let i = 0; i < projects.length; i++) {
        var section = document.createElement("section");
        section.setAttribute("id", "projects");
    
        var title = document.createElement("h1");
        title.setAttribute("class", "project_title");
        title.textContent = projects[i].title;
    
        section.appendChild(title);

        if (projects[i].hasOwnProperty("subtitle")) {
            var subtitle = document.createElement("h2")
            subtitle.setAttribute("class", "project_subtitle")
            subtitle.textContent = projects[i].subtitle
            section.appendChild(subtitle);
        }
        var dateLabel = document.createElement("h2")
        dateLabel.setAttribute("class", "project_date")
        dateLabel.textContent = projects[i].date
        section.appendChild(dateLabel);

        if (projects[i].hasOwnProperty("images")) {
            var imagesDiv = document.createElement("div");
            imagesDiv.setAttribute("class", "project_images_div");
            for(let j=0; j < projects[i].images.length; j++) {
                let image = document.createElement("img");
                image.setAttribute("class", "project_image")
                image.setAttribute("src", "projects_images/" + projects[i].images[j])
                imagesDiv.appendChild(image);
            }
            section.appendChild(imagesDiv)
        }
    
        var projectsDiv = document.getElementById("projects_section");
        projectsDiv.appendChild(section);
    }
}

window.onload = async function() {
    addProjects();
}