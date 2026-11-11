---
title: "ModuleHostOptions"
description: "Reference for ModuleHostOptions in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.df6a9bca8d06016b
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `ModuleHostOptions`

This reference describes `ModuleHostOptions` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-69ff6e80a6f9ce48) | Method |
| [`catalogSource`](#api-e2745f07963cad33) | Property |

## Type declaration

<a id="api-df6a9bca8d06016b"></a>
<!-- api: T:Inno.Extensibility.Modules.ModuleHostOptions 70ca9695cb3a1451c7498fd17c963d1862f5be5f1b30a1e354b707cb10da44cc -->

```csharp
public sealed class Inno.Extensibility.Modules.ModuleHostOptions
```

Selects the isolated host catalog without prescribing storage for contributed module sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHostOptions.cs#L6).

## `#ctor`

<a id="api-69ff6e80a6f9ce48"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHostOptions.#ctor bff520c9dd27f525819697380695c5325de206c68f3fe5659e40c70059837a94 -->

```csharp
public Inno.Extensibility.Modules.ModuleHostOptions.ModuleHostOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHostOptions.cs#L6).

## `catalogSource`

<a id="api-e2745f07963cad33"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleHostOptions.catalogSource 95235980d0d82b92417511e8ef93fc0127d259080874c1462a5de91c699019cf -->

```csharp
public required Inno.Extensibility.Modules.IAssemblyCatalogSource Inno.Extensibility.Modules.ModuleHostOptions.catalogSource { get; init; }
```

Gets the host source whose ownership transfers to the module host during construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHostOptions.cs#L11).
