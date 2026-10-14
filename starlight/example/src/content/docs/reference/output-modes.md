---
title: Output modes
description: The flags and settings that pick human text, TOON or JSON.
---

rgit picks its output from who is running it.

## Modes

| Mode  | Picked by                                    | Prints                                  |
| ----- | -------------------------------------------- | --------------------------------------- |
| Human | a person's shell, `--human`                  | the same text as git                    |
| TOON  | an agent harness, `--toon`                   | structured lines with `help` hints      |
| JSON  | `--json`                                     | the same data as TOON, as JSON          |

The hints in TOON and JSON already carry the output flag.
Following them stays in the same mode.

## Settings

Set `RGIT_OUTPUT=human` or `git config rgit.output human` to always print git's text.

```toml title="~/.config/rgit/config.toml"
[theme]
name = "rose-pine"
accent = "#ea9a97"
```

## Errors

With `--toon` or `--json`, errors print `error` and `help` on stdout in the same format.
Human errors go to stderr, worded as git words them.

```diff lang="toml"
 [theme]
-name = "rust"
+name = "rose-pine"
```
