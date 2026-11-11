---
title: "RuntimeSubsystemDescriptor"
description: "Reference for RuntimeSubsystemDescriptor in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.3913c12b6e6e84b6
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemDescriptor`

This reference describes `RuntimeSubsystemDescriptor` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8da5c5884d0f419f) | Method |
| [`dependencies`](#api-8fe7f0b601c08043) | Property |
| [`id`](#api-496e28be2facf7f1) | Property |
| [`lifetime`](#api-bb23280c8e444fce) | Property |
| [`order`](#api-e13e89ffff735c9d) | Property |
| [`requiredCapabilities`](#api-a56522ec718ed792) | Property |
| [`requirement`](#api-9cf4850ac125d4e2) | Property |

## Type declaration

<a id="api-3913c12b6e6e84b6"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor c3a59a32f01902729330a654e41c1feb467710733a30bd1121735f6d79506846 -->

```csharp
public sealed class Inno.Runtime.Contracts.RuntimeSubsystemDescriptor
```

Describes stable ordering and dependency requirements for one runtime subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L10).

## `#ctor`

<a id="api-8da5c5884d0f419f"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.#ctor(Inno.Runtime.Contracts.RuntimeSubsystemId,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeSubsystemId},Inno.Runtime.Contracts.RuntimeSubsystemLifetime,Inno.Runtime.Contracts.RuntimeSubsystemRequirement,System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId}) d4ac07ea0551c08af175b409b666a39b83895bd9bae79ba8d56a4e8002f1cf03 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.RuntimeSubsystemDescriptor(Inno.Runtime.Contracts.RuntimeSubsystemId id, int order = 0, System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeSubsystemId>? dependencies = null, Inno.Runtime.Contracts.RuntimeSubsystemLifetime lifetime = Inno.Runtime.Contracts.RuntimeSubsystemLifetime.Session, Inno.Runtime.Contracts.RuntimeSubsystemRequirement requirement = Inno.Runtime.Contracts.RuntimeSubsystemRequirement.Required, System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeCapabilityId>? requiredCapabilities = null)
```

Creates an immutable runtime subsystem descriptor.

**Parameter `id`:** The unique subsystem protocol identifier.

**Parameter `order`:** The deterministic tie-break order among otherwise independent subsystems.

**Parameter `dependencies`:** Features that must attach and execute before this subsystem.

**Parameter `lifetime`:** The exclusive Host or Session lifetime required by this subsystem.

**Parameter `requirement`:** Whether startup must succeed or may remain explicitly unavailable after complete compensation.

**Parameter `requiredCapabilities`:** Backend-neutral capabilities that composition must supply before factory creation.

**Throws `System.ArgumentException`:** Thrown when `id` is invalid or a dependency is invalid, duplicated, or self-referential.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L36).

## `dependencies`

<a id="api-8fe7f0b601c08043"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.dependencies 225e426a334c1e46a6dbe7511ded8b513d147f5af583edad5ea76bd57b11fe88 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeSubsystemId> Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.dependencies { get; }
```

Gets the immutable required-subsystem identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L86).

## `id`

<a id="api-496e28be2facf7f1"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.id eb8d2ca22fb432d64cfa24a869e7e47894df52d28a50803d13c184b05375b07f -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemId Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.id { get; }
```

Gets the unique subsystem protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L71).

## `lifetime`

<a id="api-bb23280c8e444fce"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.lifetime 37236367b65dfdcb635b771831dd37a2cc4b5f3074685209a965e7ca7f07fad5 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemLifetime Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.lifetime { get; }
```

Gets the exclusive owner scope required by this subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L76).

## `order`

<a id="api-e13e89ffff735c9d"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.order ab73e8a334e2352ef59e9dbfc817bf7e88a0a3cd579d429f817293f2532fca5b -->

```csharp
public int Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.order { get; }
```

Gets the deterministic order used after dependency constraints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L81).

## `requiredCapabilities`

<a id="api-a56522ec718ed792"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.requiredCapabilities 746d003d09ded782a4b50e136a83c22952ee1cdec8fbbdc830cb75752fd578d4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeCapabilityId> Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.requiredCapabilities { get; }
```

Gets the immutable capability prerequisites checked before allocating subsystem resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L96).

## `requirement`

<a id="api-9cf4850ac125d4e2"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.requirement c3b318c6242cc94ec292e855d05db30237296c7ebe38684084f333398ef510da -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemRequirement Inno.Runtime.Contracts.RuntimeSubsystemDescriptor.requirement { get; }
```

Gets whether this subsystem must start for its owner to become available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemDescriptor.cs#L91).
