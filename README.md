# Abhiram Javvadi — Portfolio

A responsive dark-blue and violet portfolio with an animated orbital hero, three illustrated project showcases, education and skills, 18 searchable credential entries, and a downloadable final resume. Static HTML, CSS, and JavaScript; no build step required.

Live site: https://abhiram54369.github.io/portfolio/

## Run locally

From this repository:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080.

## Files

- `index.html`: profile, projects, education, skills, resume, and contact links
- `styles.css`: responsive dark-blue theme and project animations
- `app.js`: credential search/filtering, project dialogs, visibility handling, and particle animation
- `assets/lucide.min.js`: bundled icons; license at `assets/lucide-LICENSE.txt`
- `certificates/`: original credential files
- `resume/Abhiram-Javvadi-Resume.pdf`: final one-page internship resume

## Content and behavior

The EV signal, fitness bars, and audio waveform are illustrative project visuals. They do not show live station data or perform audio detection. Project animations pause outside the viewport, and reduced-motion preferences are respected.

The HCL DevOps entry was supplied by the user without a certificate file, so it has no download link. The other 17 entries link to their original PDFs. The IBM boot camp and learning-plan completion are separate supplied documents on the same subject and are labeled accordingly. Course completions are not presented as professional certifications.

Education and training reflect the supplied details: C. R. Rao AIMSCS, third-year B.Tech CSE (AI & ML), and a completed AI/ML track at IIIT Hyderabad / iHub, February–September. No year was supplied for the track.

## GitHub Pages

The working site publishes from `main` and `/(root)` with **Settings > Pages > Deploy from a branch**. The previous custom Pages workflow is disabled; leave it disabled to avoid conflicting deployment paths. Future pushes publish automatically through branch-based Pages.

All assets and downloads use relative paths to support the `/portfolio/` URL.

## Standalone ZIP

Extract the deployment ZIP and upload its contents directly into a repository root, including `assets/`, `certificates/`, `resume/`, and `.nojekyll`. For Netlify Drop, upload the extracted folder containing `index.html`. No application server is needed for hosting.
