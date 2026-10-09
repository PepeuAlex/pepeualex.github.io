# Pedro Alexandre — Engineering Portfolio

Static portfolio ready for GitHub Pages, Netlify or Vercel.

## Run locally

Open `index.html` directly, or run a local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

1. Create a repository.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save and wait for the public URL.

## Content notes

- The eight Product Lab applications are clearly labeled as portfolio concepts using simulated data.
- Professional work is described without confidential company screenshots or data.
- Resumes are stored under `assets/resumes/`.
- Individual Stitch-generated screens are available under `demos/`.
- The site supports English/Portuguese, light/dark mode and recruiter-focused filtering.

## Updating links

Edit the contact links near the bottom of `index.html` when dedicated GitHub repositories or live demos become available.

## October 2026 content refresh

- The 11 selected professional project cards cover multiple engagements and independent engineering initiatives, without client attribution. Do not imply all were produced for Primetals.
- Primetals is the only employer listed in the public work history.
- The separate eight-project Product Lab consists of frontend concepts with simulated data, not enterprise deployments.
- Existing DOCX downloads are older role-specific examples; ask for an updated CV before replacing them.
- Screenshots are intentionally omitted from professional work. Add only approved, sanitized screenshots, with any user/client data, IDs, business documents, URLs and credentials removed.
- Recommended approved images: PrimeAI quotations (testing), PACE project/document workspace, Sentinel Prime incidents/assets, Project Center WBS/Gantt and BI Hub (access control). Check employer/client confidentiality before publication.

- **PACE** is the current unified project/document platform and supersedes **Project Center**; it must appear only once.
- **Sentinel Prime** is the real IT incident/asset application. The independent SentinelOps and Nexus Service Cloud entries under Product Lab are UI concepts, not duplicates of Sentinel Prime.

## Pending private asset review (professional screenshots)

The PR now includes a responsive, bilingual gallery feature for PACE, PrimeAI, BI Hub and TrainingHUB.
For privacy, actual screenshots are NOT committed to this public repository yet.
Missing assets cause the gallery buttons to hide, so the site stays functional prior to upload.

The user must review/anonymize the exported screenshots, then upload the approved WebP files
from the separate gallery package to `assets/projects/professional/{pace,primeai,bihub,traininghub}/`.
The matching client-side manifest lives in `professional-gallery.js`.

Sentinel Prime intentionally remains a text-only case until its app is ready.
