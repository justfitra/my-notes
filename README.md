# Notes App With JavaScript

## This Application is one of my project when i learning JavaScript

I think dialy notes is important, that's why i create this project to record my dialy journal or note, and who knows, it might also be useful for you to write your daily journal. Sometimes people underestimate my notes app, but I just want to remind you that taking notes is important, and you can also participate in this project. For the time being, this application only uses Vanilla JavaScript and stores data in Excel. This application does not have login authentication yet, so it cannot accommodate users.

## How to Installation

- clone this repo https://github.com/justfitra/my-notes.git
- create new sheet in google sheet
- make new sheet -> share to anyone -> copy your sheet link
- login to https://sheetbest.com/
- paste your sheet link -> create new api
- copy your api sheet
- add file env.js
- add this code export const URL = `paste_your_api_url`;

## Structure File In this App

<pre>
📦my-notes
 ┣ 📂api
 ┃ ┣ 📜deleteNote.js
 ┃ ┣ 📜getNote.js
 ┃ ┣ 📜postNote.js
 ┃ ┗ 📜updateNote.js
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜style.css
 ┃ ┗ 📂image
 ┣ 📂components
 ┃ ┣ 📜edit-modal.js
 ┃ ┣ 📜header.js
 ┃ ┣ 📜modal.js
 ┃ ┣ 📜show-modal.js
 ┃ ┗ 📜sidebar.js
 ┣ 📂script
 ┃ ┣ 📜modal.js
 ┃ ┣ 📜notes.js
 ┃ ┗ 📜script.js
 ┣ 📜.gitignore
 ┣ 📜env.js
 ┣ 📜index.html
 ┗ 📜README.md
</pre>
