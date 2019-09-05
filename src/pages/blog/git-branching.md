---
templateKey: blog-post
slug: /development-notes/git-branching/
author: Peter Witham
tags: ["Development Notes", "Git", "Source Control"]
title: How to Use Git Branches
date: 2017-01-27T10:59:00
blurb: Following on from my introduction to Git, I want to introduce you to branches. Branches are a way to work on features, bug fixes, and anything else that you would want to have separate from the main file set until completion.
---

Following on from my [introduction to Git](/development-notes/getting-started-with-git-part-1/), I want to introduce you to branches. Branches are a way to work on features, bug fixes, and anything else that you would want to have separate from the main file set until completion. A couple of examples as to why you might want to do this,

- You are a member of a team and need to work on a feature or fix a bug whilst others are working on something else in the same repository.
- You are introducing something that could potentially break the existing code base and it may not be used in the end.

A Git repository always has at least one branch, most of the time it will be called master. More often that not a common practice is to have a develop branch as well. The master branch might be the production version of an application, where as the develop branch is the one that gets pushed to testing servers for example, and contains the newest stuff ready for release. Eventually the develop branch would be merged into master when ready.

So let’s take a walk through a common pattern that can occur for both individuals and teams. For this example, let’s say we have a repository for a web site. It has a master branch with the initial commit that contains a few files. Currently the git status looks like this.

```
$git status
On branch master
nothing to commit, working directory clean
$ll
-rw-r--r-- 1 developer 1049089 113 Jan 25 11:24 index.html
-rw-r--r-- 1 developer 1049089 66 Jan 25 11:23 readme.txt
 ```

Time to create a new branch, there are two ways to do this. I’ll use both in this tutorial. The first is to create a new branch from the current version of the master branch and then switch to it. Let’s create a branch with the name develop.

```
$git branch develop
$git branch -a
develop
* master
```

The first command branch is followed by the name you want to use, the second command branch -a lists all of the branches, so as you can see we now have two thanks to the newly created one. Let’s now switch to that new branch.

```
$git checkout develop
Switched to branch 'develop'
```

Now that we are on the develop branch we can safely make changes without changing anything on master. So let’s make some changes to the index.html file and check that in with a commit. All of this is covered in my previous tutorial here.

At this point, our develop branch is now considered to be further along than the master. For simplicity, we will call these changes complete.

Time to merge the develop branch back into master. The first step is to change back to the master branch.

```
$git checkout master
Switched to branch 'master'
``` 

The next step is to merge develop into master.

```
$git merge develop
Updating fcf3415..98d8aa5
Fast-forward
index.html | 2 ++
1 file changed, 2 insertions(+)
``` 

With the merge complete we can now see that the changed file(s) have been incorporated in to our current branch. We can verify this by checking the log, we should see the commit we made on develop now also appearing on master.

```
$git log
commit 98d8aa57a907a4c0bca8c7fddd27fbe8cb68da7f
Author: Developer <developer@awesome.com>
Date: Wed Jan 25 11:56:22 2017 -0600
 Added header and welcome line

commit fcf3415b8bbf75ed7995b95fd2e950fbad102550
Author: Developer <developer@awesome.com>
Date: Wed Jan 25 11:24:25 2017 -0600

Initial commit
``` 

At this point, both branches are up to date and contain the same changes. This is the simplest use of branching.

Take Two

Let’s do something a little more complicated. This time we will have two people, Tom and Jane, working on independent branches, both starting from develop.

Tom
Tom creates a new branch starting on develop, called feature-navigation. But this time, Tom will create and switch to the branch at the same time using the -b option, this is second way to create a branch.

```
$git checkout -b feature-navigation
Switched to a new branch 'feature-navigation'
```

Tom starts working on the navigation.

Jane
At the same time, Jane has been tasked with adding a copyright notice to the page. So Jane, starting on the develop branch also creates a new branch called feature-copyright.

```
$git checkout -b feature-copyright
Switched to a new branch 'feature-copyright'
Jane starts working on the copyright notice.
Stay with me here, this is the current set of branches in the repository.

$git branch -a
develop
* feature-copyright
feature-navigation
master
```
 
Since this is a list from Jane’s perspective, notice there is a indicating that she is currently working on the feature-copyright branch.

###Tom
Tom has completed adding the navigation to the index.html page. So it is time for him to merge his changes back into the master branch.

There is one important new step to introduce here; since we have two developers working on the same repository, it is most likely a remote repository. Therefore it is important that everyone gets any changes that occurred without them knowing about it. To do that they would do a git pull. We will assume that both Tom and Jane do that when making commits.

Tom changes to develop, performs a git pull and then merges his feature-navigation branch.

```
$git checkout develop
Switched to branch 'develop'
$git pull
< any changes are pulled down from the remote repository>
$git merge feature-navigation
Updating 98d8aa5..c16079d
Fast-forward
index.html | 5 +++++
1 file changed, 5 insertions(+)
``` 

Since the feature-navigation branch is no longer needed, Tom does the right thing and deletes it.

```
$git branch -d feature-navigation
Deleted branch feature-navigation (was c16079d)
```

Note that the -d tells Git to delete the local branch.

###Jane
Now Jane has finished her work and needs to merge back into master. She performs a commit, switches to develop, does a pull to get Tom’s changes, and finally merges feature-copyright in to develop.

Now that everything has been completed, Jane removes the feature-copyright branch.

Lastly, with all work completed by both developers, develop is merged into master and pushed to production.

### The Wrap
So hopefully, you now have an understanding of how branching works in Git. Branches serve as a great way to protect the current status of a branch and allow multiple changes to take place.

You often see branches created to perform fixes to production (often called hotfix) whilst development continues independently. Due to the merge system, it makes it easy to have those fixes flow naturally, rather than wait for a push cycle.
