---
title: "RuntimeSubsystemGenerator"
description: "Reference for RuntimeSubsystemGenerator in Inno.Runtime.Generators."
uid: api.inno.runtime.generators.320cc7c2d65360bb
kind: api
owners:
  - Inno.Runtime.Generators
apiSurface: source-clr
contracts:
  - project.inno-runtime-generators
---
# `RuntimeSubsystemGenerator`

This reference describes `RuntimeSubsystemGenerator` in `Inno.Runtime.Generators`. Read the [shared contract](../../../projects/inno-runtime-generators.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Microsoft.CodeAnalysis.IIncrementalGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-37a09f7fa365d6fe) | Method |
| [`Initialize`](#api-0e27f86c72cc1348) | Method |

## Type declaration

<a id="api-320cc7c2d65360bb"></a>
<!-- api: T:Inno.Runtime.Generators.RuntimeSubsystemGenerator d91c4ebedb8b81936f72b75cf19e39f6b95939620e5e4832edc376ce2eae24c5 -->

```csharp
public sealed class Inno.Runtime.Generators.RuntimeSubsystemGenerator : Microsoft.CodeAnalysis.IIncrementalGenerator
```

Generates deterministic, reflection-free catalogs from local strongly typed subsystem declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/RuntimeSubsystemGenerator.cs#L15).

## `#ctor`

<a id="api-37a09f7fa365d6fe"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeSubsystemGenerator.#ctor e07053cb1a4e18f6ecae9b6df7fa96f50de9a34b67b66e3b539dee5aefccbf0b -->

```csharp
public Inno.Runtime.Generators.RuntimeSubsystemGenerator.RuntimeSubsystemGenerator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/RuntimeSubsystemGenerator.cs#L15).

## `Initialize`

<a id="api-0e27f86c72cc1348"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeSubsystemGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext) 5fdb44bb3d5feb9501e294a04f509ed6118cd6080e79ffeea8790e0f4e00b506 -->

```csharp
public void Inno.Runtime.Generators.RuntimeSubsystemGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext context)
```

Registers incremental discovery of composition methods and catalog declarations.

**Parameter `context`:** The compiler-owned incremental generation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/RuntimeSubsystemGenerator.cs#L26).
