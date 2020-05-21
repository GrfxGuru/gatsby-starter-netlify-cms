---
templateKey: blog-post
slug: /knowing-tricks-saves-times
author: Peter Witham
tags: ["Development Notes", "JavaScript","React-Native"]
title: Knowing your tricks to get you out of situations.
date: 2020-05-20T23:30:34
blurb: So this is a cautionary tale on why knowing your ninja helps
---

So this week I needed to spin up a quick new React-Native application to work on learning and testing a library integration. Certainly in my way of doing things, that is always best done in clean code so you can debug it easier.

Well imagine my surprise when I tried to use `create-react-native-app` and it said nope, no way buddy.

I had NodeJS v14 installed after doing a `brew upgrade` and the create react app just did not like it. It said that it was not supported and I have to use a version in the range of v12.

This threw me off at first because I just was not expecting it to have a problem with the latest release.

So I ended up having to remove NodeJS via brew and then re-install it telling it to use the LTS release which is v12.

For those of you that are curious you can do that by typing this at the terminal if you have brew installed.

`$brew install NodeJS@12`

This fixed the problem and thankfully broke nothing else on my system as far as I can tell. So this cautionary tale is to watch out for those things that throw you off the intended course and you need to fix in a heartbeat to continue getting the day done.

Know your Ninja tricks to resolve situations quickly and get back to what you need to do not what you have to fix.