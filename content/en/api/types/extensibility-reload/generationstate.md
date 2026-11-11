---
title: "GenerationState"
description: "Reference for GenerationState in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.c8773da1e3bbf4ec
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `GenerationState`

This reference describes `GenerationState` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AwaitingCollection`](#api-c316cde119880a47) | Field |
| [`Faulted`](#api-387e7b2d911fcfa8) | Field |
| [`Ready`](#api-26659c4276a50431) | Field |
| [`Transitioning`](#api-c4498296b0ef8fe9) | Field |

## Type declaration

<a id="api-c8773da1e3bbf4ec"></a>
<!-- api: T:Inno.Extensibility.Reload.GenerationState b3a2e73fa5393eddf83bd29c248d87964f784987debdbfe7fa1dc12a7a6954f7 -->

```csharp
public enum Inno.Extensibility.Reload.GenerationState : int
```

Describes the shared admission gate for owner-thread generation transactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationState.cs#L6).

## `AwaitingCollection`

<a id="api-c316cde119880a47"></a>
<!-- api: F:Inno.Extensibility.Reload.GenerationState.AwaitingCollection 185034f216dc2762a188a914994fb85fea86c311e34914294b889fda722d9ae6 -->

```csharp
Inno.Extensibility.Reload.GenerationState.AwaitingCollection = 2
```

Publication finished but retired collectible contexts have not been verified unreachable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationState.cs#L19).

## `Faulted`

<a id="api-387e7b2d911fcfa8"></a>
<!-- api: F:Inno.Extensibility.Reload.GenerationState.Faulted 37949367c44653160e46546d37ef03b60d0be5fb652ba042fbd79a0000f3debf -->

```csharp
Inno.Extensibility.Reload.GenerationState.Faulted = 3
```

A rollback, cleanup or unload failure requires a complete host restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationState.cs#L23).

## `Ready`

<a id="api-26659c4276a50431"></a>
<!-- api: F:Inno.Extensibility.Reload.GenerationState.Ready 7d38222c56fdfaaf9cd6e56f59954af7ada9446c683d2e6fa0571301a157db76 -->

```csharp
Inno.Extensibility.Reload.GenerationState.Ready = 0
```

No candidate or unverified retirement is pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationState.cs#L11).

## `Transitioning`

<a id="api-c4498296b0ef8fe9"></a>
<!-- api: F:Inno.Extensibility.Reload.GenerationState.Transitioning 8b1a744a65f2b313b2bce21d32a79f7f6bb1fbd6d600966c460f18abbbcdb21f -->

```csharp
Inno.Extensibility.Reload.GenerationState.Transitioning = 1
```

A candidate is being activated or rolled back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationState.cs#L15).
