---
templateKey: blog-post-swift
slug: /swift-archives/using-storyboard-references-in-xcode/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Using Storyboard References in Xcode
date: 2018-05-19T23:26:55
blurb: Clean and Fast xcode screen refresh, that's a really good reason to look at Storyboard References. Because sometimes those storyboards get very busy!
---

Storyboards are either a wonderful thing or a horrible nightmare depending on who you ask. Personally, I find them very useful. They give me the ability to ‘_mostly_’ visualize what a view is going to look like and to be able to present that to someone of a non-technical background to give them a rough prototype display they can understand. There is a problem though. If you have too many of them on display in a single _.storyboard_ file, it can become a problem to not only see them all and the connections to each other but also slow Xcode down to a crawl (even crash). To solve that problem we have something called ‘_storyboard references_.’ They are live links to other storyboard files.

### The Problem of Too Many Stories

Consider the following screenshot.

![](/img/post_images/Screen_cap_2018-05-19_10-23-18_PM.png)

There are only six storyboards with a button on the first view that takes you to all the other views, then on each of the remaining views, there is a button to return to the first. But just look at all those segue links and imagine if those views were more complicated.

### Time to reduce with Storyboard References

The first step to reducing the mayhem is to move each of our storyboards to their _.storyboardfile_. We are going to take our five extra views and move each to its file. Xcode can help us here since these are existing viewControllers. Selecting one of the views, go to the menu and choose _Editor > Refactor to Storyboard_. This brings up a dialog sheet asking for a new file name. Since I selected the second view, I am going to call the file _view2.storyboard_ and click save.

![](/img/post_images/Screen_cap_2018-05-19_10-35-18_PM.png)

Boom! Just like that Xcode created a storyboard reference in our main storyboard file to the new file we just created. Not only that, but it opened the new file and even inserted a reference back to our Main storyboard. Thanks, Xcode! Notice that little box on the left with _view1_ in it? That is a storyboard reference object. You can find one in the Library any time you need one.

![](/img/post_images/Screen_cap_2018-05-19_10-37-58_PM.png)

We can double click on those boxes to navigate between the different storyboard files. Go ahead and try it, double-clicking this _View1_ takes you back to the main storyboard and vice versa. I am going to do the same process with the remaining views in _Main.storyboard_ and this is the nicely cleaned up result.

![](/img/post_images/Screen_cap_2018-05-19_10-41-27_PM.png)

Wow! I think we can all agree that is much cleaner and easier to see what is going on.

### How Do I Manually Create New References?

OK, so let’s say we want to create a new storyboard view and add a reference to it. Let’s add another view. Go to the menu and choose _File > New > New File_ and look for _Storyboard_ under _User Interface_.

![](/img/post_images/Screen_cap_2018-05-19_10-44-38_PM2.png)

I called my new file _view7_, I know, shocking right! From the objects library, I am going to just add a new viewController and save the file.

![](/img/post_images/Screen_cap_2018-05-19_10-46-13_PM.png)

Going back to the _Main. Storyboard_ file, look in the object library for a _Storyboard Reference_ object and drag it to the editor view. If you switch to the attributes inspector panel, you will see a drop-down labeled _Storyboard_. If you open that dropdown, it will list all storyboard files in the project. I selected the new _view7_, and now I have my reference configured. The remaining task is to add a button and link that to the reference I just created.

![](/img/post_images/Screen_cap_2018-05-19_10-50-55_PM.png)

With that, the new reference is complete. If needed I could do the same in the new _view7.storyboard_ file to create a link back to the main storyboard.

### The Wrap

So that’s it, storyboard references are very straightforward to use and make life a lot easier for complex applications with lots of views. Not to mention speeding up Xcode in the process.
