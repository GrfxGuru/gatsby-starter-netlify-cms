---
templateKey: blog-post-swift
slug: /swift-archives/basics/generics/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Generics
date: 2014-10-01T04:12:15
blurb: Generics in Swift provide us another way to practice safe coding. There comes a time when you will not know the type of something, generics gives us a mechanism to handle that.
---

_Generics_ give us the type safety of Swift with strong typing but also allows us to deal with those situations where we do not always know what the _type_ of something is going to be. Sounds a little vague right? Well let’s take a look with some code to get a better understanding of the basics.

``` swift
        let myInts = [5,10,15,20]
        let myStrings = ["Hello", "There", "How", "Are", "You"]

        //  is used to define the generic type and is typically called T
        // however you can use anything

        func echoArray(theArray : [T]) {
            for eachitem in theArray {
                print(eachitem)
                print(",")
            }
            println()
        }

        echoArray(myInts)
        echoArray(myStrings)

        // Output will be
        // 5,10,15,20,
        // Hello,There,How,Are,You,
```

We can also return the unknown type by returning _T_ which will return the same type going in. In this example we are returning the last element of the array.

``` swift
        let myInts = [5,10,15,20]
        let myStrings = ["Hello", "There", "How", "Are", "You"]

        //  is used to define the generic type and is typically called T but can be anything
        func echoArray(theArray : [T]) -> T {
            for eachitem in theArray {
                print(eachitem)
                print(" || ")
            }
            println()
            // return the last element of the array
            let lastItem: T = theArray[theArray.count-1]
            return lastItem
        }

        echoArray(myInts)  // Will output 20
        echoArray(myStrings) // Will output "You"
```

So if we send in an array of strings then we get a string back and if we send in an array of integers we get an integer back. So hopefully you see why _Generics_ can be very useful, they save us from writing almost identical code over and over. In this case it saved us writing a function to handle an array of strings and another to handle an array of integers just because the types are different.

