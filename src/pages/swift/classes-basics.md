---
templateKey: blog-post-swift
slug: /swift-archives/swift-archives/basics/classes/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Swift Classes - The Basics
date: 2014-07-08T07:45:35
blurb: Classes in Swift are something you will be using a lot if you want to really get to grips with creating applications. Let's dive in and learn.
---

Classes in Swift are something you will be using a lot if you want to really get to grips with creating applications. I suggest that if you do not know what Object Oriented Programming methodology is that you at least read up on the basics before starting any serious development, there is a highly regarded book by Erich Gamma on the subject titled [Design Patterns: Elements of Reusable Object-Oriented Software.](http://www.amazon.com/gp/product/0201633612/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0201633612&linkCode=as2&tag=peter0ad-20&linkId=QPD2HKXTZANO4NYF)![](http://ir-na.amazon-adsystem.com/e/ir?t=peter0ad-20&l=as2&o=1&a=0201633612)

Classes in Swift are simple to create and use, this is I feel an improvement over Objective-C where at times it felt harder than it needed to be due to the syntax involved.

To follow along I suggest creating a playground so you can instantly see the results.

**_Creating a Class_**

To create a new Class we use the _class_ keyword followed by the name we want to use for the class (this is also what you should use for the name of the file when creating real classes).

``` swift
class MyPet {
}
```

For the Objective-C users out there notice that we do not have to specify a base class and we do not need to use header classes, this will either make you cry or cheer :)

Now at the moment the class does absolutely nothing, it’s useless! To store data in our classes we use something called _properties_, these are really just variables inside the class. To brush up on [variables in Swift](http://www.peterwitham.com/basics/variables/) I suggest reading [my post](http://www.peterwitham.com/basics/variables/) on the subject.

**_Adding a Property_**

So lets add a property to our class. We want our class to know how many legs the pet has, so we add what is called a _stored property_, as the name suggests it simply stores a value. Just for reference we can also use constants by using the _let_ keyword.

``` swift
class MyPet {
    var numberOfLegs = 0
}
```

There is another kind of property called a _computed proerty_, this kind of property generates a value when it is called. For our class let’s add a description which is of type _String_ using a computed property. To get the value of description we use the OOP idea of a _getter_ to unsurprisingly _get_ the property. For those new to Object Oriented Programming, a quick note that we _get_ and _set_ properties in a class, we DO NOT access them directly. If you even try and access them directly the programming police will come and arrest you! It’s considered VERY bad Karma :)

``` swift
class MyPet {
    var numberOfLegs = 0
    var description: String {
        get {
            return "This pet has (numberOfLegs) legs"
        }
    }
}
```

When a property only has a _get_ and now _set_ it is considered to be read only, this is one way you can protect that property from changing outside of the class. As of this post Swift does not yet have things like _private, protected or public_ properties. You can actually remove the _get {}_ entirely if you wish and the end result would be the same, however I think it is more readable for those learning to clearly see the get and set.

**_Initialize or ‘Use’ our new Class_**

Now to use our new class, this is called _initializing_ the class. To do so we simply need to create a variable that will hold the _instance_ of the class, you will immediately realize that this is the same as using any of Swift’s prebuilt classes.

``` swift
let somePet = MyPet()
```

So what happened here is we now have a new instance called _somePet_ that by default has no legs. So don’t expect to play ball unless you want to end up chasing the ball yourself!

A couple of things I want you to take note of here. Firstly, Swift’s type inference is smart enough to realize that our new instance is of a type _MyPet_ and that [ARC](https://developer.apple.com/library/prerelease/ios/documentation/swift/conceptual/swift_programming_language/AutomaticReferenceCounting.html) (Automatic Reference Counting) is taking care of the memory allocation for us, yay for [ARC](https://developer.apple.com/library/prerelease/ios/documentation/swift/conceptual/swift_programming_language/AutomaticReferenceCounting.html)!

Now let us check that description to query how many legs our pet has incase we already forgot

``` swift
println(somePet.description)
```

It’s that simple.

But what if you want to change the number of legs, maybe your pet mutated or evolved over night like a Gremlin. So let’s change the number of legs of our existing instance.

``` swift
somePet.numberOfLegs = 5
println(somePet.description)
```

Why on Earth does your pet have 5 legs? OK OK, most of us prefer cats or dogs, but whatever you have is your problem to clean up after. But what if we want to set the number of legs when the instance is created? To do that we need to add some parameters to our class initialization. While we are at it, it’s only right our pets are given names so lets add that as a parameter as well. To achieve the goal we add our own _init()_ method (Methods are what we call functions when inside a class) and add the arguments there.

``` swift
class MyPetWithArgs {
    var numberOfLegs = 0
    var name:String;
    var description: String {
        get {
            return "This pet has (numberOfLegs) legs"
        }
    }
    init(var startingLegs: Int, var name: String) {
        self.numberOfLegs = startingLegs
        self.name = name
    }
}

let anotherPet = MyPetWithArgs(startingLegs: 4, name: "Snuggle Bunny")
```

And finally to complete our basic example we will add a method to make our pet go to sleep.

``` swift
class MyPetWithArgs {
    var numberOfLegs = 0
    var name:String;
    var description: String {
        get {
            return "This pet has (numberOfLegs) legs"
        }
    }
    init(var startingLegs: Int, var name: String) {
        self.numberOfLegs = startingLegs
        self.name = name
    }
    func Sleep() -> String {
        return "(name) is now going to sleep Zzzzz"
    }
}


let anotherPet = MyPetWithArgs(startingLegs: 4, name: “Snuggle Bunny”)
anotherPet.Sleep()
```

So that’s it for the basics of creating classes in Swift. In a future post we will look at some of the more interesting things you can do like subclasses and observers.
