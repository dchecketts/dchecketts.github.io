---
title: "Delimiters"
description: "In one of my classes, we used a function that Python had built in, and I wanted to learn more about the way the function worked."
tags: ["python", "site"]
image: "/images/template-post.png"
date: 2025-11-08

published: false

---

## What's this about?

The Python language can do a lot of things with it's wide variety of built-in functions. The [official documentation](docs.python.org/3/library/functions.html) has a ton of them listed. A couple of weeks ago, I was in a class where we were writing a program that used `sorted()`, and our professor pulled up the documentation to explain what it did, and I noticed that it listed the arguments in a weird way. I asked my professor, and he suggested that I do some research into it. This post is the result of that experience.

## So what was the 'weird way'?

```python
sorted(iterable, /, *, key=None, reverse=False)
```

The [documentation](docs.python.org/3/library/functions.html#sorted "Link to the official documentation about the sorted function") explains what it does pretty well, but the thing that I was curious about was why / and * were in with the arguments. That question ended up being a lot more interesting than I had expected.
