---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/argument-explicity-changing-function-argument-names-magically/
author: Peter Witham
tags: ["Swift"]
title: Changing Function Argument Names Magically
date: 2016-07-26T17:28:04
blurb: Did you know arguments in Swift functions can have more than one name? Which is great for making functions self-documenting with sensible naming conventions. Open a Swift Playground and try this.
---

Did you know arguments in Swift functions can have more than one name? Which is great for making functions self-documenting with sensible naming conventions. Open a Swift Playground and try this.

### The Problem

Admit it, we have all created functions with arguments that made sense at the time. Then six months later we are wondering ‘why did I call that a, and what did b really mean and should I refactor now and risk breaking existing code?’ Let’s say there is a function something like this

```swift
func myFunction (email:String, content:String) {
    print(“To: \(email)”)
    print(“Message: \(content)”)
}

myFunction (“John@email.com”, content:”Let’s do Lunch!”)
```

From the code, it is not clear from the outside or to anyone else that ‘email’ is an address, or maybe it’s the entire email? If I am calling this function in the future, I do not want to keep looking up the code to remind myself. Sure we could fix this problem in the function with

```swift
func myFunction (email:String, content:String) {
    let emailAddress = email
    print(“To: \(emailAddress)”)
    print(“Message: \(content)”)
}
```

That way at least in debugging we will have a better sense of what that argument is supposed to be, and it will make more sense to our teammates.

### The Solution

But there is a better way, we can call the function with email having a better name but without the need to change the internal code of the function.

```swift
func myFunction (to email:String, content:String) {
    print(“To: \(email)”)
    print(“Message: \(content)”)
}

myFunction (to:”John@email.com”, content:”Let’s do Lunch!”)
```

See what we did there? We added _to_ in front of email so we can call it using _to_ but the internal code still works with _email_.

### The Wrap

Granted I do not immediately see a big use for this, but it’s a small thing to keep in the back pocket in case you need it, or just to impress your friends at scrum meetings with :)
