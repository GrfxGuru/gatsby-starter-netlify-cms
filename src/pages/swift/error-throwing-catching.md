---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/swift-error-throwing-catching/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Error Throwing and Catching
date: 2016-04-12T15:00:39
blurb: Errors are bad, you need to know how to handle them. At times you even need to create your own errors. So let's take a look at throwing and catching in Swift.
---

Errors are bad, but there are times you will want to create an error in order to deal with a situation gracefully rather than having your application do wild uncontrolled actions like freezing or closing. That is where throwing an error comes in, no it's not like a tantrum on a fake reality show, it's a real thing in Swift! Why don't we go throw somethings around to discover how it works.

Time to open another wonderful Swift playground and crank up some code. The examples below are designed to be simple demonstrations of the syntax structure when using errors, arguably you would never have simple functions like these in your code. Any time you have code that could cause an error you will want to wrap it in a _do_ _try_. Good examples are loading external files or URL's.

First I am going to create an enumeration to hold my custom error types.

``` swift
    enum ErrorList: ErrorType {
        case Fatal
        case Major
        case Minor
    }
```

Now I am going to create a function that uses the enumeration for throwing an error. The function below takes two integer arguments and compares them. If the two numbers do not match then we _throw_ an error of type _ErrorList.Major_. Otherwise a String is returned. Note something new here, we indicate that the function _throws_ an error. You put _throws_ after the argument.

``` swift
    func theFunction(a:Int, b:Int) throws -> String {
        If (a != b) {
            Throw ErrorList.Major
        }
        return "They match"
    }
```

To call the function we use a _do_ _catch_, in other languages you probably have seen this as a _try_ _catch_ statement. The _catch_ statement automatically gets the _error_ object that we use within the body, in this case a simple print statement.

``` swift
    do {
        try theFunction(1, b: 1)
    } catch {
        // You would probably have other code here
        // but for this example we will use the print statement
        print(error)
    }
```

You can create more than one _catch_ block, this is perfect for handling multiple outcomes. You may for example want to _catch_ a _Fatal_ and do something different than say a _Minor_ error.

``` swift
    func nonMatch(a:Int, b:Int) throws -> String {
        if (a == b) {
            return "They Match!"
        } else if ( a > b) {
            throw ErrorList.Fatal
        } else {
            throw ErrorList.Minor
        }
    }

    do {
        try nonMatch(10, b: 10)
    }

    catch ErrorList.Fatal {
        print("Fatal Error: The Ship is Sinking!")
    }
    catch ErrorList.Minor {
        print("Minor Error: Iceberg Ahead!")
    }
    catch {
        print(error)
    }
```

As you can see you create the specific _catches_ you want to handle different and create a generic to capture everything else.

You can also pass arguments to the error types. For example here is a new error _enum_ containing an error that accepts arguments.

``` swift
    enum NewErrors: ErrorType {
        case InvalidNumber
        case LowCount(numNeeded: Int)
    }
```


Now the error type _LowCount_ can accept an integer argument.

``` swift
    throw NewErrors.LowCount(numNeeded: 10)
```

This is a quick overview of how you can start using errors to your advantage in applications, I have purposefully kept the examples simple so those of you who have never used throw or catch before can start to play with them.

For further details you can read the [Apple documentation here](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/ErrorHandling.html).
