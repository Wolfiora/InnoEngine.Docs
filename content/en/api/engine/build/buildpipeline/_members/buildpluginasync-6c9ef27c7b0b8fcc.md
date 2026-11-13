---
uid: api.6c9ef27c7b0b8fccecc9dd8ea0e298dc43f5c4a660e4fccb77688bc76b1e33c9
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.BuildPluginAsync(Inno.Build.PluginBuildRequest,System.IProgress{Inno.Build.BuildProgress},System.Threading.CancellationToken)"
source: xml
reviewed: d6ab5526937573d1dfdcaa775f06aabd03f26ec9cbeaa463b4cb5ddea08e26c5
title: "BuildPluginAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Builds and atomically commits one deterministic project Plugin package.

**Parameter `request`:** The package identity, destination, and dependency embedding policy.

**Parameter `progress`:** Optional observer for monotonic stage progress.

**Parameter `cancellationToken`:** The token that cancels work before atomic commit.

**Returns:** The durable package identity and source-content metrics.

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before commit.
