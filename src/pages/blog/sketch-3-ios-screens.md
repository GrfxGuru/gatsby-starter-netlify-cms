---
templateKey: blog-post
slug: /development-notes/sketch-3-ios-screens/
author: Peter Witham
tags: ["Development Notes", "Design"]
title: Getting Started Designing iOS Screens with Sketch 3
date: 2014-11-06T01:42:11
blurb:
---

There is a lot more to Sketch 3 than first meets the eye but you really only need to know a few things to get started designing views for iOS, Android and the Web, that is what I am going to teach in this article.

[Bohemiam Coding](http://www.bohemiancoding.com), creators of Sketch 3 did a fantastic job making a tool for prototyping layouts be it web pages or in our case iPhone and iPad views. Using the tool you can easily play with laying out views and creating usable exported assets for your development tool of choice (Xcode for most of us when it comes to the iOS platform).

In this quick tutorial we will start with a new Sketch 3 artboard using the built in iOS template. We will then add some controls, simulate a popup scenario and finally export the image as if we needed to share it with someone.

First step is to open Sketch 3, then goto the File menu and select 'New From Template' and then 'iOS UI Design'

![Sketch 3 - New From Template - iOS UI Design](img/post_images/Sketch-3-New-From-Template-iOS-UI-Design.png)

You will now be presented with a new file containing a couple of artboards with some information, feel free to take some time and read the notes on those however you can pretty much ignore them at this point.

![Sketch 3 - Default iOS Application Design View](img/post_images/Sketch-3-Default-iOS-Application-Design-View.png)

On the lefthand side of the application window you will see a list containing the artboards, if you click where it says 'Welcome' with a dropdown arrow you can access the page menu, click on it and switch to the 'Symbols' page.

![Sketch 3 - iOS UI Design Page Menu](img/post_images/Sketch-3-iOS-UI-Design-Page-Menu.png)

This page contains as you should be able to now see the various parts of an iOS 7 interface, these are the symbols you can use to quickly layout an interface with stock controls, naturally you can customize them anyway you want but these get you started quickly.

![Sketch 3 - iOS UI Design - Symbols Page](img/post_images/Sketch-3-iOS-UI-Design-Symbols-Page.png)

Let's get started by creating a new artboard on this page so we can quickly use these symbols for a layout. Click on the 'Insert' icon to the top left of the application window and select 'Artboard' from the dropdown menu or use the keyboard shortcut 'a', you should see a list appear on the righthand side of the application window containing a rather large list of possible default sizes, we will select and use 'Portrait - 5/5S/5C' and layout an iPhone 5 design just to keep things simple. Go ahead and click on the option 'Portrait - 5/5S/5C' on the list, a new artboard with that name will be created and selected on the center view.

![Sketch 3 - Insert New Artboard](img/post_images/Sketch-3-Insert-New-Artboard.png)

![Sketch 3 - New Portrait 5:5S:5C Artboard](img/post_images/Sketch-3-New-Portrait-55S5C-Artboard.png)

> TIP: You can navigate the center view by holding down the spacebar and clicking and dragging the view around, there is also a zoom control on the icon bar, you may need to pan and / or zoom depending on your screen resolution as we work through the next stages.

Now that we have our blank artboard we can copy and paste any of the controls on to it, I added a status bar, keyboard and several table cells, be sure to select our new artboard though when pasting otherwise the control will be added to the artboard it was copied from. Feel free to layout anything you want in the view before moving on.

![Sketch 3 - Portrait iPhone 5 with Controls](img/post_images/Sketch-3-Portrait-iPhone-5-with-Controls.png)

We have a basic view, but why not take it a step further and simulate that nice silky blur effect when a popup option appears on iOS. To do that we will start by duplicating our existing artboard, right click on the title just above the artboard and select 'Duplicate'.

![Sketch 3 - Artboard Duplicated](img/post_images/Sketch-3-Artboard-Title-Right-Click-Duplicate.png)

You should now have two copies of the same artboard.

![Sketch 3 - Duplicated iPhone 5 Artboard](img/post_images/Sketch-3-Duplicated-iPhone-5-Artboard.png)

To make things more realistic on my design I am going to remove the keyboard and copy / paste a few more cells. Feel free to make any changes to the new duplicate artboard you see fit.

![Sketch 3 - Portrait iPhone 5 Artboards with Table Cells](img/post_images/Sketch-3-Portrait-iPhone-5-Artboards-with-Table-Cells.png)

Now we need to apply a filter, the quick way to do this is to select all the symbols on the duplicated artboard by either click and dragging over the artboard to select them or selecting them all on the lefthand view listing all the symbols.

![Sketch 3 - Symbols selected on artboard.](img/post_images/Sketch-3-Symbols-selected-on-artboard..png)

Now go to the 'Layer' menu and select 'Flatten Selection to Bitmap'.

![Sketch 3 - Layer Menu - Flatten Selection to Bitmap](img/post_images/Sketch-3-Layer-Menu-Flatten-Selection-to-Bitmap.png)

The artboard now only has one image rather than all our symbols, not only does this make it easy to apply the blur filter but it also reduces memory usage and increases application performance, so if you find the application slowing down for you converting items to bitmaps will help. With the bitmap still selected look to the righthand side panel and check the 'Gaussian Blur' filter, and voila you now have the blurred effect for iOS.

![](img/post_images/Sketch-3-Portrait-iPhone-5-Gaussian-Blur-Filter.png)

Now as before, select one of the popup symbols from all the controls on the other artboards and simply paste it in place just like we did before to complete simulate the popup view effect. I also added a shadow effect to the popup symbol, you may want to do this.

![](img/post_images/Sketch-3-iPhone-5-Portrait-with-Blur-and-Popup-Dialog.png)

We are now ready to export our layouts, goto the 'File' menu and select 'Export...'

![](img/post_images/Sketch-3-File-Export.png)

A dialog box will appear giving you the opportunity to select the artboards you want to export, in the example I have selected the 'Portrait - 5/5S/5C' artboard only.

![](img/post_images/Sketch-3-Export-Slices-Dialog.png)

When you click the 'Export' button you will be asked to select a file location to save the exported images at, go ahead and pick a location and export. If you now view those file(s) you will find that you have a full iOS view.

![](img/post_images/Sketch-3-iPhone-5-Exported-Artboard.png)

Hopefully this quick overview helped you get started with laying out iOS views in Sketch 3, I will be covering this tool in more depth in the future but you have now learned the basic skills to get you on the road to creating some stunning interfaces to make amazing apps.
