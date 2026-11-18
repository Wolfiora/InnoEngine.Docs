---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e7ad4dcdedf8ebfb437e1bba5ecfafb9be57cbb8fe6820b9131168f196a74d8
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateShaderWorkspaceAsync(System.String,System.Threading.CancellationToken)
title: StandardBuildCaches.CreateShaderWorkspaceAsync
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
sourceFingerprint: 01a1b93167b8f420bac479fdfa0bd386f6d1bf4a5c2dd1b28f3e7cfa4298070a
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
