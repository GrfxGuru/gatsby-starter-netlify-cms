---
templateKey: blog-post-swift
slug: /swift-archives/how-to-import-ios-modules-with-spaces-in-the-name-for-testing/
author: Peter Witham
tags: ["Development Notes", "Swift", "Code Testing"]
title: How to Import iOS Modules with Spaces in the Name for Testing
date: 2018-04-10T12:15:44
blurb: The First Hurdle To Testing Code? Importing a module with a space in the name...solution within!
---

So here’s a little tip that took me longer to figure out than it probably should have. I want to start getting better at testing my Swift code, I decided to start creating some tests for my Code Notes application. The problem, the Xcode application is called ‘Code Notes’.

Yes there is a space in the name. For the observant, you cannot import a name with a space.

![](/img/post_images/Screenshot-of-Xcode-4-10-18-12-04-53-PM.png)

So the solution is simpler than you might think, replace the space(s) with an underscore.

![](/img/post_images/Screenshot-of-Xcode-4-10-18-12-05-19-PM.png)

Problem solved. I hope this saves you some time banging your head against a testing wall.
