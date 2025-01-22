## Automate **npm publish**

Automate **npm publish** across multiple submodules in a manner similar to your “commit and push” script. Essentially, you’d run a command like this in your **parent** repository:

```bash
git submodule foreach --recursive 'npm install && npm publish'
```

This will:

1. Enter each submodule folder.
2. Run `npm install`.
3. Run `npm publish`.

> **Important**: Make sure each submodule:
>
> - Has its own `package.json` with a valid `name`, `version`, and `main` (or other appropriate fields).
> - Is properly logged in to npm (via `.npmrc` or environment variables).
> - Has the correct permissions and access (especially if publishing scoped packages that need `--access public`).

### A Few Caveats and Tips

1. **Version Bumping**

   - If you need to bump the version before publishing, you could use something like:

     ```bash
     git submodule foreach --recursive 'npm version patch && npm publish'
     ```

   - This automatically increments the patch version, creates a Git commit, and tags it. Then it publishes to npm.

2. **Credentials and Login**

   - Each submodule’s directory needs an `.npmrc` (or environment settings) that is properly configured with your npm token or `npm login` session.
   - Otherwise, the publish command will fail if npm doesn’t recognize your credentials.

3. **Handling Submodule Dependencies**

   - If your submodules depend on each other, a strictly “publish everything in one shot” approach might fail if, for example, package A depends on a brand-new version of package B that’s published later in the process.
   - In that case, you’d need an ordered publish or a more advanced approach (like a monorepo tool such as **Lerna**, **Nx**, or **Yarn Workspaces**), which can automatically figure out publish order based on dependencies.

4. **Verifying Each Publish**

   - After the publish command, you can add an extra check or script to verify that each package was successfully published (by hitting the npm registry or checking versions).

5. **Tagging & Git References**

   - Just like with your commit script, if you’re bumping versions in each submodule, you may want to run `git add . && git commit -m "Bump versions"` in each submodule. Then in your parent repo, commit the updated submodule references.

### Example Workflow

1. Update Code

   - Make changes within submodules as usual.

2. Automated Publish

   - In 

     ```
     all.this
     ```

      (your parent repo), run:

     ```bash
     git submodule foreach --recursive '
       npm version patch &&
       npm publish --access public
     '
     ```

3. Commit Submodule References in Parent

   - Once all submodules have published successfully:

     ```bash
     git add .
     git commit -m "Updated submodules versions"
     git push
     ```

4. Done!

   - Each submodule has a new published version on npm, and your parent repo now points to those updated commits.

------

If this workflow feels too cumbersome (especially with dependencies among submodules), you might look into monorepo tools. But if **each submodule is truly independent** and you just want a quick way to push/publish all from a central place, the above approach works fine with a `git submodule foreach` pattern.

---

## MORE INTO THE WAY IT WORKS

 **`npm version patch`** automatically bumps the patch version in **`package.json`** (e.g., from `2.5.5` to `2.5.6`), creates a Git commit with that version as the commit message, and also creates a Git tag for that version.

So if you run:

```bash
git submodule foreach --recursive 'npm version patch && npm publish'
```

1. Each submodule’s package.json will increment its patch version (e.g., `2.5.5` → `2.5.6`).
2. A commit like “`v2.5.6`” is **automatically** created in each submodule.
3. A Git tag is created as well.
4. `npm publish` then publishes that new version to the npm registry.

#### What about your next `git add . && git commit -m "Commit from script" && git push`?

- Because **`npm version`** already created and committed those changes in each submodule, there are **no uncommitted changes left** at that moment in each submodule’s working directory.
- If you still do `git submodule foreach --recursive 'git add . && git commit -m "Commit from script" && git push'`, each submodule will likely say “Nothing to commit” (unless there were other un-staged modifications).

**Important**: You may still want to update the **parent** repo to capture the *new submodule references*:

```bash
# In your main "all.this" repo
git add .
git commit -m "Update submodule references to new versions"
git push
```

This ensures the parent repo’s submodule pointers now reference the latest commit (the one npm version just created) in each submodule. Otherwise, your meta-repo might still point to the old submodule SHAs.