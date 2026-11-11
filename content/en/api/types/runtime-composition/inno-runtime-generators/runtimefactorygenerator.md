---
title: "RuntimeFactoryGenerator"
description: "Reference for RuntimeFactoryGenerator in Inno.Runtime.Generators."
uid: api.inno.runtime.generators.5508a99212991841
kind: api
owners:
  - Inno.Runtime.Generators
apiSurface: source-clr
contracts:
  - project.inno-runtime-generators
---
# `RuntimeFactoryGenerator`

This reference describes `RuntimeFactoryGenerator` in `Inno.Runtime.Generators`. Read the [shared contract](../../../projects/inno-runtime-generators.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Microsoft.CodeAnalysis.IIncrementalGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f8e2cda4cdc0768b) | Method |
| [`Initialize`](#api-d9bd2a7732188aa3) | Method |

## Type declaration

<a id="api-5508a99212991841"></a>
<!-- api: T:Inno.Runtime.Generators.RuntimeFactoryGenerator 570fef67bd1c5c0aa2e497e378d8e3f1965366a5a5739078f488ddb78bc92b2c -->

```csharp
public sealed class Inno.Runtime.Generators.RuntimeFactoryGenerator : Microsoft.CodeAnalysis.IIncrementalGenerator
```

Composes explicit assembly-local metadata catalogs for a Player entry project selected by its build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeFactoryGenerator.cs#L13).

## `#ctor`

<a id="api-f8e2cda4cdc0768b"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeFactoryGenerator.#ctor d949ff89e15bbe9c3a89bd8004124dfc3d2402767ca896edd650880006a859a4 -->

```csharp
public Inno.Runtime.Generators.RuntimeFactoryGenerator.RuntimeFactoryGenerator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeFactoryGenerator.cs#L13).

## `Initialize`

<a id="api-d9bd2a7732188aa3"></a>
<!-- api: M:Inno.Runtime.Generators.RuntimeFactoryGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext) 7b820400eecf40ef89876d97793959d3e3f37b013483457aaa6d1587e5deb9b5 -->

```csharp
public void Inno.Runtime.Generators.RuntimeFactoryGenerator.Initialize(Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext context)
```

Called to initialize the generator and register generation steps via callbacks
on the `context`

**Parameter `context`:** The `Microsoft.CodeAnalysis.IncrementalGeneratorInitializationContext` to register callbacks on


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/generators/Inno.Runtime.Generators/Registration/RuntimeFactoryGenerator.cs#L16).
