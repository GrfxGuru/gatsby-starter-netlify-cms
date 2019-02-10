---
templateKey: blog-post-swift
author: Peter Witham
slug: /swift-archives/basics/access-control
tags: ["Swift"]
title: Swift Access Control - Private, Public and Internal
date: 2015-01-27T00:41:03
description: Access Control in swift, sounds like a 90's hacker movie term right! Well in reality it is simply the idea of saying what can and cannot be accessed in a swift classes A simple example would be that you create a class for someone else to use and you have methods that you use internally and do not want to expose for use. Let's take a look at these ideas.
---

There us currently three control methods available in Swift. Public, Private and Internal. By default Internal is used if nothing is specified.

**Public**

This means it can be accessed from any other source file in your project.

**Private**

This restricts the use of something to it's own source file, so for example a private variable can only be seen and accessed within the class file it exists in. Also remember to consider any getter and setter methods synthesized for you!

**Internal**

Internal access enables something to be used within any source file within it's module, an example of this is the internal structure of a framework, remember this is currently the default.

Let's take a look and play around a little

To play around with these ideas we sadly can not currently use the Swift Playground since it appears to ignore the control settings, so I'm using a simple OS-X terminal application, nothing more than that is needed to get the concepts across, so go ahead and create one to follow along.

File > New > Project > OS X Application > Command Line Tool.

Give the application a name and make sure _Language_ is set to _Swift_ and save the project to a location of your choice.

Click on the file named _main.swift_, currently it is very empty indeed and if you run it all you should see is 'Hello World' in the console window. This is perfect for our needs, go ahead and delete the line.

```swift
    println("Hello, World!")
```

Now we are ready to create a new class file. Go to File > New > File and choose _OS X > Source Cocoa Class_, click next. Give the class file a name and make sure again that you are using the Swift language.

I called the new file MyClass, click next and save the file. The new class file should look something like

```swift
    //
    //  MyClass.swift
    //  AccessControlExamples
    //
    //  Created by Peter Witham on 1/25/15.
    //  Copyright (c) 2015 Peter Witham. All rights reserved.
    //

    import Cocoa
    class MyClass: NSObject {
    }
```

Back in _main.swift_ let's go ahead now and make sure we have a new instance of our new class, to do that we can simply create a variable set to our class, so just under _include foundation_ add the following.

```swift
    let myClassInstance = MyClass()
```

OK that's the setup boring parts out the way, let's start coding our class file to actually do something that we can then play with, change _MyClass.swift_ so that it looks like the following, we added a variable and three methods (funcs).

```swift
        //
        //  MyClass.swift
        //  AccessTests
        //
        //  Created by Peter Witham on 1/25/15.
        //  Copyright (c) 2015 Peter Witham. All rights reserved.
        //

        import Cocoa
        class MyClass: NSObject {
            var myString:String = ""

            func myClass() {
                println("Class initialized")
            }

            func showMyString() -> String {
                return self.myString
            }

            func setMyString( newString:String ) {
                self.myString = newString
            }
        }
```

There is nothing amazing here just some simple methods to initialize the class, return and set the string variable, it should make sense to you by now, if not review [my swift posts](/swift/) to work through the basics of [functions](https://peterwitham.com/swift/basics/functions/). Let's try these functions out to ensure they work correctly, in _main.swift_ add the following after the constant we created.

```swift
    println(classInstance.showMyString())
    println(classInstance.setMyString("New String"))
    println(classInstance.showMyString())
```

The entire code of _main.swift_ should now look something like

```swift
    //
    //  main.swift
    //  AccessTests
    //
    //  Created by Peter Witham on 1/25/15.
    //  Copyright (c) 2015 Peter Witham. All rights reserved.
    //

    import Foundation

    let classInstance = MyClass()
    println(classInstance.showMyString())
    println(classInstance.setMyString("New String"))
    println(classInstance.showMyString())
```

Everything will take place in the console, firstly we display the value of _myString_ in the _MyClass_ instance, then we change it and finally display it again. Go ahead and run the application and the console should display the following

    New String
    Program ended with exit code: 0

We have an empty line since the string is empty, then the newly set value and finally the program exits. Now we are going to add a new method which we will test then change the access control to see what happens.

In _MyClass.swift_ add the following before the final closing curly brace.

```swift
    func setStringAgain( newString:String ) {
        self.myString = newString
    }
```

I know it does the same thing but it will serve our purpose in a minute trust me! Go back to _main.swift_ and call the new method after the existing code by adding the following

```swift
    classInstance.setStringAgain("Another string")
    println(classInstance.showMyString())
```

Run the application and no surprises in the console, we see both calls to display the string, one before and one after we change it the second time.

```swift
    New String
    Another string
    Program ended with exit code: 0
```

Now we will change that new method to a _private_ method so it cannot be accessed outside the class source, in _MyClass.swift_ change that new method so it reads

```swift
        private func setStringAgain( newString:String ) {
            self.myString = newString
        }
```

Go to _main.swift_ and look what happened, Xcode tells us we have an error

    'My Class' does not have a member named 'setStringAgain'


This method is no longer able to be called from outside the class because we put _private_ in front of it, that is access control in action, Xcode will try and help us out when we screw these things up!

Just for fun and to prove that the method still works you could create another public method in the class that calls the now private method by adding something like

```swift
    func reallySetStringAgain( newString:String ) {
        self.setStringAgain(newString)
    }
```

and calling that in our main file,

```swift
    classInstance.reallySetStringAgain("Another string")
```

Although it would be crazy to actually do this it does prove the point and demonstrates how you can use private methods in the class to perform functions you do not want to expose for usage outside of it.
