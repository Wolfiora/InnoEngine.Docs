---
title: "EditorDragData"
description: "Reference for EditorDragData in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8035be291dd9c450
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDragData`

This reference describes `EditorDragData` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1dd92b83d406018a) | Method |
| [`label`](#api-e0d67bd547f7b1ba) | Property |
| [`sourceIdentity`](#api-74f65b7947393f02) | Property |

## Type declaration

<a id="api-8035be291dd9c450"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDragData 60d72c6bd87fa6b5a2c0bcee4c19ddcdda47c5b0a85d95c385f5dd5947b0fbb2 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDragData
```

Contains the transient identity and preview label for one editor drag operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L10).

## `#ctor`

<a id="api-1dd92b83d406018a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDragData.#ctor(Inno.Core.Identity.IdentityObject,System.String) 37c177c267a62c4c3d9463447f872a8c54212d00d4460742d30dd60908064ff8 -->

```csharp
public Inno.Editor.Interactions.EditorDragData.EditorDragData(Inno.Core.Identity.IdentityObject source, string label)
```

Creates drag data for a registered identity object.

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

**Throws `System.ArgumentNullException`:** Thrown when `source` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L27).

## `label`

<a id="api-e0d67bd547f7b1ba"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragData.label c264217d3028ac23f6077584ced787987edc11a549807ea0a44521c72392bdea -->

```csharp
public string Inno.Editor.Interactions.EditorDragData.label { get; }
```

Gets the drag preview label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L46).

## `sourceIdentity`

<a id="api-74f65b7947393f02"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragData.sourceIdentity f047b734ceac96786b4f41f4eecff559e35a08e878da2dfffd85d87a8d16b235 -->

```csharp
public Inno.Core.Identity.RuntimeIdentity Inno.Editor.Interactions.EditorDragData.sourceIdentity { get; }
```

Gets the domain-qualified transient identity written to the native drag protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L41).
