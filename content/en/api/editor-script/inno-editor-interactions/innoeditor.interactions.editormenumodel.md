---
title: "EditorMenuModel"
description: "Reference for EditorMenuModel in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.7a8dd4b24cdc3337
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuModel`

This reference describes `EditorMenuModel` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-22af2a9588552011) | Method |
| [`items`](#api-428aab5b7adea02b) | Property |

## Type declaration

<a id="api-7a8dd4b24cdc3337"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuModel e67f42034953f77f076c81321be6f07cf999ffc486f0b73c165fffdfc32e8b29 -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuModel
```

Contains a complete immutable menu tree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L9).

## `#ctor`

<a id="api-22af2a9588552011"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuModel.#ctor(System.Collections.Generic.IReadOnlyList{InnoEditor.Interactions.EditorMenuItem}) ed6712f8da43a0ff0a8c9c9de31601e856f9eff8b007d304878654a13278ac84 -->

```csharp
public InnoEditor.Interactions.EditorMenuModel.EditorMenuModel(System.Collections.Generic.IReadOnlyList<InnoEditor.Interactions.EditorMenuItem>? items)
```

Creates a complete immutable menu tree from resolved root nodes.

**Parameter `items`:** The root nodes in stable display order, or `null` for an empty menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L17).

## `items`

<a id="api-428aab5b7adea02b"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuModel.items 2ecbeeadf89a2ca6f6892daa0fd0dfb5cde0f32e1a4c211dc31a088d483ddff0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Interactions.EditorMenuItem> InnoEditor.Interactions.EditorMenuModel.items { get; }
```

Gets root menu nodes in display order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L25).
