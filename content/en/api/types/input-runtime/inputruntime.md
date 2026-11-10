---
title: "InputRuntime"
description: "Reference for InputRuntime in Inno.Input.Runtime."
uid: api.inno.input.runtime.613e5fc74bd4ca61
kind: api
owners:
  - Inno.Input.Runtime
apiSurface: source-clr
contracts:
  - project.inno-input-runtime#frame-and-lifetime-contract
---
# `InputRuntime`

This reference describes `InputRuntime` in `Inno.Input.Runtime`. Read the [shared contract](../../projects/inno-input-runtime.md#frame-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Input.IInputService`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8e1f71c24790e175) | Method |
| [`OnBeginFrame`](#api-9898774946da5f12) | Method |
| [`OnStop`](#api-82156b8554e2eacb) | Method |
| [`snapshot`](#api-02fa1b28832dad7b) | Property |

## Type declaration

<a id="api-613e5fc74bd4ca61"></a>
<!-- api: T:Inno.Input.Runtime.InputRuntime 15535fbc6acbf1e4fb33f1818f313a8b3d7e3a0f7379a7604a768e3d7dbf7e72 -->

```csharp
public sealed class Inno.Input.Runtime.InputRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Input.IInputService
```

Captures one immutable input snapshot and binds it for the complete runtime frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntime.cs#L11).

## `#ctor`

<a id="api-8e1f71c24790e175"></a>
<!-- api: M:Inno.Input.Runtime.InputRuntime.#ctor(Inno.Input.IInputBackend) fb68433310b4b12ade342f0ad95cdb95b251dd7a419a11db0f351c2bbe17674c -->

```csharp
public Inno.Input.Runtime.InputRuntime.InputRuntime(Inno.Input.IInputBackend backend)
```

Creates a feature whose backend ownership transfers to this instance.

**Parameter `backend`:** The platform backend captured at frame boundaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntime.cs#L21).

## `OnBeginFrame`

<a id="api-9898774946da5f12"></a>
<!-- api: M:Inno.Input.Runtime.InputRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) a0038783b5123006445323c0a610c1abfc3af09d3fc3194744c7c3bace0408a6 -->

```csharp
protected override void Inno.Input.Runtime.InputRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures pending backend input and binds the resulting snapshot to the runtime frame.

**Parameter `frame`:** The immutable frame state whose index labels the captured snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntime.cs#L37).

## `OnStop`

<a id="api-82156b8554e2eacb"></a>
<!-- api: M:Inno.Input.Runtime.InputRuntime.OnStop 4a425e8d5d9875023cbfd929af7d877140a3ac2e49100250b994332f8babbaa4 -->

```csharp
protected override void Inno.Input.Runtime.InputRuntime.OnStop()
```

Releases the input backend after its frame scope and owned work have quiesced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntime.cs#L45).

## `snapshot`

<a id="api-02fa1b28832dad7b"></a>
<!-- api: P:Inno.Input.Runtime.InputRuntime.snapshot 76b85ba8e7b0e9c161f38e4dbae5e3736780fe3eb4d4aef875294e64ef8c28a1 -->

```csharp
public Inno.Input.InputSnapshot Inno.Input.Runtime.InputRuntime.snapshot { get; private set; }
```

Gets the immutable input state captured at the beginning of the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntime.cs#L29).
