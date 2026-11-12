---
title: "EditorViewportToolContext"
description: "Reference for EditorViewportToolContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.1f1ebbb87f83a7ff
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportToolContext`

This reference describes `EditorViewportToolContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1ad1d65685ff934b) | Method |
| [`BeginHistoryGesture`](#api-1277be2c4a9d20ff) | Method |
| [`CapturePointer`](#api-a688d0b20cada54b) | Method |
| [`CompleteHistoryGesture`](#api-e5142c79f13d7a13) | Method |
| [`ReleasePointer`](#api-6304041c1b5f5903) | Method |
| [`ScreenToWorld`](#api-fa4bf9044ae99234) | Method |
| [`WorldToScreen`](#api-7839fc12d88ef54c) | Method |
| [`capturedPointerId`](#api-03fc97e0751e906c) | Property |
| [`hasHistoryGesture`](#api-12a2d0404238f348) | Property |
| [`hasPointerCapture`](#api-0923c1948873958b) | Property |

## Type declaration

<a id="api-1f1ebbb87f83a7ff"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportToolContext 1c3d04eff3eb7109b7467049f6fe0bbb79718f0846f77064fa34022b3e7208cb -->

```csharp
public sealed class InnoEditor.Interactions.EditorViewportToolContext
```

Coordinates pointer capture, transforms, and one history transaction for a viewport gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L8).

## `#ctor`

<a id="api-1ad1d65685ff934b"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.#ctor 31ff748003b7ef1e5e6e65b81797c4a1a127cc9916bec577aaff3d8c435982bb -->

```csharp
public InnoEditor.Interactions.EditorViewportToolContext.EditorViewportToolContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L8).

## `BeginHistoryGesture`

<a id="api-1277be2c4a9d20ff"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.BeginHistoryGesture(System.String) 30ba9666bece838c9cb7318512b75bf2aa24c841a6562441fcd70a1ecbbde64e -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolContext.BeginHistoryGesture(string name)
```

Begins the only history transaction allowed for the current captured gesture.

**Parameter `name`:** User-facing Undo operation name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L64).

## `CapturePointer`

<a id="api-a688d0b20cada54b"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.CapturePointer(System.Int32) 8a10cc30f16ee9ac33a46ce7c6bafe40d33cc75c270766145d1fce4dafb42f1a -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolContext.CapturePointer(int pointerId)
```

Captures one pointer until explicit release or cancellation.

**Parameter `pointerId`:** Platform pointer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L41).

## `CompleteHistoryGesture`

<a id="api-e5142c79f13d7a13"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.CompleteHistoryGesture(System.Boolean) 7bbc4c3eba7accc854c30b6c82832c8498ab4fc36b9a48b456eb01494ef6cc92 -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolContext.CompleteHistoryGesture(bool commit)
```

Commits or rolls back the current gesture transaction exactly once.

**Parameter `commit`:** `true` to commit; otherwise, roll back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L80).

## `ReleasePointer`

<a id="api-6304041c1b5f5903"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.ReleasePointer e7672849a67e4db77177420dfae46ac8b7bc4190c6b713c508713bcbdf586e6e -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolContext.ReleasePointer()
```

Releases the currently captured pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L51).

## `ScreenToWorld`

<a id="api-fa4bf9044ae99234"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.ScreenToWorld(InnoEngine.Mathematics.Vector2) 696d82f674fc5e3aba05e4c9e1dbe865da19cb23c921e26b715db158b662bb18 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.EditorViewportToolContext.ScreenToWorld(InnoEngine.Mathematics.Vector2 screenPosition)
```

Converts viewport-local pixel coordinates to world coordinates.

**Parameter `screenPosition`:** Viewport-local pixel coordinates.

**Returns:** World coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L107).

## `WorldToScreen`

<a id="api-7839fc12d88ef54c"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolContext.WorldToScreen(InnoEngine.Mathematics.Vector2) c473fa1ade7dbf7ee839db289725cd6a235a95e6588e91d36ee6cc1fad12b5fa -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.EditorViewportToolContext.WorldToScreen(InnoEngine.Mathematics.Vector2 worldPosition)
```

Converts world coordinates to viewport-local pixel coordinates.

**Parameter `worldPosition`:** World coordinates.

**Returns:** Viewport-local pixel coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L117).

## `capturedPointerId`

<a id="api-03fc97e0751e906c"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportToolContext.capturedPointerId 7fbbe3c579678ffd5c878803050d6196decffb2eecd7bdbe5f77240554091e47 -->

```csharp
public int? InnoEditor.Interactions.EditorViewportToolContext.capturedPointerId { get; }
```

Gets the captured pointer identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L29).

## `hasHistoryGesture`

<a id="api-12a2d0404238f348"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportToolContext.hasHistoryGesture 896b07cf4159b9408cb83c5e55eef1f7c120424487256cff87a3edb856c6f5e2 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportToolContext.hasHistoryGesture { get; }
```

Gets whether a history transaction is active for the current gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L33).

## `hasPointerCapture`

<a id="api-0923c1948873958b"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportToolContext.hasPointerCapture a83be01be6d14e25de1e15a9d8678b7391c2d65bd6ba64c39bf545e1c4724836 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportToolContext.hasPointerCapture { get; }
```

Gets whether this tool owns a pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L25).
