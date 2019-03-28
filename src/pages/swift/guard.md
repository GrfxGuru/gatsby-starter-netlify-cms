---
templateKey: blog-post-swift
slug: /swift-archives/basics/guard/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How-To use Guard in Swift
date: 2016-03-03T01:51:29
blurb: A basic introduction on how to use the guard statement in Swift. I'll explain why it makes code more readable and can save resources by leaving code execution early.
---

It took me a while to appreciate this one, but the Swift _guard_ statement is very useful under the right circumstances. Let's take a look at how we can use it to simplify code and maybe improve performance.

Think of _guard_ as being a way to test something and avoid executing code, in some ways it is like the testing _assert_ statement but let's not worry about that now. The interesting thing is _guard_ statements only run if the condition is not met rather than other logic operators that check until something is met and then run, take a look at this example (try it in a playground).

``` swift
var myVar = 10

func checkNum(X:Int?) {
    if (myVar < 10) {
        print("myVar is less than 10")
    } else if (myVar == 10) {
        print("myVar is exactly 10")
    } else {
        print("myVar is more than 10")
    }
}

checkNum(myVar) // Outputs "myVar is exactly 10\n"
```


This example is a little simplistic but it is great for getting the idea across, we call the function sending a value and one of the three if statements are met and a line printed on the screen. Let's say we only wanted to do something if the value is not 10, in this case, it is a simple print statement but there could be some crazy amount of functionality code going on that we want to avoid executing unless our condition is met for performance and easier code reading. Take a look at this version using the _guard_ statement instead.

``` swift
var myVar = 10

func checkNumGuard(X:Int?) {
    guard let X = X where X != 10 else {
        return
    }
    print ("all this code will be executed when X is not 10")
}

checkNumGuard(myVar) // Outputs nothing
```


A lot less code right? What is going on here.

We call the function passing it _myVar_ which has a value of 10. The _guard_ statement says let x = x if the incoming x argument is not equal to 10. Otherwise return out of this function executing no more of the function code.

Change the value of _myVar_ to anything other than 10 and the code after the _guard_ statement will execute until the end of the function.

That is how _guard_ works, it provides a great way to check something(s) and quit executing the function if those conditions are not met. This example is very simple and short, but imagine there is a lot more that the function would normally do that could consume CPU, memory or network bandwidth. All that can be avoided by performing the check and getting out of the function without further execution.

You can combine multiple statements using _guard_, let's change the function to take two arguments. Our new scenario is that we only want the code in the function to execute if _myVar_ has a value of 10 and our new _myOtherVar_ has a value of 20. If either of these values are anything else we want code execution to stop and leave the function, each check is separated by a comma.

``` swift
var myVar = 10
var myOtherVar = 20

func checkNumGuard(X:Int?, y:Int?) {
    guard let X = X where X != 10, let y = y where y != 20 else {
        return
    }

    print("myVar is not 10 and myOtherVar is not 20")
}

checkNumGuard(myVar, y: myOtherVar)
```

Play around with the values in a storyboard and see what results you get. I think you will agree this is not only more readable but more efficient that a long complicated _if_ or _switch_ statement to check the conditions.

Hopefully this gets you thinking about ways you can use _guard_ and how it also makes code more readable to developers.
