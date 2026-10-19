# Abhiram Javvadi — Portfolio

Responsive static portfolio with a procedural particle sphere, three project showcases, project detail dialogs, and 18 credential entries (17 original certificate PDFs plus the user-provided HCL DevOps credential) with category filtering and search, and a downloadable one-page resume PDF. No build step or framework dependencies.

## Run locally

From this directory:

```sh
python3 -m http.server 8080 --directory public
```

Open http://localhost:8080.

## Edit

- `public/index.html`: profile, projects, links, and skills
- `public/styles.css`: design and responsive layout
- `public/app.js`: certificate metadata, filters, project dialogs, and canvas animation
- `public/certificates/`: original credential files

Typography uses Google Fonts with system fallbacks. Everything else works without third-party requests. Contact links point to the provided GitHub and LinkedIn profiles and email address (abhiramjavvadi149@gmail.com). No invented degree or employment history is included. Education lists C. R. Rao AIMSCS and a completed AI/ML track at IIIT Hyderabad · iHub (February–September), as provided by the user. No year was supplied for the track. EV station visuals are illustrative and explicitly labeled. Course completions are not presented as professional certifications.

The IBM boot camp participation and IBM learning-plan completion are separate supplied documents for the same subject and are labeled accordingly.

## Resume and new entries

- `public/resume/Abhiram-Javvadi-Resume.pdf` is the final one-page internship resume, with selectable text, clickable contact links, and clearly separated education, skills, projects, experience, and credentials. It uses the supplied portfolio details; `build_resume.py` can regenerate it with ReportLab.
- The HCL DevOps entry has no attached certificate file; it is shown without a download link.
- Deepfake Audio Detection is described as a hackathon project. No model, accuracy, dates, or hackathon name have been invented.

## Deploy with Netlify Drop

1. Sign in to your Netlify account, then open https://app.netlify.com/drop.
2. Drag the `public` folder into the upload area. It contains `index.html`, `styles.css`, `app.js`, `favicon.svg`, `certificates/`, and `resume/`.
3. Wait for deployment and open the URL Netlify provides.
4. For the standalone `abhiram-portfolio.zip`, extract it and upload the extracted folder that directly contains `index.html` instead. The ZIP has the contents of `public` at its root.
5. To update an existing site, drag the revised folder into the dropzone on that site's Deploys page.

No build command or server is required. To share broadly, ensure the Netlify project is publicly accessible. Official instructions: https://docs.netlify.com/deploy/create-deploys/#drag-and-drop.

## Approved design

The approved redesign is the main homepage. Project cards retain their original markup and styling. The former `/demo/` URL redirects to the homepage. The final resume and original certificate files are included.

## Deploy with GitHub Pages

1. Create a public repository named `portfolio`.
2. Upload the extracted deployment ZIP contents directly into the repository root, including `certificates/`, `resume/`, and `.nojekyll`. Do not upload only the ZIP itself.
3. Commit to `main`.
4. In Settings > Pages, choose Deploy from a branch, `main`, and `/(root)`, then Save.
5. Use the website URL shown in the Pages settings after deployment. For the account `abhiram54369` and repository `portfolio`, the expected URL is `https://abhiram54369.github.io/portfolio/`.

All asset and download paths are relative to support GitHub Pages repository subpaths. The local preview is not a public deployment.
