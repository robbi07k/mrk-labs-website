# Project instructions

This is a static website published from the `main` branch on GitHub Pages. The `origin` remote points to `https://github.com/robbi07k/mrk-labs-website.git`; preserve the existing `CNAME` file for `mrklabs.my.id`.

## Website changes

- When the user requests a website change, implement and validate it, then commit and push the task-related changes to `origin/main` unless the user asks to keep the change local or not to publish it.
- Before staging, inspect `git status` and the diff. Stage only files related to the current request; do not include unrelated or unreviewed changes.
- Keep secrets, credentials, local settings, and generated files out of commits. Follow `.gitignore`.
- If the push is rejected because the remote has new commits, fetch and inspect the remote changes, then integrate them without discarding either side. Never force-push.
- Use Git Credential Manager or another browser-based GitHub sign-in flow for authentication. Never ask the user to paste passwords or access tokens into chat.
- After pushing, report the commit and note that GitHub Pages deployment may take a few minutes.
