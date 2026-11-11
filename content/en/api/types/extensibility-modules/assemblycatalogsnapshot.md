---
title: "AssemblyCatalogSnapshot"
description: "Reference for AssemblyCatalogSnapshot in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.8e422304490c709d
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyCatalogSnapshot`

This reference describes `AssemblyCatalogSnapshot` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`assemblies`](#api-bc02dc69b9841dea) | Property |
| [`version`](#api-5324f0361f9fd724) | Property |

## Type declaration

<a id="api-8e422304490c709d"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyCatalogSnapshot 3ca61f1e26b89f3ddee5e98c39fca026ba0d34d18772e67328c3f4d1b0d060e4 -->

```csharp
public sealed class Inno.Extensibility.Modules.AssemblyCatalogSnapshot
```

Represents an immutable view of the assemblies participating in one catalog generation.

**Constraints:** A snapshot retains its assemblies. Consumers must not keep obsolete snapshots after a reload,
because doing so can delay unloading a collectible assembly context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/AssemblyCatalogSnapshot.cs#L14).

## `assemblies`

<a id="api-bc02dc69b9841dea"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyCatalogSnapshot.assemblies 2b290befc1326e11d7c893b712d53daa20d07532ae21c59c2010a5aa5e946104 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Extensibility.Modules.AssemblyCatalogSnapshot.assemblies { get; }
```

Gets the host and active module assemblies in this generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/AssemblyCatalogSnapshot.cs#L34).

## `version`

<a id="api-5324f0361f9fd724"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyCatalogSnapshot.version 4de7a87fb557e3f6215fcb8c01ada62b8773c6d2aa53cfee380553d68a05ccfb -->

```csharp
public long Inno.Extensibility.Modules.AssemblyCatalogSnapshot.version { get; }
```

Gets the monotonically increasing catalog version.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/AssemblyCatalogSnapshot.cs#L29).
