---
templateKey: blog-post-swift
slug: /swift-archives/ios-10-local-notifications-using-swift-3/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How To Create iOS 10 Local Notifications Using Swift 3
date: 2017-03-10T02:38:53
blurb: A simple example showing how to create and trigger a local app notification using Swift 3.
---

# How To Create iOS 10 Local Notifications Using Swift 3

## The Problem

Your iOS 10 application is running in the background on a user's device, and you need to notify them that something needs their attention.

## The Solution

The best way to handle this situation is to use the local notification system to get the users attention. Plus if they miss it, it will also be logged in the notification center. This is very straight forward, here is a simple example.

## The Setup

First, create a single view iOS application with the Swift Language. I went with a universal device, the choice is up to you, it makes no difference for this example.

## The Code

### Setup The Request For Permission To Use Notifications

As part of the first run experience for the application, we need to ask the user for permission to send them notifications. To do that, open _ViewController.swift_ and add the following. First, at the top of the file before the opening _class_ code, we will import _UserNotifications_

``` swift
import UserNotifications
```

Next, we will add a function to perform the check and ask the user for permission. In the _class_ add a new function.

``` swift
func initNotificationSetupCheck() {
    UNUserNotificationCenter.current().requestAuthorization(options: [.alert])
    { (success, error) in
        if success {
            print("Permission Granted")
        } else {
            print("There was a problem!")
        }
    }
}
```

I have added two statements that will print to Xcode’s console whether the user gave permission or not, mostly this is simple because there is no other feedback to know which outcome occurred. Now we need to call this new function in the _viewDidLoad()_ method. I want to point out here to those of you saying “But we could just add this directly to _viewdidLoad()_”, yes indeed you can if you want. However, consider this a cleaner method for when an application grows and we have to deal with a lot more code and maybe want to change this section later. Plus it reads cleaner in my opinion. So the _viewDidLoad()_ should look like this

``` swift
override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    initNotificationSetupCheck()
}
```

If you run the application now, you should get the permission request popup appear. This will only happen one time, to try it over again, you will have to remove the application from either your device or the simulator.

### On To The Notification

Add a button to the _storyboard_ and give it a label. Also, create a new _@IBAction_ so we can add some code. I am going to assume you know how to do that if not, check out my other [Swift posts](/tags/swift/) . Go back to the _viewController.swift_ file and in the new action for the button that you just created, add the following code.

``` swift
let notification = UNMutableNotificationContent()
notification.title = "Danger Will Robinson"
notification.subtitle = "Something This Way Comes"
notification.body = "I need to tell you something, but first read this."

let notificationTrigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)
let request = UNNotificationRequest(identifier: "notification1", content: notification, trigger: notificationTrigger)

UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)
```

Time to break this code down!

``` swift
let notification = UNMutableNotificationContent()
```

We create a new object that will hold the data for our notification. There are several properties available, in this example, we set a title, subtitle, and body text with the following.

``` swift
notification.title = "Danger Will Robinson"
notification.subtitle = "Something This Way Comes"
notification.body = "I need to tell you something, but first read this.”
```

Next, we need a trigger to make the notification fire. **But!** We need to have the application in the background, so I created a timer that will fire five seconds after we touch the button, this gives us enough time to get back to the home screen.

``` swift
let notificationTrigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)
```

Now that we have our notification object and a way to trigger it, we need to create a _request_ object to send to iOS asking for our notification to be registered and ready for use. I want to thank [Moh Tabi](https://medium.com/@mohtab99) on medium, for the very important point that each notification needs to have a unique identifier. The reason, if you send another notification request with the same identifier it will over-write the previous.

``` swift
let request = UNNotificationRequest(identifier: "notification1", content: notification, trigger: notificationTrigger)
```

Lastly, we send our _request_ to iOS.

``` swift
UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)
```

### Time To Test

With everything in place, we are now ready to run the application. Remember! You have five seconds to get to the home screen after touching the button. If everything goes well you should see the notification appear, you can touch it and the application will return to the foreground.

![iOS 10 Simulator showing notification](https://peterwitham.com/wp-content/uploads/2017/03/iOS10-Simulator-With-Notification.jpg)

## The Wrap

The process for creating a local notification using Swift 3 for iOS 10, feels a lot simpler than previous versions. In this simple example, I barely touch on the capabilities of the new rich notifications you can create. I have created a [GitHub repository with example code here](https://github.com/GrfxGuru/iOS10LocalNotificationSwiftExample).
