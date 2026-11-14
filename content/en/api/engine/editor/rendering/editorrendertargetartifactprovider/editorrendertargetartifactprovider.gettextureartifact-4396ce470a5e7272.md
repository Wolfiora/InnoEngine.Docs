---
uid: api.4396ce470a5e7272723a7bb0745e8cfed905e06152e5651e92b0d0f1b8fd8cf6
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)"
source: xml
reviewed: 6c5d1367c1e52a8667f528b61f68b4123a7dfe1d9bbdf81ff4d9fcf8203bdb3a
title: "EditorRenderTargetArtifactProvider.GetTextureArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Returns a matching compiled texture when available and schedules a replacement when source state changed.

## Parameters

**Parameter `texture`:** The imported texture asset whose authoring source is compiled.

**Parameter `artifact`:** Receives the current candidate or the last-good KTX artifact while a replacement is compiling.

## Returns

`F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when a current or last-good KTX artifact is usable; otherwise, the exact pending or failed state of the first candidate.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this provider has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is `null`.
