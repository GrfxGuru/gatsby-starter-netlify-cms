---
templateKey: blog-post
slug: /development-notes/so-what-is-react-native/
author: Peter Witham
tags: ["Development Notes", "React", "React-Native"]
title: So What Is React Native
date: 2019-06-20T11:21:00
blurb: Let's Talk React Native For a Bit. You've heard the name, but what is React Native, and what can it do you you as a mobile developer? Let's see.
---

Regardless of whether or not you are an advocate for native or cross-platform development, you cannot deny the interest and appeal around [React Native](https://facebook.github.io/react-native/).
As developers, we should always be prepared to look at alternatives to our current toolset. So, with that in mind, let’s take a look at React Native and see what it has to offer.

## Understanding what React Native Does

You will read many things that say React Native creates native applications on mobile platforms, that is kind of true. Let’s dig a little deeper.

### Virtual DOM (No it’s not a VR version of your uncle Dominic)

React Native is unsurprisingly based on React. What React does on the Web is to create a <em>Virtual DOM</em>. In many ways this is what makes React so popular since it makes changes to this Virtual DOM and then compares that with the real DOM sitting in a browser if it finds a difference it only updates the part of the DOM that changed. Neat right?

### JavaScript Everywhere

React Native, just like React uses JavaScript. In the background, it creates a mechanism to communicate with Android or iOS and translates JavaScript to native OS commands, think of it as a bridge.
The end result is we see on screen native controls like buttons, text fields and so on from the OS, but to get them we made the request using JavaScript instead of Swift, Objective-c or Java.
The bridging thread has one nice advantage, we should never be hogging the main application thread which can give those horrible impressions of an app freezing some times.
One key difference here is that React Native exposes the OS API’s just as if we were accessing them using the native language of choice. The downside to that is anytime those API’s change with a new OS release, we are reliant on React Native being updated to support them.

## So Why Build With React Native?

I am not going to enter the debate of whether you should or should not use a non-native language to build apps on any specific platform, I am just going to list a few pluses mostly aimed at those coming from Web development.

- You can get an application up and running faster on both platforms. Especially if you know JavaScript but do not know Swift, Objective-C or Java.
- There is only one code base to work. So creating features, fixing bugs, deploying builds is faster for smaller teams.
- It gives Web Developers a way into mobile development without a long learning curve. This also means you can use cross-team resources.
- You can see changes in real-time as you work thanks to the toolset.
- No need to compile every time you make a change, again thanks to the toolset we can usually work using tools like [Expo](https://expo.io/).
- Thanks to the approach tools like Expo use, many users can see and test the app without the need for profiles, installs, and all that nonsense.

## Is It For You?

Well that is a difficult one to answer, my recommendation as with most things, is that the cost of entry is just a little bit of time. Therefore, I say at least take a look at it and see what you think, maybe if you are a team then make some time to sit together and throw a test app up and play with it.
Just like all technologies these days, React Native is moving fast and you should keep an eye on it. As we all know, what we use today might not be the job requirement tomorrow.
We owe it to our skill set to always investigate new things and at least be aware of them.
For my part, I am going to continue to play around with React Native and see where it takes me.
Something I often do is to take an existing application and try building it again in another technology, this gives me a great reason to play with React Native to see if it is a viable option.

## How To Install the tools

If this post has made you curious then here’s the quick way to get started. I do plan to post my experiences and a more in-depth install, set-up and edit over a series of posts. But this is the fast track for those that want it.

- You will need Node and NPM installed. We will install and use Expo to keep things simple.
- `sudo npm install -g expo-cli`
- `expo init &lt;appname&gt;`
- just to the directory of the app you created
- `yarn start` or `npm start`
- Follow the instructions from Expo.
