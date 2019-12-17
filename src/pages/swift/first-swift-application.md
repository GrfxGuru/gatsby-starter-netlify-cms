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

![Xcode 6 - Start Panel](/img/post_images/Xcode-6-Start-Panel.png)

Click on ‘Create a new Xcode project’ and from the left side of the panel choose ‘iOS’ then ‘Application’ and on the right choose ‘Single View Application’. This is one of the most basic starting points and is a good place to start learning as you will be given a minimal amount of files and code needed to get you started without lots of confusing stuff. This application will only use one screen and no navigation, we will get to those in the future.

![Xcode 6 - New iOS Application Panel](/img/post_images/Xcode-6-New-iOS-Application-Panel.png)

In the next panel you will be asked to give a name to the application along with some other details. For the purpose of this tutorial I called it ‘My First Swift App’. Something important here is the ‘Organization Identifier’ field, convention is to use a reverse domain name like ‘com.peterwitham’, I recommend you do this as it will be important later on, either use a domain, company or person as the code will use this information. So if you are working on applications for other people or companies you may want to investigate this information ahead of time. For the language ensure you selected ‘Swift’ or if you wish you can use something else but I’m showing the code in Swift. For devices you can select a device type however I strongly recommend you get used thinking in Universal as Apple really will be pushing that now that we have many different size devices.

![Xcode 6 - New iOS Application Properties Panel](/img/post_images/Xcode-6-New-iOS-Application-Properties-Panel.png)

Up next you are asked where you want to save the files for the application, this is entirely up to you but I like to keep my projects in a folder called Xcode. You do have the option to create a Git repository for the project but you can uncheck that for the purpose of this trip around as that will be covered in the future.

![Xcode 6 - Save New Project Location Panel](/img/post_images/Xcode-6-Save-New-Project-Location-Panel.png)

When you are done you will be presented with the properties of your new Swift based iOS application. No need to mess with anything in these tabs for now, but I suggest you get familiar with at least the ‘General’ tab in the future as there will come a day that you will need to change something.

![Xcode 6 - New Swift Application Default Start](/img/post_images/Xcode-6-New-Swift-Application-Default-Start.png)

This tutorial is not to give an overview of Xcode and the various parts of the interface but I will briefly go over a couple of areas. On the left side we have a panel currently showing the file tree (note this is not a file system layout), the center area is our editor and on the right we have our various properties tabs. For now that is all that you need to understand to get started.

On the lefthand panel you will see a file called ‘Main.storyboard’, double click on it to open the file. The editor will now change to show a representation of an empty iOS screen, this is our blank canvas to visually design our layout. On a _storyboard_ we can have many different views and see the connections between them, we will be doing that in future tutorials.

![Main.storyboard](/img/post_images/Main.storyboard-—-Edited.png)

To the lower right you should see the ‘Object Library’ highlighted in the image, if you do not then click on the icon also highlighted which is the third from the left ( in the image it is a blue circle with a square in it ). We use the object library to search for controls to add to our screens. In the text field below the list type ‘button’ and you should see a button on the list.

![Xcode 6 - Object Library search for button](/img/post_images/Xcode-6-Object-Library-search-for-button.png)

You can click and drag controls from this list to the storyboard so go ahead and drag the button our blank storyboard and release. You may see as you drag it on the smart guides appear, these are extremely useful for helping us to follow the [Apple guidelines (HIG : Human Interface Guide)](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/) for layout design.

Now double click on the label for the button ‘Button’, you can edit the buttons label right there on the screen, change it to anything you want and press return to confirm the new label, I went with ‘Click Me’.

![Xcode 6 - Button labelled Click Me](/img/post_images/Xcode-6-Button-labelled-Click-Me.png)

Let’s make our first App do something, so how about adding a text entry field, go to the object library and search for ‘text’, you should see a text field appear on the list, just like before drag it to the storyboard underneath our button. If you get close enough to the button you will see the Apple guidelines appear to indicate that you should get no closer, that should be fine. Currently our text entry field has nothing in it and that is also just fine since we will type something when running the application.

