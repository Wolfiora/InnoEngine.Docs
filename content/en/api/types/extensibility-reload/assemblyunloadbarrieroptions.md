---
title: "AssemblyUnloadBarrierOptions"
description: "Reference for AssemblyUnloadBarrierOptions in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.0a144a712f7cbd95
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `AssemblyUnloadBarrierOptions`

This reference describes `AssemblyUnloadBarrierOptions` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2cff3683276be3dc) | Method |
| [`collectionInterval`](#api-2df08c4a705a8b32) | Property |
| [`retentionTimeout`](#api-cf686e60505f0a13) | Property |

## Type declaration

<a id="api-0a144a712f7cbd95"></a>
<!-- api: T:Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions 26689dfcc6e91f323096e99c21da094854580f3a54f85afdd83660737bfa935c -->

```csharp
public sealed class Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions
```

Configures forced-collection cadence and the retention failure threshold.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierOptions.cs#L8).

## `#ctor`

<a id="api-2cff3683276be3dc"></a>
<!-- api: M:Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.#ctor 8af4813db4c37e9afa6dd9f98576a35f780e9a416d3793f6a857fe4af87b800b -->

```csharp
public Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.AssemblyUnloadBarrierOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierOptions.cs#L8).

## `collectionInterval`

<a id="api-2df08c4a705a8b32"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.collectionInterval 469da742edb7cddfb310df9efea45aea34757ef7007015d95828cb727d4463f2 -->

```csharp
public System.TimeSpan Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.collectionInterval { get; init; }
```

Gets the minimum interval between full collection attempts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierOptions.cs#L13).

## `retentionTimeout`

<a id="api-cf686e60505f0a13"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.retentionTimeout 2eeedfacb7587d8747c78f975161b435a87bbfb55655a60ee9d9ce47a0e22cbf -->

```csharp
public System.TimeSpan Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions.retentionTimeout { get; init; }
```

Gets the duration after which a still-reachable generation faults the reload subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrierOptions.cs#L18).
