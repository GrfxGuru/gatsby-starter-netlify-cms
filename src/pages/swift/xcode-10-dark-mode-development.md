---
templateKey: blog-post-swift
slug: /development-notes/xcode-10-dark-and-light-mode-development-features/
author: Peter Witham
tags: ["Development Notes"]
title: Xcode 10 Dark and Light Mode Development Features
date: 2018-07-03T11:55:36
blurb: Dark Mode Development Part 1. So you want to create a Dark mode for your macOS app. OK Here is the rundown on Xcode 10 tools to do just that.
---

By now you may have heard that macOS Mojave will have a dark mode setting for the User Interface. So as a developer you might be wondering how you can use the new feature in your macOS applications. I am here to answer that question.

In this first installment, I will run through the new tools in Xcode 10 to help you visualize, design and test both Dark and Light interface modes. _Before we start, one quick note. As of writing this post, Xcode 10 is in Beta 2 along with macOS Mojave.

If you are not running macOS Mojave you will not see these tools in Xcode even if you are running 10._ Open a storyboard in Xcode, look to the bottom of the window and you will see the bar that contains the constraint controls to the right and the show/hide outline toggle icon to the left. Next, to it, you will notice a new _View as:_ option.

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_12-54-40_AM.png)

If you click on that option you are presented with a panel showing the appearance options that you can display in Xcode whilst working.

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_12-55-23_AM.png)

Clicking either of the icons will give the chosen mode, light or dark. The storyboard will update to reflect that choice.

### Light mode

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_12-55-58_AM-squashed.jpg)

### Dark mode

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_12-56-08_AM-squashed.jpg)

### But wait there is more

OK so now you know how to switch modes in Xcode. But there is a bonus! If you run the application, it will respect the OS mode currently active. But what if you want to use say Light mode for your OS and just want to check how the app will look in Dark mode? Well, Apple thought of that. Whilst the application is running, go back to Xcode and look again at the bottom bar, notice there is an extra icon called ’System Appearance’.

If you click on that, you can switch between all four different modes just for your running application without having to change your OS settings. How awesome is that!

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_12-58-57_AM-squashed.jpg)

To prove it, here is Dark selected from the drop-down with macOS Mojave running in Light mode.

![](https://peterwitham.com/wp-content/uploads/2018/07/Screen_cap_2018-07-03_01-00-03_AM-squashed.jpg)

### The Wrap

So that’s the basic tools to get you started in Xcode. In another post, I’ll talk about how you can use the smart color palettes to have a good looking Light and Dark mode with very little effort.
