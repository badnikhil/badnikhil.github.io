# AGENTS.md

## Actions Taken
- **Date**: 2026-06-16
- **Task**: Remove specific line about GSoC 2026 from portfolio.
- **Details**: 
  - Searched for the exact text `"Selected for GSoC 2026 under API Dash — mentors personally reached out and invited me to participate."`.
  - Found the target line in `data/experience.ts`.
  - Removed line 52 from `data/experience.ts` to delete the aforementioned bullet point from the GSoC 2026 experience entry.
  - Executed `npm run deploy` to trigger the Next.js static export build (`npm run export`) and redeploy the built artifacts to GitHub pages using the `gh-pages` package.
  - Created this `AGENTS.md` documentation file as a local scratchpad (did not `git add` or `git commit` it per instructions).

## Actions Taken
- **Date**: 2026-06-18
- **Task**: Add 'The Todo' project to portfolio.
- **Details**:
  - Found the projects list in `data/projects.ts`.
  - Added 'The Todo' project to the top of the `PROJECTS` array, marking it as featured and highlighting its enterprise-grade architecture.
  - Committed the changes (`git add data/projects.ts` and `git commit`).
  - Pushed to the remote repository.
  - Executed `npm run deploy` to build and redeploy the site.

## Actions Taken
- **Date**: 2026-06-18
- **Task**: Upgrade 'The Todo' project description.
- **Details**:
  - Read `/home/nikhil/Desktop/todo/readme.md` to understand the full 40-phase feature list.
  - Updated the description of 'The Todo' project in `data/projects.ts` to highlight its event-driven microservices, background workers, complete observability stack, and CI/CD pipelines.
  - Attempted to commit and deploy the application, waiting for user approval.
