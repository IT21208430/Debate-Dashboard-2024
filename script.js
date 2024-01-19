let refreshCount25 = localStorage.getItem("refreshCount25") || 3;
if (refreshCount25 >= 13) {
    // Reset local storage count to zero
    localStorage.setItem("refreshCount25",3);
    refreshCount25 = 3;
} else {
    refreshCount25++;
}
localStorage.setItem("refreshCount25", refreshCount25);
console.log(`Page refreshed ${refreshCount25} times.`);

let currentRound = 0;
let listName = "list" + refreshCount25;
const matchTitles = ["Round 1","Round 2","Round 3"]
const title = document.getElementById("title")
const matchDivs = document.getElementById("matchDivs");

const listObjects = {
    list3: ["Group 08", "Group 12", "Group 18", "Group 02", "Group 06", "Group 04", "Group 20", "Group 17", "Group 05", "Group 01", "Group 16", "Group 11", "Group 15", "Group 13", "Group 03", "Group 07", "Group 10", "Group 19", "Group 09", "Group 14"],
    list4: ["Group 04", "Group 06", "Group 09", "Group 13", "Group 01", "Group 14", "Group 12", "Group 19", "Group 16", "Group 20", "Group 07", "Group 05", "Group 11", "Group 18", "Group 15", "Group 08", "Group 02", "Group 03", "Group 17", "Group 10"],
    list5: ["Group 13", "Group 11", "Group 17", "Group 02", "Group 16", "Group 15", "Group 14", "Group 03", "Group 10", "Group 06", "Group 08", "Group 19", "Group 12", "Group 09", "Group 18", "Group 04", "Group 01", "Group 05", "Group 07", "Group 20"],
    list6: ["Group 10", "Group 14", "Group 01", "Group 04", "Group 13", "Group 02", "Group 07", "Group 19", "Group 05", "Group 17", "Group 18", "Group 08", "Group 06", "Group 12", "Group 11", "Group 20", "Group 09", "Group 16", "Group 03", "Group 15"],
    list7: ["Group 08", "Group 05", "Group 10", "Group 02", "Group 01", "Group 11", "Group 07", "Group 06", "Group 13", "Group 19", "Group 15", "Group 12", "Group 04", "Group 03", "Group 18", "Group 09", "Group 14", "Group 17", "Group 16", "Group 20"],
    list8: ["Group 01", "Group 14", "Group 03", "Group 09", "Group 16", "Group 18", "Group 19", "Group 07", "Group 12", "Group 06", "Group 08", "Group 11", "Group 13", "Group 04", "Group 10", "Group 15", "Group 02", "Group 20", "Group 05", "Group 17"],
    list9: ["Group 08", "Group 20", "Group 05", "Group 10", "Group 04", "Group 11", "Group 16", "Group 17", "Group 07", "Group 12", "Group 03", "Group 02", "Group 09", "Group 19", "Group 14", "Group 06", "Group 15", "Group 01", "Group 18", "Group 13"],
    list10:["Group 10", "Group 01", "Group 16", "Group 05", "Group 02", "Group 08", "Group 15", "Group 09", "Group 04", "Group 18", "Group 06", "Group 14", "Group 03", "Group 07", "Group 12", "Group 11", "Group 20", "Group 17", "Group 13", "Group 19"],
    list11:["Group 14", "Group 19", "Group 20", "Group 05", "Group 17", "Group 12", "Group 07", "Group 02", "Group 18", "Group 01", "Group 03", "Group 13", "Group 09", "Group 10", "Group 06", "Group 04", "Group 08", "Group 11", "Group 16", "Group 15"],
    list12:["Group 07", "Group 06", "Group 19", "Group 11", "Group 16", "Group 10", "Group 15", "Group 03", "Group 13", "Group 08", "Group 20", "Group 17", "Group 12", "Group 05", "Group 04", "Group 14", "Group 09", "Group 02", "Group 01", "Group 18"],
    list13:["Group 12", "Group 07", "Group 01", "Group 02", "Group 10", "Group 16", "Group 13", "Group 04", "Group 09", "Group 14", "Group 11", "Group 06", "Group 19", "Group 05", "Group 17", "Group 03", "Group 08", "Group 15", "Group 20", "Group 18"],
    list14:["Group 09", "Group 15", "Group 07", "Group 04", "Group 17", "Group 20", "Group 19", "Group 08", "Group 02", "Group 01", "Group 05", "Group 18", "Group 11", "Group 16", "Group 10", "Group 13", "Group 14", "Group 03", "Group 12", "Group 06"],
    list15:["Group 15", "Group 09", "Group 16", "Group 06", "Group 08", "Group 07", "Group 19", "Group 18", "Group 13", "Group 01", "Group 12", "Group 10", "Group 20", "Group 02", "Group 03", "Group 14", "Group 11", "Group 05", "Group 17", "Group 04"]
}


const startMatch = () => {
    currentRound++;
    if (currentRound >= 4){
        title.innerHTML = "ALL MATCHES FINISHED";
        matchDivs.innerHTML = ""
        return;
    }
    title.innerHTML = matchTitles[currentRound-1]
    matchDivs.innerHTML = ""
    
    listName = "list" + refreshCount25++ 
    console.log(listName)

    for(let i = 0;i<listObjects[listName].length;i+=2){
        matchDivs.innerHTML += `<div>${listObjects[listName][i]} VS ${listObjects[listName][i + 1]}</div>`;
        // i--;
    }
}


const button = document.getElementById("button").addEventListener("click",startMatch)