---
title: "EditorMenuAttribute"
description: "Reference for EditorMenuAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ddf250b5c1e290d9
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuAttribute`

This reference describes `EditorMenuAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c39d010c8fec4eb6) | Method |
| [`area`](#api-c05b382a8d775535) | Property |
| [`order`](#api-1ba1a4ad4ee7f100) | Property |
| [`path`](#api-ce41af5ac10be59e) | Property |
| [`separatorBefore`](#api-798f97e52bb4d785) | Property |

## Type declaration

<a id="api-ddf250b5c1e290d9"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuAttribute a3fae1c34558a64bddfe64b2e868d9717166a64b9e76e6e4b5a7621138731c6d -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuAttribute : System.Attribute
```

Places an editor action at an arbitrary path on a menu surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L9).

## `#ctor`

<a id="api-c39d010c8fec4eb6"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean) c493c1d9820fc3165e21a58343267ec8c73a9f05bc76449fe82f6a657398388a -->

```csharp
public InnoEditor.Interactions.EditorMenuAttribute.EditorMenuAttribute(string area, string path, int order = 0, bool separatorBefore = false)
```

Creates a static placement for the annotated action on an exact menu surface.

**Parameter `area`:** The exact interaction area whose menu receives the action.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Throws `System.ArgumentException`:** Thrown when `area` or `path` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L29).

## `area`

<a id="api-c05b382a8d775535"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuAttribute.area cf30dd8893b7b56d868aaaac1b529ffca4c5adfdcdacf18b2c70cc0d0cc51a9e -->

```csharp
public string InnoEditor.Interactions.EditorMenuAttribute.area { get; }
```

Gets the menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L48).

## `order`

<a id="api-1ba1a4ad4ee7f100"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuAttribute.order fd4de159d0cfa2db9355f3272612a8e625dfdfd44f3318addab4866aa77c1e57 -->

```csharp
public int InnoEditor.Interactions.EditorMenuAttribute.order { get; }
```

Gets the stable menu ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L58).

## `path`

<a id="api-ce41af5ac10be59e"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuAttribute.path 74fabbc9914e92b0bbb51332ae9e6084e941c530b436874742c3b3168ff19f34 -->

```csharp
public string InnoEditor.Interactions.EditorMenuAttribute.path { get; }
```

Gets the slash-delimited menu path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L53).

## `separatorBefore`

<a id="api-798f97e52bb4d785"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuAttribute.separatorBefore 10f91c02e10033f0709dcd6c6e62c83045a2e1163f4396e2d5c36dc030a55886 -->

```csharp
public bool InnoEditor.Interactions.EditorMenuAttribute.separatorBefore { get; }
```

Gets whether a separator is rendered before the item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L63).
