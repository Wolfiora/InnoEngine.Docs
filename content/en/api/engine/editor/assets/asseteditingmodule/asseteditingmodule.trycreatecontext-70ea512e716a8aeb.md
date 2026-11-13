---
uid: api.70ea512e716a8aeb0b31dde92fe5652d084e7763d2a2c6e32ad27f758ddd1b87
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext,System.String,Inno.Editor.Assets.AssetEditorContext@)"
source: xml
reviewed: abbbb91c0ea92e75b9d5adb6df6b198799c480e1b47e289a9706f61f18cd129b
title: "AssetEditingModule.TryCreateContext"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Captures the currently indexed source and extension metadata for one immediate operation.

**Parameter `editor`:** The current editor context used only during this invocation.

**Parameter `relativePath`:** The isolated source-relative path to resolve.

**Parameter `context`:** Receives the current source snapshot, or null when the source is unavailable.

**Returns:** True when the request is accepted; otherwise false.
