---
templateKey: blog-post
slug: /swift-archives/intermediate/optionals/
author: Peter Witham
tags: ["Swift"]
title: Swift Optionals
date: 2014-07-23T08:05:39
description: Optionals in Swift are a _safe_ way to use variables. They represent a value that has been set, or should I say they say a value exists. Let's take a look at the how any why we should use them.
---

In Swift an Optional Type is considered a _safe_ way to use variables. An Optional can represent a value that has been set or more importantly the lack of a set value as they default to _nil_ when no value is present (yes that technically means they do always have a value). You tell Swift that you want to use an optional type by using _?_ after the variable type, so for example.

```swift
var myOptionalVariable: Int?
// the value of myOptionalVariable is initialized to nil
```

The important thing here for Objective-C developers is that unlike Objective-C where nil only works with reference types and nil means _nothing_, in Swift _nil_ is a true value and it means there is no value present. If the value of an Optional is not _nil_ then the value is said to be _wrapped up_ in the variable and that means we need to unwrap it to gain access to the value(s) inside.

Let me quickly point out here that the opposite to an Optional type is a Non-Optional Type and those are things like Strings and Classes. A Non-Optional Type cannot be nil. The Swift compiler helps you out here but not allowing you to do something crazy like

```swift
var myNameString: String = nil
```

The line above would cause a compile error, again this is Swift helping you make better code and being a better developer as I am sure you will quickly learn from the compiler hitting you over the knuckles a few times until you stop doing it. Just be glad it does not make you write 100 lines on the blackboard after school.

**_Return Types_**

We can also use Optional Types in return statements, yet another way for us to practice safe coding. Note the _?_ after _Int_ in the return type. If this code seems a little alien to you still I recommend reading my post on [Swift Functions - The Basics](/swift/basics/functions/). The function below takes two parameters, a string to search for and the array in which to search. If a match is found the index of that match in the array will be returned otherwise we get _nil_ back.

```swift
func indexOfMyName(name: String, namesArray: [String]) -> Int? {
    // Note that enumerate is part of the standard library,
    // It returns an Optional : of each item in
    // the specified array
    for (index, value) in enumerate(namesArray) {
        if value == name {
            return index
        }
    }
    return nil
}
```

**_Upwrapping Optional Types_**

Unlike that sweater or socks you got for Christmas, you do actually want to unwrap the gift an Optional Type gave back to you. It is important that we still check that we have a value even if it is nil, this is easily done though and something you should get used to. In the example below we have an Optional Variable that gets defined and then we check to see if it has a value and do something accordingly. Something note worthy here is Optional Types can be checked as if they were booleans, although they are not. We can _unwrap_ the Optional by assigning it to a variable at the same time as we test it, in this case with the _let unwrappedType = myVariable_ line at the beginning of the _if_ statement.

```swift
var myVariable: Int?

if let unwrappedType = myVariable {
    println("We have a value which is not nil and is in fact (unwrappedType)")
} else {
    println("The value is nil, we got socks for Christmas")
}
```

**_Optional Chaining_**

Another great feature of Optionals is the ability to chain them together allowing us to simplify our code and check many things at the same time. Unless you really like huge nested _if_ statements that always entertain and amuse your team mates right?…Hands up those who have done it!

So with chaining we can take something like this where we require myVar1, myVar2 and myVar3 to all be happy to finally assign a value to _myVariable_ that we defined at the beginning.

```swift
var myVariable: Int?

if let myVar1 = someOptional.someKey {
    if let myVar2 = myVar1.someKey {
        if let myVar3 = myVar2.someKey.toInt() {
            myVariable = myVar3
        }
    }
}
```

And turn it into a much more graceful

```swift
if let myVariable = myVar1.someOptional.someKey?.myVar2.someKey?.toInt() {
    // Do something as we got a value
} else {
    // Do something we got a nil back
}
```

As we work through the chain of if statements, if at any point one of them returns nil then the chain stops and we do not continue. Take some time to think this through, it can seem a little confusing at first.

---

### Notes

So to wrap up this overview of Optionals, use them in cases where you think you might get a missing value and want to ensure you have a ‘way out’ that does not involve a crash or unexpected behavior. It is also another good way to practice _safe_ coding in Swift.

There is a LOT you can do with this power, here is a [link to chaining Optionals](https://developer.apple.com/library/prerelease/mac/documentation/Swift/Conceptual/Swift_Programming_Language/OptionalChaining.html) for further reading if you are interested.
---

