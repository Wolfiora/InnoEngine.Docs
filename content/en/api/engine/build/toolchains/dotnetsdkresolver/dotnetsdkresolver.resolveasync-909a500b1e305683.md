---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.909a500b1e30568330ca62b2b40059e3ec6fb166d21c4b146701a4cf04ae2c0a
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveAsync(System.String,System.String,System.Threading.CancellationToken)
title: DotNetSdkResolver.ResolveAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 8d208d64f5bd7bed545e5248c5a4cf13f3924dcab8dbad1f3c85517a2301f1bd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `hostPath`:** The .NET executable selected by the build composition root.

**Parameter `projectPath`:** The prepared entry project whose directory controls SDK selection.

**Parameter `cancellationToken`:** Cancels SDK discovery and drains its child process.

## Returns

The exact project-selected SDK, managed entry assembly and host; missing SDKs fail explicitly.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The selected host, prepared entry project or selected SDK entry assembly does not exist.

**Exception `T:System.InvalidOperationException`:** The selected host cannot resolve a valid SDK identity and absolute base path.
