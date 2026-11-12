---
title: "EditorMenuBuilder"
description: "Reference for EditorMenuBuilder in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.47c0d83ea5c97651
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuBuilder`

This reference describes `EditorMenuBuilder` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-37a7600918ff61fb) | Method |
| [`Add`](#api-dd339aa5ef053767) | Method |
| [`AddGroup`](#api-473c751f7dc0bd8f) | Method |

## Type declaration

<a id="api-47c0d83ea5c97651"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuBuilder 8018d1c46934b466d0022adc7f7584567ad81571eeb00032daca1fde0c2b90a4 -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuBuilder
```

Collects dynamic menu item placements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L9).

## `#ctor`

<a id="api-37a7600918ff61fb"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuBuilder.#ctor 772f5b99f245dacc03c69f4848491eed6075298bcb2209abfa14f44f04f22430 -->

```csharp
public InnoEditor.Interactions.EditorMenuBuilder.EditorMenuBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L9).

## `Add`

<a id="api-dd339aa5ef053767"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuBuilder.Add(System.String,System.String,System.Int32,System.Boolean,System.Object) 37bed295433896a18f48aa679e3e87465bcfa720aae8186d0929bdf00bd488d3 -->

```csharp
public void InnoEditor.Interactions.EditorMenuBuilder.Add(string path, string actionId, int order = 0, bool separatorBefore = false, object? argument = null)
```

Adds a dynamic action placement to the menu currently being constructed.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `actionId`:** The stable action identifier invoked by the leaf.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Parameter `argument`:** An optional argument captured for this menu generation.

**Throws `System.ArgumentException`:** Thrown when `path` or `actionId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L57).

## `AddGroup`

<a id="api-473c751f7dc0bd8f"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuBuilder.AddGroup(System.String,System.Int32,System.Boolean) 04fb771c9bf4631c3b5587e63f98335352d1dc55714c02305caaa99e94cfa864 -->

```csharp
public void InnoEditor.Interactions.EditorMenuBuilder.AddGroup(string path, int order = 0, bool separatorBefore = false)
```

Declares presentation for an intermediate menu group without inventing a no-op action.

**Parameter `path`:** The slash-delimited path of the group.

**Parameter `order`:** The stable ordering value among sibling groups and items.

**Parameter `separatorBefore`:** Whether a separator precedes this group at its own level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuBuilder.cs#L26).
