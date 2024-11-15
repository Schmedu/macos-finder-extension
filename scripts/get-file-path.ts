// Name: Get File Path (Finder)
// Description: Return the path of the selected file
// Input: 
// Output: 
// Tags: 
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://schmedu.com
// Shortcut: cmd shift option control p

import "@johnlindquist/kit";

const { localizedName: currentApp } = await getActiveAppInfo();

if (currentApp !== "Finder") {
    exit();
}

let currentWindow = await applescript(`
tell application "System Events"
    get name of window 1
end tell
`);

let file = await getSelectedFile();

await copy(file);

notify({ title: "Copied File Path", body: file });  