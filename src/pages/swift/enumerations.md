---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/enumerations/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Enumerations
date: 2014-10-07T00:40:43
blurb: Enumerations in Swift are nice way to define a group of values and then require you to work with only those defined values. But there is more to it than that, let's take a look.
---

What is a Swift enumeration? Well to quote the official documentation

> An enumeration defines a common type for a group of related values and enables you to work with those values in a type-safe way within your code.

_OK, so seriously, what is an enumeration?_

Well it turns out that the documentation is pretty accurate but makes them sound more complicated than they really are (because programmers like to do that), the easiest way to learn what they are is to just play with them. Let’s open a new Swift playground and start playing.

To create an enumeration or as it is referred to in the language _enum_ we do so like this, lets make an _enum_ that holds possible options for exits from a house. We will call it _DoorUsed_

``` swift
    enum DoorUsed {
        case FrontDoor
        case BackDoor
        case SideDoor
        case GarageDoor
    }
```

The values we list are referred to as _member values_ of the enumeration. We use the _case_ keyword to indicate that a new line of member value is about to be defined. The important take away here is that _enums_ when used can only have the possible values you list inside the _enum_. Note that you can define them all on one line by using a comma separator. So the above can also be defined in this way

``` swift
    enum DoorUsed {
        case FrontDoor, BackDoor, SideDoor, GarageDoor
    }
```

Each of _member value_ (sometimes just referred to as _member_) defines a new _type_ and the name should start with a capital letter. When it comes to using this new enumeration there are a couple of different ways we can do it just like any variable declaration.

``` swift
    // Method 1 is to declare the variable and assign the value at the same time.
    // type inference will give it a type of DoorUsed.

    var peterUsedDoor = DoorUsed.FrontDoor
```

Notice the first advantage of using an _enum_, when you type _DoorUsed._ auto complete only gives you the four available options anything else you type will generate an error. So this gives us the ability to only use available options and not set a value that will cause problems.

``` swift
    // Method 2 is to declare the variable and assign the type but not an initial value
    // you will see this one a lot so pay attention to the syntax.

    var paulUsedDoor: DoorUsed

    // Now let's set the value and notice the shortened way of doing that, this one is out
    // there in the wild my friends so get used to it.

    paulUsedDoor = .BackDoor
```

In method 2 we can simply set the value by specifying _.BackDoor_ as the type has already been set (explicitly-typed), the same rules will apply regarding possible values.

Another advantage when using enumerations is assessing the value of a variable of that type since every possible value is already known (remember enumerations contain all the possible values). To demonstrate this we can use a switch statement, you should note that unlike a normal _switch_ statement in Swift, we do not need to define the _default_ case as all possible values are already known for the enumeration but you can if you wish (but why would you other than you did something wrong in the first place?)

``` swift
    switch peterUsedDoor {
        case .FrontDoor:
            println("Front door was used")
        case .BackDoor:
            println("Back door was used")
        case .SideDoor:
            println("Side door was used")
        case .GarageDoor:
            println("Garage door was used")
    }

    // Output in the playground should show :Front door was used".
```

You must specify a case for every possible value in the enumeration otherwise the compiler will tell you that you have a problem “_switch must be exhaustive_”, and you really do not want to make the compiler mad! To test this just delete one of the _case_ statements and see what happens.

#### Associated Values

An associated value gives us the ability to attach extra information to each value of an enum. In other languages these are sometimes referred to as _discriminated unions_ or _tagged unions_. An associated value in Swift can be of any type and each case can have it’s own types if needed, for example one case might have an image and another an audio type.

To demonstrate this we will create a new enumeration with a case than can hold an associated value of type _String_ and another than can hold 3 value types of _int_ in a _Tuple_, I discuss tuples in ‘[Functions - The Basics](/swift/basics/functions/)’

``` swift
    enum ExampleAssociation {
        case Name(String)
        case Nums(Int, Int, Int)
    }
```

Now we will create two different variables to demonstrate using this new enumeration.

``` swift
    var myName = ExampleAssociation.Name("Peter")
    var someNums = ExampleAssociation.Nums(4, 12, 16)
```

Again we can check the values with a switch statement if we want to, but this time we can also access the associated values.

``` swift
    switch myName {
        case .Name (let name):
            println("The value of name is \(name)")
        case .Nums(let value1, let value2, let value3):
            println("The value of value1 is \(value1)")
            println("The value of value2 is \(value2)")
            println("The value of value3 is \(value3)")
    }
```

Now you might be thinking _hey wait why do we have to use the case .Nums in the switch for this variable?_ The answer is to remember that you must provide a case for every possible value of the enumeration. The same applies for the second variable.

``` swift
    switch someNums {
        case .Name (let name):
            println("The value of name is \(name)")
        case .Nums (let value1, let value2, let value3):
            println("The value of value1 is \(value1)")
            println("The value of value2 is \(value2)")
            println("The value of value3 is \(value3)")
    }

    // You can save some typing and assign the let after the case, so you could do

    switch someNums {
        case let .Name (name):
            println("The value of name is \(name)")
        case let .Nums (value1, value2, value3):
            println("The value of value1 is \(value1)")
            println("The value of value2 is \(value2)")
            println("The value of value3 is \(value3)")
    }
```

So clearly you might consider this some what of a draw back, but this example was just to show you how to access the associated values. You should also consider using the associated values in a better way than this example as they are assigned to constants but could they be undefined or null ..? There is your home work to find out and if so how do you deal with it (if any … no hints)!

### Raw Values

Where as associated values let you specify the value outside of the enumeration, raw values give you the ability to declare a value inside the enum _BUT_ you must specify the type for the enumeration using this technique.

``` swift
    enum AnotherEnum  : String {
        case Name = "Peter"
        case WebSite = "https://www.peterwitham.com"
    }

    var myName = AnotherEnum.Name
    var myWebsite : AnotherEnum
    myWebsite = .WebSite

    // Now let's access those values using the handy .Raw()
    myName.toRaw() // Outputs "Peter"
    myWebsite.toRaw() // Outputs "https://www.peterwitham.com"
```

But what if a variable has no value? We should handle this in the appropriate way that by now I think as a Swift coder you are getting used to _optionals_ (see [my post on Optionals](/swift/intermediate/optionals/). Your homework is to figure out how you might deal with this situation, I have to give you something to take away and try right!
