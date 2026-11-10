---
title: "EditorViewportToolContext"
description: "Reference for EditorViewportToolContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.7e1fc2b03877620c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportToolContext`

This reference describes `EditorViewportToolContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginHistoryGesture`](#api-820b073333938660) | Method |
| [`CapturePointer`](#api-b7aecf0148e710b7) | Method |
| [`CompleteHistoryGesture`](#api-7c9f26144163a180) | Method |
| [`ReleasePointer`](#api-908a1e66d28fdc81) | Method |
| [`ScreenToWorld`](#api-bdfc6620fd319518) | Method |
| [`WorldToScreen`](#api-971fbc6bfb774c03) | Method |
| [`capturedPointerId`](#api-00e80aca871a96ea) | Property |
| [`hasHistoryGesture`](#api-09e4088978c8c2c5) | Property |
| [`hasPointerCapture`](#api-ce98eaf75495fc38) | Property |

## Type declaration

<a id="api-7e1fc2b03877620c"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportToolContext d25a6f5a3d52f996be0000c176db0b4b82507d07a3cbf9f099245b76cd1d3829 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorViewportToolContext
```

Coordinates pointer capture, transforms, and one history transaction for a viewport gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L8).

## `BeginHistoryGesture`

<a id="api-820b073333938660"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.BeginHistoryGesture(System.String) 553f539656530502a4baa1f3715b13e0e09bbe2b89e320783b4ccdf1a98e5b84 -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolContext.BeginHistoryGesture(string name)
```

Begins the only history transaction allowed for the current captured gesture.

**Parameter `name`:** User-facing Undo operation name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L64).

## `CapturePointer`

<a id="api-b7aecf0148e710b7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.CapturePointer(System.Int32) 0cd51dfc7498b74cbf3119b732ffcc21cb2280314f48fa8d02e0e2c33bd75868 -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolContext.CapturePointer(int pointerId)
```

Captures one pointer until explicit release or cancellation.

**Parameter `pointerId`:** Platform pointer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L41).

## `CompleteHistoryGesture`

<a id="api-7c9f26144163a180"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.CompleteHistoryGesture(System.Boolean) 464e20b441104a28e6cdbcde66efbf7863582b05e8d52d3f427fa81c2729d346 -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolContext.CompleteHistoryGesture(bool commit)
```

Commits or rolls back the current gesture transaction exactly once.

**Parameter `commit`:** `true` to commit; otherwise, roll back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L80).

## `ReleasePointer`

<a id="api-908a1e66d28fdc81"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.ReleasePointer 63b13f6390dfa5c7acfdeb96edfb2bee6d24361564b3b2a1b610201f2c34f9ae -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolContext.ReleasePointer()
```

Releases the currently captured pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L51).

## `ScreenToWorld`

<a id="api-bdfc6620fd319518"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.ScreenToWorld(Inno.Core.Mathematics.Vector2) 7215e0d327c27faa54b5d4192077222eac218723af077bc760106bdf7d655f2d -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.EditorViewportToolContext.ScreenToWorld(Inno.Core.Mathematics.Vector2 screenPosition)
```

Converts viewport-local pixel coordinates to world coordinates.

**Parameter `screenPosition`:** Viewport-local pixel coordinates.

**Returns:** World coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L107).

## `WorldToScreen`

<a id="api-971fbc6bfb774c03"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolContext.WorldToScreen(Inno.Core.Mathematics.Vector2) 2a18a208532a78811fac0623b3fd0f920c386641c28aaa04ecc5d3075b4faeb6 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.EditorViewportToolContext.WorldToScreen(Inno.Core.Mathematics.Vector2 worldPosition)
```

Converts world coordinates to viewport-local pixel coordinates.

**Parameter `worldPosition`:** World coordinates.

**Returns:** Viewport-local pixel coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L117).

## `capturedPointerId`

<a id="api-00e80aca871a96ea"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportToolContext.capturedPointerId 81a2395d13a1c93284573ab837d4d7963d0deeaaec3bf4673c50906c3a139c1f -->

```csharp
public int? Inno.Editor.Interactions.EditorViewportToolContext.capturedPointerId { get; }
```

Gets the captured pointer identity, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L29).

## `hasHistoryGesture`

<a id="api-09e4088978c8c2c5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportToolContext.hasHistoryGesture 6d0c1543c12a6074137d971d24079d6ab7bf262aec6565543e64f53b9cfdaa0a -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportToolContext.hasHistoryGesture { get; }
```

Gets whether a history transaction is active for the current gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L33).

## `hasPointerCapture`

<a id="api-ce98eaf75495fc38"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportToolContext.hasPointerCapture 3493cd10e878ae153d27f2479fac3c6552c60a41c462949c0b83d74eaa4d0205 -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportToolContext.hasPointerCapture { get; }
```

Gets whether this tool owns a pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolContext.cs#L25).
