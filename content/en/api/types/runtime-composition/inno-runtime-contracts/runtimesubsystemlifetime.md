---
title: "RuntimeSubsystemLifetime"
description: "Reference for RuntimeSubsystemLifetime in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.f0a68402e97dcfce
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemLifetime`

This reference describes `RuntimeSubsystemLifetime` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Host`](#api-e2d0fc0f5721bffb) | Field |
| [`Session`](#api-3cc1275637279e6a) | Field |

## Type declaration

<a id="api-f0a68402e97dcfce"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemLifetime 4f64d176b5860077d31a7e3d628e937b2e7b07cb81db9accba793d1d091e9f94 -->

```csharp
public enum Inno.Runtime.Contracts.RuntimeSubsystemLifetime : int
```

Identifies the exclusive owner that creates and retires a stable engine subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemLifetime.cs#L6).

## `Host`

<a id="api-e2d0fc0f5721bffb"></a>
<!-- api: F:Inno.Runtime.Contracts.RuntimeSubsystemLifetime.Host a53fc6f886e1fbd9168b19f1a6e2d1c9646c07ab12cd58a87ed545b79e9bedb4 -->

```csharp
Inno.Runtime.Contracts.RuntimeSubsystemLifetime.Host = 0
```

The subsystem is shared by sessions and retires with the application host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemLifetime.cs#L11).

## `Session`

<a id="api-3cc1275637279e6a"></a>
<!-- api: F:Inno.Runtime.Contracts.RuntimeSubsystemLifetime.Session 53fa016089a5b75dfe4a2a0c8861f138e204f1aee0e7e5c415eba1c1acb403d7 -->

```csharp
Inno.Runtime.Contracts.RuntimeSubsystemLifetime.Session = 1
```

The subsystem belongs to one isolated Edit, Play or Player session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemLifetime.cs#L15).
