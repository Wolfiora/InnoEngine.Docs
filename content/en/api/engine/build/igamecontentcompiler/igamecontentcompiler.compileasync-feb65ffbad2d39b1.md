---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.feb65ffbad2d39b10c643aa52cb62da92f59ab2d9b5379a5cf229d1bc6a662b5
symbol: engine:Inno.Build:M:Inno.Build.IGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext,System.Threading.CancellationToken)
title: IGameContentCompiler.CompileAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: af94ea77cd67098fdc2d3884495ec540fe168167d9c95277d7f58c6686c4b55c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The borrowed authoring generation and operation-owned content destination.

**Parameter `cancellationToken`:** Cancels compilation before publication; associated work must finish before returning.

## Returns

An operation completing after every required artifact is staged, or faulting on failure.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Cancellation was requested before compilation completed.
