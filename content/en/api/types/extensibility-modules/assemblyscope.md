---
title: "AssemblyScope"
description: "Reference for AssemblyScope in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.c3c4b0de77ae21c4
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyScope`

This reference describes `AssemblyScope` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Editor`](#api-7a128b45a9fb9368) | Field |
| [`Runtime`](#api-f0935c41651407db) | Field |

## Type declaration

<a id="api-c3c4b0de77ae21c4"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyScope 828ae2bb37b57b76101316cf60e67f143ce7fb6018e58c75e0835de10295fcc9 -->

```csharp
public enum Inno.Extensibility.Modules.AssemblyScope : int
```

Identifies whether an assembly can participate in runtime or editor-only dependency graphs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyScope.cs#L6).

## `Editor`

<a id="api-7a128b45a9fb9368"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyScope.Editor b4cc2e4d49927be15516650095e24644592c4d78719c8a7dea30957ad34359e8 -->

```csharp
Inno.Extensibility.Modules.AssemblyScope.Editor = 1
```

The assembly is available only to editor consumers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyScope.cs#L16).

## `Runtime`

<a id="api-f0935c41651407db"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyScope.Runtime a0a8948833416a3c770b1ec52e214352a5520d1caa14196865f23062f13dfc7a -->

```csharp
Inno.Extensibility.Modules.AssemblyScope.Runtime = 0
```

The assembly is available to runtime and editor consumers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyScope.cs#L11).
