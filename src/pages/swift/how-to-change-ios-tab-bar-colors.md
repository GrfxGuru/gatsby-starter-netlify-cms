---
templateKey: blog-post-swift
slug: /swift-archives/how-to-change-the-ios-tab-bar-colors/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: How To Change The iOS Tab Bar Colors
date: 2017-10-05T01:51:12
blurb: Changing Colors with Code is Easy. This works great for changing UITabBar colors when designers and clients change their minds.
---

Sometimes the simple things can catch us out and cause more work than needed. I have received a few requests to explain how you can change the color of iOS’ UITabBar navigation. I find that this is one of those things easier to do using code than hunting through Xcode’s interface. So here goes! This is the standard starting appearance of a _UITabBar_ when you create a new instance, in this example I created a standard tabbed application using the built in template.

![Starting UITabBar appearance.](https://peterwitham.com/wp-content/uploads/2017/10/UITabBar-Starting.png)

The goal is to change the color of our tab bar across the application, so we will set the look in our _AppDelegate.swift_. Go ahead and open it up and find the _func application_ which can usually be found around line 17 in a new application. It should look something like this

``` swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // Override point for customization after application launch.
    return true
}
```

We want to set a new color for the background tint of the bar, to do this we need to access the _.backgroundColor_ property and provide a _UIColor_. I am going to use a pretty horrible Red tint so you can easily see it in action. So inside the _application_ function I added.

``` swift
UITabBar.appearance().backgroundColor = UIColor(red:1, green:0, blue:0, alpha:1)
```

Since we are settings these properties in code, we will not see them in the Xcode storyboard view. When I run the application in a simulator, this is the result.

![](https://peterwitham.com/wp-content/uploads/2017/10/UITabBar-RedBarBackground-e1507185866880.png)

Perfect! Now it is icon time, first I am going to change the active tab icon color to a slightly more obvious blue. To do that I need to access the _tintColor_.

``` swift
UITabBar.appearance().tintColor = UIColor(red: 0, green: 0, blue: 1, alpha: 1)
```

![](https://peterwitham.com/wp-content/uploads/2017/10/UITabBar-BlueIconTint.png)

Great! Finally, I want to change the inactive tab icon color to a dark Gray, this time I will use one of the predefined colors.

``` swift
UITabBar.appearance().unselectedItemTintColor = UIColor.darkGray
```

![](https://peterwitham.com/wp-content/uploads/2017/10/UITabBar-InactiveIconColorAdded.png)

### The Wrap

Changing the color of a control is often easier that it first appears once you turn to code. Using this method I do not have to go back to Xcode’s properties panel to keep changing things every a designer or client changes their mind. I can set them one in code and easily find them in the future.
