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

## Task 6 – Merge Result

The merge of the `feature/add-navigation` branch into `main` was **not** a fast-forward merge because both branches received their own commits after the feature branch was created. The feature branch contained three commits that implemented the navigation feature, while the `main` branch received a separate commit that updated the `README.md` file. As a result, the commit histories diverged, so Git could not simply move the `main` branch pointer to the latest commit on the feature branch. Instead, Git created a merge commit to combine the changes from both branches while preserving the complete history.

**Commit history before merge:**


                 A ── B ── C   (feature/add-navigation)
                /
... ── X
                \
                 D            (main)


Where:

* **X** = Common commit from which both branches were created.
* **A, B, C** = Three commits that added and enhanced the navigation feature.
* **D** = Commit made on `main` to update `README.md`.

Since both branches contained unique commits after **X**, Git performed a **non-fast-forward merge** by creating a merge commit that combined the histories of both branches.

## Task 8 – Rebase

This task demonstrates how Git rebase can be used to integrate the latest changes from the main branch while maintaining a linear commit history.

### Rebase vs Merge

Both **rebase** and **merge** are used to integrate changes from one branch into another, but they serve different purposes.

A **merge** combines the histories of two branches by creating a merge commit. It preserves the complete branch history and is generally preferred when working on shared branches because it accurately reflects the development timeline.

A **rebase** moves or reapplies the commits from one branch on top of another branch, creating a linear commit history without additional merge commits. It is useful for keeping a feature branch up to date with the latest changes from the main branch before merging.

### Golden Rule of Rebasing

The golden rule of rebasing is **never rebase commits that have already been shared with other collaborators**. Rebasing rewrites commit history by creating new commit hashes, which can lead to confusion and conflicts for anyone else working on the same branch. It is safest to use rebase only on local or private branches before they are merged into the main branch.

## Minor Update

Repository maintenance update performed during stash demonstration.