# Haider Malik's Co-op ePortfolio

A simple four-page website built with HTML, CSS, and a small video-status script. No dependencies or build step are required.

## Add Your Files

- `assets/coopaboutmevideo.mp4`: your updated About Me video. Cover your new skills and experience since COOP 2100. The Home page plays this file using native video controls.
- `assets/resume.pdf`: your current resume. The Resume page embeds this file and provides open and download links. Remove your home address and any sensitive personal information before uploading.

The About Me video is included as a browser-compatible H.264/AAC MP4. The original MOV is preserved locally and excluded from Git because of its size. The Resume page expects the PDF filename listed above.

## Preview

Open `index.html` directly in your browser. To test through HTTP, run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Deploy to Vercel

Push this repository to GitHub and import it in Vercel. Choose **Other** as the framework preset, leave the build command empty, and set the output directory to `.`. No package installation is needed.

## Content to Confirm Before Submission

Review the drafted career goal, project contribution statements, and qualitative outcomes to ensure they accurately reflect your work. No performance metrics, certifications, or confidential co-op material have been invented or included. Check the original project descriptions for spelling if desired; they are preserved from your portfolio.

## Asset Source

The photo and three project screenshots were copied from https://github.com/HaiderMalikk/Portfolio-Website:

- `src/assets/me.jpg` -> `assets/me.jpg`
- `src/assets/pg1.png` -> `assets/reddish-trends.png`
- `src/assets/pg5.png` -> `assets/reddit-jams.png`
- `src/assets/pg2.png` -> `assets/mood-atlas.png`

Project order, descriptions, technologies, and links come from `src/components/Works.jsx`. The LinkedIn link comes from `src/components/Links.jsx`.