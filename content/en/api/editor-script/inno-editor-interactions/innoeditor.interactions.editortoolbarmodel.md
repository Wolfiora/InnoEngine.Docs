---
title: "EditorToolbarModel"
description: "Reference for EditorToolbarModel in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.3adbca240b6a39ae
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorToolbarModel`

This reference describes `EditorToolbarModel` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-550befbdd5eccb12) | Method |
| [`items`](#api-5c399e488516f947) | Property |

## Type declaration

<a id="api-3adbca240b6a39ae"></a>
<!-- api: T:InnoEditor.Interactions.EditorToolbarModel 0f408e769785dcb5dbce11cb2ff640400ca4e4071c830628f1a13acfc3eea611 -->

```csharp
public sealed class InnoEditor.Interactions.EditorToolbarModel
```

Contains an immutable resolved toolbar for one interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarModel.cs#L8).

## `#ctor`

<a id="api-550befbdd5eccb12"></a>
<!-- api: M:InnoEditor.Interactions.EditorToolbarModel.#ctor 58abef71cb503932fd4916ebd777c9636cdb37bf54ca4f80d3c2e3278ad59df7 -->

```csharp
public InnoEditor.Interactions.EditorToolbarModel.EditorToolbarModel()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarModel.cs#L8).

## `items`

<a id="api-5c399e488516f947"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarModel.items 485b3a19a14c14d9ca22e454e6ebe54400e151c0e0f42a1e0cf5e650c4f6bb4f -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Interactions.EditorToolbarItem> InnoEditor.Interactions.EditorToolbarModel.items { get; }
```

Gets visible toolbar commands in deterministic display order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarModel.cs#L18).
