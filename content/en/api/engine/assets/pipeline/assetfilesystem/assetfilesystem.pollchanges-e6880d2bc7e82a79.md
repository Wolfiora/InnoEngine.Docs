---
uid: api.e6880d2bc7e82a79a0915e306ae55e7fa92696c6c04bff1e8d2b275f30d99491
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.PollChanges(System.Boolean@)"
source: xml
reviewed: c620c30ee3c7c67d710970349e4a6bd8e992fc63a6bccb1222f7fa5a6c865c3e
title: "AssetFileSystem.PollChanges"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Polls changes and reports whether watcher recovery requires a full rescan.

## Parameters

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

## Returns

The changes observed since the previous poll.
