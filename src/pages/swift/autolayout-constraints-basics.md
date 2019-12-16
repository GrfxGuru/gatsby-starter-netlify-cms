---
templateKey: blog-post-swift
slug: /swift-archives/basics/auto-layout-constraints-basics/
author: Peter Witham
tags: ["Swift", "Design"]
title: Auto Layout & Constraints - The Basics
date: 2014-10-28T00:10:12
blurb: We all encounter bugs in the software we use not just the software we create. As a responsible developer, I ask that you report bugs to those that make our tools. Here are a few ways you can help.
---

In the [previous article](/swift-archives/basics/first-swift-ios-application/) we created our first Swift iOS based application, now we will take a look at using _auto layout_ and basic _constraints_ to fix the UI issues that you encountered.

When we last left the application ([see this post, 'Your First Swift iOS Application'](/swift-archives/basics/first-swift-ios-application/)), we had created two text entry fields and a button, however when run in the simulator we encountered some problems with the way everything looked on the screen.

![iOS Simulator - iPhone 6 - iPhone 6 - Two textfield](img/post_images/iOS-Simulator-iPhone-6-iPhone-6-Two-textfieldb.png)

The layout looks really bad and even worse if you try landscape mode! There are a few ways to fix this but the one you should probably get used to for now is [Auto Layout](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/AutolayoutPG/Introduction/Introduction.html), this is Apple attempting to give you a mechanism by which you can have a layout adjust automatically to suit the display it is being view on. Given the numerous screen resolutions available on the iOS platform this is a good idea. If you were paying attention to WWDC 2014 then you will of picked up on Apple pushing you to forget resolution and start getting used to size classes and the idea of laying out adaptive UI’s, clearly by now it should be obvious this is to aid developers in dealing with the current and future Apple hardware line up. You can deal with layout in code and this is favored by many, but I will stay clear of opinions on that subject since this article is designed for those getting started who want / need results fast.

There are many ways to use _Auto Layout_, however luckily for us simple interfaces like ours let us use a great feature of Xcode 6 where we can ask the application to try and fix the problems for us with a good expectation that it will work. In future articles I will go into more depth on how we can specify _constraints_ ourselves to really control what happens, for now just select the view on the storyboard and try one of these two methods.

In the Xcode menu goto _Editor > Resolve Auto Layout Issues > Add Missing Constraints_

![Xcode 6 - Resolve Auto Layout Menu Options](img/post_images/Xcode-6-Resolve-Auto-Layout-Menu-Options.png)

Or

At the bottom of the storyboard view on the righthand side there are four icons, click on the third from the left and a popup menu will appear, select _Update Constraints_

![Xcode 6 - Auto Layout Storyboard popup menu](img/post_images/Xcode-6-Auto-Layout-Storyboard-popup-menu.png)

Either method will ask Xcode to figure out the most obvious _constraints_ that we need to fix our UI and apply them to each of the controls on our view. You can see these changes by either selecting a control and looking in the properties panel, or drill down through the outline to the left of the storyboard window looking for a _constraints_ section.

Now run the application again and everything should be nicely centered in both portrait and landscape mode, you can rotate the simulator using the CMD + Left or Right arrow keys.

![iOS Simulator - iPhone 6 - hello](img/post_images/iOS-Simulator-iPhone-6-hello.png)

So there we have it, now you see that _Auto Layout_ is not some mythical beast that you hear many developers talking about, sure it has some problems but when it comes to getting the basics done fast you could spend hours doing it by hand or get Xcode to help you out. We will go in depth in the future regarding adding and manipulating constraints by hand rather than relying on this automated method.
