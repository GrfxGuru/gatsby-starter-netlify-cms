---
templateKey: blog-post-swift
slug: /swift-archives/intermediate/how-to-save-and-load-your-ios-application-settings-using-userdefaults/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How To Save and Load Your iOS Application Settings Using UserDefaults in Swift 3
date: 2016-09-11T23:23:46
blurb: Saving and loading user settings in your application is a simple process thanks to UserDefaults. I will show you how to achieve this in Swift 3 with just a few lines of code.
---

Most applications you write, regardless of type will require the saving and loading of user settings at some point. If that data is simple and straight forward then you can use _UserDefaults_ to achieve this with just a few lines of code. Here’s how.

### The Set-Up

For this example, I am going to have a text field you can enter text into that gets saved and restored when the application loads, a switch that will restore it’s on/off state, and finally a button to save the settings. Create a _single view iOS Swift Application_ and follow along.

### Build the Example UI

Add a _Text Field, Switch,_ and _Button_ to the stage, if desired add constraints to keep the UI nice.

![](/img/post_images/sboard-tf-sw-bt.png)

Now, add an _IBOutlet_ for both the *Text Field* and the _Switch_. Lastly, add an _IBAction_ for the _Button_, these should be in the _ViewController.swift_. If you were to run the application now, you could certainly enter text and toggle the switch, but if you closed the application (I mean CLOSE and not just hit the home button to send it to the background), everything would be restored back to the default setting. So let’s add the magic that stores our state.

### What is UserDefaults

Before we go any further, I want to briefly talk about what _UserDefaults_ can do for us and how it works. _UserDefaults_ is much like a plist, a plist is a simple _key-value_ pair file that stores types of data. We give each item a name and value for retrieval later. The following types of data can be stored.

- NSData
- NSString
- NSNumber
- NSDate
- NSArray
- NSDictionary

As you can see it is clearly designed for small simple chunks of data that you would use for settings and the like. When we create an instance of the _UserDefaults_ object, it returns to us what is essentially a _singleton_ as each subsequent reference returns back that same instance rather than creating a new one. Enough information, on with the show that you probably came here for! A little planning is required here as to what we need to do, so let’s make a requirement list of what we need the app to do and when.

- We need to allow for the first run experience when there is no settings file.
- We want to load the settings when the app loads and set the UI up if any settings exist.
- We want to save the settings when the button is clicked.

OK, so time to code up the requirements.

### Load Our Settings on Application Load

First, we need to get access to NSUserDefault, we will do that in the _viewDidLoad()_ for this example. Since we want to be a good Swift citizen we will use a _let_ rather than var.

```swift
let defaults = UserDefaults.standard
```

Since we would expect to use the key names for reading and writing, we want to minimize the chances of typo’s. To do that we will use _constants_ for them. Just inside the class, add two constants, one for the text field key name, and another for the switch key name.

```swift
let textFieldKeyConstant = “textFieldKeyName”
let switchKeyConstant = “switchKeyName”
```

Now we can use those and never have to worry about typing a name wrong. Next back inside the _viewDidLoad()_ after our _defaults_ line, we will get and assign the values. **BUT** we need to practice safe coding, so we will check that there is a value to load.

```swift
if let textFieldValue = defaults.string(forKey: textFieldKeyConstant) {
    myTextField.text = textFieldValue
}
```

Now we will add the switch. Since it simply needs a _boolean_ to turn either on or off, we can get the value and set the switch a different way.

```swift
if (defaults.bool(forKey: switchKeyConstant)) {
    mySwitch.isOn = true
} else {
    mySwitch.isOn = false
}
```

That is the reading and UI setup completed, now the last step is to wire up the button to save the settings.

### Save Our Settings with the Button

Inside the function we assigned to the button, we again get a reference to our _UserDefaults_ and then set values for the two key names.

```swift
let defaults = UserDefaults.standard
defaults.setValue(myTextField.text, forKey: textFieldKeyConstant)
defaults.set(mySwitch.isOn, forKey: switchKeyConstant)
```

Notice we use two different methods for storing the values, one for a _string_ and another for a _boolean_. Syntax autocomplete will provide you a list to choose from, so be sure to pick the right one for the value type you are using. So that is our coding completed, running the application and touching the button will store the values you set each time the application is run (again, do not confuse going to the background with starting the application). Here is the complete code for the _viewController.swift_ in my application.

```swift
//
//  ViewController.swift
//  NSUserDefaultsExample
//
//  Created by Peter Witham on 9/11/16.
//  Copyright © 2016 Peter Witham. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    let textFieldKeyConstant = "textFieldKeyName"
    let switchKeyConstant = "switchKeyName"

    @IBOutlet weak var myTextField: UITextField!
    @IBOutlet weak var mySwitch: UISwitch!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let defaults = UserDefaults.standard
        if let textFieldValue = defaults.string(forKey: textFieldKeyConstant) {
            myTextField.text = textFieldValue
        }

        if (defaults.bool(forKey: switchKeyConstant)) {
            mySwitch.isOn = true
        } else {
            mySwitch.isOn = false
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func myButton(_ sender: UIButton) {
        let defaults = UserDefaults.standard
        defaults.setValue(myTextField.text, forKey: textFieldKeyConstant)
        defaults.set(mySwitch.isOn, forKey: switchKeyConstant)
    }
}
```

### The Wrap

I hope this gives you an insight as to how easy it is to store settings for your applications. As you can see the code involved is only a few lines. The same method works for Swift 2, only the names of some methods and objects have changed. For example _UserDefaults_ in Swift 2 is _NSUserDefaults_.
