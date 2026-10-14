---
title: Install rgit
description: Install rgit, load shell completions and run your first command.
---

rgit runs on Linux and macOS.
Status is early (0.0.x), so commands and output can change between releases.

## Install from source

You need Rust 1.96 or later.

```sh
cargo install --locked --git https://github.com/rslib/rgit rgit-cli
```

Prebuilt binaries for Linux (x86_64 and aarch64) and macOS (aarch64) are on the [releases page](https://github.com/rslib/rgit/releases).

## Load completions

rgit prints completion scripts for bash, zsh, fish, elvish and powershell.

```sh
eval "$(rgit completion bash)"                               # bash, in ~/.bashrc
rgit completion zsh > ~/.zfunc/_rgit                         # zsh, with ~/.zfunc on fpath
rgit completion fish > ~/.config/fish/completions/rgit.fish  # fish
```

:::tip
The release archives hold the same scripts in `completions/`.
:::

## Run your first command

Type `rgit` where you would type `git`.
In your shell, rgit prints the same text as git.

```console
$ rgit status
On branch main
nothing to commit, working tree clean
```

Run `rgit` with no arguments to open the TUI.
Press <kbd>?</kbd> in the TUI to see every key.

### Get help

Run `rgit --help` for every command and `rgit <command> --help` for its flags.

:::note
Usage errors exit 2 and other errors exit 1.
:::
