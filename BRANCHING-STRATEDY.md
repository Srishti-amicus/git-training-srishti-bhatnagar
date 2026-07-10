# Branching Strategy

## Branching Strategy Followed

This project follows a **Feature Branch Workflow**. All new features, hotfixes, and Git exercises were developed in separate branches created from the `main` branch. After the work was completed, tested, and reviewed, the branches were integrated back into `main` using different Git techniques such as merge commits, fast-forward merges, rebasing, squash merges, and Pull Requests. This approach kept the `main` branch stable while allowing each task to be developed independently without affecting the primary codebase.

A separate `develop` branch was not used because the project primarily focused on demonstrating Git concepts such as branching, conflict resolution, rebasing, cherry-picking, and Pull Request workflows. Therefore, feature branches were created directly from `main`, making the workflow simple while still following good version control practices.

---

## Branch Diagram

```text
                                      main
                                        │
      ┌─────────────────────────────────┼─────────────────────────────────┐
      │                                 │                                 │
      │                                 │                                 │
feature/add-navigation          feature/add-footer          feature/add-sidebar
      │                                 │                                 │
      └───────────────┐                 │                 ┌───────────────┘
                      │                 │                 │
                      ▼                 ▼                 ▼
                    Merge        Merge + Conflict      Rebase
                      │          Resolution              │
                      └────────────────┬─────────────────┘
                                       │
                                       ▼
                                     main
                                       │
               ┌───────────────────────┼────────────────────────┐
               │                       │                        │
               │                       │                        │
     hotfix/urgent-fix      feature/rebase-practice    feature/pr-merge-demo
               │                       │                        │
      Merge Commit PR          Squash Merge PR          Merge Commit PR
               └───────────────────────┴────────────────────────┘
                                       │
                                       ▼
                                     main
```

---

## Branch Naming Convention

The following naming conventions were used throughout the project:

| Branch Type | Naming Convention | Example |
|-------------|-------------------|---------|
| Main Branch | `main` | `main` |
| Feature Branch | `feature/<feature-name>` | `feature/add-navigation` |
| Hotfix Branch | `hotfix/<issue-name>` | `hotfix/urgent-fix` |
| Test Branch | `test/<purpose>` | `test/reset-demo` |

---

## Branching Rules

### When to Create a Branch

A new branch should be created whenever:

- A new feature needs to be implemented.
- An urgent bug fix or hotfix is required.
- Experimental work should be isolated from the stable code.
- Independent tasks are being developed simultaneously.

---

### Where to Create Branches From

- Feature branches are created from **main**.
- Hotfix branches are created from **main**.
- Temporary testing branches are created from **main** for learning and experimentation.

---

## Merge vs Rebase

### When to Use Merge

Merge should be used when the complete development history of a branch needs to be preserved. A merge commit records when two branches are combined and maintains the full commit history, making it easier to trace the development of a feature. Merge is particularly useful for collaborative development and Pull Requests.

### When to Use Rebase

Rebase should be used to update a feature branch with the latest changes from `main` before merging. Instead of creating an additional merge commit, rebase moves the feature branch commits on top of the latest `main` branch, producing a cleaner and more linear commit history. Rebasing is most suitable for local branches that have not yet been shared with other developers.

---

## Golden Rule of Rebasing

**Never rebase commits that have already been pushed and shared with other developers.**

Rebasing rewrites commit history by creating new commit hashes. If other developers have based their work on the original commits, rebasing can lead to synchronization problems and merge conflicts. Therefore, rebasing should only be performed on local or private branches before they are merged into the main branch.

---

## Summary

During this project, the following Git operations were successfully demonstrated:

- Feature Branch Workflow
- Branch creation and management
- Fast-forward merge
- Three-way merge
- Merge conflict resolution
- Git rebase
- Cherry-pick
- Pull Requests
- Merge Commit strategy
- Squash Merge strategy
- Git tags
- Git stash
- Interactive rebase
- Git revert
- Git reset and recovery using reflog

These practices demonstrate a structured and collaborative version control workflow commonly used in real-world software development projects.