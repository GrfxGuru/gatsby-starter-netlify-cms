---
templateKey: blog-post
slug: /xcode/using-carthage-with-xcode/
author: Peter Witham
tags: ["Swift"]
title: Using Carthage with Xcode
date: 2017-12-20T22:52:14
blurb: Carthage is a popular tool for using frameworks in development using Xcode. I will show you how to get started.
---

[Carthage](https://github.com/Carthage/Carthage) is a system designed to make adding frameworks to your application simple and fast. You may of heard of a similar system called CocoaPods. They have many similarities, Carthage however does not do the integration for you like CocoaPods. It does not create a new workspace and add the framework to you project automatically, you have to perform this process. in some ways this is actually an advantage, this enables you to work with the frameworks without having to maintain or work with the files and workspace created for you. One advantage that gives is mobility and independence from your project.

### Install Carthage

There are a few options for installing Carthage.

1. Download the latest .pkg and install it from [here](https://github.com/Carthage/Carthage/releases) hosted on GitHub.
2. Use Homebrew. You install Homebrew and from the terminal run `$ brew install carthage`
3. Alternatively for the adventurous, you can download and compile the source.

### Creating a Cartfile

Like most package managers, Carthage needs to have instructions. These are created in a _Cartfile_. If you have used a package manager before then the file format will look some what familiar. In this example I am going to use the [Evergreen logging](https://github.com/nilsleiffischer/Evergreen) framework that I like a lot. So my _Cartfile_ will now look like this, note that I do not need to add the full URL as Carthage knows that the instruction _github_ means it is clearly a repository hosted on GitHub. `github “nilsleiffischer/Evergreen”` If this was a git repository coming from somewhere else I would specify the full URL using git https://domain.com/nilsleiffischer/Evergreen.git

### Run Carthage

With the file in place, I will now run Carthage, it will download the repository and build the frameworks for me automatically. Here is the output.

![](https://peterwitham.com/wp-content/uploads/2017/12/CarthageExecution-squashed-1024x181.jpg)

If you look in the folder where Carthage was run you will now see a folder called _Carthage_, inside that folder there are two folders called _Build_ and _Checkouts_. The _Checkouts_ folder contains the cloned repository files. The _Build_ folder contains the results of the build, yeah kinda obvious that last one I know. Since Evergreen has multiple build targets there is a folder for each. In each of those you will find the framework.

### Add Frameworks to Xcode Project

Now that we have successfully built our frameworks, we can add them to our Xcode project. Depending on which platform you are building an application for, the instructions do differ slightly.

### macOS Apps

Open the application target “General” settings tab and look for the “Embedded Binaries” section. Drag and drop the framework(s) that you built using Carthage onto that section.

![](https://peterwitham.com/wp-content/uploads/2017/12/ScreenFlow.gif)

You will also want to add the debug symbols by going to “Build Phases” and either use the “+” icon followed by “New Copy Files Phase”. Select “Destination” then “Products Directory”. Drag and drop the dSYM file just like before.

![](https://peterwitham.com/wp-content/uploads/2017/12/ScreenFlow2.gif)

### iOS, tvOS and watchOS

Open the application target and select the “General” tab. Look for “Linked Frameworks and Libraries”, drag and drop each framework on to that section. Under “Build Phases” click the “+” icon and choose “New Run Script Phase”. In “Input Files” add the location of the framework(s) built by Carthage. In my case I have a folder on my desktop `/Desktop/CarthageDemo/Carthage/Build/iOS/Evergreen.framework` Also add the location for “Output Files”, which we want to be our application’s frameworks folder. `$(DERIVED_FILE_DIR)//$(FRAMEWORKS_FOLDER_PATH)/Evergreen.framework`

### Build that App!

At this point you should now be able to build your application regardless of the platform and everything should work. If not, pay attention to the errors. Most of the time it will probably be a pathing issue.

### The Wrap

OK so clearly the worst part of the process is adding the framework(s) to your application in Xcode, but you will get used to it. The big advantage over say CocoaPods, is that the frameworks remain independent from your Xcode project.
