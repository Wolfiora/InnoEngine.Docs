---
title: "InputRuntimeFactory"
description: "Reference for InputRuntimeFactory in Inno.Input.Runtime."
uid: api.inno.input.runtime.15253179baf6ab18
kind: api
owners:
  - Inno.Input.Runtime
apiSurface: source-clr
contracts:
  - project.inno-input-runtime#frame-and-lifetime-contract
---
# `InputRuntimeFactory`

This reference describes `InputRuntimeFactory` in `Inno.Input.Runtime`. Read the [shared contract](../../projects/inno-input-runtime.md#frame-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-803d0f7c10f20dda) | Method |
| [`Create`](#api-ff9bbcf391db084e) | Method |
| [`descriptor`](#api-aef5fc1add4647ce) | Property |

## Type declaration

<a id="api-15253179baf6ab18"></a>
<!-- api: T:Inno.Input.Runtime.InputRuntimeFactory a958c35dbe4d139c068c96368875d82d7ac929af992f32fd6e62ca97a5a26c2c -->

```csharp
public sealed class Inno.Input.Runtime.InputRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one frame-scoped input service over a caller-selected platform backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-803d0f7c10f20dda"></a>
<!-- api: M:Inno.Input.Runtime.InputRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Input.IInputBackend}) 25be1c57f404b6f22b1af6f22af455b78a04ad5bca0a785ecc1bc21a8010e098 -->

```csharp
public Inno.Input.Runtime.InputRuntimeFactory.InputRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Input.IInputBackend> backendFactory)
```

Creates a reusable factory that obtains an exclusively owned backend for each session.

**Parameter `backendFactory`:** The composition callback that creates a distinct backend for the supplied session context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntimeFactory.cs#L21).

## `Create`

<a id="api-ff9bbcf391db084e"></a>
<!-- api: M:Inno.Input.Runtime.InputRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 1f8bd02f6179bfb712bbe4f08152e6662606ff090672d9f8b61ea91ea06bd00a -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Input.Runtime.InputRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates an input feature over a newly allocated session backend.

**Parameter `context`:** The isolated session context passed to the backend factory.

**Returns:** A new input feature that exclusively owns its backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntimeFactory.cs#L42).

## `descriptor`

<a id="api-aef5fc1add4647ce"></a>
<!-- api: P:Inno.Input.Runtime.InputRuntimeFactory.descriptor 66cd6693390f9e7c07bd82278ed9704c3ad8d064d1bdda05b07d91c55ff214ac -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Input.Runtime.InputRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata for the frame-scoped input service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input.Runtime/InputRuntimeFactory.cs#L29).
