---
layout: post
title: Sign It
date: 2019-09-13 09:00:20 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: signit.png # Add image post (optional)
type: side-projects
fig-caption: # Add figcaption (optional)
tags: []
made-with: Python, OpenCV, TensorFlow, Azure Custom Vision Service
github: https://github.com/juliengo/SignIt
devpost: https://devpost.com/software/sign-it-s6mvh9
---
We wanted to empower people through the ability of speech by creating an app that translates sign language to English.  Sign it translates sign language to English in real time using machine learning and Open CV to track hand movement and identify different signed words and letters.

We used Open CV to track the hand movement and machine learning in order to identify the different signs used for different letters. After identifying the signed letter, we stored the signed letters to form full sentences. Using Azure, we trained the data set to work on various hands and environments.