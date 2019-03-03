---
templateKey: blog-post-swift
slug: /swift-archives/basics/first-swift-ios-application/
author: Peter Witham
tags: ["Swift"]
title: Your First Swift iOS Application
date: 2014-10-14T02:29:53
blurb: Start learning Swift today by creating your first iOS Swift based application. Follow along with this simple getting started tutorial.
---

I am going to walk you through each step to creating your first Swift based iOS 8 application in Xcode 6. It is very easy to do but I want to cover all the steps for those just starting out, the rest of you hardened developers will just have to be patient.

First, open Xcode 6. If this is your first time opening the application you will see the welcome panel, if not then you may or may not depending on whether you checked the box to ‘Show this window when Xcode launches’ on the bottom left.

![Xcode 6 - Start Panel](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-Start-Panel.png)

Click on ‘Create a new Xcode project’ and from the left side of the panel choose ‘iOS’ then ‘Application’ and on the right choose ‘Single View Application’. This is one of the most basic starting points and is a good place to start learning as you will be given a minimal amount of files and code needed to get you started without lots of confusing stuff. This application will only use one screen and no navigation, we will get to those in the future.

![Xcode 6 - New iOS Application Panel](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-New-iOS-Application-Panel.png)

In the next panel you will be asked to give a name to the application along with some other details. For the purpose of this tutorial I called it ‘My First Swift App’. Something important here is the ‘Organization Identifier’ field, convention is to use a reverse domain name like ‘com.peterwitham’, I recommend you do this as it will be important later on, either use a domain, company or person as the code will use this information. So if you are working on applications for other people or companies you may want to investigate this information ahead of time. For the language ensure you selected ‘Swift’ or if you wish you can use something else but I’m showing the code in Swift. For devices you can select a device type however I strongly recommend you get used thinking in Universal as Apple really will be pushing that now that we have many different size devices.

![Xcode 6 - New iOS Application Properties Panel](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-New-iOS-Application-Properties-Panel.png)

Up next you are asked where you want to save the files for the application, this is entirely up to you but I like to keep my projects in a folder called Xcode. You do have the option to create a Git repository for the project but you can uncheck that for the purpose of this trip around as that will be covered in the future.

![Xcode 6 - Save New Project Location Panel](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-Save-New-Project-Location-Panel.png)

When you are done you will be presented with the properties of your new Swift based iOS application. No need to mess with anything in these tabs for now, but I suggest you get familiar with at least the ‘General’ tab in the future as there will come a day that you will need to change something.

![Xcode 6 - New Swift Application Default Start](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-New-Swift-Application-Default-Start.png)

This tutorial is not to give an overview of Xcode and the various parts of the interface but I will briefly go over a couple of areas. On the left side we have a panel currently showing the file tree (note this is not a file system layout), the center area is our editor and on the right we have our various properties tabs. For now that is all that you need to understand to get started.

On the lefthand panel you will see a file called ‘Main.storyboard’, double click on it to open the file. The editor will now change to show a representation of an empty iOS screen, this is our blank canvas to visually design our layout. On a _storyboard_ we can have many different views and see the connections between them, we will be doing that in future tutorials.

![Main.storyboard](https://peterwitham.com/wp-content/uploads/2014/10/Main.storyboard-—-Edited.png)

To the lower right you should see the ‘Object Library’ highlighted in the image, if you do not then click on the icon also highlighted which is the third from the left ( in the image it is a blue circle with a square in it ). We use the object library to search for controls to add to our screens. In the text field below the list type ‘button’ and you should see a button on the list.

![Xcode 6 - Object Library search for button](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-Object-Library-search-for-button.png)

You can click and drag controls from this list to the storyboard so go ahead and drag the button our blank storyboard and release. You may see as you drag it on the smart guides appear, these are extremely useful for helping us to follow the [Apple guidelines (HIG : Human Interface Guide)](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/) for layout design.

Now double click on the label for the button ‘Button’, you can edit the buttons label right there on the screen, change it to anything you want and press return to confirm the new label, I went with ‘Click Me’.

![Xcode 6 - Button labelled Click Me](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-Button-labelled-Click-Me.png)

Let’s make our first App do something, so how about adding a text entry field, go to the object library and search for ‘text’, you should see a text field appear on the list, just like before drag it to the storyboard underneath our button. If you get close enough to the button you will see the Apple guidelines appear to indicate that you should get no closer, that should be fine. Currently our text entry field has nothing in it and that is also just fine since we will type something when running the application. You can view a video of this below, just click the link to watch and then your browser back icon to return to this post.

[Click here to play video: Xcode 6 - Drag Text Field to Storyboard](https://peterwitham.com/wp-content/uploads/2014/10/Xcode-6-Drag-Text-Field-to-Storyboard.mov)
