---
title: "EditorMenuSource"
description: "Reference for EditorMenuSource in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.e77a8c29877f7dae
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuSource`

This reference describes `EditorMenuSource` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b883580843a590f8) | Method |
| [`Build`](#api-f184ffcda5bdadd1) | Method |

## Type declaration

<a id="api-e77a8c29877f7dae"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuSource 179b17da3241f8eb88c2651332b57e9e86ca1142a14c32cae43566d35a7f11c3 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorMenuSource
```

Contributes dynamic entries to one or more editor menu surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L8).

## `#ctor`

<a id="api-b883580843a590f8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuSource.#ctor 1e828d20675f49f43d6c5522027a9a3d1eca37e6d251eec1f8402af39e49a70d -->

```csharp
protected Inno.Editor.Interactions.EditorMenuSource.EditorMenuSource()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L8).

## `Build`

<a id="api-f184ffcda5bdadd1"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuSource.Build(Inno.Editor.Interactions.EditorMenuContext,Inno.Editor.Interactions.EditorMenuBuilder) be39670e1b0ad30dcbdc01694be33eb97366a90ec9db30af24848b8eaeba29fa -->

```csharp
public abstract void Inno.Editor.Interactions.EditorMenuSource.Build(Inno.Editor.Interactions.EditorMenuContext context, Inno.Editor.Interactions.EditorMenuBuilder builder)
```

Adds context-dependent placements for the supplied menu request.

**Parameter `context`:** The requested menu surface, target, and shared editor context.

**Parameter `builder`:** The collector that receives dynamic action placements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSource.cs#L19).
