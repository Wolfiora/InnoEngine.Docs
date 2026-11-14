---
uid: api.7e7ad4dcdedf8ebfb437e1bba5ecfafb9be57cbb8fe6820b9131168f196a74d8
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateShaderWorkspaceAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 4512044d5d5e93368cd3b444c6a2bb889d0bfad6254acef3e1206b50b202c734
title: "StandardBuildCaches.CreateShaderWorkspaceAsync"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Creates a shader compilation workspace in the registered process-owned build cache.

**Parameter `engineRoot`:** The checkout owning cache maintenance and the source-independent compiler request.

**Parameter `cancellationToken`:** Cancels registration or ownership acquisition before compilation begins.

**Returns:** A fresh directory lease; the caller must retain it until compilation finishes and dispose it afterward. Remaining claim metadata is retired by the same cache maintenance service.

**Exception `T:System.IO.IOException`:** The cache boundary or operation ownership cannot be established.

**Exception `T:System.OperationCanceledException`:** The request was canceled before workspace ownership was returned.

**Exception `T:System.ArgumentException`:** The checkout root is blank or relative.
