---
title: "EditorTypeSpecificity"
description: "Reference for EditorTypeSpecificity in Inno.Editor.Core."
uid: api.inno.editor.core.e20e9d60b13bf5d0
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorTypeSpecificity`

This reference describes `EditorTypeSpecificity` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`TryGet`](#api-6ae45c7ade835c4d) | Method |

## Type declaration

<a id="api-e20e9d60b13bf5d0"></a>
<!-- api: T:Inno.Editor.Core.EditorTypeSpecificity a7fbcde93d2d42cedab81bbc05bcdd63a727ad8e3177d99555f1bfaa9631fbe2 -->

```csharp
public static class Inno.Editor.Core.EditorTypeSpecificity
```

Ranks assignable editor extension targets by class ancestry, with interface registrations one step away.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorTypeSpecificity.cs#L7).

## `TryGet`

<a id="api-6ae45c7ade835c4d"></a>
<!-- api: M:Inno.Editor.Core.EditorTypeSpecificity.TryGet(System.Type,System.Type,System.Int32@) 12a3bc2954ea71b5f020087ac214051802586565658ab80285c48992ec43b5f9 -->

```csharp
public static bool Inno.Editor.Core.EditorTypeSpecificity.TryGet(System.Type concreteType, System.Type candidateType, out int distance)
```

Determines whether a registration accepts a concrete target and returns its specificity distance.

**Parameter `concreteType`:** The target type supplied by the active extension generation.

**Parameter `candidateType`:** The registered class or interface accepted by the extension.

**Parameter `distance`:** Zero for an exact match, ancestry distance for classes, or one for an interface.

**Returns:** True when the registration accepts the target; otherwise false and the maximum distance.

**Throws `System.ArgumentNullException`:** Either type is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorTypeSpecificity.cs#L27).
