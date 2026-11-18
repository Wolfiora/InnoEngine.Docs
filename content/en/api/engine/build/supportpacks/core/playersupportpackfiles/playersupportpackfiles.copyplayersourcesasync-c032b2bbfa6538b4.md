---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c032b2bbfa6538b4478ecb7d71c226ffd5d7f5f17394e7ff49b34c079528f4a8
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyPlayerSourcesAsync(Inno.Build.SupportPacks.PlayerSupportPackBuildContext,System.String,System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: PlayerSupportPackFiles.CopyPlayerSourcesAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: e64b5296a2cfa1db2a8ac759d9dfcf1dfd23f32a475f186421d49f3a5a41780f
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

**Parameter `cancellationToken`:** Cancels evaluation and source preparation.

**Parameter `environment`:** Optional explicitly selected SDK environment.

## Returns

Completion after all sources have contained, unique publication paths.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Source paths collide, escape the root, or the closure is empty.
