---
title: "RuntimeSubsystemRequirement"
description: "Reference for RuntimeSubsystemRequirement in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.4560a9e9e695b12f
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemRequirement`

This reference describes `RuntimeSubsystemRequirement` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Optional`](#api-1fb401f0e53edd99) | Field |
| [`Required`](#api-a564618628602633) | Field |

## Type declaration

<a id="api-4560a9e9e695b12f"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemRequirement 340f24ccc20663dcd2e858c605f84fde5916ea17571d06d47d15868adc2eb8d1 -->

```csharp
public enum Inno.Runtime.Contracts.RuntimeSubsystemRequirement : int
```

Selects startup failure behavior without changing runtime-frame or retirement error semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRequirement.cs#L6).

## `Optional`

<a id="api-1fb401f0e53edd99"></a>
<!-- api: F:Inno.Runtime.Contracts.RuntimeSubsystemRequirement.Optional 1b193806005424b010cf01af39634295cba9ba1953d91ee052bbdeb1b6a9ab88 -->

```csharp
Inno.Runtime.Contracts.RuntimeSubsystemRequirement.Optional = 1
```

A fully compensated startup may remain unavailable with diagnostics; cleanup failures still reject the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRequirement.cs#L16).

## `Required`

<a id="api-a564618628602633"></a>
<!-- api: F:Inno.Runtime.Contracts.RuntimeSubsystemRequirement.Required 33d6698627b9efba9c57290c0f3c5b1c39d481b574230b74e3d0c22e5bbab247 -->

```csharp
Inno.Runtime.Contracts.RuntimeSubsystemRequirement.Required = 0
```

Missing capabilities, dependencies or failed startup reject the entire owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRequirement.cs#L11).
