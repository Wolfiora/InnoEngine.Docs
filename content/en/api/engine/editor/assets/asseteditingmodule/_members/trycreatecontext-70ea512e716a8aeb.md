---
uid: api.70ea512e716a8aeb0b31dde92fe5652d084e7763d2a2c6e32ad27f758ddd1b87
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext,System.String,Inno.Editor.Assets.AssetEditorContext@)"
source: xml
reviewed: 1fdc8c9abd574ea2f0523d40ec67da1b35369a0f32421c8a95dbb1da532df586
title: "TryCreateContext"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Captures the currently indexed source and extension metadata for one immediate operation.

**Parameter `editor`:** The current editor context used only during this invocation.

**Parameter `relativePath`:** The isolated source-relative path to resolve.

**Parameter `context`:** Receives the current source snapshot, or null when the source is unavailable.

**Returns:** True when the request is accepted; otherwise false.
