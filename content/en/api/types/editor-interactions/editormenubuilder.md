---
title: "EditorMenuBuilder"
description: "Reference for EditorMenuBuilder in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.822619b7d91bd18e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuBuilder`

This reference describes `EditorMenuBuilder` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d58382e9e8a7bdb4) | Method |
| [`Add`](#api-a878ff544896dab7) | Method |
| [`AddGroup`](#api-3e9d589f3f4e90c6) | Method |

## Type declaration

<a id="api-822619b7d91bd18e"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuBuilder 49978d57ff8ffedb8d4f96af4d89f4b167739330d9b373eadaa7211c32bc1b8b -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuBuilder
```

Collects dynamic menu item placements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L9).

## `#ctor`

<a id="api-d58382e9e8a7bdb4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuBuilder.#ctor 945a24f54b7c6f3a17684a89ec1020cc8abaa3817fc3e588a244d790fac6ba1a -->

```csharp
public Inno.Editor.Interactions.EditorMenuBuilder.EditorMenuBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L9).

## `Add`

<a id="api-a878ff544896dab7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuBuilder.Add(System.String,System.String,System.Int32,System.Boolean,System.Object) 427339c65bf904702fb13beb25b25187c41faa62ac03bc3f56403448e21eff3a -->

```csharp
public void Inno.Editor.Interactions.EditorMenuBuilder.Add(string path, string actionId, int order = 0, bool separatorBefore = false, object? argument = null)
```

Adds a dynamic action placement to the menu currently being constructed.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `actionId`:** The stable action identifier invoked by the leaf.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Parameter `argument`:** An optional argument captured for this menu generation.

**Throws `System.ArgumentException`:** Thrown when `path` or `actionId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L57).

## `AddGroup`

<a id="api-3e9d589f3f4e90c6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuBuilder.AddGroup(System.String,System.Int32,System.Boolean) 2b22fdb912e39ad1ef73f09f468d877fedb1c636147f72f3517259129810cf9e -->

```csharp
public void Inno.Editor.Interactions.EditorMenuBuilder.AddGroup(string path, int order = 0, bool separatorBefore = false)
```

Declares presentation for an intermediate menu group without inventing a no-op action.

**Parameter `path`:** The slash-delimited path of the group.

**Parameter `order`:** The stable ordering value among sibling groups and items.

**Parameter `separatorBefore`:** Whether a separator precedes this group at its own level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L26).
