---
title: Add Change-Id trailers
description: Turn on stable Change-Id trailers for Gerrit-style review.
sidebar:
  order: 2
---

rgit adds no trailers to commit messages by default.
Turn on Change-Id trailers when your review system, such as Gerrit, follows a change by a stable id.

## Turn them on for one repository

```sh
git config rgit.changeId true
```

## Turn them on everywhere

```sh
git config --global rgit.changeId true
```

After that, each commit that rgit makes carries a `Change-Id:` trailer.
rgit keeps the same id when you amend, reword, squash or rebase the commit.

:::danger
A plain `git commit` does not add the trailer.
Make your commits with rgit while the setting is on.
:::
