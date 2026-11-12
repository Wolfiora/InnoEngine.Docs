---
title: "MouseButton"
description: "Reference for MouseButton in Inno.Core.Input."
uid: api.inno.core.input.runtime-script.7104a1fe9838823c
kind: api
owners:
  - Inno.Core.Input
apiSurface: runtime-script
contracts:
  - project.inno-core-input#input-value-contract
  - manual.scripting.use-script-api
---
# `MouseButton`

This reference describes `MouseButton` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Left`](#api-2e43df7f0398a6f5) | Field |
| [`Middle`](#api-22b07fc4b9a951c8) | Field |
| [`Right`](#api-557b42aa717ee5d7) | Field |
| [`XButton1`](#api-55ae4d4339adf1ce) | Field |
| [`XButton2`](#api-2a8632a21cb288a4) | Field |

## Type declaration

<a id="api-7104a1fe9838823c"></a>
<!-- api: T:InnoEngine.Input.MouseButton d555f8a8931fb16b6fcaaaea8c6156958fd1204f51507188bf4680534609ea5f -->

```csharp
public enum InnoEngine.Input.MouseButton : int
```

Identifies the supported mouse button values for this contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L6).

## `Left`

<a id="api-2e43df7f0398a6f5"></a>
<!-- api: F:InnoEngine.Input.MouseButton.Left e369a0a2642c237e2c29853a3d95ec44a2c5ae9f177795d023a76a96f4073838 -->

```csharp
InnoEngine.Input.MouseButton.Left = 0
```

The left key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L11).

## `Middle`

<a id="api-22b07fc4b9a951c8"></a>
<!-- api: F:InnoEngine.Input.MouseButton.Middle 42c9577d7221da3d6ea2941a5aaf1346de8810675e46960b866e986d2993a378 -->

```csharp
InnoEngine.Input.MouseButton.Middle = 2
```

The middle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L19).

## `Right`

<a id="api-557b42aa717ee5d7"></a>
<!-- api: F:InnoEngine.Input.MouseButton.Right c513864f937b54559d73dc9f72a00e942ca3d64025873a57fa7f761eacb83350 -->

```csharp
InnoEngine.Input.MouseButton.Right = 1
```

The right key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L15).

## `XButton1`

<a id="api-55ae4d4339adf1ce"></a>
<!-- api: F:InnoEngine.Input.MouseButton.XButton1 a99d397ad75f50da93ddc19946e5cbaca4fd338ec44faba005e16b899c7ed7fa -->

```csharp
InnoEngine.Input.MouseButton.XButton1 = 3
```

The xbutton1 key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L23).

## `XButton2`

<a id="api-2a8632a21cb288a4"></a>
<!-- api: F:InnoEngine.Input.MouseButton.XButton2 7dac1af3ac137d9154ef8c2e2b5a15f0bfc492d212da8b20b1cab0f2082b027e -->

```csharp
InnoEngine.Input.MouseButton.XButton2 = 4
```

The xbutton2 key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/MouseButton.cs#L27).
