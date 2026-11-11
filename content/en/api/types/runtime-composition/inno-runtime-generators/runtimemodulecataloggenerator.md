---
title: "RuntimeModuleCatalogGenerator"
description: "Reference for RuntimeModuleCatalogGenerator in Inno.Runtime.Generators."
uid: api.inno.runtime.generators.f2e81d19a9af8c96
kind: api
owners:
  - Inno.Runtime.Generators
apiSurface: source-clr
contracts:
  - project.inno-runtime-generators
---
# `RuntimeModuleCatalogGenerator`

This reference describes `RuntimeModuleCatalogGenerator` in `Inno.Runtime.Generators`. Read the [shared contract](../../../projects/inno-runtime-generators.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Microsoft.CodeAnalysis.IIncrementalGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-740008bc3f0e923b) | Method |
| [`Initialize`](#api-289dd1ea975bce09) | Method |

## Type declaration

<a id="api-f2e81d19a9af8c96"></a>
<!-- api: T:Inno.Runtime.Generators.RuntimeModuleCatalogGenerator b03246f77c5198204594dec7955771775ed32a8084cbc449ad1a2b85770146c1 -->

```csharp
public sealed class Inno.Runtime.Generators.RuntimeModuleCatalogGenerator : Microsoft.CodeAnalysis.IIncrementalGenerator
```

Emits a local, explicit type and construction catalog for statically deployed managed assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeModuleCatalogGenerator.cs#L14).

## `#ctor`

<a id="api-740008bc3f0e923b"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeModuleCatalogGenerator.#ctor 91680322f697eec06122858ae0cda74baf8f2dd93b6c39c921923137f3776baf -->

```csharp
public Inno.Runtime.Generators.RuntimeModuleCatalogGenerator.RuntimeModuleCatalogGenerator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeModuleCatalogGenerator.cs#L14).

## `Initialize`

<a id="api-289dd1ea975bce09"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeModuleCatalogGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext) a8a3562b05077d33f188a746a6bd79ff5d38af9e61b97ed3b1162596ff2445ec -->

```csharp
public void Inno.Runtime.Generators.RuntimeModuleCatalogGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext context)
```

Registers deterministic catalog generation from the current assembly's declared symbols.

**Parameter `context`:** The compiler's incremental registration boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeModuleCatalogGenerator.cs#L22).
