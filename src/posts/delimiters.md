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

## And what's the deal?

When you write your own function, you can give it arguments, set defaults for them, and specify types. The example below is a function that adds two arguments, with the first specified to be an integer type.

```python
def function(first_param:int, second_param):
    return first_param + second_param
```

It can be used in two ways, `function(1, "String")`, or `function(second_param="String", first_param=1)`. The first way uses the arguments as *positional arguments*, meaning that it relies on the order that they are given to the function. The second way uses their *key* to specify where each variable goes. Using those characters (/ and *,) 

Here's an event logger function, where we'll look at how specifications work.

```python
def log_event(message, /, level="INFO", *, logger_id="default_logger"):
    """Logs a message with a specific level and logger ID."""
    print(f"[{logger_id}] {level}: {message}")
```
