**Name:** Srishti Bhatnagar

**Training Batch:** Amicus Fresher Development Program 2026

**Date:** 09 July 2026

**Description:** 
# Git Training Playground
A simple HTML, CSS, and JavaScript project created to practice Git version control fundamentals and collaborative workflows.

## .gitignore Notes => Task 2
### What happens if `.gitignore` is forgotten during the first commit?

If `.gitignore` is not added before the initial commit, Git starts tracking all matching files that exist in the repository at that time. Even if those patterns are added to `.gitignore` later, the previously tracked files continue to remain under version control until they are explicitly removed from Git's index.

### Possible approaches to fix it

Depending on the situation, there are multiple ways to resolve the issue:

- Remove tracked files from Git's index using `git rm --cached` and commit the changes. This is the most common solution for normal project files.
- If the unwanted files exist only in a local commit that hasn't been shared, amend the commit or use an interactive rebase to clean the commit history.
- If sensitive files (such as API keys or secrets) were committed and pushed, rewrite the repository history using tools such as `git filter-repo` or BFG Repo-Cleaner, then force-push the cleaned history.
- For future commits, ensure the required ignore rules are added before tracking project files to prevent unnecessary files from entering version control.