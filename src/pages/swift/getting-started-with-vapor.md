---
templateKey: blog-post-swift
slug: /swift-archives/getting-started-with-swift-vapor/
author: Peter Witham
tags: ["Swift", "Vapor", "Serverside"]
title: Getting Started with Swift Vapor
date: 2017-10-19T22:31:52
blurb: Swift on The Server. There is a growing popularity for using Swift on the Web. Vapor is a popular framework for doing just that. I’ll take you from start to running in this tutorial.
---

[Vapor](https://github.com/vapor) is a server-side Swift framework. It enables the creation and delivery of API’s and web applications using the Swift language. You might be asking “Why do server side with Swift? Surely we have lots of other languages we can use?”. Well, you are right. But consider this, what if you are a Swift developer that does not know Web languages like PHP, Ruby, JavaScript, or this week's fancy new web framework/language? Guess what, you can just use those new Swift skills you have been working hard on learning instead. Plus, using Vapor means you do not need a third party server like IIS or Apache to run the application. Vapor can deliver the application for you across the Web. _Time to start!_

## Check you have compatible versions of Xcode and Swift Installed

From the terminal, we will first run a script from the Web to ensure we have compatible versions of Xcode and Swift.

``` bash
    $curl -sL check.vapor.sh | bash
```

![](https://peterwitham.com/wp-content/uploads/2017/10/Terminal-Vapor-Check-Script.png)

## Install Vapor

Next, we want to install Vapor’s toolbox and Vapor, this might take a little while depending on your Internet connection. Again, we run a script from the terminal to make this install easy.

``` bash
$curl -sL toolbox.vapor.sh | bash
```
 

## Create a new Vapor project

Now that we have everything we need installed, it is time to create a Vapor application. Using the terminal we create a new application by giving it a name, this name will also be used as the folder name.

``` bash
$vapor new hello-world
$cd hello-world
```

## Create a new Xcode Vapor Project

You do not have to use Xcode if you prefer something else, for example, Sublime Text or AppCode. That said, I would recommend using Xcode to keep things simple. To use Xcode we need to create a project for Xcode to load because Vapor is not like creating a new Xcode project and selecting a template. So at the terminal simply type.

``` bash
$vapor xcode
```

When creation is complete you will be asked if you want to open the Xcode project, if you do not say yes then stop reading now as you clearly do not intend to write code at this time! OK, so project creation is complete. The next step depends on how you want to work with the application, I have included instructions for Xcode and from the terminal.

## To build the new application in Xcode

Take note of the output after you created the Xcode project. It is telling us that we need to switch to the _run_ scheme in Xcode. When you _Build and Run_ the application it will start a web server running on port 8080, you can view the application in a web browser using a local address, _http://localhost:8080_.

## To build and run the application from the Terminal

I want to give you more than one way to work with Vapor, so please know that you are not restricted to using Xcode. You can take advantage of the Swift Package Manager, this means you can build and run from the terminal as well. In the application directory, you can build from the terminal using

``` bash
$vapor build
```

  To run the application you will actually run the server using ``

``` bash
$vapor run serve
```
## The App

If we open up the web page we will not see much by default. But if we put _http://localhost:8080/hello_ we should see a rather uninteresting JSON response saying

``` json
{"hello":"world"}
```

This means everything worked just fine!

Time to move on and start writing some code. The code that generated that return can be found in _Sources>App>Routes>Routes.swift_. Let’s take a look at that file as it will show us some of the basics we need to get started.

``` swift
import Vapor

extension Droplet {
    func setupRoutes() throws {
        get("hello") { req in
            var json = JSON()
            try json.set("Hello", "World")
            return json
        }

        get("plaintext") { req in
            return "Hello, world!"
        }

        // response to requests to /info domain
        // with a description of the request
        get("info") { req in
            return req.description
        }

        get("description") { req in return req.description }

        try resource("posts", PostController.self)
    }
}
```

The main class in Vapor is called _Droplet_ this is where you will do most if not all of the needed coding for your application. Inside the _extension_ is a function that handles routing for our application. If you are not familiar with that concept, it is a way to handle URL’s and serve up the right content. Let’s take a look at one to better explain how it works.

``` swift
get("hello") { req in
    var json = JSON()
    try json.set("Hello", "World")
    return json
}
```

When the URL _http://localhost:8080/hello_ is entered in a Web browser, the application looks to see if there is code to handle a _/hello_ request. In this case, it finds one and executes the code inside. The code in this example creates a new _JSON_ object and sets the contents to “hello” and “world”. The JSON object is then returned and delivered up in the Web browser. If you were to enter _http://localhost:8080/plaintext_ you get a different result. This time a simple string of “Hello, World!” is returned to the browser.

### The Wrap

I hope that you are now comfortable installing and understanding the very basics of creating a Vapor application. As you can see, it is a lot simpler than it might first appear. This gives us a solid base from which to start exploring and really creating more useful server-side applications that we can either serve up to users directly as web applications or as API’s for our applications to work with.
