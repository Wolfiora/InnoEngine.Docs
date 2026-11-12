---
title: "EditorActionContext`1"
description: "Reference for EditorActionContext`1 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.08cd45e2847445cf
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorActionContext`1``

This reference describes ``EditorActionContext`1`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorActionContext`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8782071207b17f2d) | Method |
| [`target`](#api-65dfec75eec3df2e) | Property |

## Type declaration

<a id="api-08cd45e2847445cf"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionContext`1 a2b55f94d0248d026ff32842c236504744087da57943497a7d31fb6775563af9 -->

```csharp
public sealed class InnoEditor.Interactions.EditorActionContext<TTarget> : InnoEditor.Interactions.EditorActionContext
```

Provides a strongly typed target to an editor action implementation.

**Type parameter `TTarget`:** The target type required by the action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L81).

## `#ctor`

<a id="api-8782071207b17f2d"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionContext`1.#ctor 920143f04bb56f2975c3d830d6e65b695b8d3c230264c8a452d1024697a8b1b9 -->

```csharp
public InnoEditor.Interactions.EditorActionContext<TTarget>.EditorActionContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L81).

## `target`

<a id="api-65dfec75eec3df2e"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionContext`1.target be06044a992b68bea6def352a0369f43c8748fb271a8e027f95f11b1909714f9 -->

```csharp
public TTarget InnoEditor.Interactions.EditorActionContext<TTarget>.target { get; }
```

Gets the strongly typed action target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionContext.cs#L94).
