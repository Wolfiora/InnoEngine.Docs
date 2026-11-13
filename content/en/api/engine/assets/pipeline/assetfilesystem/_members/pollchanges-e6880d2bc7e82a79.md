---
uid: api.e6880d2bc7e82a79a0915e306ae55e7fa92696c6c04bff1e8d2b275f30d99491
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetFileSystem.PollChanges(System.Boolean@)"
source: xml
reviewed: 7ff330ec0a7e9f828740db735a4eaa09f6de2ff3a4f7224f909b610e1c587766
title: "PollChanges"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Polls changes and reports whether watcher recovery requires a full rescan.

**Parameter `requiresFullRescan`:** Whether the watcher reported an unreliable event stream.

**Returns:** The changes observed since the previous poll.
