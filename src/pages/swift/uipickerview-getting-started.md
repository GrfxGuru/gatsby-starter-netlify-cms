---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/uipickerview-getting-started/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: UIPickerView in Swift - Getting Started
date: 2015-01-22T02:53:18
blurb: The UIPickerView is used for many things in iOS applications, getting started with it is not as hard as it might appear. Let's take a look at using Swift to build a simple UIPickerView.
---

There are some things you will most likely use a lot, it seems that one of those is the [UIPickerView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html). This is pretty straight forward to start using, so let's take a look.

In this tutorial I'm going to show you how to create a _UIPickerView_ control and power it up with some simple data, this is just a place to start from, as always there is a long journey ahead. Another plus is that if you have not been exposed to _delegation_ and _protocols_ then you will be now :)

First create a new single view project as that is all we need for this example. Then find the _Picker View_ control in the object library and drag an instance to the storyboard. You will also want to create an _@IBOutlet_ for the picker, by now I'm assuming I do not need to cover how to do that, if not then see any of my previous [Swift posts](/category/swift/).

![](https://peterwitham.com/wp-content/uploads/2015/01/01-Starting-Storyboard-with-Picker-View..png)

I feel it is worth pointing out that if you run the application before configuring the picker view then you will see nothing on the screen, go ahead and try it if you don't believe me!

From here on out we will be working in the _ViewController_ and doing everything in code, so either open up the assistant view or just open the _ViewController.swift_ file. There are a couple of steps we have to undertake to get things started.

  1. Make our _ViewController_ the _delegate_ for the picker view and it's data source.
  2. Create some data to use in the picker.

We can quickly create a basic data source to power the control by adding a simple _array_, add the following just after the opening class statement

``` swift
let myDataArray = ["Item 1", "Item 2", "Item 3"]
```

So let's start with making our _ViewController_ the delegate, if you are not familiar with delegation it actually sounds a lot more complicated and scary than it really is, essentially we are saying our _ViewController_ is responsible for the picker and has the answers to questions it will ask. To make this happen we simply alter the opening _class_ line of code to say that not only do we extend _UIViewController_ but we also use _UIPickerViewDataSource_ and _UIPickerViewDelegate_.

``` swift
class ViewController: UIViewController,
                          UIPickerViewDataSource,
                          UIPickerViewDelegate
```

At this point you may well see errors start to appear saying something like 'Type ViewController' does not conform to protocol 'UIPickerViewDataSource' in the code window, this is not surprising! We just told Xcode that our file is responsible for handling the _Picker View_ and therefore it expects us to take care of answering some questions.

Let's stop for a second and briefly talk about what that all means. When you say you are going to take care of something then naturally you need to before the compiler with be happy, this is where we start using the official documentation to our advantage since it will tell us what _protocols_ we need to satisfy. As you start doing this more often you will get used to it, essentially there are certain _protocols_ we **MUST** now provide in our _View Controller_ and there are plenty more that are optional depending on what you are acting as a delegate for.

The documentation from Apple can help answers those questions for us by telling us what is required and what else is available should we need it. One way to get to the information is to click on _UIPickerViewDataSource_ or _UIPickerViewDelegate_ and use the quick help panel found to the right in Xcode if you happen to have it open, in there towards the bottom is _Reference_ with a link you can click to open the documentation up. Or alternatively you can search the documentation using a method of your choice. Let's do it with _UIPickerViewDataSource_ first.

![](https://peterwitham.com/wp-content/uploads/2015/01/03-Documentation-—-UIPickerViewDataSource-Protocol-Reference.png)

Notice that it tells us there are two _Required_ _protocols_ we need to take care of

    - numberOfComponentsInPickerView
    - pickerView:numberOfRowsInComponent


Let's get _UIPickerViewDelegate_ information as well while we are at it. Do the same thing and you'll notice there are some starting


    - pickerView


![](https://peterwitham.com/wp-content/uploads/2015/01/04-Documentation-—-UIPickerViewDelegate-Protocol-Reference.png)

(This ends the quick overview of finding protocol requirements) OK we had to get all that out the way some time, now back to the code since we know what we need to implement (Xcode will also remind you by complaining until you satisfy the requirements).

In our _View Controller_ we now need to tell our picker control that we are acting as it's delegate and it's data source, to do that we add some code to our _viewDidLoad()_ method.

``` swift
    // Note that my outlet for the control is named myPickerView

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        myPickerView!.dataSource = self
        myPickerView!.delegate = self
    }
```

Now we need to start adding each of the protocols we **MUST** satisfy so go ahead and add the following after _viewDidLoad()_

``` swift
    func numberOfComponentsInPickerView(pickerView: UIPickerView) -> Int {
            if pickerView == myPickerView {
                return 1
            }
            return 0
        }
```

We are hardcoding the _return_ value of _1_ since we know there is only one component (selection list) in our view based on the data source we created. Also notice we are checking which picker view is calling the code this is because you could have more than one instance and want to be sure the right code executes for the right instance.

Now add the following

``` swift
    func pickerView(pickerView: UIPickerView,
                        numberOfRowsInComponent component: Int) -> Int {
            if pickerView == myPickerView {
                return myDataArray.count
            }
            return 0
        }
```

We take advantage of the _count_ method to return the total count of items in our array and say that is the number of rows to be displayed.

Finally add

``` swift
    func pickerView(pickerView: UIPickerView,
                        titleForRow row: Int,
                        forComponent component: Int) -> String! {
            return myDataArray[row]
        }
```

This is called every time a new item is created in the component, we get the label to display from the _row_ number and access that item via the array index, the value in the array at that position is is returned for display on the control.

The entire code in the _ViewController.swift_ file should look something like

``` swift
//
//  ViewController.swift
//  PickerSample
//
//  Created by Peter Witham on 1/22/15.
//  Copyright (c) 2015 Peter Witham. All rights reserved.
//

import UIKit

class ViewController: UIViewController,
                      UIPickerViewDataSource,
                      UIPickerViewDelegate {

    @IBOutlet weak var myPickerView: UIPickerView!
    let myDataArray = ["Item 1", "Item 2", "Item 3"]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        myPickerView!.dataSource = self
        myPickerView!.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func numberOfComponentsInPickerView(pickerView:UIPickerView) -> Int {
        if pickerView == myPickerView {
            return 1
        }
        return 0
    }

    func pickerView(pickerView: UIPickerView,
                    numberOfRowsInComponent component: Int) -> Int {
        if pickerView == myPickerView {
            return myDataArray.count
        }
        return 0
    }

    func pickerView(pickerView: UIPickerView,
                    titleForRow row: Int,
                    forComponent component: Int) -> String! {
        return myDataArray[row]
    }
}
```

Now run the application and you should have a picker displayed showing our list of items!

![](https://peterwitham.com/wp-content/uploads/2015/01/05-iOS-Simulator.png)

So there was a lot to read for just one simple(?) control, but we had to cover some important topics like delegation and protocols and this felt like the time to get an introduction out of the way.

From here your home work is to see what changes you would need to make for displaying more than one component in the control and have say two selectors. A natural progression from this would be to look at the date and time picker which has lots of components.
