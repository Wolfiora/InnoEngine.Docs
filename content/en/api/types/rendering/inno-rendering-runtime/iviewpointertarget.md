---
title: "IViewPointerTarget"
description: "Reference for IViewPointerTarget in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.9dae3c019ed5e492
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewPointerTarget`

This reference describes `IViewPointerTarget` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Advance`](#api-9a36b1eebb5a8e68) | Method |
| [`SetKeyboardFocus`](#api-eb2e42ab982d14e5) | Method |
| [`TryHit`](#api-cf88b5549af22fb5) | Method |
| [`hasKeyboardFocus`](#api-b1d78deff6ba6d6e) | Property |
| [`hasPointerCapture`](#api-7c085abc7c8bfba0) | Property |

## Type declaration

<a id="api-9dae3c019ed5e492"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewPointerTarget b6f30bbcde6a577e01c71e504b57e3f63d4d3b26ae67e4c4dc1e4dd13bab0243 -->

```csharp
public interface Inno.Rendering.Runtime.IViewPointerTarget
```

Receives pointer input after the rendering model resolves visible draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L214).

## `Advance`

<a id="api-9a36b1eebb5a8e68"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewPointerTarget.Advance(Inno.Rendering.Runtime.RenderOutputInput,Inno.Core.Mathematics.Vector2,System.UInt64) b5d9039ccb8d406d3c98cd53317df217207f5bf3a5f7cd7fe9211c6ccc089423 -->

```csharp
void Inno.Rendering.Runtime.IViewPointerTarget.Advance(Inno.Rendering.Runtime.RenderOutputInput input, Inno.Core.Mathematics.Vector2 localPosition, ulong frameIndex)
```

Advances this target once for the frame with either routed input or an empty snapshot.

**Parameter `input`:** Routed viewport-local input, or an empty snapshot.

**Parameter `localPosition`:** Target-local pointer coordinates.

**Parameter `frameIndex`:** Shared output frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L268).

## `SetKeyboardFocus`

<a id="api-eb2e42ab982d14e5"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewPointerTarget.SetKeyboardFocus(System.Boolean) 7d5bb79ab98f8b9beb90e3f26f5538bfd4599f9555d2a0f0c5b27e77c9d1b53e -->

```csharp
void Inno.Rendering.Runtime.IViewPointerTarget.SetKeyboardFocus(bool focused)
```

Changes keyboard focus after the rendering model resolves a pointer press.

**Parameter `focused`:** Whether this target owns subsequent keyboard input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L233).

## `TryHit`

<a id="api-cf88b5549af22fb5"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewPointerTarget.TryHit(Inno.Rendering.Runtime.RenderView,Inno.Rendering.Runtime.RenderOutputInput,Inno.Core.Mathematics.Vector2@) 9165cf061a158893da294e4c72f5b5785dbb6f6ae57f126d031fabaac1195011 -->

```csharp
bool Inno.Rendering.Runtime.IViewPointerTarget.TryHit(Inno.Rendering.Runtime.RenderView view, Inno.Rendering.Runtime.RenderOutputInput input, out Inno.Core.Mathematics.Vector2 localPosition)
```

Maps one output pointer onto this item's local surface.

**Parameter `view`:** Exact rendered view.

**Parameter `input`:** Viewport-local input.

**Parameter `localPosition`:** Local target coordinates when hit.

**Returns:** Whether this target is eligible to receive pointer input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L250).

## `hasKeyboardFocus`

<a id="api-b1d78deff6ba6d6e"></a>
<!-- api: P:Inno.Rendering.Runtime.IViewPointerTarget.hasKeyboardFocus d14ce882fd916a61816cb1ebf4dc17be11a473410b9c388da816ce44b73fef4c -->

```csharp
bool Inno.Rendering.Runtime.IViewPointerTarget.hasKeyboardFocus { get; }
```

Gets whether keyboard and text input should continue reaching this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L225).

## `hasPointerCapture`

<a id="api-7c085abc7c8bfba0"></a>
<!-- api: P:Inno.Rendering.Runtime.IViewPointerTarget.hasPointerCapture cf7ece2fe16f388c1796c7b8236d82ae6b0402783bba8be956f8273bf4401476 -->

```csharp
bool Inno.Rendering.Runtime.IViewPointerTarget.hasPointerCapture { get; }
```

Gets whether this target retains pointer ownership from an earlier press.
Rendering models route captured input before ordinary hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L220).
