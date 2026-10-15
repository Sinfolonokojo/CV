# RafaelOS

Rafael Rendon’s interactive TechOps portfolio, with a desktop inspired by 2007,
English and Spanish content, three fictional incident missions, responsive layouts,
and a downloadable resume.

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Keep the root directory at the repository root.
3. Use **Other** as the framework and **dist** as the output directory.
4. Leave the build and install commands empty, then deploy.

The included `vercel.json` supplies the deployment settings and security headers.
No API keys, environment variables, database, or application dependencies are required.
See [the deployment guide](DEPLOY-TO-VERCEL.txt) for details and post-deployment checks.

## Preview locally

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://localhost:4173. JavaScript modules require an HTTP server;
opening the HTML file directly is not a reliable preview.
This basic preview does not apply the Vercel security headers.

## Edit

- `dist/content.js`: experience, projects, skills, and certifications.
- `dist/app.js`: interface, translations, contact links, and desktop controls.
- `dist/missions.js`: fictional TechOps scenarios.
- `dist/style.css` and `dist/responsive.css`: desktop and responsive styling.
- `dist/assets/rolling-hills-wallpaper.jpg`: original desktop wallpaper.
- `dist/Rafael-Rendon-Resume.pdf`: downloadable resume.

## Security

Only `dist` is published. The browser policy restricts scripts, styles, and images
to this site and blocks external connections, inline scripts, and framing.
Camera, microphone, and location permissions are disabled.
Review the policy before adding external services or a contact form.

Never put secrets or confidential client information in this repository or in
browser-delivered files. Contact details in the website and resume are public.
Enable two-factor authentication on GitHub and Vercel, and verify the live
headers and main interactions after deployment.
