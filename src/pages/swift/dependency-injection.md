---
templateKey: blog-post-swift
slug: /swift-archives/dependency-injection/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Dependency Injection Example in Swift
date: 2018-02-03T23:04:58
blurb: Dependency Injection Sounds Hard. But it is really a fancy term for a simple concept. Let me show you how it works.
---

You have most likely heard the term, maybe even encountered it. But what is dependency injection? Well the term sounds more mystical than it really is, let’s take a down to Earth look at it.

    In software engineering, dependency injection is a technique whereby one object supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.

For my example I am going to use a simple application built in Swift that uses two views and two view controllers, I have already assigned the two viewControllers to each of the views.

![](https://peterwitham.com/wp-content/uploads/2018/02/two-viewcontrollers.png)

The first view has a button that loads the second view via a segue. This should be straight forward to understand. We simply perform the segue when the button is clicked. Now the second view has something a little different, there is a text label that will display something. To do that, we have an _@IBOutlet_ connected to the text label, but where will that data come from? I have a property on the second view controller called _theLabel_ that is of type string. We are going to inject a string into that when the segue is performed from the first view. Lastly there is one other thing to mention and that is in the _viewDidLoad_ I assign the injected property to the _@IBOutlet_ created for the text label. Here is the entire code for the second view controller

``` swift
import UIKit

class SecondViewController: UIViewController {

    @IBOutlet weak var textLabel: UILabel!
    var theLabel: String = ""

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        textLabel.text = theLabel
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
```

So let’s take a look at the injection part. We already know that the second view controller label field is dependent on a property called _theLabel_. All that remains is to inject that with something when we segue from the first view. So for that we are going to _override_ prepare for segue with the following

``` swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    let destinationController = segue.destination as! SecondViewController
    destinationController.theLabel = "Hello From View 1!"
}
```

Breaking it down, we create a new constant called _destinationController_ and we say it is of type _SecondViewController_. That gives us access to the second view controllers properties. All that is left to do is assign a string to _theLabel_ and that is it. Here is the complete code for the first view controller.

``` swift
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
       let destinationController = segue.destination as! SecondViewController
        destinationController.theLabel = "Hello From View 1!"
    }
}
```

See! I told you it sounded more complicated that it really is. Dependency Injection is really a fancy name for sending anything that is required by the destination when you instantiate it. It can be as complicated or as simple as you need.

So why bother you ask? Well, this way the destination knows nothing about where it’s dependencies are coming from, and it shouldn’t! This means we can use the destination without ever having to link any code to something else.

For example, you could inject a logger instance which means you do not need to instantiate it every time you want to use it. It also means we can change the logger any time we want without having to revisit a bunch of code to make it work with the changes, the destination simply knows that that this ‘thing’ is the logger and it can use it without caring about the details of how it exists or where. It is also a way to make testing easier on the view.

You can download a working Xcode project from [GitHub here](https://github.com/GrfxGuru/swift_dependency_example.git).
