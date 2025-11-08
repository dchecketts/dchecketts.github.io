---
title: "Cozy, isn't it?"
description: "I've had my own site on GitHub Pages for a while, so what's different now?"
tags: ["htmx", "tailwind", "site"]
image: "/images/first-post.png"
date: 2025-11-07
published: true

---

## First Things First

A couple of years ago, I took a web design fundamentals course and learned a little HTML and CSS from that. The main project was building a site following a wireframe, and I thought that was neat, so I started working on building my own site. I've lost count of how many times I've remade this site, but I think I'm going to stick with this for a while.

### In the beginning...

This site was incredibly basic. Just a sort of experiment I had going on in my free time, trying to make a sort of portfolio to showcase my abilities. After a couple of semesters at college, I decided to serve a mission for my church, which led to the first time I overhauled my site to then include a brief introduction to myself, a little about the state I was going to serve in, (I know, boring-old stateside) and an embedded Google Form so people could sign up to get emails from me over the next two years.

### What's different this time?

During my mission, I had a couple of times where I could sit down and think about what I really wanted to do with my life. Education, long-term career, etc. Before my mission, I had figured out that I liked working with code, and I thought what my Dad had done was pretty cool. I started off majoring in CIT (Though I had been exploring different stuff in STEM my first semester), but I found that I didn't nearly enjoy writing essays and big presentations as much.

![The Beautiful State of Oregon](../assets/images/20241003_151747.jpg "A picture I took while serving in a smaller community.")

As a result, I took to looking through what majors I had to choose from where I could spend the most time working with code instead of doing other things. I knew that I liked working with HTML, CSS, and Python, so that gave me a bit of guidance. I ended up choosing to switch to an associate's degree in Web Design & Development. Over the summer between my return and college, I rebuilt the site to be a really basic site that was similar to this, but entirely manual. (Where I quickly learned that poorly designed sites make for unenjoyable maintenance, which rather quickly leads to poor maintenance)

Over that summer, I talked with my dad about things he used for work and what he'd recommend I worked on learning. He told me about Kotlin, Tailwind, and HTMX. I learned a bit of Kotlin, and started trying to learn Tailwind and HTMX. Those latter two were much slower going.

That led to my first semester back, where I believed that it'd be best if I aimed for graduating with the most programming classes I could take while avoiding everything that wasn't really related to what I wanted to do. I also decided that my dream job would be working for the church in some programming career.

That idea lasted until around halfway through the semester, when I attended a career fair, made a beeline straight to the booth that the church was running, and proceeded to ask around a half dozen programmers about recommendations regarding education and the technologies they work with. They told me about things like React, Node.js, and JavaScript, and generally recommended doing a bachelor's degree to maximize opportunities in the field and rack up hours working with code.

At the same time, I was taking a course about interactive web design, and built what this has stemmed from. A basic site with some interactive features such as filtering posts in a list to only display those with certain tags, sorting by publication date, etc. The site was now much closer to what I wanted, but I wanted to use more advanced things I had heard from those more experienced programmers and my dad.

### And what's going on now?

The big thing that really enabled me to start understanding how HTMX and Tailwind worked was beginning a course featuring AI. That course focused on teaching students how to use AI effectively and ethically. One of the projects that we worked on was creating our own AI Agents, and I immediately began working on one that would be able to help me understand and practice HTMX and Tailwind. After a few flubs (Mostly trying to coax it away from giving me chunks of code), I had a decent tutor. A couple of hours later, I understood the basics of Tailwind style classes, as well as the fundamentals of HTMX.

Now, my site uses 11ty to generate a static site with HTMX grabbing modules to build content.

At this point, I'm just building up the basics of my site, and then I'll work on the appearance. Currently, it uses the Tailwind CDN, but I need to get it so that when 11ty builds the site, it also builds the CSS used.
