---
templateKey: blog-post-swift
slug: /swift-archives/basics/checking-api-availability-with-swift-2-available/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Checking API availability with Swift 2 #available
date: 2015-06-12T10:40:52
blurb: There may come a time that you need to check if a certain feature is available on a device and/or platform. Swift can help us out with that.
---

In Swift 2 we have a new feature that lets us easily check if a feature is available on the current device and platform version running our app. So we can now essentially say 'if this feature is available then we want to perform this code, otherwise do this', the syntax is very straight forward.

``` swift
if #available (iOS 9.0, OSX 10.11, *) {
    // Do some things with the cool new APIs
} else {
    // The new APIs are not available so do this
}
```

The new feature is called _#available_ and we give it a couple of arguments, the first two in this case are the two platform versions we want to check for and then you will notice the ***. So what's that all about? That indicates to the compiler that we require the minimum deployment target for other platforms not specifically listed, and this is mandatory for control flow. If none of our list is satisfied then the _else_ kicks in.

You can combine this with the new _guard_ feature to bail out early

``` swift
guard #available(iOS 9.0, OSX 10.11, *) else { return}
    // Do some things with the cool new APIs
```

There is another tool available to us and that is to mark functions or even classes as being available only on certain platforms, we do this with _@available_

``` swift
@available(iOS 9.0, *)
func myFunction() {
    // Do a bunch if things some things here with iOS 9 cool new features
}
```

So you can combine these in to something like this so you do not have to write the _if_ statement over and over

``` swift
@available(iOS 9.0, *)
func myFunction() {
    // Do this iOS 9 thing
    // Now do this iOS 9 thing
    // Celebrate our user having iOS  9
}

if #available (iOS 9.0, *) {
    myFunction()
} else {
    // Be sad because they have yet to upgrade to iOS 9
}
```

So that is how you use the new availability checking feature, a nice simple but very useful feature in Swift 2.
