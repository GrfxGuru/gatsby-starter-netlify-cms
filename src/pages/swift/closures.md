---
templateKey: blog-post-swift
slug: swift-archives/basics/closures/
author: Peter Witham
tags: ["Swift"]
title: Swift Closures
date: 2014-07-15T08:45:20
description: You maybe familiar with Closures from other languages, simply put they are blocks of code assigned to a variable. But there is much more to them than that.
---

You maybe familiar with Closures from other languages, simply put they are blocks of code assigned to a variable. In this example we create a closure called _welcome_ take note of the syntax in this example, it takes no arguments but returns a string. Then we simply call it like a function, try this in a playground and see what you get back, it should be “Hello!”

```swift
    let welcome : () -> (String) = {
            return("Hello!")
        }

        welcome()
```

A closure can also be used as a parameter when calling a function, this may take a little getting used to if you have not spent any time with closures in other languages. This is an interesting example of Swift taking a look at what works in modern languages and adopting it for it’s own use. In the example below we call a function and give it a closure we want to execute in that function, this one simply returns a string.

```swift
func greeting( task: () -> (String)) {
        task()
    }

    greeting( {return("Hello there!"} )
```

There is a shortcut that can be taken here if the closure is the last argument, doing something called a ‘Trailing Closure’. To make this a little clearer and easier to understand I have added another parameter to the greeting function even though we do not use it.

```swift
func greeting(someNum: Int, task: () -> (String)) {
        task()
    }

    // Original way of calling
    greeting (5, {return("Hello there!")} )
    // Now as a trailing closure
    greeting (5) {
        return("Hello there again!")
    }
```

In some situations you may find the code easier to read and follow using the trailing closure approach.

[Link to Apple Swift Closures Documentation](https://developer.apple.com/library/prerelease/ios/documentation/swift/conceptual/swift_programming_language/Closures.html)
