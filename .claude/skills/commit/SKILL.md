---
name: commit
description: Assists in creating properly formatted commits using Conventional Commits format with emojis. Use this skill when the user requests commit creation such as "commit this", "commit", "commit changes", or uses the /commit command.
---

## Execute the following steps

1. Verify that the current branch is not `main` or `master`.
2. If on `main` or `master` branch, do not commit directly. Instead, suggest an appropriate branch name based on the changes, obtain user approval, then create and switch to the new branch.
3. Run `git status` and `git diff` (and `git diff --staged` if necessary) to understand all current workspace changes.
4. Analyze the changes to determine if multiple distinct logical changes are included (whether commits should be split).
5. If multiple logical changes exist, instead of staging everything at once, create a plan to perform `git add` and `git commit` sequentially for each logical group, propose it to the user, and execute.
6. For each commit, create a commit message in **English** using conventional commit format with emojis.
7. Execute the commit, and if pre-commit checks fail, analyze the error messages, autonomously fix the issues, and attempt to commit again.

## Important Notes

- By default, pre-commit checks are executed to ensure code quality.
- Never use the `--no-verify` option to commit when these checks fail.
- If specific files are already staged (when the user has intentionally run `git add`), first create a commit message targeting only those staged files.
- Always review the commit diff to ensure the message accurately matches the actual changes.

## Commit Best Practices

- **Pre-commit verification**: Ensure the code is linted, builds successfully, and necessary documentation is updated.
- **Atomic commits**: Each commit should serve a single purpose and include only related changes.
- **Conventional commit format**: Use the format `<emoji> <type>: <description>`.
- **Character limit**: Keep the first line (subject) of the commit message concise, within 72 characters in English. If detailed explanation is needed, add a blank line and write it in the body.
- **Imperative mood**: Write the description in imperative form (e.g., ⭕️ `Add feature`, not ❌ `Added feature` or `Adding feature`).
- **Type and Emoji mapping**:
    - `feat` (✨): New feature
    - `fix` (🐛): Bug fix
    - `docs` (📝): Documentation changes
    - `style` (💄): Style changes that don't affect code behavior (formatting, etc.)
    - `refactor` (♻️): Code changes that neither fix bugs nor add features
    - `perf` (⚡️): Performance improvements
    - `test` (✅): Adding or fixing tests
    - `chore` (🔧): Changes to build process, tools, dependencies, etc.

## Commit Splitting Guidelines

When analyzing changes, consider splitting commits (multiple `git add` → `commit` cycles) based on the following criteria:

1. **Different concerns**: Changes to unrelated parts of the codebase.
2. **Different types of changes**: Mix of feature additions (feat), fixes (fix), refactoring (refactor), etc.
3. **Logical grouping**: Changes that would be easier for reviewers to examine separately.

## Examples

Examples of good commit messages:

- ✨ feat: Add Cloud Run service account
- 🐛 fix: Change LLM inference timeout duration
- 📝 docs: Add documentation for experiment exp002
- 💄 style: Reorganize component structure for better readability
- ♻️ refactor: Simplify error handling logic in the parser
- 🔧 chore: Improve setup process for developer tools
