---
title: "RenderOutputInput"
description: "Reference for RenderOutputInput in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.1ad5c8435553595a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderOutputInput`

This reference describes `RenderOutputInput` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dfea55919233be50) | Method |
| [`buttonsPressed`](#api-e64fbd8701a335ad) | Property |
| [`buttonsReleased`](#api-f678dd6702876547) | Property |
| [`empty`](#api-cebdff4932252186) | Property |
| [`interactionEnabled`](#api-7e5d3b0d6b51616a) | Property |
| [`keysPressed`](#api-62b87e17160461cf) | Property |
| [`keysReleased`](#api-2a51578cf9bce11e) | Property |
| [`modifiers`](#api-25c39bfe800a1b04) | Property |
| [`pointerInside`](#api-06c02e96864956d8) | Property |
| [`pointerPosition`](#api-708ffdef5fc098a7) | Property |
| [`scrollDelta`](#api-f16862041c9b629d) | Property |
| [`suspended`](#api-b0d85cf398fa8be8) | Property |
| [`textInput`](#api-367aba706777155b) | Property |

## Type declaration

<a id="api-1ad5c8435553595a"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderOutputInput ed9f5717530c762270c04fd08e171e0db75509ce5ecc660246d8d3174b226937 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderOutputInput
```

Frame-local input located in the output viewport's physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L13).

## `#ctor`

<a id="api-dfea55919233be50"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderOutputInput.#ctor(Inno.Core.Mathematics.Vector2,System.Boolean,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.KeyCode},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyCollection{Inno.Core.Input.MouseButton},System.Collections.Generic.IReadOnlyList{System.String},System.Boolean) 071cc42277537df426b11d3fbe6f95d7de1139b7de26077afa4089acf9a21b6d -->

```csharp
public Inno.Rendering.Runtime.RenderOutputInput.RenderOutputInput(Inno.Core.Mathematics.Vector2 pointerPosition, bool pointerInside, Inno.Core.Mathematics.Vector2 scrollDelta, Inno.Core.Input.KeyModifier modifiers, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> keysPressed, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> keysReleased, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> buttonsPressed, System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> buttonsReleased, System.Collections.Generic.IReadOnlyList<string> textInput, bool interactionEnabled = true)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L48).

## `buttonsPressed`

<a id="api-e64fbd8701a335ad"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.buttonsPressed c573a699f4b859f07c6d83cd9dedab3aef7b65faf9f2a9f8dbc6e8d5945be0b7 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.Rendering.Runtime.RenderOutputInput.buttonsPressed { get; }
```

Gets buttons pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L111).

## `buttonsReleased`

<a id="api-f678dd6702876547"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.buttonsReleased 58abc8d2f26010e9d243326305f6009408b3f5e0cae2595cc00057500052e676 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.Rendering.Runtime.RenderOutputInput.buttonsReleased { get; }
```

Gets buttons released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L115).

## `empty`

<a id="api-cebdff4932252186"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.empty c80305851253fc2def91e3257fc9d930f7d237c34ca2e8964807212958ec83b5 -->

```csharp
public static Inno.Rendering.Runtime.RenderOutputInput Inno.Rendering.Runtime.RenderOutputInput.empty { get; }
```

Gets a snapshot with no active input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L75).

## `interactionEnabled`

<a id="api-7e5d3b0d6b51616a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.interactionEnabled 606ecc61c95131d7692a9b7202ac4e1171c6585ea8fc57ff2068d575fdea9d76 -->

```csharp
public bool Inno.Rendering.Runtime.RenderOutputInput.interactionEnabled { get; }
```

Gets whether game pointer and keyboard interaction is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L124).

## `keysPressed`

<a id="api-62b87e17160461cf"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.keysPressed 723a4803c0a51c1d59506164a2277ce758da05f152d96f789d5aca847d7c6458 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.Rendering.Runtime.RenderOutputInput.keysPressed { get; }
```

Gets keys pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L103).

## `keysReleased`

<a id="api-2a51578cf9bce11e"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.keysReleased 066ee87233ea8edbb793c9ae6524c01804d94d4056fd45fe644e1e5a57534fa9 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.Rendering.Runtime.RenderOutputInput.keysReleased { get; }
```

Gets keys released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L107).

## `modifiers`

<a id="api-25c39bfe800a1b04"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.modifiers 114bf36974e382040500a2353377f5335ca777d2d7d8b67e71efa389b4b8784b -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Rendering.Runtime.RenderOutputInput.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L99).

## `pointerInside`

<a id="api-06c02e96864956d8"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.pointerInside 4300b77cdca5abf64123ff1a48067c1e2d658cc765a4ccdc7f0b629f5b8502a6 -->

```csharp
public bool Inno.Rendering.Runtime.RenderOutputInput.pointerInside { get; }
```

Gets whether the pointer is inside this output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L91).

## `pointerPosition`

<a id="api-708ffdef5fc098a7"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.pointerPosition fe4310e3451b91a50b42d0700cce34746ced8d73857000ab2ac6a7809a79edeb -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Rendering.Runtime.RenderOutputInput.pointerPosition { get; }
```

Gets viewport-local pointer coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L87).

## `scrollDelta`

<a id="api-f16862041c9b629d"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.scrollDelta 171c7e3c4645c94f7bac4816f48e7d8da35062cc4759ad538c8893e9dc600759 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Rendering.Runtime.RenderOutputInput.scrollDelta { get; }
```

Gets wheel movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L95).

## `suspended`

<a id="api-b0d85cf398fa8be8"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.suspended 58154cfaab69adfce1e9ef77866ba309ea5f6bb0f25c0424232898758ba41540 -->

```csharp
public static Inno.Rendering.Runtime.RenderOutputInput Inno.Rendering.Runtime.RenderOutputInput.suspended { get; }
```

Gets a snapshot that clears gameplay interaction while retaining the rendered output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L81).

## `textInput`

<a id="api-367aba706777155b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputInput.textInput 754b0db91fe11e72da7c9a26faacdfebb02e2d5b56ceb49909b28a1aeef58495 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Runtime.RenderOutputInput.textInput { get; }
```

Gets ordered text commits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputInput.cs#L119).
