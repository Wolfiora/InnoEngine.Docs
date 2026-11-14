---
uid: api.c9087ed978bfde6d0530cf0720cd5b731443de1f777fbe6c9f0df75c44f2ba7b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.WaitForIdle(System.Boolean@)"
source: xml
reviewed: 8f924890e2cde3dc451f02aff5c9b071ad0d87c9795ed3b69bef20a3ac3d0365
title: "AssetFileSystem.WaitForIdle"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Waits for queued changes and reports whether a full rescan is required.

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

**Returns:** The normalized queued changes.
