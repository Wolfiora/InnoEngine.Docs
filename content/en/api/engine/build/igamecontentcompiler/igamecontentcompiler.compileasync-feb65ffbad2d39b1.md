---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.feb65ffbad2d39b10c643aa52cb62da92f59ab2d9b5379a5cf229d1bc6a662b5
symbol: engine:Inno.Build:M:Inno.Build.IGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext,System.Threading.CancellationToken)
title: IGameContentCompiler.CompileAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: ab6c781d725c91144e98330bf3eae2910e194bef61e314652d70303db5ed7a89
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
