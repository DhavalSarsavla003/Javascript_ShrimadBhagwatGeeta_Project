📖 Shrimad Bhagavad Gita – Chapters & Shlok Viewer

A simple web project built using HTML, CSS, Bootstrap, and JavaScript, which dynamically fetches and displays all chapters of the Shrimad Bhagavad Gita along with their verses.
All data is fetched from the Vedic Scriptures API.

🚀 Project Overview

This project displays all 18 chapters of the Bhagavad Gita.
When a user clicks on a chapter card, the app fetches and displays:

Chapter Name

Total Verses

Every verse (Slok)

Hindi text

English transliteration

A clean UI is created using Bootstrap and custom CSS.

🛠️ Key Features
1. Dynamic Chapter Fetching

The app fetches chapter list from:
https://vedicscriptures.github.io/chapters/
Each chapter is displayed as a card with chapter number and name.

2. Verse Viewer Popup (Slok Model)

When a chapter card is clicked:

The main page hides

Verse viewer section becomes visible

All verses of that chapter are fetched one-by-one

Each verse displays:

Verse number

Hindi slok

English transliteration

3. API Usage

Each verse is fetched using the pattern:
https://vedicscriptures.github.io/slok/{chapter_id}/{verse_number}/

Example:
https://vedicscriptures.github.io/slok/1/1/

4. Responsive UI

Built using Bootstrap 5

Attractive hover animations

Dark theme design with golden highlights

📸 Picture Of Shrimad Bhagwat Geeta UI

![Screenshot_19-11-2025_134925_127 0 0 1](https://github.com/user-attachments/assets/3149f11e-8d8c-42cb-a6a3-fac5b53b16a2)
![Screenshot_19-11-2025_134949_127 0 0 1](https://github.com/user-attachments/assets/de0027a1-0790-4d4b-8362-ad1e0da31367)
