---
templateKey: blog-post
slug: /development-notes/gatsby_cloud_is_fast/
author: Peter Witham
tags: ["Development Notes", "JAMStack"]
title: Gatsby Cloud is fast!
date: 2020-01-29T00:22:00
blurb: Always try new things, you might be surprised. I tried Gatsby Cloud and am impressed.
---

I have been converting my sites, just like this one for example, to GatsbyJS. There are a few reasons for doing that, but one is being able to just write a markdown file for a blog post and push it to a repo, then walk away as automation does the work for me.

Part of that automation is using [Netlify](https://Netlify.com) to build the site when it detects a change in the repository on GitLab and then deploy it. I have absolutely no complaints here, Netlify is fantastic and I will continue to use it.

That said, we owe it to ourselves to try new things when they come along, so I tried the new [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) build service.

### So what is that?

Great question, it builds your Gatsby site for you. Just like Netlify it can watch a repository for changes and kick off an automated build, it can also hook up to Netlify to then deploy it for you. So the only real difference here is that instead of Netlify performing the build, Gatsby Cloud does it for you then gives it to Netlify to deploy.

### Was it hard to set up?

No, following a few guided steps you tell the service where to find the repository and where to send the build. Then you pretty much just walk away after giving permission for it to do so on Netlify and GitHub.

### So was it fast?

Oh it was indeed, I started with a simple site that admittedly does not get much traffic just in case something bad happened, but everything went fine and the build took about 18 seconds not including the deploy.

So yes, it was fast and yes I will exploring this more. I will try and get a video together showing you how to set it up and use the service very soon.