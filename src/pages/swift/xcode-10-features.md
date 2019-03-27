---
templateKey: blog-post-swift
slug: /swift-archives/xcode-10-features-and-fun/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Xcode 10 Features and Fun
date: 2018-06-27T16:06:38
blurb: New Xcode Happiness. Xcode 10 has some great new features, here are a few of my favorite things.
---

Xcode 10 is a bigger release than it first appears, never under estimate internal app changes to really impact the development lifecycle. Let’s take a look at some of the more noticeable changes.

## Dark Mode if you run macOS Mojave

This one is an interesting twist. So many Xcode users have asked for a dark mode over the years, Apple went one better. If you run macOS Mojave then you get the new mode thanks to system level support, this is so much more sensible than just adding it to an app. I love using dark mode in my development tools due to the long hours staring at code and the late nights fixing bugs. Whilst I am talking about dark mode, there is a new option to view dark or ‘normal’ variances in the application design views and assets panel. This is great for checking how each version will look in macOS apps (iOS next year?). In the assets library, you can specify the color sets and resources for both versions.

## New NSGridView Design Tool

There is a fantastic new design tool for laying out grid views. It reminds me a lot of the way you work with spreadsheets in Numbers (Apple iWorks), you can drag around to add/remove columns and rows along with editing other details. This is very cool and hopefully, we will see more of these layout aids in future versions.

## Source Control Changes

To help track changes and maybe reduce merge conflicts, there is now a bar that appears in the code editor that will highlight changes in a file since the last checkout. This is handy for also knowing what is going on with the code when working in a team. You can monitor and merge changes from other team members without the pain of a last-minute merge conflict (hopefully). When logging into a source control service account, Xcode can both generate and upload SSH keys. Previously this was a very hands-on manual process, so this is a welcome change. Talking of source control services, BitBucket cloud and server are now supported along with GitLab and self-hosted services.

## Quoting Speed Statistics

Here are a few numbers to make Xcode feel a whole lot more responsive.

  * 40% faster document loading
  * 3x faster canvas interactions on storyboards
  * 2.5x faster loading of large documents
  * 5x faster debug symbol downloading
  * The build system uses 20% less memory
  * Rebuilds are now 2x faster when using Swift compared to last year

## Multi-Cursor Happiness

Xcode is finally getting multi-cursor support. For those that might not know what that is, you can have multiple cursors in the same file. This allows you to edit multiple lines of code at once along with pasting and copying, to use the feature you CTRL+Shift click the locations you want to edit and type away.

## Notable Mentions

There are a few other things that might not be obvious at first.

  * The code folding ribbon has returned to the code editor (cheers all around for that one).
  * The library window is now separate from the inspectors, this makes me very happy. Having the library always in the corner drives me crazy, and it also seems to randomly resize for me depending on its mood.
  * You can now run parallel tests by using multiple virtual devices, this is a nice time saver if you have enough power to crank up the device count.
  * Custom instruments can now be created and shared with other people via export.

  Xcode 10 will include Swift 4.2, you can add other versions of Swift via the toolchain in the preferences. As we near the final release version, presumably in the Fall of 2018, more details are sure to be discovered. I look forward to putting Beta 2+ through the daily grind and see what I come across.
