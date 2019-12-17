---
templateKey: blog-post-swift
slug: /xcode/simulate-gps-position-in-xcode-for-ios-application-development/
author: Peter Witham
tags: ["Development Notes", "Xcode", "Swift"]
title: Simulate GPS Position in Xcode for iOS Application Development
date: 2017-09-07T00:59:36
blurb: How to Add Custom GPS Locations in Xcode. Xcode has some built in GPS positions you can simulate, but you can also add any location of your choice. Here's how.
---

There are times that you will want to simulate a position for testing GPS in an application you are working on, apart from getting on a plane or grabbing the car keys there is another way to do it, and it’s quicker! In Xcode you can either select a location or, as I will demonstrate, you can add a position using a _gpx_ file.

To do this, you will need an active session, so go ahead and run your application in Xcode and open up the debugging window ( _Shift + CMD + Y_ ) or _View > Debug Area > Show Debug Area_. Do you notice the Arrow on the toolbar for the Window that looks just like the GPS one on an iPhone? Click on it and a menu will appear.

![](/img/post_images/GPS-Bar-in-Xcode-Debugger.jpg)

Notice that not only do we have a list of pre-defined locations we can select from, but we can also add our own. So how do we do that?

### To The Web Batman!

OK let’s leave Xcode for a second and pull up the following Web page, <http://www.gpx-poi.com>. This wonderful Web application is going to generate the file with all the right data that we need. As you can see, there is a lot of different ways to create a file for the location you want, but we are going to keep it simple. We are going to create a location for the Big Ben clock in London.

So I happen to know the address is Parliament Square, Westminster, St Margaret Street, London SW1A 0AA. Enter the location details and at the bottom of the page there is a field for _file name (.gpx)_. I’ll enter _Big Ben - London_.

Now I just have to click _Download_ and the file will download to my machine.

![](/img/post_images/gpx-poi-big-ben-london.jpg)

Now back in Xcode, open up the menu again from the debugger bar and choose _Add GPX File to Project…_ at the bottom of the menu, and load the file just downloaded. You may have to rename the file first, when I downloaded the file it had a .txt extension, just remove that and ensure it has .gpx extension.

Just click finish when the dialog box comes up asking if you want to import the file into the project. Now when you open up the menu again you should see the newly imported location added to the list.

![](/img/post_images/xcode-gps-menu-with-big-ben.jpg)

You will most likely need the Latitude and Longitude coordinates for the location you want to use for it to work properly. But that is all you need to do for adding custom locations in Xcode projects.
