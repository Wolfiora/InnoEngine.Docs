---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4396ce470a5e7272723a7bb0745e8cfed905e06152e5651e92b0d0f1b8fd8cf6
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)
title: EditorRenderTargetArtifactProvider.GetTextureArtifact
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
reviewed: 5a3a3263f10fae20fc213d917b4d655db6be9bb96c06b9daa4e14dc4cd9e301f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** The imported texture asset whose authoring source is compiled.

**Parameter `artifact`:** Receives the current candidate or the last-good KTX artifact while a replacement is compiling.

## Returns

`F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when a current or last-good KTX artifact is usable; otherwise, the exact pending or failed state of the first candidate.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this provider has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is `null`.
