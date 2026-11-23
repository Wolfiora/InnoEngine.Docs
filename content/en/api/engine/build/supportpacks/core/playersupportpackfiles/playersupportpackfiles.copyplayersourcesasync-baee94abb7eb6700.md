---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.baee94abb7eb6700e9588572be5abb2f7ec87d6cef0d1fffe6a9f7a5d7ff4bf3
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyPlayerSourcesAsync(Inno.Build.SupportPacks.PlayerSupportPackBuildContext,System.String,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken)
title: PlayerSupportPackFiles.CopyPlayerSourcesAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: b49c7558ae88c67c66291084692939092e9cc5131511a9d3181528729fd8fa80
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The selected checkout, SDK and preparation lifetime.

**Parameter `project`:** The explicit product project to evaluate.

**Parameter `destination`:** The isolated source input directory.

**Parameter `environment`:** Optional explicitly selected SDK environment.

**Parameter `cancellationToken`:** Cancels evaluation and source preparation.

## Returns

Completion after all sources have contained, unique publication paths.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Source paths collide, escape the root, or the closure is empty.
