---
templateKey: blog-post-swift
slug: /swift-archives/basics/variables/
author: Peter Witham
tags: ["Swift"]
title: Swift Variables
date: 2014-06-24T04:38:08
blurb: We look at creating and using variables in Swift. Variables are the building blocks of our application data, understanding these are a vital skill in application development.
---

Yes, this is a basic introduction, but it all has to start somewhere and maybe you are new to programming and programming concepts. If you feel this article is below you, then please skip it, but there is a few things worth noting in the new Swift language even for us seasoned developers.

_We shall begin…_

Everything starts from simple small pieces of information and works upwards, from a simple ‘Hello!’ printed to the screen in a terminal to a complex 3D game, these simple pieces are most likely going to be variables, there are many types but the basic principles of creating and using them are the same. Variables are the very DNA of our applications, without them we are just shouting _Hello World!_ In a standard font and not making it on the App store.

Variables get defined, used and changed on the fly unless they are constants. For example, a game score starts with a number 0 and if you are good at the game, it goes up! Or maybe it is a string holding the name of a player, this might be a constant if the player never changes. What about information containing over one item, then its Arrays or Dictionaries we will talk about them in the future.

In Swift like other languages there are rules to follow, here are the common ones you need to know to get started, firstly there are two basic types; _Standard Variables_ and _Constants_

### Standard Variables

  * They must be defined before they can be used, if you try to use one before defining it the compiler will be unhappy, you will be unhappy, the application might have a run time error and your wages check might be $undefined. No Pizza for you!
  * You can change their values when you want but remember a string is a string and an integer is an integer. If you want to switch their types around then you must do it with code.
  * Whilst we can specify the type of a variable, the Swift compiler is smart enough to figure it out for us using something called _Type Inference_. There is an exception here though if you define a variable but give it a value later then you should specify the type at definition so the compiler knows what it will hold later.
  * If you try to do something with a variable of a certain type that makes no sense then the compiler will try to help you out by slapping your wrist and asking you to reconsider.

So Let's create variables!

To define a new variable we place _var_ in front of the variable name and after it a colon followed by the type.

```swift
var myName: String
```
Now let’s populate the variable with a value

```swift
myName = “Peter”
```

Assuming you want to set the value at the time you create the variable then there is a much better and shorter way to do the above whilst taking advantage of Type Inference

```swift
var myName = “Peter”
```

Remember the compiler is smart enough to see that the value is a string and set the type for us, I wanted to show you both ways so you’ll recognize them out there in the World.

Now what if we want to change the value of the variable? We do so but without using var again because we have already defined the variable.

```swift
myName = “Peter Witham”
```

### Constant Variables

  * They follow many of the same rules as standard variables _EXCEPT_ you can only set their value once.
  * You can set the value of a constant later after defining it. This will help save a little memory until it is need, but again remember you can only _SET IT ONCE_

We tell Swift that we want to create a constant by using the _let_ keyword instead of _var_

```swift
let myName = “Peter”
let mySiteIsHelpful = true
```

mySiteIsHelpful will be seen as a _Bool_ by Swift and that means it is _true_ or _false_. If you try to assign a new value to a constant, then you will get a nasty error, you have been warned!

**_Now Some Usage Examples_**

Here is an example of how you can create and use two variables inside a string, note we can define more than one variable per line by separating them with a comma

```swift
let firstName = “Peter”, lastName = “Witham”
let fullName = “Hello, my name is \(firstName) \(lastName), pleased to meet you!”
```

So breaking this down we first create the _firstName_ and _lastName_ variables and give them values. Then we create another variable called _fullName_ and assign its value by telling Swift we want a string that contains parts of a string and the value of the two variables. We show where we want the variables values to appear value with ()

The result would be the same as saying

```swift
let fullName = “Hello, my name is Peter Witham, pleased to meet you!”
```

Another example would be using math in a string and performing a calculation of the two variable values.

```swift
var a=10, b=5
let addBothResult = “\(a) plus \(b) equals \(a+b)”
```

How about a collection of data in an Array

```swift
var seasons = [“Winter”, “Summer”, “Fall”, “Spring”]
```

Now lets use the println function to display each season

```swift
for season in seasons {
    println(“Season Name: \(season)”)
}
```

Alternatively, let us get at the second item in the Array by using it's index. Arrays are what we call a 'zero based index' meaning the first item is actually at index 0. So to get at the second element we would use the following

```swift
println("Season 2 is: \(seasons[1]))
```

So there is a basic introduction to Variables in Swift.

---

### Notes

This would be a good time to mention that if you have access to Xcode 6 the new playground features are ideal for learning and playing with everything we have discussed so far and going forward.

There are many types of variables, far too many to list here right now. Instead, I suggest you check out the documentation at the [Apple Developer Site](https://developer.apple.com) or the Xcode help files. I know this is a basic introduction, but we have to get the syntax foundations out of the way. I would suggest not worrying about learning all the different types ahead of time, instead get down the basic ones and learn the others as you need them in your code.

---
