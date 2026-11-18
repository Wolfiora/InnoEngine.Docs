---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a9c9445af3801ab4f0e3f3cf3c96fb42b4fa9cad60c6a74d8ad4f696332e7385
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.Submit(Inno.Rendering.Runtime.RenderRequest)
title: RenderRuntime.Submit
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: fc44ff2925235ca47a943f6e530d8f51a3bde8a82368bcc3ca3d59817503536f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `request`:** The validated immutable request that defines this operation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The bounded frame queue has reached capacity, retirement has started, or generation cleanup has faulted the owner. The request was not accepted.

**Exception `T:System.ObjectDisposedException`:** The rendering owner has retired.
