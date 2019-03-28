---
templateKey: blog-post
slug: /xcode/should-you-install-xcode-from-the-app-store-or-developer-portal/
author: Peter Witham
tags: ["Development Notes", "Xcode"]
title: Install Xcode from App Store or Developer Portal?
date: 2018-01-01T16:09:08
blurb: Which way is best? I get asked this question often, so here are some thoughts to help you decide.
---

Which way is best? I get asked this question often, so here are some thoughts to help you decide.

# Install Xcode from App Store or Developer Portal?

I get asked this question every time there is a new Xcode release, so I thought I would answer it with a blog post that everyone can read at any time. Thanks to Xcode 9 and Swift.org it is now easier to install the latest version of Swift regardless of which version you install. It used to be that Swift was packaged with Xcode and you would use that version, it was possible to use other tool chain builds of Swift, but it required a few steps to get it working. Now, this can all be done in Xcode making switching Swift releases as easy as a click. To help you decide which Xcode install is best for you, let’s take a look at the difference between the two options and you can choose.

## Install from the App Store

The App Store will always give you the latest release version, so you know that in theory this has been tested comprehensively before release. After the initial install, future updates should be a lot smaller than the Developer Portal download. The reason for this will be explained below.

## Install from the Developer Portal

Downloading Xcode from the [Apple Developer Portal](https://developer.apple.com) gives you two options. You can either download the release version, or you can download a pre-release version. Often, you can install pre-release versions of Xcode alongside full releases. This can give you an opportunity to see upcoming features and to test your code before the final release. I will express a word of caution, more than a few times I have fallen foul of pre-release versions giving me problems when installed alongside full releases. Plus you should never use a pre-release Xcode for production code. Unlike the App Store version of Xcode, downloading from the Developer Portal requires downloading the full version which is often around 4gb in size. Whilst this gives reassurance of a complete package, it can often mean new releases on a bi-weekly basis as Apple tightens up final bug fixes.

## The Wrap

So the choice is yours, personally I have stopped using pre-release versions as I write more and more code that needs to be reliable. This is mostly due to compiler and Xcode oddities that happen during the pre-release process. There is nothing worse than trying to figure out if your code or Xcode is the problem!
