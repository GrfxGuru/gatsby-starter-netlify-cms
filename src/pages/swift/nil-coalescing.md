---
templateKey: blog-post
slug: /swift-archives/intermediate/nil-coalescing/
author: Peter Witham
tags: ["Swift"]
title: Swift Nil Coalescing
date: 2014-10-09T01:59:19
description: Nil Coalescing used with a ternary operator can be a great way to shorten our code and avoid those embarassingly simple _if_ blocks that we some times find ourselves putting in code.
---

How many times have you done some simple logic along these lines?

```swift
var userName:String?
var defaultUserName = "Guest User"
var loggedInUserName:String

if userName != nil {
    loggedInUserName = userName!
} else {
    loggedInUserName = defaultUserName
}

// loggedInUserName would be "false Guest User" until userName has a value
```

Well why not keep the code simple and stop your developer friends from teasing you by making these more efficient and impressive looking by using the _Nil Coalescing Operator_. You can represent the above with the simpler code below

```swift
var loggedInUser = userName ?? defaultUserName

// Now try it again but set a value for userName
userName = "Peter"
var loggedInUser = userName ?? defaultUserName
```

So OK this is not a great example of code mastery but you get the idea, we can use the operator along with a _ternary_ conditional and unwrapping to check a value then set a variable based on those results without having to use an _if else_ block.

---

### Notes

Not much more to explain on this one, just go have fun with it and thank me later for saving a few lines of code now and again!

---
