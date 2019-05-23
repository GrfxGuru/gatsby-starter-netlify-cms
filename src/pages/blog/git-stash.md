---
templateKey: blog-post
slug: /development-notes/git-stashing/
author: Peter Witham
tags: ["Development Notes", "Source Control", "Git"]
title: Git Stashing
date: 2018-01-16T00:11:28
blurb: Stash those files! Git stash is a great command for putting files you are working on to one side whilst doing other work. Here is a simple example of how to use it.
---

A Git _stash_ is a way for you to take the files and folders you are working on and put them to one side while you work on something else and then bring back later. This is a way to keep changes but not have to commit them to the repositories active branch.

After all, you have not finished your work, so why would you want to commit partial fixes or features that might be in a non-working state. Let’s take a look at how this works with an example. You have a repository with three files in it, file1, file2 and file3. They exist on the master and develop branch. Being a good coding citizen you never work directly on the master branch, you are are working on the develop branch. You have changes you are working on in file1 and file2. The boss comes in and says there is a problem that needs fixing right away (does that ever happen to you?).

Since your work is not complete on those files, you decide to _stash_ them and come back to them after the fix. `$git stash` They are now held in a stash and you can change to the master branch to work on that fix. Essentially they are put to one side out of the way. The fix is done and in production, time to return to your current development project. To do that you return to the develop branch and need to get those files from the earlier stash. `$git stash pop` The files are restored and you can carry on working without any messy half commits to the repository.

That is how a stash works, simple right. There is one other thing you may want to consider and that is adding a name to the stash, although it is not recommended you can have as many stashes as you want, but they have those horrible default names.

To give a stash a useful name you can do the following. `$git stash save "some name"` The _save “some name”_ adds a name of your choice when creating the stash.

As you can see there is no real complications to using stash, it is a convenient way to put files out of harms way and come back to them.
