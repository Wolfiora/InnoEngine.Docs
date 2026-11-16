---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7e7ad4dcdedf8ebfb437e1bba5ecfafb9be57cbb8fe6820b9131168f196a74d8
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateShaderWorkspaceAsync(System.String,System.Threading.CancellationToken)
title: StandardBuildCaches.CreateShaderWorkspaceAsync
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 51d3b35cc1a7ede42b0fb4b16904b4113da9fbfd27aa44148d223c9a9b2b9f2b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout owning cache maintenance and the source-independent compiler request.

**Parameter `cancellationToken`:** Cancels registration or ownership acquisition before compilation begins.

## Returns

A fresh directory lease; the caller must retain it until compilation finishes and dispose it afterward. Remaining claim metadata is retired by the same cache maintenance service.

## Exceptions

**Exception `T:System.IO.IOException`:** The cache boundary or operation ownership cannot be established.

**Exception `T:System.OperationCanceledException`:** The request was canceled before workspace ownership was returned.

**Exception `T:System.ArgumentException`:** The checkout root is blank or relative.
