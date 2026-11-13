---
title: "Content-cache process probe"
description: "Coordinate actual cross-process content readers and generation retirement."
uid: project.inno-content-cacheprobe
kind: project
owners:
  - Inno.Content.CacheProbe
---
# Content-cache process probe

`Inno.Content.CacheProbe` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

The parent test supplies source and cache directories. The probe writes ready, waits for prepare, then acquires pinned.bin and its stream. It reports the cache generation, waits for release, reads the originally pinned content and exits. Exit codes 2/3 reject the corresponding handshake, 1 reports an exception and 0 indicates protocol completion.

The normal solution builds this project as a library. The consuming host sets InnoContentProbeExecutable=true for its isolated executable output; this does not add a daily IDE entry point. Its exported CLR surface is empty. The protocol belongs to the fixture and is not a game or deployment format.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](../../../backends/projects/inno-adapter-content-filesystem-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/content/fixtures/Inno.Content.CacheProbe/Inno.Content.CacheProbe.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.
