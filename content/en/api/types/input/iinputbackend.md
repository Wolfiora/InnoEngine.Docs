---
title: "IInputBackend"
description: "Reference for IInputBackend in Inno.Input."
uid: api.inno.input.990721dedc077995
kind: api
owners:
  - Inno.Input
apiSurface: source-clr
contracts:
  - project.inno-input#execution-and-ownership-contract
---
# `IInputBackend`

This reference describes `IInputBackend` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-e4f02ea3a5cc325d) | Method |

## Type declaration

<a id="api-990721dedc077995"></a>
<!-- api: T:Inno.Input.IInputBackend b1e1051e943fc51d8b0a28ec6a7b38bee2adb47cc0ce08c6d9b8393edc11d875 -->

```csharp
public interface Inno.Input.IInputBackend : System.IDisposable
```

Captures complete input state from one platform backend at frame boundaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/IInputBackend.cs#L8).

## `Capture`

<a id="api-e4f02ea3a5cc325d"></a>
<!-- api: M:Inno.Input.IInputBackend.Capture(System.Int64) 0bc590c9b4f7bd8f5ecf4a2affa018890f421e810be056481fa38312b7b2d2c7 -->

```csharp
Inno.Input.InputSnapshot Inno.Input.IInputBackend.Capture(long frameIndex)
```

Captures a snapshot and consumes transient press, release, movement, and wheel state.

**Parameter `frameIndex`:** The runtime frame receiving the snapshot.

**Returns:** The immutable state for that exact frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/IInputBackend.cs#L19).
