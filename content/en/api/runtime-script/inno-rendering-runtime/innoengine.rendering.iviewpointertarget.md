---
title: "IViewPointerTarget"
description: "Reference for IViewPointerTarget in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.479a09ecebff90b9
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewPointerTarget`

This reference describes `IViewPointerTarget` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Advance`](#api-1c571c5a226d1184) | Method |
| [`SetKeyboardFocus`](#api-cbc478fbcd469f45) | Method |
| [`TryHit`](#api-984c6f7cdd4baec1) | Method |
| [`hasKeyboardFocus`](#api-3fa1d87015eafa29) | Property |
| [`hasPointerCapture`](#api-b887dd8db80779dd) | Property |

## Type declaration

<a id="api-479a09ecebff90b9"></a>
<!-- api: T:InnoEngine.Rendering.IViewPointerTarget d94cb62d4af23c0ad996f0bd45399571721adebb1a9596b3ab579a9a0dd98b19 -->

```csharp
public interface InnoEngine.Rendering.IViewPointerTarget
```

Receives pointer input after the rendering model resolves visible draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L214).

## `Advance`

<a id="api-1c571c5a226d1184"></a>
<!-- api: M:InnoEngine.Rendering.IViewPointerTarget.Advance(InnoEngine.Rendering.RenderOutputInput,InnoEngine.Mathematics.Vector2,System.UInt64) 644b40c0fa4952e117cea1813574fb87488ee6a587a9fb45648c2c7c1364ef74 -->

```csharp
void InnoEngine.Rendering.IViewPointerTarget.Advance(InnoEngine.Rendering.RenderOutputInput input, InnoEngine.Mathematics.Vector2 localPosition, ulong frameIndex)
```

Advances this target once for the frame with either routed input or an empty snapshot.

**Parameter `input`:** Routed viewport-local input, or an empty snapshot.

**Parameter `localPosition`:** Target-local pointer coordinates.

**Parameter `frameIndex`:** Shared output frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L268).

## `SetKeyboardFocus`

<a id="api-cbc478fbcd469f45"></a>
<!-- api: M:InnoEngine.Rendering.IViewPointerTarget.SetKeyboardFocus(System.Boolean) ba8f15c49fd89eff87a965de21963c247ca4fc9fb75c66fad152a9aa88955a6e -->

```csharp
void InnoEngine.Rendering.IViewPointerTarget.SetKeyboardFocus(bool focused)
```

Changes keyboard focus after the rendering model resolves a pointer press.

**Parameter `focused`:** Whether this target owns subsequent keyboard input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L233).

## `TryHit`

<a id="api-984c6f7cdd4baec1"></a>
<!-- api: M:InnoEngine.Rendering.IViewPointerTarget.TryHit(InnoEngine.Rendering.RenderView,InnoEngine.Rendering.RenderOutputInput,InnoEngine.Mathematics.Vector2@) 7a8e502e5148c4e54fdbcb23d23833694e44edfc04d792185f6ac40bfab6c91e -->

```csharp
bool InnoEngine.Rendering.IViewPointerTarget.TryHit(InnoEngine.Rendering.RenderView view, InnoEngine.Rendering.RenderOutputInput input, out InnoEngine.Mathematics.Vector2 localPosition)
```

Maps one output pointer onto this item's local surface.

**Parameter `view`:** Exact rendered view.

**Parameter `input`:** Viewport-local input.

**Parameter `localPosition`:** Local target coordinates when hit.

**Returns:** Whether this target is eligible to receive pointer input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L250).

## `hasKeyboardFocus`

<a id="api-3fa1d87015eafa29"></a>
<!-- api: P:InnoEngine.Rendering.IViewPointerTarget.hasKeyboardFocus 106f2a127efa3772a69b868fbb3911cea143f17b5bafdc7151946a272d809344 -->

```csharp
bool InnoEngine.Rendering.IViewPointerTarget.hasKeyboardFocus { get; }
```

Gets whether keyboard and text input should continue reaching this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L225).

## `hasPointerCapture`

<a id="api-b887dd8db80779dd"></a>
<!-- api: P:InnoEngine.Rendering.IViewPointerTarget.hasPointerCapture ae80e18cca10a785bb4865ef4a5688b867bca17802443c594ff11c53c547c2ea -->

```csharp
bool InnoEngine.Rendering.IViewPointerTarget.hasPointerCapture { get; }
```

Gets whether this target retains pointer ownership from an earlier press.
Rendering models route captured input before ordinary hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L220).
