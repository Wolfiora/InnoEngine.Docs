---
title: "EditorMenuSource"
description: "Reference for EditorMenuSource in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.771f8874dab7da7d
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuSource`

This reference describes `EditorMenuSource` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c8b63c028c517037) | Method |
| [`Build`](#api-920f74999aa68217) | Method |

## Type declaration

<a id="api-771f8874dab7da7d"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuSource 474b2018b5bfe0018fd1a5db44babde1ec1dc49a8d58439bc3b17c5e70159127 -->

```csharp
public abstract class InnoEditor.Interactions.EditorMenuSource
```

Contributes dynamic entries to one or more editor menu surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L8).

## `#ctor`

<a id="api-c8b63c028c517037"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuSource.#ctor e690efc7879ab3d57339c0e5d977b715a7497dc8eb9f083b98328c6a8817c047 -->

```csharp
protected InnoEditor.Interactions.EditorMenuSource.EditorMenuSource()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L8).

## `Build`

<a id="api-920f74999aa68217"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuSource.Build(InnoEditor.Interactions.EditorMenuContext,InnoEditor.Interactions.EditorMenuBuilder) 3685037692954e7a30cd40cc32d1d5dfd097054db84f715b0f0d9354a3f96227 -->

```csharp
public abstract void InnoEditor.Interactions.EditorMenuSource.Build(InnoEditor.Interactions.EditorMenuContext context, InnoEditor.Interactions.EditorMenuBuilder builder)
```

Adds context-dependent placements for the supplied menu request.

**Parameter `context`:** The requested menu surface, target, and shared editor context.

**Parameter `builder`:** The collector that receives dynamic action placements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L19).
