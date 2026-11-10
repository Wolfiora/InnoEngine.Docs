---
title: "Input"
description: "Reference for Input in Inno.Input."
uid: api.inno.input.297f3ef80d095b3e
kind: api
owners:
  - Inno.Input
apiSurface: source-clr
contracts:
  - project.inno-input#execution-and-ownership-contract
---
# `Input`

This reference describes `Input` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsKeyDown`](#api-fd1fe60a0434f87e) | Method |
| [`IsMouseButtonDown`](#api-bb77460a31eeef1f) | Method |
| [`WasKeyPressed`](#api-e9c246048d20b088) | Method |
| [`WasKeyReleased`](#api-662c780c462e18f2) | Method |
| [`WasMouseButtonPressed`](#api-a4e14809466d53d5) | Method |
| [`WasMouseButtonReleased`](#api-d43433d07bf4997f) | Method |
| [`mouseDelta`](#api-ea69a7c4948fa711) | Property |
| [`mousePosition`](#api-7763b67b3a6bbb70) | Property |
| [`scrollDelta`](#api-67b896291365de1b) | Property |
| [`snapshot`](#api-e39d5bda6d54431f) | Property |

## Type declaration

<a id="api-297f3ef80d095b3e"></a>
<!-- api: T:Inno.Input.Input 6c75e5d80480dc656466ece0cfe0078fefe53f4fd26adc96ec646912eb069cf0 -->

```csharp
public static class Inno.Input.Input
```

Provides script-friendly access to the current frame's input snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L56).

## `IsKeyDown`

<a id="api-fd1fe60a0434f87e"></a>
<!-- api: M:Inno.Input.Input.IsKeyDown(Inno.Core.Input.KeyCode) 5a42a8d3040b324a10719a3e3e7fea1230d5c3aca7aa05a8a3efe61213907bce -->

```csharp
public static bool Inno.Input.Input.IsKeyDown(Inno.Core.Input.KeyCode key)
```

Determines whether a key is currently held.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L87).

## `IsMouseButtonDown`

<a id="api-bb77460a31eeef1f"></a>
<!-- api: M:Inno.Input.Input.IsMouseButtonDown(Inno.Core.Input.MouseButton) 2f87e615d67b4a9470740ff8a93acd0765d7d6ad46ed72b43901b4a84b277ef7 -->

```csharp
public static bool Inno.Input.Input.IsMouseButtonDown(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button is currently held.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L120).

## `WasKeyPressed`

<a id="api-e9c246048d20b088"></a>
<!-- api: M:Inno.Input.Input.WasKeyPressed(Inno.Core.Input.KeyCode) 722ad5cf2f4a00c742732f9b21beb333e07ff4aaa94ab528d5666f59ad13e4c7 -->

```csharp
public static bool Inno.Input.Input.WasKeyPressed(Inno.Core.Input.KeyCode key)
```

Determines whether a key was newly pressed this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L98).

## `WasKeyReleased`

<a id="api-662c780c462e18f2"></a>
<!-- api: M:Inno.Input.Input.WasKeyReleased(Inno.Core.Input.KeyCode) 546d71daa74d65efdfc5ce9163f51cb7ab4f230dc5d33077f6b7fe6642df1dc8 -->

```csharp
public static bool Inno.Input.Input.WasKeyReleased(Inno.Core.Input.KeyCode key)
```

Determines whether a key was newly released this frame.

**Parameter `key`:** The backend-neutral physical key.

**Returns:** `true` when the key transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L109).

## `WasMouseButtonPressed`

<a id="api-a4e14809466d53d5"></a>
<!-- api: M:Inno.Input.Input.WasMouseButtonPressed(Inno.Core.Input.MouseButton) ba84bd97937ac97f27950de2489821f8aa5641fa5e3f5aac41d7bec16c13c1ea -->

```csharp
public static bool Inno.Input.Input.WasMouseButtonPressed(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button was newly pressed this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L131).

## `WasMouseButtonReleased`

<a id="api-d43433d07bf4997f"></a>
<!-- api: M:Inno.Input.Input.WasMouseButtonReleased(Inno.Core.Input.MouseButton) 0d18e9a388c7a492b0a5cc27845173ae4eb537309047aca13cde7f856a0702f3 -->

```csharp
public static bool Inno.Input.Input.WasMouseButtonReleased(Inno.Core.Input.MouseButton button)
```

Determines whether a pointer button was newly released this frame.

**Parameter `button`:** The backend-neutral pointer button.

**Returns:** `true` when the button transitioned to up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L142).

## `mouseDelta`

<a id="api-ea69a7c4948fa711"></a>
<!-- api: P:Inno.Input.Input.mouseDelta ff41dafc514f387c1ec2f16b9c26df7aafa5b3ae1557a1807ec9238411f45e8e -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Input.Input.mouseDelta { get; }
```

Gets pointer movement accumulated during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L71).

## `mousePosition`

<a id="api-7763b67b3a6bbb70"></a>
<!-- api: P:Inno.Input.Input.mousePosition 66ec0c6f4a5421465d46ebebed0a475293fd442bc753967a6bd64dea82532576 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Input.Input.mousePosition { get; }
```

Gets the current pointer position in window coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L66).

## `scrollDelta`

<a id="api-67b896291365de1b"></a>
<!-- api: P:Inno.Input.Input.scrollDelta b5f2676fb0a22653a975ba2377d75557def0c8f09373bad4dc71f3b9b6de2e1b -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Input.Input.scrollDelta { get; }
```

Gets wheel movement accumulated during this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L76).

## `snapshot`

<a id="api-e39d5bda6d54431f"></a>
<!-- api: P:Inno.Input.Input.snapshot a9973b0ec12cc76e9f6b4c08aa9ae15bef5971348f95b6619e3497d70e012a03 -->

```csharp
public static Inno.Input.InputSnapshot Inno.Input.Input.snapshot { get; }
```

Gets the complete immutable current-frame snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L61).
