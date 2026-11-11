---
title: "RuntimeSubsystemRegistrationAttribute"
description: "Reference for RuntimeSubsystemRegistrationAttribute in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.dfaf525a51ce0913
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemRegistrationAttribute`

This reference describes `RuntimeSubsystemRegistrationAttribute` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3b60d3072253b975) | Method |
| [`id`](#api-351a4734522b7aaf) | Property |

## Type declaration

<a id="api-dfaf525a51ce0913"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute 4490c562f85f366207bd8306c20156e9e37ee485974ce84bc3ee4f5cdb4dbf68 -->

```csharp
public sealed class Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute : System.Attribute
```

Declares a strongly typed composition method for build-time subsystem catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRegistrationAttribute.cs#L9).

## `#ctor`

<a id="api-3b60d3072253b975"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute.#ctor(System.String) b7c185daa334c2544e1777418c0cdc0b1dfa35b89306ae9336c7024aa0a055be -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute.RuntimeSubsystemRegistrationAttribute(string id)
```

Declares the stable ID returned by this method's subsystem factory.

**Parameter `id`:** The exact non-empty subsystem descriptor ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRegistrationAttribute.cs#L17).

## `id`

<a id="api-351a4734522b7aaf"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute.id 055cd364212f01d1a75f7a4a359e1f1a5bd0375c1e65c43a39831c8ae2e7c622 -->

```csharp
public string Inno.Runtime.Contracts.RuntimeSubsystemRegistrationAttribute.id { get; }
```

Gets the stable descriptor ID checked by the generated catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemRegistrationAttribute.cs#L26).
