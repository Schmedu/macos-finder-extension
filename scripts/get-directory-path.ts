// Name: Get Directory Path (Finder)
// Description: Return the directory path of the selected file
// Input: 
// Output: 
// Tags: 
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://schmedu.com
// Shortcut: cmd shift option control d

import "@johnlindquist/kit";

const { localizedName: currentApp } = await getActiveAppInfo();

if (currentApp !== "Finder") {
    exit();
}

let file = await getSelectedFile();

// get filename
let directory = file.split("/").slice(0, -1).join("/");

await copy(directory);

notify({ title: "Copied Directory Path", body: directory });