# Commit Conventions

## Commit Message Format

The project follows the general commit message format:

```text
<type>: <short descriptive subject>
```

The **type** describes the category of change, while the **subject** briefly explains what was changed. Commit messages should be written in the imperative mood and clearly communicate the purpose of the commit.

---

## Commit Types

| Type | Purpose |
|------|---------|
| **feat** | Introduces a new feature or functionality. |
| **fix** | Fixes a bug or resolves an issue. |
| **docs** | Updates project documentation. |
| **chore** | Performs maintenance tasks that do not modify application features. |
| **refactor** | Improves existing code without changing its behavior. |
| **test** | Adds or updates test cases. |

---

## Examples from This Project

### Good Commit Messages

The following commit messages clearly describe the changes that were made:

```text
feat: add index.html with base structure
feat: add style.css with base styling
Add basic footer section
Add Sidebar interaction
Resolve merge conflict in footer
Remove leftover merge conflict markers
Revert "Delete app.js by mistake"
Add rebase documentation to README
```

These commit messages are meaningful because they explain exactly what was changed and make it easier to understand the project history.

---

### Poor Commit Messages

During the interactive rebase exercise, intentionally vague commit messages were created to demonstrate how they can be improved.

Examples include:

```text
WIP
fix
oops
```

These messages provide little or no information about the actual changes, making the project history difficult to understand. They were later cleaned up using **Interactive Rebase** by rewording and squashing commits.

---

## Why Consistent Commit Messages Matter

Consistent commit messages improve collaboration by making the project's history easy to read and understand. Team members can quickly identify when features were added, bugs were fixed, or documentation was updated without inspecting every code change. Well-written commit messages also simplify debugging, code reviews, release preparation, and project maintenance by providing a clear record of the development process.

---

## Commit Message Guidelines

The following practices were followed throughout the project:

- Keep commit messages short and descriptive.
- Clearly describe a single logical change in each commit.
- Use meaningful action words such as **Add**, **Update**, **Remove**, **Resolve**, or **Revert**.
- Avoid vague messages like **WIP**, **fix**, or **oops**.
- Write commit messages that other team members can understand without reading the code.