OK time to get some code on the screen, on the top right of the interface you will see an icon for what is referred to as the ‘assistant editor’, this is a secondary window that compliments whatever we have in the main editor (currently it’s the storyboard). I have highlighted the icon in the screen shot, click on it and you should see a new window appear to the right of the storyboard with the ‘ViewController.swift’ file in it, this file is the code that controls our view. Xcode is smart enough to figure out that we probably wanted that file to work on whilst working with the storyboard, good for you Xcode! Do not panic when you see all that code, we are about to tackle it and in reality most of what is there you can ignore anyway as we need it and Xcode did the hard work for us.

![Xcode 6 -Storyboard with Assistant Editor](/img/post_images/Xcode-6-Storyboard-with-Assistant-Editor.png)

TIP: If you are on a machine that has a touchpad / trackpad then you can use two fingers to pan around the storyboard window if you can no longer see the button and text field we added. If you are using a mouse you can always just right click on the storyboard and zoom out if you need to.

Now to get to some code! One of the great things about Xcode is that it does everything it can to help us, so even without knowing what the various parts of a method are to work with button events we can easily create them. All we need to do is right click on the button and drag the blue line over to a blank space in our assistant editor inside the curly braces for _class { }_ and release the mouse to be presented with a simple set of options. Xcode will try and help us by offering the most obvious choices. Since this is a button we are working with we need to create what is called an _IBAction_ which is a method called when we click or touch the button in our application. At first the connection will show a type called _Outlet_ that is not what we want, click on it and change it to _Action_. Now we need to provide a name for this _IBOutlet_ I called my one ‘buttonClick’. When you have provided the name just click _connect_ and the code will appear for you, simple right!

Now we do the same thing for the text field, right click and drag to the assistant editor, this time we want a type Outlet. Give it a name again, I used ‘myTextField’. An IBOutlet gives our code a way to reference our text field on the screen.

Now a little memory test for you, create another text field below the first and then create a IBOutlet for it, I called my one ‘myTextField2’. Refer to the steps above if you need a reminder.

![Xcode 6 - Storyboard with button and two textfields](/img/post_images/Xcode-6-Storyboard-with-button-and-two-textfields.png)

Now we will go back to our code created for the button, inside the func called buttonClick add the following just before the closing curly brace.

```swift
myTextField2.text = myTextField.text
```

![Xcode 6 - Assign textfield to textfield 2](/img/post_images/Xcode-6-Assign-textfield-to-textfield-2.png)

So what happens here is pretty straight forward, whatever text you enter in the first text field myTextField and then click or touch on the button will be copied into the second text field myTextField2. We access the text property of the fields to both get and set the text value. It’s not amazing, but it’s your first line of Swift in an iOS application, congratulations!

Now let’s run this baby and see what happens, time to compile!

In the top bar of the Xcode window on the left hand side you will see a play button followed by a stop button and then the name of our application and ‘>’ with either a device or simulator type after it. Click on it and select iPhone 6 from the iOS Simulator list. This sets the simulator to that new phone the World is going crazy about, if you wish and are familiar with using a device for testing rather than the simulator then feel free.

![Xcode 6 - Select Simulator](/img/post_images/Xcode-6-Select-Simulator.png)

Now click the play button on the far left to fire up the simulator and load your new application, this can some times take a while so be patient. Depending on your screen resolution you may find the simulator window rather large or small. Eventually you should see our application appear, click on the first text field and use the keyboard to type something in. Click or touch our button and it should appear in the second text field, well done if it worked and if not refer back to our steps above to see if you missed anything. You can either close the simulator or click on the stop button back in Xcode to dismiss the simulator and return to your code.

![iOS Simulator - iPhone 6 - Hello](/img/post_images/iOS-Simulator-iPhone-6-Hellob.png)

![iOS Simulator - iPhone 6 - iPhone 6 - Two textfield](/img/post_images/iOS-Simulator-iPhone-6-iPhone-6-Two-textfieldc.png)

At the moment I’m betting the text fields and buttons are poorly placed on the screen, not to worry we will get to all that in our next tutorial when we using something called constraints and auto layout to make the layout fit any size window and orientation we throw at our application. I am also thinking you are wondering why that pesky keyboard will not go away when you click return, we will also get to that in the future!

Congratulations you have reached the end and can now create a new project and write simple Swift code that compiles and runs as an iOS application! Save this project and we will resume with solving those layout issues next time around.

I hope this helped you, there is a lot to cover for a simple thing but you have learned all you need to know to create an empty shell that is the first step to every application anyone makes.
