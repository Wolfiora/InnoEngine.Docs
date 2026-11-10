---
title: "EditorActionContext`1"
description: "Reference for EditorActionContext`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.2aec9efa23547a9c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorActionContext`1``

This reference describes ``EditorActionContext`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`target`](#api-4fcae0005720eaee) | Property |

## Type declaration

<a id="api-2aec9efa23547a9c"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionContext`1 9e786d8f0a66cf18ee21323e22a4b14073b09186ebc7088676304b299e813b1f -->

```csharp
public sealed class Inno.Editor.Interactions.EditorActionContext<TTarget> : Inno.Editor.Interactions.EditorActionContext
```

Provides a strongly typed target to an editor action implementation.

**Type parameter `TTarget`:** The target type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L81).

## `target`

<a id="api-4fcae0005720eaee"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionContext`1.target 73644ee5a68f3d3df3775d834d223bd3120674a0a3b82dcfc8d1686cfcef1f35 -->

```csharp
public TTarget Inno.Editor.Interactions.EditorActionContext<TTarget>.target { get; }
```

Gets the strongly typed action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L94).
