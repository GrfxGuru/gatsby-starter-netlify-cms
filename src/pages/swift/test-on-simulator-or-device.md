---
templateKey: blog-post-swift
slug: /development-notes/should-you-develop-and-test-on-a-device-or-ios-simulator/
author: Peter Witham
tags: ["Development Notes", "Swift"]
title: Should You Develop and Test on a Device or iOS Simulator
date: 2017-07-04T23:02:47
blurb: Device or Simulator?</b><br/><p>I hear the question a lot. These are my thoughts and suggestions on how to make the right choice.
---

Should you create and test applications using only the iOS simulator, or use a device? I have been asked this question more than a few times. There is no doubt that the iOS simulator that is part of the Xcode development tool set is powerful, useful and quick to use.

The new features coming in version nine of Xcode make it even better with things like being able to resize the simulator rather than having to use defined sizes. There is another new feature in Xcode 9 that makes an even stronger argument for testing on a device though, wireless development. No longer does the device have to be wired to a machine unless you want it to be.

A very clear argument for developing and testing on a device is any app that uses the hardware features like GPS, Gyroscope or camera. You can simulate a GPS position in Xcode ([I have an article on that](/xcode/simulate-gps-position-in-xcode-for-ios-application-development/)), but nothing beats the actual response and data from the hardware.

Running on a device gives you actual performance statistics that you can debug and analyze far better than anything coming from the simulator. For a start, performance and statistics are going to be influenced by the very machine the simulator is running on, think of all the things your machine is doing _plus_ running the simulator and app being tested. I have also noticed there are times a view layout will appear correct on either a device or the simulator and be completely wrong on the opposite, this alone is a good reason to go with device testing. You could spend hours trying to debug auto-layout constraints only to find there is no problem on a device and it is just the simulator giving the incorrect results.

There are reasons you may not want to test on a device though. First the obvious one is that you have to own a device to begin with. This may not be a viable option for some, maybe you cannot afford or wish to pay out the money for something you are just playing around with. Maybe you are just getting into iOS programming and want to see if it is the right thing for you. For these scenarios I would say the simulator is the best option unless you can find a good price on a used device, or someone willing to lend you one.

The simulator can also be a good choice for quick prototype development or presentation. Teams can use the simulator on a large screen or projector for example to discuss and work on ideas in the early stages. As you get close to a releasable product, I feel there is no way to avoid testing on devices. Either the testing, performance, or QA team should be testing on as many of the devices that you plan to target as possible. This will give the best results for you to work from. Hopefully these suggestions have given you some considerations when it comes to simulator or device. I would love to hear your thoughts by commenting below.
