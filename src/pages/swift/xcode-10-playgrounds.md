---
templateKey: blog-post-swift
slug: /swift-archives/xcode-10-playgrounds-new-play-system-improve-speed-and-productivity/
author: Peter Witham
tags: ["Development Notes", "Swift", "Xcode", "Playgrounds"]
title: Xcode 10 Playgrounds New Play System Improve Speed and Productivity.
date: 2018-09-06T12:51:21
blurb: 
Playgrounds save time in Xcode 10, playgrounds are getting some serious love in the speed department. Here's the new play system.
---

One of the really nice things in Xcode 10 Playgrounds is the changes to how they are compiled and run. No longer is every line of code parsed each time you make a change, which can make for some really long waits depending on the amount of code. Xcode 10 now has a new system, if you open a playground, you will notice a Blue line down the left gutter (where the line numbers are) along with a play icon.

![Xcode 10 Playground](https://peterwitham.com/wp-content/uploads/2018/09/xcode10-pg-blue.png)

The Blue line indicates to us that this code is ready to run. If we click on the play icon in the circle, or use shift + return to run the playground all the code up to the play head will be executed for us. To better demonstrate this I am going to move the cursor to line 3. If I press shift + return to execute the code up to and including line 3, you will notice the Blue bar change.

![Xcode 10 Playground, Partial Play](https://peterwitham.com/wp-content/uploads/2018/09/xcode10-partial-playground.png)

Notice how lines 1, 2, and 3, no longer have the Blue background. This indicates to us that these lines have been executed successfully. So what does it mean that lines 4 and 5 still have the Blue background, you ask? Well, this is the playgrounds way of telling us that those two lines are the only ones that will be executed next time we press play. This is great, the playground is telling us ‘hey lines 1,2, and 3 have not changed and will not affect the results. So I will not bother executing the again for you’. That means faster times for us. See, this is the playground trying to help us out and only perform lines of code that are necessary on each run. It analyses the code for us and determines if first, the code has changed since the last run, and secondly, does any of that code need to be run again as it affects the processing of any other new lines of code. How cool is that!

Yep, that means we can write code that only gets processed as needed. A great time saver for big playgrounds and complicated code. Now there will be times I’m sure, that you’ll want to force the execution of all the code in a playground. To do that we can click on the square ‘stop’ icon on the bottom left, that resets the play status for us.

I should also mention that by clicking and holding on the stop icon you have the option to set manual or automatic play mode for the playground, nice to still be able to choose. Because of this new system, each run retains the data generated.

This means you can create a class, run it and then use that class and any data in the next run. Overall, this is a great step forward (see what I did there debuggers) for playgrounds, they continue to be a useful way to test code without the need to generate a new project every time.
