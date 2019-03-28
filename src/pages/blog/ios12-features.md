---
templateKey: blog-post
slug: /apple/ios-12-features-of-interest/
author: Peter Witham
tags: ["Development Notes"]
title: iOS 12 Features of Interest
date: 2018-06-12T12:14:44
blurb: New Features in iOS 12. There is a fair amount to like in iOS 12, I share some thoughts on the more interesting ones.
---

[iOS 12](https://developer.apple.com/ios/) coming in the fall of 2018 has many new features. Perhaps the most important being that it will be available for all devices capable of running iOS 11. That means hardware as far back as 2015. Unsurprisingly, a major focus of iOS 12 will be performance tuning with a focus on making a great experience for those with older devices. In Apple’s tests they claim that the iPhone 6+ launches applications 40% faster and the keyboard appears 50% quicker. This will be most welcome by many, for me the keyboard never seems to appear as fast as it should, even on my iPhone 8+. It is worth noting for those iPhone photographers out there that the camera is supposed to be 50% quicker to access for those moments you need to capture in a hurry. One statistic that surprised me, iOS 11 has a current install base of 81%. I thought it would of been higher by now, but it does have a resounding 95% satisfaction rating according to Apple. So on to the cool new things.

## CarPlay

CarPlay will now support 3rd party navigation applications like Waze, this is a very welcome change for those that are lucky enough to have a car that supports the system.

## Notifications

Two features stand out in the new notification changes. First, application developers can group their notifications. No more crazy long lists to manage and work through, you can simply tap the grouped notifications for an app and get the list displayed. Before you ask, yes you can also swipe a group to remove them all at once. The other feature feels long overdue, you can now manage the settings for a notification right there on the notification rather than having to go to settings app and finding it. I would like to see more of this ‘in place management’ across iOS.

## Messages

OK I have to cover these even though I feel it is another example of the sad state of human (d)evolution. Animoji will now detect and replicate tongue movement, yep there I said it. There are also new characters; Ghost, Koala, Tiger and T-Rex. Memoji is a new take on [Sherlocking](https://www.urbandictionary.com/define.php?term=sherlocked) Bitmoji with the Animoji system built in, you can create an avatar that almost looks like you and have it animated.

### Two Factor SMS Message Automation

Here is another very useful change that ties in with messages. You know those two factor authentication codes you get sent to your phone to login to sites (no? Well you should have two factor authentication anywhere you can for safety). Well those will now appear directly in the quick tap bar, no more jumping to messages to get the code and then go back and enter it. This is actually a huge deal for me so I’m very happy.

## Siri

Siri got some major improvements by way of Apple’s acquisition of the [Workflow application](https://itunes.apple.com/us/app/workflow/id915249334?mt=8) crew. Taking advantage of the [Shortcuts](https://developer.apple.com/sirikit/) application (think reworked Workflow) you can now expose quick actions to Siri, you can even create your own custom phrases to trigger them which is very cool. So for example, you could have a phrase ‘Tell my wife I’m on the way’ and Siri will run a workflow to compose a new SMS message and send it without you having to do a thing. Shortcuts and Siri are going to be a big boost for us productivity crazies who love to save time by automating our lives.

Apple has an in-depth series of resources and links [here](https://developer.apple.com/documentation/sirikit#2979425). Siri needs a big catch up to some of the other services out there and this will go a long way to making that happen by letting us create our own workflows right on the device in an editor.

## ARKit 2.0

The new version of [ARKit](https://developer.apple.com/arkit/) is getting some major features, all of which should help continue the growth of this new breed of application and services. Improved face tracking and realistic rendering will help improve the visual experience along with speed improvements. 3D object detection will be useful for home planning style applications where you will be able to really see that new sofa or desk in place. But by far the most important new feature is shared experiences.

Multi-viewer AR is huge for pushing the games forward, but I’m also thinking it will be great for professionals that need to convey a sense of place to their clients. For example architects can now share their vision with clients across multiple devices allowing for better interaction and discussion.

## Password Application Support

Safari and Apps are getting a new end point that will enable third party password applications to fill in login credentials from their database for you. This is a nice time saver, so many times you have to either go to the password application and copy the details then go back, or try and hope that the share sheet extension works right and access the details that way. These are just a few of the key features coming in iOS 12, as always there a mountain of changes for developers to get to grips with and take advantage of.

I strongly recommend watching [WWDC18 video sessions](https://developer.apple.com/videos/wwdc2018/) to discover all the changes.
