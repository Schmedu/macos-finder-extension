// Name: Get File Name (Finder)
// Description: Return the filename of the selected file
// Input: 
// Output: 
// Tags: 
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://schmedu.com
// Shortcut: cmd shift option control n

import "@johnlindquist/kit";

const { localizedName: currentApp } = await getActiveAppInfo();

if (currentApp !== "Finder") {
    exit();
}

let file = await getSelectedFile();

// get filename
let filename = file.split("/").pop();

await copy(filename);

notify({ title: "Copied File Name", body: filename });