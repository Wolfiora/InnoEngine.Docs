---
uid: api.c9087ed978bfde6d0530cf0720cd5b731443de1f777fbe6c9f0df75c44f2ba7b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle(System.Boolean@)"
source: xml
reviewed: 514a1614c2698dd453fd732a319169b7accffe5994b998c5d5f24c416c5d5a00
title: "WaitForIdle"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Waits for queued changes and reports whether a full rescan is required.

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

**Returns:** The normalized queued changes.
