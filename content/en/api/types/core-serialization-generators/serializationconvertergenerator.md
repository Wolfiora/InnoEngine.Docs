---
title: "SerializationConverterGenerator"
description: "Reference for SerializationConverterGenerator in Inno.Core.Serialization.Generators."
uid: api.inno.core.serialization.generators.a08888a2bac71405
kind: api
owners:
  - Inno.Core.Serialization.Generators
apiSurface: source-clr
contracts:
  - project.inno-core-serialization-generators#compilation-and-access-contract
---
# `SerializationConverterGenerator`

This reference describes `SerializationConverterGenerator` in `Inno.Core.Serialization.Generators`. Read the [shared contract](../../projects/inno-core-serialization-generators.md#compilation-and-access-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Microsoft.CodeAnalysis.IIncrementalGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5f1664c66d003541) | Method |
| [`Initialize`](#api-84626d9ea4c8c8b1) | Method |

## Type declaration

<a id="api-a08888a2bac71405"></a>
<!-- api: T:Inno.Core.Serialization.Generators.SerializationConverterGenerator 87e78fe78cc35ac29846acf4d831654974053ef2e2ddb0286c04502bdabb01f5 -->

```csharp
public sealed class Inno.Core.Serialization.Generators.SerializationConverterGenerator : Microsoft.CodeAnalysis.IIncrementalGenerator
```

Generates stateless serialization converters for explicitly annotated closed data-transfer types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationConverterGenerator.cs#L17).

## `#ctor`

<a id="api-5f1664c66d003541"></a>
<!-- api: M:Inno.Core.Serialization.Generators.SerializationConverterGenerator.#ctor c9f3e1388a52741487744d1d3f592c5d58f9bec65069fdb10847cb625a5502a6 -->

```csharp
public Inno.Core.Serialization.Generators.SerializationConverterGenerator.SerializationConverterGenerator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationConverterGenerator.cs#L17).

## `Initialize`

<a id="api-84626d9ea4c8c8b1"></a>
<!-- api: M:Inno.Core.Serialization.Generators.SerializationConverterGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext) 35df1119527fc624fca9f2e122b27e003dc4d9fd0091a185a8361be0ffaa5b64 -->

```csharp
public void Inno.Core.Serialization.Generators.SerializationConverterGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext context)
```

Registers the incremental syntax and source-production pipeline.

**Parameter `context`:** The Roslyn initialization context that receives generator registrations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationConverterGenerator.cs#L64).
