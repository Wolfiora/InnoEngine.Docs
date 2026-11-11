---
title: "AssemblyDomain"
description: "Reference for AssemblyDomain in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.aae566a2aaa32efd
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyDomain`

This reference describes `AssemblyDomain` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`InnoInternal`](#api-f09d3674d55d4118) | Field |
| [`InnoPlugin`](#api-8bd8cb6f5c2e3e54) | Field |
| [`InnoScripting`](#api-4f70614c7e5882cb) | Field |

## Type declaration

<a id="api-aae566a2aaa32efd"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyDomain 51a06f4d21c0e734a4024627bb8b25e0785cbb4d62b066fc5e30f19f96eb2211 -->

```csharp
public enum Inno.Extensibility.Modules.AssemblyDomain : int
```

Identifies the ownership and reload boundary of a managed assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyDomain.cs#L6).

## `InnoInternal`

<a id="api-f09d3674d55d4118"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyDomain.InnoInternal 3c0580b32a5c058e5e52c8c556bca4846defcc628a4581447b7c3a332f8020b7 -->

```csharp
Inno.Extensibility.Modules.AssemblyDomain.InnoInternal = 0
```

The assembly is engine-owned and remains in the default load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyDomain.cs#L11).

## `InnoPlugin`

<a id="api-8bd8cb6f5c2e3e54"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyDomain.InnoPlugin 6d20de002e841bc8f4580d0c303db8223525c5c20ef32a22d968e84aa1732dd2 -->

```csharp
Inno.Extensibility.Modules.AssemblyDomain.InnoPlugin = 2
```

The assembly belongs to the project's unified collectible plugin generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyDomain.cs#L21).

## `InnoScripting`

<a id="api-4f70614c7e5882cb"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyDomain.InnoScripting 8e4ee8a7c729b3e7ba79b7478c57fae0abf12981bcfe7ea801bf5b0fcc99c3a2 -->

```csharp
Inno.Extensibility.Modules.AssemblyDomain.InnoScripting = 1
```

The assembly contains project scripting code in a collectible load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyDomain.cs#L16).
