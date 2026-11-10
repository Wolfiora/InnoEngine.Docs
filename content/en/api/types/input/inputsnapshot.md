---
title: "InputSnapshot"
description: "Reference for InputSnapshot in Inno.Input."
uid: api.inno.input.61d5c3d11ee69c9d
kind: api
owners:
  - Inno.Input
apiSurface: source-clr
contracts:
  - project.inno-input#execution-and-ownership-contract
---
# `InputSnapshot`

This reference describes `InputSnapshot` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c95e45587772040f) | Method |
| [`IsKeyDown`](#api-d5bb346610d28635) | Method |
| [`IsMouseButtonDown`](#api-2c48955d7588600b) | Method |
| [`WasKeyPressed`](#api-c39fcc823212dc84) | Method |
| [`WasKeyReleased`](#api-1eb55aa315473f2d) | Method |
| [`WasMouseButtonPressed`](#api-eb9ccd48efdfb5a2) | Method |
| [`WasMouseButtonReleased`](#api-3559726883b45532) | Method |
| [`empty`](#api-f73fd16e95a3c4f1) | Property |
| [`frameIndex`](#api-b20af045199099aa) | Property |
| [`keysPressed`](#api-7886892514333c2d) | Property |
| [`keysReleased`](#api-25f5787f0e8e5e76) | Property |
| [`modifiers`](#api-fa0446ab0a6bbd16) | Property |
| [`mouseButtonsPressed`](#api-4f3226b19f7909d3) | Property |
| [`mouseButtonsReleased`](#api-4a2b431c63ec43b2) | Property |
| [`mouseDelta`](#api-9e6bda69f4fc365a) | Property |
| [`mousePosition`](#api-3e952018362314df) | Property |
| [`scrollDelta`](#api-907bc25cf89324e8) | Property |
| [`textInput`](#api-19780866cf37c9bd) | Property |

## Type declaration

<a id="api-61d5c3d11ee69c9d"></a>
<!-- api: T:Inno.Input.InputSnapshot 5eff2acf31902d9cc2724ee51fb276e355310ad654f72276a00fda3f0b02758c -->

```csharp
public sealed class Inno.Input.InputSnapshot
```

Captures immutable keyboard and pointer state at one runtime frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L13).

## `#ctor`

<a id="api-c95e45587772040f"></a>
<!-- api: M:Inno.Input.InputSnapshot.#ctor(System.Int64,System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.KeyCode},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},System.Collections.Generic.IEnumerable{Inno.Core.Input.MouseButton},Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,Inno.Core.Input.KeyModifier,System.Collections.Generic.IEnumerable{System.String}) a8b64f6a598dfeea18deb0ff3a98b8260b63c2e8957aa6acd8ec863d7d3b5d00 -->

```csharp
public Inno.Input.InputSnapshot.InputSnapshot(long frameIndex, System.Collections.Generic.IEnumerable<Inno.Core.Input.KeyCode>? keysDown = null, System.Collections.Generic.IEnumerable<Inno.Core.Input.KeyCode>? keysPressed = null, System.Collections.Generic.IEnumerable<Inno.Core.Input.KeyCode>? keysReleased = null, System.Collections.Generic.IEnumerable<Inno.Core.Input.MouseButton>? mouseButtonsDown = null, System.Collections.Generic.IEnumerable<Inno.Core.Input.MouseButton>? mouseButtonsPressed = null, System.Collections.Generic.IEnumerable<Inno.Core.Input.MouseButton>? mouseButtonsReleased = null, Inno.Core.Mathematics.Vector2 mousePosition = default(Inno.Core.Mathematics.Vector2), Inno.Core.Mathematics.Vector2 mouseDelta = default(Inno.Core.Mathematics.Vector2), Inno.Core.Mathematics.Vector2 scrollDelta = default(Inno.Core.Mathematics.Vector2), Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, System.Collections.Generic.IEnumerable<string>? textInput = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L62).

## `IsKeyDown`

<a id="api-d5bb346610d28635"></a>
<!-- api: M:Inno.Input.InputSnapshot.IsKeyDown(Inno.Core.Input.KeyCode) b3f3d5d5422c93ff8fb0ddf0a8066f9a21d349abe4d3a417adc786c13943b6cc -->

```csharp
public bool Inno.Input.InputSnapshot.IsKeyDown(Inno.Core.Input.KeyCode key)
```

Determines whether a key is currently held.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L156).

## `IsMouseButtonDown`

<a id="api-2c48955d7588600b"></a>
<!-- api: M:Inno.Input.InputSnapshot.IsMouseButtonDown(Inno.Core.Input.MouseButton) 5b3cd51b82ccd338f7c48127d3bf22bef6ad7faa176c4c5bdaba667bdc2c6960 -->

```csharp
public bool Inno.Input.InputSnapshot.IsMouseButtonDown(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button is currently held.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L189).

## `WasKeyPressed`

<a id="api-c39fcc823212dc84"></a>
<!-- api: M:Inno.Input.InputSnapshot.WasKeyPressed(Inno.Core.Input.KeyCode) 657210378d9196d770b3bfd817f662b10a4677ad6b1d4ba74acecd2cc12639b4 -->

```csharp
public bool Inno.Input.InputSnapshot.WasKeyPressed(Inno.Core.Input.KeyCode key)
```

Determines whether a key was newly pressed during this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L167).

## `WasKeyReleased`

<a id="api-1eb55aa315473f2d"></a>
<!-- api: M:Inno.Input.InputSnapshot.WasKeyReleased(Inno.Core.Input.KeyCode) 33239b20ed159dbb6edfc8d00f982e9d41c0e14c299aef10f533af96dd1d77cf -->

```csharp
public bool Inno.Input.InputSnapshot.WasKeyReleased(Inno.Core.Input.KeyCode key)
```

Determines whether a key was newly released during this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L178).

## `WasMouseButtonPressed`

<a id="api-eb9ccd48efdfb5a2"></a>
<!-- api: M:Inno.Input.InputSnapshot.WasMouseButtonPressed(Inno.Core.Input.MouseButton) b54779d383e7079ea1247806850e1d9a95de506f2fa15994690bf1a646334c9e -->

```csharp
public bool Inno.Input.InputSnapshot.WasMouseButtonPressed(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button was newly pressed during this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L200).

## `WasMouseButtonReleased`

<a id="api-3559726883b45532"></a>
<!-- api: M:Inno.Input.InputSnapshot.WasMouseButtonReleased(Inno.Core.Input.MouseButton) 152280991afded45ac7136f549d328b22132d6d24d926a8c320f8db26cd8bcbb -->

```csharp
public bool Inno.Input.InputSnapshot.WasMouseButtonReleased(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button was newly released during this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L211).

## `empty`

<a id="api-f73fd16e95a3c4f1"></a>
<!-- api: P:Inno.Input.InputSnapshot.empty f2ccd24494786f7be411203b7736615a5b0afd7d01b86d57104918c96b5e84cb -->

```csharp
public static Inno.Input.InputSnapshot Inno.Input.InputSnapshot.empty { get; }
```

Gets an empty initial snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L95).

## `frameIndex`

<a id="api-b20af045199099aa"></a>
<!-- api: P:Inno.Input.InputSnapshot.frameIndex 3ac9f077995161e0d790c7934b952d72b72b25ac939298109440b5147800271a -->

```csharp
public long Inno.Input.InputSnapshot.frameIndex { get; }
```

Gets the runtime frame that owns this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L100).

## `keysPressed`

<a id="api-7886892514333c2d"></a>
<!-- api: P:Inno.Input.InputSnapshot.keysPressed 18d02ca6fe4ce4a5d01af5c8520bdfac7746e10e66945ad07fc315aaabff7318 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.Input.InputSnapshot.keysPressed { get; }
```

Gets the physical keys newly pressed during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L130).

## `keysReleased`

<a id="api-25f5787f0e8e5e76"></a>
<!-- api: P:Inno.Input.InputSnapshot.keysReleased 2022c97bc84ed987c634003503050297e36d8ac7d4b3bbee5caa876421e56b23 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.KeyCode> Inno.Input.InputSnapshot.keysReleased { get; }
```

Gets the physical keys newly released during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L135).

## `modifiers`

<a id="api-fa0446ab0a6bbd16"></a>
<!-- api: P:Inno.Input.InputSnapshot.modifiers a3b5a049056806401c1cdc27192c93ce856cc16583fcd0651b8320ab59e5eb7e -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Input.InputSnapshot.modifiers { get; }
```

Gets the active keyboard modifier mask at this frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L120).

## `mouseButtonsPressed`

<a id="api-4f3226b19f7909d3"></a>
<!-- api: P:Inno.Input.InputSnapshot.mouseButtonsPressed 55c7d1a601a06fdd203ebdbc0350a300091771dcc338ca3cd1e32c0b0c2ab54d -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.Input.InputSnapshot.mouseButtonsPressed { get; }
```

Gets the pointer buttons newly pressed during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L140).

## `mouseButtonsReleased`

<a id="api-4a2b431c63ec43b2"></a>
<!-- api: P:Inno.Input.InputSnapshot.mouseButtonsReleased 4bb328052d1f5f78175cf43972873c30fe68bd2303d78223d54aee82e72e4961 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Input.MouseButton> Inno.Input.InputSnapshot.mouseButtonsReleased { get; }
```

Gets the pointer buttons newly released during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L145).

## `mouseDelta`

<a id="api-9e6bda69f4fc365a"></a>
<!-- api: P:Inno.Input.InputSnapshot.mouseDelta a432926264b730edeb6459cecf666c4f815c6cf1e774d3f3a229c2c39df90f15 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Input.InputSnapshot.mouseDelta { get; }
```

Gets pointer movement accumulated since the previous snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L110).

## `mousePosition`

<a id="api-3e952018362314df"></a>
<!-- api: P:Inno.Input.InputSnapshot.mousePosition 773319159770ce92fb9c0d9d19c1099f5f80b1e3eed3b77f6f584c6188954455 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Input.InputSnapshot.mousePosition { get; }
```

Gets the current pointer position in window coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L105).

## `scrollDelta`

<a id="api-907bc25cf89324e8"></a>
<!-- api: P:Inno.Input.InputSnapshot.scrollDelta 506b2a3b203da41e3a30d08d60617156c4c37c107f9309b0302cc651f055b676 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Input.InputSnapshot.scrollDelta { get; }
```

Gets wheel movement accumulated since the previous snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L115).

## `textInput`

<a id="api-19780866cf37c9bd"></a>
<!-- api: P:Inno.Input.InputSnapshot.textInput 2e2ea8ad08a4f1ac983e1bddd671f64a54b4c1545a9614a8004824040db7c83f -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Input.InputSnapshot.textInput { get; }
```

Gets the ordered UTF-8 text commits captured during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/InputSnapshot.cs#L125).
