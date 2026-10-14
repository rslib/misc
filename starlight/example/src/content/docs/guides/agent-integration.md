---
title: Use rgit from a coding agent
description: Install the rgit skill, session hook and tools into your agent apps.
sidebar:
  order: 1
---

rgit is built to be driven by coding agents through the shell.
When an agent harness runs rgit, it prints TOON by default.

## Install into your agent apps

```sh
rgit agent install              # every agent app found on this machine
rgit agent install claude pi    # just these
rgit agent status               # what each app has, and whether it is current
```

With no app named, `install` sets up each app whose program is on `PATH` or whose config folder exists.
Each app gets what it supports of three parts.

### Skill

The rgit Agent Skill tells the agent how to use rgit.
Print it with `rgit agent skill`.

### Session hook

The hook runs `rgit hook session-start` when a session starts.
The agent sees the repository state without asking.

### Tools

rgit's operations become the agent's own tools.
Claude Code gets all 200 through a plugin.
Codex and OpenCode get the 10 core tools through `rgit mcp --core`.

:::caution
rgit edits plain JSON only.
When a config file has comments, such as `opencode.jsonc`, rgit stops and asks you to make the change by hand.
:::

## Install again safely

Installing again changes nothing when everything is current.
It repairs entries that point at an old rgit path and leaves your other settings alone.

## Remove it

```sh
rgit agent uninstall
```

`uninstall` removes only the files and entries that rgit wrote.
