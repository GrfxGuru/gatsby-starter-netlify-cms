---
templateKey: blog-post-swift
link: https://www.peterwitham.com/swift-archives/intermediate/accessing-files-stored-application-bundle-ios-swift/
author: Peter Witham
tags: ["Swift"]
title: Accessing Files stored in Application Bundle on iOS with Swift
slug: /swift-archives/intermediate/accessing-files-stored-application-bundle-ios-swift/
date: 2016-05-08T18:32:10
blurb: Learn how to access files in an iOS application bundle at run time using Swift. It is a lot easier than you think.
---

Here is a quick run down on how you can access files within your application bundle on iOS with Swift. Since the sand boxing on iOS gives your application access to it's own folder structure you can gain access to files in your bundle by tapping into the _NSFileManager_ and the main bundle resource path. For this example let's say you have some reason to read in a text file contained in your application bundle and display it on the screen. Not a massive mind blowing demonstration, but a simple one to get the idea across.

### Set-Up

First create a single view application and add a _Text View_ object to the story board. I also removed the default text so it starts out empty. Next Create an _@IBOutlet_ for the _Text View_ object, I called mine _displayText_. Now add a new file to the project (right click on the project name and choose new file), This is the text file that will hold the data, I called it _thetext.txt_, and placed 3 paragraphs of plain text in the file. That's the set-up complete, on to the coding fun.

### The Code

So what is it we need to do to make it all work?

  * We need to locate the text file.
  * We need to load the text file.
  * We need to display the text.
Let's get started, for simplicity I am going to do this in the _viewDidLoad_ to keep only minimal code in the example. First we need to get the full path to our application

``` Swift
let filePath = NSBundle.mainBundle().resourcePath!
```

_NSBundle.mainBundle()_ gives us the bundle object that contains our application executable. _resourcePath!_ gives us the full pathname to the bundle's subdirectories containing our resources which includes our text file. Now we try and load the contents of the file in to a constant.

``` Swift
let textContent = try! String(contentsOfFile: filePath + "/thetext.txt",
                                encoding: NSUTF8StringEncoding)
```

Since there is the possibility that our file does not exist or something else could go wrong we put the statement in a _try_ block. We concatenate the path and add what we know to be the file name, note the '/' in front of the file name. Finally we assign the text content to our text field.

``` Swift
displayText.text = textContent
```

The _viewDidLoad()_ code should now look something like

``` Swift
override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    let filePath = NSBundle.mainBundle().resourcePath!
    let textContent = try! String(contentsOfFile: filePath + "/thetext.txt",
                                    encoding: NSUTF8StringEncoding)
    displayText.text = textContent
}
```

This same technique can be used to load any files, not just text. You could just as easily use it to load images or any other media. Run the application and everything should go according to plan. I bet you thought it was harder than that, nothing else is needed unless you want to complicate the matter :)
