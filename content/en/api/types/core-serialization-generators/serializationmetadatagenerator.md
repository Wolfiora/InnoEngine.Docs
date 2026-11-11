---
title: "SerializationMetadataGenerator"
description: "Reference for SerializationMetadataGenerator in Inno.Core.Serialization.Generators."
uid: api.inno.core.serialization.generators.0ba919101b60c047
kind: api
owners:
  - Inno.Core.Serialization.Generators
apiSurface: source-clr
contracts:
  - project.inno-core-serialization-generators#compilation-and-access-contract
---
# `SerializationMetadataGenerator`

This reference describes `SerializationMetadataGenerator` in `Inno.Core.Serialization.Generators`. Read the [shared contract](../../projects/inno-core-serialization-generators.md#compilation-and-access-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Microsoft.CodeAnalysis.IIncrementalGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0b253547777ee5fe) | Method |
| [`Initialize`](#api-4cd8656080cc0509) | Method |

## Type declaration

<a id="api-0ba919101b60c047"></a>
<!-- api: T:Inno.Core.Serialization.Generators.SerializationMetadataGenerator a702c8a6f48e176dc8b6bdc191fee8a67bb472de9e8b382b799066e6598d3cc5 -->

```csharp
public sealed class Inno.Core.Serialization.Generators.SerializationMetadataGenerator : Microsoft.CodeAnalysis.IIncrementalGenerator
```

Generates closed member access, restoration hooks and collection construction for static deployments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationMetadataGenerator.cs#L15).

## `#ctor`

<a id="api-0b253547777ee5fe"></a>
<!-- api: M:Inno.Core.Serialization.Generators.SerializationMetadataGenerator.#ctor d35b528500a7460f521f8ce28cbaaffaa0b4ab357f884e38a1d657f74f79a418 -->

```csharp
public Inno.Core.Serialization.Generators.SerializationMetadataGenerator.SerializationMetadataGenerator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationMetadataGenerator.cs#L15).

## `Initialize`

<a id="api-4cd8656080cc0509"></a>
<!-- api: M:Inno.Core.Serialization.Generators.SerializationMetadataGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext) 476e7c294f5f915f9f9d1b99c11e0dce40b9df293bdb68529b8e32cff6520c9a -->

```csharp
public void Inno.Core.Serialization.Generators.SerializationMetadataGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext context)
```

Called to initialize the generator and register generation steps via callbacks
on the `context`

**Parameter `context`:** The `Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext` to register callbacks on


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization.Generators/SerializationMetadataGenerator.cs#L33).
