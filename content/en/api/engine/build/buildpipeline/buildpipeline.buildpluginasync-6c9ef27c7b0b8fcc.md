---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c9ef27c7b0b8fccecc9dd8ea0e298dc43f5c4a660e4fccb77688bc76b1e33c9
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.BuildPluginAsync(Inno.Build.PluginBuildRequest,System.IProgress{Inno.Build.BuildProgress},System.Threading.CancellationToken)
title: BuildPipeline.BuildPluginAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: eeb5535b7e0f3a66be63e283cdb9c12a643e14843fab559b7116525e936f6eda
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `request`:** The package identity, destination, and dependency embedding policy.

**Parameter `progress`:** Optional observer for monotonic stage progress.

**Parameter `cancellationToken`:** The token that cancels work before atomic commit.

## Returns

The durable package identity and source-content metrics.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when cancellation is requested before commit.
