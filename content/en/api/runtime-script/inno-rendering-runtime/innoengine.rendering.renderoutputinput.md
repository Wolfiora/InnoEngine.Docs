---
title: "RenderOutputInput"
description: "Reference for RenderOutputInput in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.c858cc17981a459a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderOutputInput`

This reference describes `RenderOutputInput` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0d383feeefa3fe62) | Method |
| [`buttonsPressed`](#api-e93eb18bc2dff495) | Property |
| [`buttonsReleased`](#api-c6e5f64219f3d411) | Property |
| [`empty`](#api-70580b1fb2c46f3b) | Property |
| [`interactionEnabled`](#api-da7c6e299480e0a8) | Property |
| [`keysPressed`](#api-13592bb008bcae5c) | Property |
| [`keysReleased`](#api-33bdbd9f04c8e61d) | Property |
| [`modifiers`](#api-75e5d3f960761f48) | Property |
| [`pointerInside`](#api-5112ee916c8b9b40) | Property |
| [`pointerPosition`](#api-66fa580563552a4e) | Property |
| [`scrollDelta`](#api-8250eb00abbdef29) | Property |
| [`suspended`](#api-81b312c5a42547ed) | Property |
| [`textInput`](#api-cb00f5eac6545dd9) | Property |

## Type declaration

<a id="api-c858cc17981a459a"></a>
<!-- api: T:InnoEngine.Rendering.RenderOutputInput 185c3883fa106540f9d3187f008e999fe6d7e1951ef929368f0e67987415d8f4 -->

```csharp
public sealed class InnoEngine.Rendering.RenderOutputInput
```

Frame-local input located in the output viewport's physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L13).

## `#ctor`

<a id="api-0d383feeefa3fe62"></a>
<!-- api: M:InnoEngine.Rendering.RenderOutputInput.#ctor(InnoEngine.Mathematics.Vector2,System.Boolean,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{InnoEngine.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean) 0a7f03bafe2490712fb205edbc7ebcbaea344dfd431ed669e462cb7577adff24 -->

```csharp
public InnoEngine.Rendering.RenderOutputInput.RenderOutputInput(InnoEngine.Mathematics.Vector2 pointerPosition, bool pointerInside, InnoEngine.Mathematics.Vector2 scrollDelta, InnoEngine.Input.KeyModifier modifiers, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> keysPressed, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> keysReleased, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> buttonsPressed, System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> buttonsReleased, System.Collections.Generic.IReadOnlyList<string> textInput, bool interactionEnabled = true)
```

Creates an input snapshot for one output viewport.

**Parameter `pointerPosition`:** Pointer coordinates relative to the viewport's top-left corner.

**Parameter `pointerInside`:** Whether the pointer is within this output.

**Parameter `scrollDelta`:** Pointer wheel movement.

**Parameter `modifiers`:** Current keyboard modifiers.

**Parameter `keysPressed`:** Keys pressed this frame.

**Parameter `keysReleased`:** Keys released this frame.

**Parameter `buttonsPressed`:** Pointer buttons pressed this frame.

**Parameter `buttonsReleased`:** Pointer buttons released this frame.

**Parameter `textInput`:** Ordered Unicode text commits.

**Parameter `interactionEnabled`:** Whether the output may dispatch game interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L48).

## `buttonsPressed`

<a id="api-e93eb18bc2dff495"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.buttonsPressed 8e6affa9d79cfa2b16305e7de00203372102e20c93ae569ee28cb9f8f238596a -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.Rendering.RenderOutputInput.buttonsPressed { get; }
```

Gets buttons pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L111).

## `buttonsReleased`

<a id="api-c6e5f64219f3d411"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.buttonsReleased 99e76048324c2fee43599e91392efc666301f63ebd225eda94688351ab3046c3 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.Rendering.RenderOutputInput.buttonsReleased { get; }
```

Gets buttons released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L115).

## `empty`

<a id="api-70580b1fb2c46f3b"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.empty 0e316ad220e05f8807fc82ce4c64c3e85596fffe91a7e7d7847658a3a041daa3 -->

```csharp
public static InnoEngine.Rendering.RenderOutputInput InnoEngine.Rendering.RenderOutputInput.empty { get; }
```

Gets a snapshot with no active input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L75).

## `interactionEnabled`

<a id="api-da7c6e299480e0a8"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.interactionEnabled 608a5f6ee6d865d075202b6ec64ef0c332a10eaf6c869ec7a5ea99e2e4613f7a -->

```csharp
public bool InnoEngine.Rendering.RenderOutputInput.interactionEnabled { get; }
```

Gets whether game pointer and keyboard interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L124).

## `keysPressed`

<a id="api-13592bb008bcae5c"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.keysPressed c08f94873d43cc4d375225f33fdba1ea7d8d8b3a7a17d12a20e17a14950e8c98 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.Rendering.RenderOutputInput.keysPressed { get; }
```

Gets keys pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L103).

## `keysReleased`

<a id="api-33bdbd9f04c8e61d"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.keysReleased a22d27478492451d9459cdabb77c4c429a8069b1e0ae077e1f0d7fc3ccea7f31 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.Rendering.RenderOutputInput.keysReleased { get; }
```

Gets keys released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L107).

## `modifiers`

<a id="api-75e5d3f960761f48"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.modifiers 8ea49cbfcc5f7cfe97e10ca9a1b8d297bc1a9d2dfd1b79e17554566799929853 -->

```csharp
public InnoEngine.Input.KeyModifier InnoEngine.Rendering.RenderOutputInput.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L99).

## `pointerInside`

<a id="api-5112ee916c8b9b40"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.pointerInside 549c5fd0a5bdd35bccb5446b305bbbccfc64b367da9bba55289e5afa97c28439 -->

```csharp
public bool InnoEngine.Rendering.RenderOutputInput.pointerInside { get; }
```

Gets whether the pointer is inside this output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L91).

## `pointerPosition`

<a id="api-66fa580563552a4e"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.pointerPosition ed71d64670ea5f69f74d7c7e842ea54ef850fb12ee8c76a5396c4403fd4611d5 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Rendering.RenderOutputInput.pointerPosition { get; }
```

Gets viewport-local pointer coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L87).

## `scrollDelta`

<a id="api-8250eb00abbdef29"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.scrollDelta 4bfc54e9d875b645af8c9b5f65077e6ab19e6854fd9b7b42dd079200c152ccbe -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Rendering.RenderOutputInput.scrollDelta { get; }
```

Gets wheel movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L95).

## `suspended`

<a id="api-81b312c5a42547ed"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.suspended 5b935798ce7d194fd963c0743233bbcb5361c6dd0eb9688f0c348a26ead03d6c -->

```csharp
public static InnoEngine.Rendering.RenderOutputInput InnoEngine.Rendering.RenderOutputInput.suspended { get; }
```

Gets a snapshot that clears gameplay interaction while retaining the rendered output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L81).

## `textInput`

<a id="api-cb00f5eac6545dd9"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputInput.textInput df93a34be5c0b537301ca7898de68afb2e9938a73e2e82a2c7bece77c89ca8f0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Rendering.RenderOutputInput.textInput { get; }
```

Gets ordered text commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L119).
