---
title: "InputSnapshot"
description: "Reference for InputSnapshot in Inno.Input."
uid: api.inno.input.runtime-script.531b736a67f69186
kind: api
owners:
  - Inno.Input
apiSurface: runtime-script
contracts:
  - project.inno-input#execution-and-ownership-contract
  - manual.scripting.use-script-api
---
# `InputSnapshot`

This reference describes `InputSnapshot` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f10406223fd02e46) | Method |
| [`IsKeyDown`](#api-363a134088f67fb4) | Method |
| [`IsMouseButtonDown`](#api-5044297dae282a86) | Method |
| [`WasKeyPressed`](#api-05bcebe13f29ff5c) | Method |
| [`WasKeyReleased`](#api-5912424743f84415) | Method |
| [`WasMouseButtonPressed`](#api-f96e29d7df5e22ff) | Method |
| [`WasMouseButtonReleased`](#api-d7509cb502143a8f) | Method |
| [`empty`](#api-5c7a71d7f026eea1) | Property |
| [`frameIndex`](#api-08699e3fb5f37e69) | Property |
| [`keysPressed`](#api-89081abacb452335) | Property |
| [`keysReleased`](#api-e2b722a0701109f4) | Property |
| [`modifiers`](#api-df317f790a6dad32) | Property |
| [`mouseButtonsPressed`](#api-a2f21bc4a44ef98f) | Property |
| [`mouseButtonsReleased`](#api-4e57de8595cfef70) | Property |
| [`mouseDelta`](#api-dfb3e21321f90324) | Property |
| [`mousePosition`](#api-dbb099df2f56caf9) | Property |
| [`scrollDelta`](#api-63038f9fe6b670a3) | Property |
| [`textInput`](#api-2703968e5e2aa8e1) | Property |

## Type declaration

<a id="api-531b736a67f69186"></a>
<!-- api: T:InnoEngine.Input.InputSnapshot 8cc4b564da8c742245ab1cf41cace58c43b0ca713a534f92ce1e41c6f1176406 -->

```csharp
public sealed class InnoEngine.Input.InputSnapshot
```

Captures immutable keyboard and pointer state at one runtime frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L13).

## `#ctor`

<a id="api-f10406223fd02e46"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.#ctor(System.Int64,System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.KeyCode},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},System.Collections.Generic.IEnumerable{InnoEngine.Input.MouseButton},InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,InnoEngine.Input.KeyModifier,System.Collections.Generic.IEnumerable{System.String}) 3faf5474e5eed50e64e55b26a3bf0a114ac98012f8bbee587652fbc9e9bf92bb -->

```csharp
public InnoEngine.Input.InputSnapshot.InputSnapshot(long frameIndex, System.Collections.Generic.IEnumerable<InnoEngine.Input.KeyCode>? keysDown = null, System.Collections.Generic.IEnumerable<InnoEngine.Input.KeyCode>? keysPressed = null, System.Collections.Generic.IEnumerable<InnoEngine.Input.KeyCode>? keysReleased = null, System.Collections.Generic.IEnumerable<InnoEngine.Input.MouseButton>? mouseButtonsDown = null, System.Collections.Generic.IEnumerable<InnoEngine.Input.MouseButton>? mouseButtonsPressed = null, System.Collections.Generic.IEnumerable<InnoEngine.Input.MouseButton>? mouseButtonsReleased = null, InnoEngine.Mathematics.Vector2 mousePosition = default(InnoEngine.Mathematics.Vector2), InnoEngine.Mathematics.Vector2 mouseDelta = default(InnoEngine.Mathematics.Vector2), InnoEngine.Mathematics.Vector2 scrollDelta = default(InnoEngine.Mathematics.Vector2), InnoEngine.Input.KeyModifier modifiers = InnoEngine.Input.KeyModifier.None, System.Collections.Generic.IEnumerable<string>? textInput = null)
```

Creates a complete immutable input snapshot.

**Parameter `frameIndex`:** The runtime frame that owns the snapshot.

**Parameter `keysDown`:** Keys held at the frame boundary.

**Parameter `keysPressed`:** Keys newly pressed since the previous snapshot.

**Parameter `keysReleased`:** Keys newly released since the previous snapshot.

**Parameter `mouseButtonsDown`:** Pointer buttons held at the frame boundary.

**Parameter `mouseButtonsPressed`:** Pointer buttons newly pressed since the previous snapshot.

**Parameter `mouseButtonsReleased`:** Pointer buttons newly released since the previous snapshot.

**Parameter `mousePosition`:** Current pointer position in window coordinates.

**Parameter `mouseDelta`:** Pointer movement accumulated since the previous snapshot.

**Parameter `scrollDelta`:** Wheel movement accumulated since the previous snapshot.

**Parameter `modifiers`:** Active keyboard modifiers at the frame boundary.

**Parameter `textInput`:** Ordered Unicode text commits captured since the previous snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L62).

## `IsKeyDown`

<a id="api-363a134088f67fb4"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.IsKeyDown(InnoEngine.Input.KeyCode) f43f73bbfbe32b3dc4f16758d4fe8d1d6b280b1f97a3b9c9fdefa2e2ac29d7a7 -->

```csharp
public bool InnoEngine.Input.InputSnapshot.IsKeyDown(InnoEngine.Input.KeyCode key)
```

Determines whether a key is currently held.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L156).

## `IsMouseButtonDown`

<a id="api-5044297dae282a86"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.IsMouseButtonDown(InnoEngine.Input.MouseButton) 670310f6845d1c1fea60e7ef802475483488dbb7f9f00af373c0a8a579bb653c -->

```csharp
public bool InnoEngine.Input.InputSnapshot.IsMouseButtonDown(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button is currently held.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L189).

## `WasKeyPressed`

<a id="api-05bcebe13f29ff5c"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.WasKeyPressed(InnoEngine.Input.KeyCode) bed9d92cea0cb2c53734202d3956f1b3b808be49afe4af7ebe6699b718af5de8 -->

```csharp
public bool InnoEngine.Input.InputSnapshot.WasKeyPressed(InnoEngine.Input.KeyCode key)
```

Determines whether a key was newly pressed during this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L167).

## `WasKeyReleased`

<a id="api-5912424743f84415"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.WasKeyReleased(InnoEngine.Input.KeyCode) fb5ac9c20898a143204b3a220a8d833db606e378efb7cb3ac15f3cdcb868917c -->

```csharp
public bool InnoEngine.Input.InputSnapshot.WasKeyReleased(InnoEngine.Input.KeyCode key)
```

Determines whether a key was newly released during this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L178).

## `WasMouseButtonPressed`

<a id="api-f96e29d7df5e22ff"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.WasMouseButtonPressed(InnoEngine.Input.MouseButton) a8e905e42bbcd244215c56e19c1b8a40c5fe2b004e27af2b07c3c295fff4411b -->

```csharp
public bool InnoEngine.Input.InputSnapshot.WasMouseButtonPressed(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button was newly pressed during this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L200).

## `WasMouseButtonReleased`

<a id="api-d7509cb502143a8f"></a>
<!-- api: M:InnoEngine.Input.InputSnapshot.WasMouseButtonReleased(InnoEngine.Input.MouseButton) f1c9041541229cf237334e79521d7c526e7cc6e3fced878517855f649f556813 -->

```csharp
public bool InnoEngine.Input.InputSnapshot.WasMouseButtonReleased(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button was newly released during this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L211).

## `empty`

<a id="api-5c7a71d7f026eea1"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.empty 137f41367387463a9147ee185610f96b112a3d7275cec9ef9605349ab00190e2 -->

```csharp
public static InnoEngine.Input.InputSnapshot InnoEngine.Input.InputSnapshot.empty { get; }
```

Gets an empty initial snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L95).

## `frameIndex`

<a id="api-08699e3fb5f37e69"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.frameIndex ad7f44f726d8d567fd724b6e21cf4a33659e7c075bd9f7c049310d814d4e6925 -->

```csharp
public long InnoEngine.Input.InputSnapshot.frameIndex { get; }
```

Gets the runtime frame that owns this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L100).

## `keysPressed`

<a id="api-89081abacb452335"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.keysPressed 48c87042a2d70edfecee0c7b634b5ad379068bc082f973cb24bb82f3a7a8ff2b -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.Input.InputSnapshot.keysPressed { get; }
```

Gets the physical keys newly pressed during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L130).

## `keysReleased`

<a id="api-e2b722a0701109f4"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.keysReleased b7eb33a5230e004e8477a7c6bad5964f384fa1e8f6752e382947050d040ad9d1 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.KeyCode> InnoEngine.Input.InputSnapshot.keysReleased { get; }
```

Gets the physical keys newly released during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L135).

## `modifiers`

<a id="api-df317f790a6dad32"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.modifiers 42303878b57241cbed1ab6dcb590f435d4968bfde91e2586935567e43ef8e4bc -->

```csharp
public InnoEngine.Input.KeyModifier InnoEngine.Input.InputSnapshot.modifiers { get; }
```

Gets the active keyboard modifier mask at this frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L120).

## `mouseButtonsPressed`

<a id="api-a2f21bc4a44ef98f"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.mouseButtonsPressed 344b25f1404a253141cfb3472a491df0f4fff68623a566c2aa7de6bc935ec4a7 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.Input.InputSnapshot.mouseButtonsPressed { get; }
```

Gets the pointer buttons newly pressed during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L140).

## `mouseButtonsReleased`

<a id="api-4e57de8595cfef70"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.mouseButtonsReleased 6eb64b723bc560110711fd19d34dd4107482daa863e39ce0161bdd5badefc425 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Input.MouseButton> InnoEngine.Input.InputSnapshot.mouseButtonsReleased { get; }
```

Gets the pointer buttons newly released during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L145).

## `mouseDelta`

<a id="api-dfb3e21321f90324"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.mouseDelta 4f8deb6ce0793690f2d0ec86d703974148872e39a6ea25ead7242b76c502dd27 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Input.InputSnapshot.mouseDelta { get; }
```

Gets pointer movement accumulated since the previous snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L110).

## `mousePosition`

<a id="api-dbb099df2f56caf9"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.mousePosition 983e56a1fc78b6dc9865fb9932b246c16bcbc07d8da69ebdddaebcd6e4d07def -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Input.InputSnapshot.mousePosition { get; }
```

Gets the current pointer position in window coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L105).

## `scrollDelta`

<a id="api-63038f9fe6b670a3"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.scrollDelta 3c7aaf2db234e2524cb65ca19c42221acc7f4ac9f0eb88dec3ccdbd232aff98f -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Input.InputSnapshot.scrollDelta { get; }
```

Gets wheel movement accumulated since the previous snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L115).

## `textInput`

<a id="api-2703968e5e2aa8e1"></a>
<!-- api: P:InnoEngine.Input.InputSnapshot.textInput 8aea9438f940061cdefb2beb0a5b3c535853684d5617cf8a5de7ca2209201274 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Input.InputSnapshot.textInput { get; }
```

Gets the ordered UTF-8 text commits captured during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/InputSnapshot.cs#L125).
