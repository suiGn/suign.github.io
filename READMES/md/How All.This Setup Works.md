### How ALL.THIS Setup Works

- **`all.this`** is the parent repository. Inside it, each subfolder is a submodule pointing to a different GitHub repo.
- Each submodule is **fully independent**—it has its own commit history, remote, and branches.
- The parent repo simply stores a reference (a specific commit SHA) to each submodule. When you pull and update submodules, it points to the latest commit on each submodule’s branch.

### Workflow Tips for Submodules

You won’t have a single `npm install` for everything. You must install dependencies per submodule.

1. **Making Changes in Multiple Submodules**

   - Go into each submodule folder, make changes, commit, and push.

   - Then go back to the parent 

     ```
     all.this
     ```

      repo, run:

     ```
     git add .
     git commit -m "Update submodule references"
     git push
     ```

     This updates the parent’s pointers.

2. **Automating Commits**

   - Use a command like:

     ```
     git submodule foreach --recursive \
       'git add . && git commit -m "Commit from script" && git push'
     ```

     That commits and pushes changes in all submodules. Then commit in 

     ```
     all.this
     ```

      to record the new submodule references.

3. **Cloning & Working on a Single Submodule**

   - If you only need code for one submodule, you can clone that submodule’s repo directly:

     ```
     git clone https://github.com/neurons-me/this.DOM.git
     ```

   - It doesn’t affect `all.this` unless you then **return** to `all.this` to pull in that submodule’s latest commits.

4. **Checking Which Submodules Are Out-of-Date**

   - From inside the parent repo:

     ```
     git submodule status
     ```

     or

     ```
     git submodule foreach git status
     ```

     This lets you see if any submodule has uncommitted changes or is behind the remote.

### Summary

- **`all.this`** becomes your “central index,” referencing all individual repos.
- It just requires a bit of extra care in committing and pushing each submodule (and then updating the parent repo) whenever you make changes.

----

### **Option A**: Push first, ignore empty commits

1. Push

    in each submodule whether or not a commit occurred:

   ```
   bash
   
   
   Copy
   git submodule foreach --recursive '
     git push || true
   '
   ```

   - The `|| true` ensures that if `git push` fails for any reason (like already up-to-date), it won’t stop the entire `foreach`.

2. If you do need to commit, do it in a conditional so you don’t cause an error when there’s nothing to commit, for example:

   ```
   bash
   
   
   Copy
   git submodule foreach --recursive '
     if [ -n "$(git status --porcelain)" ]; then
       git add .
       git commit -m "npm version patched and published"
       git push
     else
       git push
     fi
   '
   ```

   This checks if there are uncommitted changes (

   ```
   git status --porcelain
   ```

    non-empty); if yes, commit and push. If no, just push.

### **Option B**: Commit, then push only if commit succeeds

You can chain commands with `&&` so the push only happens if the commit command succeeds. Also tell Git to ignore failures if there’s nothing to commit:

```
bash


Copy
git submodule foreach --recursive '
  git add .;
  git commit -m "npm version patched and published" || echo "Nothing to commit";
  git push || true
'
```

- `git commit -m ... || echo "Nothing to commit"` will print a message instead of failing the entire script.
- `git push || true` ensures the loop doesn’t exit even if the push is already up-to-date or fails for some reason.

------

## **Why This Happens**

- **Git commit** returns **exit code 1** when there’s no changes to commit.
- **`git submodule foreach`** stops on the first submodule command that returns a non-zero exit code unless you deliberately handle or ignore that error.

By adding a conditional check or ignoring the non-zero exit code, you can let the process continue for all submodules.

