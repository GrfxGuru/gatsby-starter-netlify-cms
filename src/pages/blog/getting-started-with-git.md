---
templateKey: blog-post
slug: /development-notes/getting-started-with-git-part-1/
author: Peter Witham
tags: ["Development Notes", "Git", "Source Control"]
title: Getting Started With Git
date: 2015-10-15T10:57:07
blurb: Imposter Syndrome, We have probably all heard the term and felt the effect at some point in our careers. Here’s how to get over it.
---

## What is Git?
Git ([Official site](https://git-scm.com/)) is an open source distributed version control system. It has become a popular scm (Source Control Management) system for many and my preferred choice compared to other systems like Subversion or CVS. It also comes integrated into many tools, including Xcode.

## Why use Source Control?
Because one day you will wish you had! But to give a better answer, Git gives you the ability to work on parts of code or features whilst protecting the rest. It also makes working in teams super easy and provides a way to recover when things go wrong. Given that it is a distributed system it also means that all team members have a copy of the code should the main repository suffer damage or loss.

## What do I need to use Git?
All major platforms now have a version of Git that you can use, I personally run it on both Mac and Linux from the terminal and from GUI clients.

To install Git you can either go to the [official site](https://git-scm.com/) or install via a method of your choice, for example installing on Linux is as simple as

`$ sudo apt-get install git-core`

Once installed you can run from the terminal or one of the many GUI clients, on the Mac I like to use [Tower](http://www.git-tower.com/) and [SourceTree](https://www.sourcetreeapp.com/). However, I strongly recommend you learn the terminal commands before using a GUI based application.

## After Install Basic Configuration
Once you have installed the Git application, I recommend setting up two configuration options before going any further, those are your username and email which will appear on everything you do. At the terminal type the following replacing <username> and <email> with your details.

```
$ git config --global user.name ““
$ git config --global user.email ""
```

You can check these settings at any time by typing

`$ git config —list`

Now it is time to use Git.

## Creating a Repository
Everything you do in Git is inside a repository. A repository is the place where all the files and metadata are stored. You have a local repository and often a remote one where you can push and pull, to and from the remote location. This is perfect for backups and is often the way you will see Git used. For example, you might get a repository from Github to work on and to do that you clone the remote repository to your machine.

Start by opening a terminal prompt and create a folder to store the repository in, this keeps everything nicely isolated and organized.

```
$ mkdir MyRepo
$ cd MyRepo
```

Now we need to actually create (initialize) the repository by telling the system that this is a Git repo.

`$ git init`

Initialized empty Git repository in /some location/MyRepo/.git/If you look at a file listing for the folder you might see a hidden folder called .git has been created, this is where all the vital information for Git to work is stored.At this point you are going to learn a new command, type

```
$ git status

On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

This is telling you the current status and you will use it a log, here it says we are on the master branch with just one initial commit and there are no changes we need to commit at this time.

Any time you work with a file or folder you will end up making a commit. A commit is a recording of the current state of everything you stage inside the folder (and subfolders). This is how you are able to go back and forth in time. Yes you’re files are now like Dr. Who!

## What is Staging and Committing?
OK so I put a new term in there and failed to explain it. So why don’t we create some files and discover staging and committing for ourselves. We will come back to branches in a bit.

First, let’s create a couple of new files

```
$ touch file1.txt
$ touch file2.txt
```

This creates two empty text files, now check the status again

```
$ git status

On branch master

Initial commit

Untracked files:

 (use "git add file..." to include in what will be committed)

file1.txt
file2.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Notice we are now told we have two untracked files and there is nothing to commit. Git even helps by suggesting how you can add these files to be committed (use "git add file..."; to include in what will be committed)

So do it, there are several ways to add files but for now we will go with listing the files names separated by space and then check the status again

```
$ git add file1.txt file2.txt

$ git status

On branch master

Initial commit

Changes to be committed:

 (use "git rm --cached file..." to unstage)

new file: file1.txt
new file: file2.txt
```

Now you can see that we have the two new files added to our commit ready to be saved to the repository. There is also a way to remove files from the stage by using git rm filename but we will ignore that for now.

## I’m Ready to Commit
No, no, Not marriage just the files so stop sweating it! Now that the files are staged and ready to be committed to the repository let’s do it. When you make a commit you have to add a message so that either you or someone else knows what is going on, you do this using -m ‘Some message’

```
$ git commit -m ‘Added two new text files’

master (root-commit) c02a25c Added two new text files

 2 files changed, 0 insertions(+), 0 deletions(-)

 create mode 100644 file1.txt
 create mode 100644 file2.txt
```
 
The message tells us a commit was created and lists what happened. We created two new files and these are the names.Doing git status now shows us that we are up to date and everything is clean

```
$ git status

On branch master

nothing to commit, working directory clean
```

## Show Me the History
To see a history of what has taken place you use the git log command. Try it!

```
$ git log

commit c02a25c7e08053218c95c2f132c02b5954bf6e32

Author: Peter Witham peter@uibuzz.com;

Date: Tue Oct 13 18:03:48 2015 -0500

Added two new text files
```

At the moment it shows there has only been one commit and gives us the message and other details for it.

## Make Another Commit
Time to make another commit, this time we are going to create a folder and edit the contents of one of the text files.

`$ mkdir my_folder`

Using any method of your choosing edit file1.txt and add something to it. Now check the status.

```
$git status

On branch master

Changes not staged for commit:

 (use "git add file..." to update what will be committed)

 (use "git checkout -- file..." to discard changes in working directory)

modified: file1.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Git detected that we changed the contents of file1.txt and marks it as modified. Notice that since there are no files in the new folder it is not listed as either modified or new. Add a new text file to the folder and check the status, notice that it now shows up as untracked as the folder now has contents.

```
$ touch my_folder/file3.txt

$ git status

On branch master

Changes not staged for commit:

 (use "git add file..." to update what will be committed)

 (use "git checkout -- file..." to discard changes in working directory)

modified: file1.txt

Untracked files:

 (use "git add file..." to include in what will be committed)

my_folder/

no changes added to commit (use "git add" and/or "git commit -a")
```

Add the new folder to the staging for the commit.$ git add my_folder/Now go ahead and make a new commit with a meaningful commit message. Check the log and now you will see the two commits.

```
$ git commit -m 'Added new file in folder and edited a file.';

master a0bcbac Added new file in folder and edited a file.

1 file changed, 0 insertions(+), 0 deletions(-)

 create mode 100644 myfolder/file3.txt

$ git log

commit a0bcbac273ffe17a88d88a1957f97c0905abc47c

Author: Peter Witham peter@uibuzz.com

Date: Wed Oct 14 15:36:33 2015 -0500

Added new file in folder and edited a file.

commit c02a25c7e08053218c95c2f132c02b5954bf6e32

Author: Peter Witham peter@uibuzz.com

Date: Tue Oct 13 18:03:48 2015 -0500

Added two new text files
```

## The Wrap
So that is the basics of creating a repository and committing changes to it. You also learned how to look at the history and check the status at any time.Next time I will talk about branches and removing files from a repository.
