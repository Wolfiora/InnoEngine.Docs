---
title: "EditorDragData"
description: "Reference for EditorDragData in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.0051aa57958b11ff
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDragData`

This reference describes `EditorDragData` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b183064b573c76f0) | Method |
| [`label`](#api-8f31d07c833679b2) | Property |
| [`sourceIdentity`](#api-c1a27e8673ad3ec8) | Property |

## Type declaration

<a id="api-0051aa57958b11ff"></a>
<!-- api: T:InnoEditor.Interactions.EditorDragData 5d5ace06d72b933461a1ea932ca05e84869dd3388669335d526e3ddd360178a1 -->

```csharp
public sealed class InnoEditor.Interactions.EditorDragData
```

Contains the transient identity and preview label for one editor drag operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L10).

## `#ctor`

<a id="api-b183064b573c76f0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDragData.#ctor(InnoEngine.Core.IdentityObject,System.String) 383fb1e4d13ef5daf6a19ee8720ac4096139767d1435cdf6897ae3b294a79323 -->

```csharp
public InnoEditor.Interactions.EditorDragData.EditorDragData(InnoEngine.Core.IdentityObject source, string label)
```

Creates drag data for a registered identity object.

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

**Throws `System.ArgumentNullException`:** Thrown when `source` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L27).

## `label`

<a id="api-8f31d07c833679b2"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragData.label e2b3a89e5d6acd2b57960fbab80cd5acad4ee63dbca972b762a21ad30993ceb4 -->

```csharp
public string InnoEditor.Interactions.EditorDragData.label { get; }
```

Gets the drag preview label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L46).

## `sourceIdentity`

<a id="api-c1a27e8673ad3ec8"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragData.sourceIdentity 7fc5aa2bd9eff8fafcacab35d3a040a5097249c855005570a1220f14cd059334 -->

```csharp
public InnoEngine.Core.RuntimeIdentity InnoEditor.Interactions.EditorDragData.sourceIdentity { get; }
```

Gets the domain-qualified transient identity written to the native drag protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragData.cs#L41).
