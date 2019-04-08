---
templateKey: blog-post-swift
slug: /swift-archives/swift-archives/basics/debugging-swift-xcode/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Debugging Swift with Xcode
date: 2014-09-26T14:32:10
blurb: You write code, that means at some point, you have to debug. Xcode has some great tools to help us make sense of the mess we created. Let's take a look at a couple of examples.
---

Anyone that writes code with no errors need not continue reading!

For the rest of us there is _LLDB_ (Low Level Debugger) and the Swift _REPL_ (Read-Eval-Print-Loop) to make finding and fixing our code almost fun, well almost. The Swift REPL is built on top of LLDB so that means we have a nice interactive experience to work with while we debug our code, not only that but we can also write new code in the REPL that will run as if it existed in our source files, how cool is that! For those inclined you can even write Python in LLDB, not something I'm willing or familiar with but there you have it.

If you are going to use the REPL from the terminal then there is a step you have to take the first time to configure your terminal, you need to enter the following command in the terminal to point to the right version and location.

``` bash
sudo xcode-select -switch /Applications/Xcode6.app/Contents/Developer
```

Now you can run the Swift REPL from the terminal if you want just by typing

``` bash
xcrun swift
```

Now you don't even have to be in Xcode to play around with code. So with the sales pitch over let's start to take a look at how this all works and how it can help us when it's 3am and our code just will not compile or run as expected. In Xcode the debugger by default will probably appear for you at the bottom of the Xcode window when something bad happens or you choose _view > Debug Area > Activate Console_ or use the keyboard shortcut _SHIFT CMD + C_ to show the console and _SHIFT CMD + Y_ to hide the console.

When your application does something bad Xcode will switch to the debug mode where it will show the tools you need to figure out the problem (hopefully). These include the _Debug Navigatior_ which will show you what was happening when the code went bad.

There are times when you will want to intentionally stop code from running and you can do that by clicking in the line number gutter of any code editor window which will create a _breakpoint_. Now when you run your code and hit any line with a breakpoint it will stop execution and switch to debug mode, this can be useful when you are having some problems and need to see what is happening as it happens. Once you are done you can remove the breakpoint by clicking on it and dragging it away from the bar to destroy it. There is another option rather than destroying your breakpoint, you can disable it. Xcode has a view you can use to manage your breakpoints, just go to the menu and choose _view > Navigators > Show Breakpoint Navigator_. You can also click the 7th icon which will look just like a breakpoint in the navigator, it kind of looks like a luggage tag.

Breakpoints can be very powerful when you start playing with the different ways you can configure them, this is slightly more advanced and you should get used to basic debugging before trying conditional breakpoints.

Hopefully now you know where to go and what happens when your Swift code turns bad on you, this is just a brief overview of what to expect, I recommend visiting [Apple's Developer Video from WWDC14](https://developer.apple.com/videos/wwdc/2014/) called 'Introduction to LLDB and the Swift REPL' to learn more about debugging Swift.
