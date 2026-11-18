---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.39c9d80710f926ae9f6c7b9562d7b8627da334fde7c5bf8b24b4a1309a317da5
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadException.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.TimeSpan,System.Int32)
title: AssemblyUnloadException.Constructor
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: 2c2dac841bd26d7d75ad55059dc0e81992eb8c0d3a0fe01363fee03060f42782
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `retainedGenerations`:** Descriptions of every retired generation that remains reachable.

**Parameter `elapsed`:** The elapsed barrier duration.

**Parameter `collectionAttempts`:** The number of full collection cycles already performed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `retainedGenerations` is null.

**Exception `T:System.ArgumentException`:** Thrown when no retained generation is supplied.
