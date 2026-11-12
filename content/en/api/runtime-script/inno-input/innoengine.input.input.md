---
title: "Input"
description: "Reference for Input in Inno.Input."
uid: api.inno.input.runtime-script.185a761ca5affe75
kind: api
owners:
  - Inno.Input
apiSurface: runtime-script
contracts:
  - project.inno-input#execution-and-ownership-contract
  - manual.scripting.use-script-api
---
# `Input`

This reference describes `Input` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsKeyDown`](#api-928361b91d9315fe) | Method |
| [`IsMouseButtonDown`](#api-4503dec0fb4084bf) | Method |
| [`WasKeyPressed`](#api-d0bcc81c94ed0d15) | Method |
| [`WasKeyReleased`](#api-0ca195a8a5a8fb23) | Method |
| [`WasMouseButtonPressed`](#api-cbb834c1250890d3) | Method |
| [`WasMouseButtonReleased`](#api-ab066047dfaa20f2) | Method |
| [`mouseDelta`](#api-ec926306edebb18f) | Property |
| [`mousePosition`](#api-eb2081b2a6a5cb42) | Property |
| [`scrollDelta`](#api-7688839351ac69d3) | Property |
| [`snapshot`](#api-43ef26498da62c03) | Property |

## Type declaration

<a id="api-185a761ca5affe75"></a>
<!-- api: T:InnoEngine.Input.Input e6e81b02d76dfe695630b0b365d73b3b107221b99afb9953c0b8be740440b049 -->

```csharp
public static class InnoEngine.Input.Input
```

Provides script-friendly access to the current frame's input snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L56).

## `IsKeyDown`

<a id="api-928361b91d9315fe"></a>
<!-- api: M:InnoEngine.Input.Input.IsKeyDown(InnoEngine.Input.KeyCode) 6f9e761a573d698491bf364b2c63b723403d56ff72996a46a1ca19878b8d48ba -->

```csharp
public static bool InnoEngine.Input.Input.IsKeyDown(InnoEngine.Input.KeyCode key)
```

Determines whether a key is currently held.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L87).

## `IsMouseButtonDown`

<a id="api-4503dec0fb4084bf"></a>
<!-- api: M:InnoEngine.Input.Input.IsMouseButtonDown(InnoEngine.Input.MouseButton) afc42036f542b5feac63c994c3a3346af0e375ea535bc2b0e86a731c5b55e881 -->

```csharp
public static bool InnoEngine.Input.Input.IsMouseButtonDown(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button is currently held.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L120).

## `WasKeyPressed`

<a id="api-d0bcc81c94ed0d15"></a>
<!-- api: M:InnoEngine.Input.Input.WasKeyPressed(InnoEngine.Input.KeyCode) 0f8e4934158d65ba7c95086dd79f297279e7c2b95a7ac0fba82d8683659a1f41 -->

```csharp
public static bool InnoEngine.Input.Input.WasKeyPressed(InnoEngine.Input.KeyCode key)
```

Determines whether a key was newly pressed this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L98).

## `WasKeyReleased`

<a id="api-0ca195a8a5a8fb23"></a>
<!-- api: M:InnoEngine.Input.Input.WasKeyReleased(InnoEngine.Input.KeyCode) 5eed0a1d072709f02b639909f50bbb55c6725830b2effd78ef1b8b68891cdf92 -->

```csharp
public static bool InnoEngine.Input.Input.WasKeyReleased(InnoEngine.Input.KeyCode key)
```

Determines whether a key was newly released this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L109).

## `WasMouseButtonPressed`

<a id="api-cbb834c1250890d3"></a>
<!-- api: M:InnoEngine.Input.Input.WasMouseButtonPressed(InnoEngine.Input.MouseButton) ff772ea349576bcf9bfdfa2d3877f2a0fc4693b09dc9c05921d37b1c3a9d8b02 -->

```csharp
public static bool InnoEngine.Input.Input.WasMouseButtonPressed(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button was newly pressed this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L131).

## `WasMouseButtonReleased`

<a id="api-ab066047dfaa20f2"></a>
<!-- api: M:InnoEngine.Input.Input.WasMouseButtonReleased(InnoEngine.Input.MouseButton) f26b4e62f9496487f4bab223c4615f03475a80c974d6cf76307c9608298d9955 -->

```csharp
public static bool InnoEngine.Input.Input.WasMouseButtonReleased(InnoEngine.Input.MouseButton button)
```

Determines whether a pointer button was newly released this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L142).

## `mouseDelta`

<a id="api-ec926306edebb18f"></a>
<!-- api: P:InnoEngine.Input.Input.mouseDelta c49e01a067e3398301db385115f4ae795194492076b8459a33bc0bfda27fef66 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Input.Input.mouseDelta { get; }
```

Gets pointer movement accumulated during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L71).

## `mousePosition`

<a id="api-eb2081b2a6a5cb42"></a>
<!-- api: P:InnoEngine.Input.Input.mousePosition 2e04da398d7379dd4a2fd6ddee02bcf4ec1bf87718b7a556064b51a2c736487e -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Input.Input.mousePosition { get; }
```

Gets the current pointer position in window coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L66).

## `scrollDelta`

<a id="api-7688839351ac69d3"></a>
<!-- api: P:InnoEngine.Input.Input.scrollDelta 61350b25d351bf1b8b3935875aad075799a1ad2a9279c18cc1f77a2f661fb4c6 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Input.Input.scrollDelta { get; }
```

Gets wheel movement accumulated during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L76).

## `snapshot`

<a id="api-43ef26498da62c03"></a>
<!-- api: P:InnoEngine.Input.Input.snapshot b3fe7ec3f63c2adc2699496e3e9ef55c2882b86d8f934ed8f3313dacd2e0f150 -->

```csharp
public static InnoEngine.Input.InputSnapshot InnoEngine.Input.Input.snapshot { get; }
```

Gets the complete immutable current-frame snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/Input.cs#L61).
