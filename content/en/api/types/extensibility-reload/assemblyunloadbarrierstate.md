---
title: "AssemblyUnloadBarrierState"
description: "Reference for AssemblyUnloadBarrierState in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.aaa5f4ef222db37f
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `AssemblyUnloadBarrierState`

This reference describes `AssemblyUnloadBarrierState` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AwaitingCollection`](#api-05167f014c35fbe7) | Field |
| [`Completed`](#api-e659c729d9c051f5) | Field |
| [`Faulted`](#api-503a0cf36106f2f7) | Field |

## Type declaration

<a id="api-aaa5f4ef222db37f"></a>
<!-- api: T:Inno.Extensibility.Reload.AssemblyUnloadBarrierState f95aaa89d663a30d790b928ff7ed8384f082ebfba717c449ec4f453e5cfe017a -->

```csharp
public enum Inno.Extensibility.Reload.AssemblyUnloadBarrierState : int
```

Describes the terminal or waiting state of an assembly unload barrier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierState.cs#L6).

## `AwaitingCollection`

<a id="api-05167f014c35fbe7"></a>
<!-- api: F:Inno.Extensibility.Reload.AssemblyUnloadBarrierState.AwaitingCollection 9e2fbc4c32e77e05469b08ca2aeda5f021690641a97a1f62a0e913454f161107 -->

```csharp
Inno.Extensibility.Reload.AssemblyUnloadBarrierState.AwaitingCollection = 0
```

At least one retired collectible generation remains reachable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierState.cs#L11).

## `Completed`

<a id="api-e659c729d9c051f5"></a>
<!-- api: F:Inno.Extensibility.Reload.AssemblyUnloadBarrierState.Completed d3108ed424d996eb8e9c4e6ef4f292d87cb99f51f165269cb2bdef619f8ab722 -->

```csharp
Inno.Extensibility.Reload.AssemblyUnloadBarrierState.Completed = 1
```

Every retired generation is unreachable and cleaned up.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierState.cs#L16).

## `Faulted`

<a id="api-503a0cf36106f2f7"></a>
<!-- api: F:Inno.Extensibility.Reload.AssemblyUnloadBarrierState.Faulted 0f7902e1a7731e470b86befcbedef1712d0af591e1d8c262a8d1fd32aff0a250 -->

```csharp
Inno.Extensibility.Reload.AssemblyUnloadBarrierState.Faulted = 2
```

The retention threshold was reached and the owning reload subsystem must stop accepting work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierState.cs#L21).
