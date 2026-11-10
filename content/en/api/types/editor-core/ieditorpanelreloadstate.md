---
title: "IEditorPanelReloadState"
description: "Reference for IEditorPanelReloadState in Inno.Editor.Core."
uid: api.inno.editor.core.6e09fdf4fb4a2118
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `IEditorPanelReloadState`

This reference describes `IEditorPanelReloadState` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureReloadState`](#api-dcf0add48fbbf948) | Method |
| [`RestoreReloadState`](#api-e56e6b398022760e) | Method |

## Type declaration

<a id="api-6e09fdf4fb4a2118"></a>
<!-- api: T:Inno.Editor.Core.IEditorPanelReloadState 201b9c1ed33f2ae0a1f42428b5a0de8f680701bd6c468ad2f0b5d2392369e4a9 -->

```csharp
public interface Inno.Editor.Core.IEditorPanelReloadState
```

Optionally migrates presentation-neutral panel state across assembly reloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L8).

## `CaptureReloadState`

<a id="api-dcf0add48fbbf948"></a>
<!-- api: M:Inno.Editor.Core.IEditorPanelReloadState.CaptureReloadState e8b8eb473b326354c568b24424f2a31d89cf7b0e4fed9ba58ea036f05cfb7e57 -->

```csharp
System.ReadOnlyMemory<byte> Inno.Editor.Core.IEditorPanelReloadState.CaptureReloadState()
```

Captures presentation-neutral state without retaining runtime or plugin object references.

**Returns:** An immutable byte payload that can be consumed by the replacement panel generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L16).

## `RestoreReloadState`

<a id="api-e56e6b398022760e"></a>
<!-- api: M:Inno.Editor.Core.IEditorPanelReloadState.RestoreReloadState(System.ReadOnlyMemory{System.Byte}) 0a026579d4dc06a094e266c67d37df404766a16f1266386d4a450c3690ea7a4b -->

```csharp
void Inno.Editor.Core.IEditorPanelReloadState.RestoreReloadState(System.ReadOnlyMemory<byte> state)
```

Restores presentation-neutral state captured from the previous panel generation.

**Parameter `state`:** The immutable payload returned by the retiring panel generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/IEditorPanelReloadState.cs#L24).
