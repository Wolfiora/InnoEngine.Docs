---
title: "IEditorPanelReloadState"
description: "Reference for IEditorPanelReloadState in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.b5a0be5b7be36bf3
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `IEditorPanelReloadState`

This reference describes `IEditorPanelReloadState` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`CaptureReloadState`](#api-71deed7b4d1fdfdc) | Method |
| [`RestoreReloadState`](#api-57fd34fc744fb5d8) | Method |

## Type declaration

<a id="api-b5a0be5b7be36bf3"></a>
<!-- api: T:InnoEditor.Core.IEditorPanelReloadState 0336e7892c4ef50302d956632230fbad2b1ecd7b938a6d192efc26975b7ecbfc -->

```csharp
public interface InnoEditor.Core.IEditorPanelReloadState
```

Optionally migrates presentation-neutral panel state across assembly reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L8).

## `CaptureReloadState`

<a id="api-71deed7b4d1fdfdc"></a>
<!-- api: M:InnoEditor.Core.IEditorPanelReloadState.CaptureReloadState 62b37f88f3f8846214bb357ead6b9a9ee65f95a5c1580e110e73882f11551a56 -->

```csharp
System.ReadOnlyMemory<byte> InnoEditor.Core.IEditorPanelReloadState.CaptureReloadState()
```

Captures presentation-neutral state without retaining runtime or plugin object references.

**Returns:** An immutable byte payload that can be consumed by the replacement panel generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L16).

## `RestoreReloadState`

<a id="api-57fd34fc744fb5d8"></a>
<!-- api: M:InnoEditor.Core.IEditorPanelReloadState.RestoreReloadState(System.ReadOnlyMemory{System.Byte}) daef3e244096118a35bae2e575cd6e35145912126a849f158348c02224202b74 -->

```csharp
void InnoEditor.Core.IEditorPanelReloadState.RestoreReloadState(System.ReadOnlyMemory<byte> state)
```

Restores presentation-neutral state captured from the previous panel generation.

**Parameter `state`:** The immutable payload returned by the retiring panel generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L24).
