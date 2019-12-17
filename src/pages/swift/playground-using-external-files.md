---
templateKey: blog-post-swift
slug: /swift-archives/basics/playground-using-external-files/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Playground Tip - Using External Code Files
date: 2015-04-30T12:28:10
blurb: One of the nice additions to the XCode 6.3 release was the introduction of a feature in Swift Playgrounds that might not be immediately obvious to you but is immensely useful. You can now easily include code in separate files.
---

One of the nice additions to the XCode 6.3 release was the introduction of a feature in Swift Playgrounds that might not be immediately obvious to you but is immensely useful. You can now easily include code in separate files. This means you can test small snippets or entire custom classes and then use that code file directly in your projects, very cool for testing and development without the need to create an entire application project.

Let's give it a go with a quick demo!

First create a new Swift Playground in Xcode, I'll assume you know how to do that by now.

![](/img/post_images/01-Starting-Playground-300x176.png)

Now we need to display the Navigator sidebar to see the files in our Playground. Incase you did not know a _.playground_ file is really a package just like _.app_ files, the files you create are stored inside this package making file management easy. Goto the menu and choose _View > Navigators > Show Navigator_ Or you can use the shortcut of _CMD + 0_

![](/img/post_images/02-Show-Navigator-Menu-300x188.png)

As you can see we currently have our Playground listed with two folders _Sources_ and _Resources_. We are going to take advantage of the _Sources_ folder by adding a new file that will contain some code we will use in our Playground. So go ahead and create a new file, I called my file 'MoreCode.swift' which is then opened up in the editor window for us.

![](/img/post_images/04-New-Swift-Code-File-300x188.png)

In the new file we will create a new function that takes a number as an argument, doubles it's value and returns it for us. We do not need anything fancy here just to demonstrate a concept. So go ahead and create the function below or something of your choosing.

```swift
public func DoubleTheNumber ( i:Int ) -> Int {
    let x = i * 2 return x
}
```

Notice that we made the function _public_ this is so the function can be made available to the Playground, it is important that anything you want to use is made available, for example a class could be set to public to provide access. Now back in our Playground we can just use the function, Thanks to Xcode you will know if something went wrong because you should see autocomplete will try and help you out.

```swift
DoubleTheNumber(5)
// Output should show 10
```

We do not need to import our file as the Playground automatically creates a module for us with our code, all we need to do is use it, how cool is that! So stop and think about the possibilities here, you could write entire classes and test them without having to compile applications!

Hopefully this was helpful to you. Feel free to reach out to me on [Twitter @CompileSwift](http://www.twitter.com/compileswift) or comment below to share your useful Xcode and Playground tips.
