---
title: "GameCodeModule"
description: "Reference for GameCodeModule in Inno.Runtime."
uid: api.inno.runtime.31b0eca3978c6646
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameCodeModule`

This reference describes `GameCodeModule` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6e89260d5eb4009b) | Method |
| [`assemblies`](#api-7e2b231a3680a4f8) | Property |
| [`dependencies`](#api-149ba466d769778c) | Property |
| [`domain`](#api-bfc10ef924d51398) | Property |
| [`name`](#api-823f8c4847e058dd) | Property |

## Type declaration

<a id="api-31b0eca3978c6646"></a>
<!-- api: T:Inno.Runtime.GameCodeModule 164becca76765b40d72962c740d19f68a6de2fc8256667e0706d542cde5c37d7 -->

```csharp
public sealed class Inno.Runtime.GameCodeModule
```

Freezes the code ownership, ordered assembly identities and dependencies of one logical module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L11).

## `#ctor`

<a id="api-6e89260d5eb4009b"></a>
<!-- api: M:Inno.Runtime.GameCodeModule.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeAssembly},System.Collections.Generic.IReadOnlyList{System.String}) 4fb6ab6740fe99e590260ec7efdb572f30ed898216d66e8ec7fa1aac2e7ebf52 -->

```csharp
public Inno.Runtime.GameCodeModule.GameCodeModule(string name, Inno.Extensibility.Modules.AssemblyDomain domain, System.Collections.Generic.IReadOnlyList<Inno.Runtime.GameCodeAssembly> assemblies, System.Collections.Generic.IReadOnlyList<string> dependencies)
```

Copies and validates a module contribution without retaining mutable manifest objects.

**Parameter `name`:** The stable module identity.

**Parameter `domain`:** The ownership domain of this game's code.

**Parameter `assemblies`:** The exact ordered code identities to activate.

**Parameter `dependencies`:** The logical modules that precede this contribution.

**Throws `System.IO.InvalidDataException`:** The module identity, domain, code or dependencies are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L31).

## `assemblies`

<a id="api-7e2b231a3680a4f8"></a>
<!-- api: P:Inno.Runtime.GameCodeModule.assemblies 7c200fd904eb1b608a5e84755aaaedf3a3300efe972a788be0791fa887d4f7d0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.GameCodeAssembly> Inno.Runtime.GameCodeModule.assemblies { get; }
```

Gets the exact ordered code identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L72).

## `dependencies`

<a id="api-149ba466d769778c"></a>
<!-- api: P:Inno.Runtime.GameCodeModule.dependencies c243813babf2676d83a09b2a8fa0bd5cc0fc4abc0782fc1e403e3f6a452225bb -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Runtime.GameCodeModule.dependencies { get; }
```

Gets the logical modules required before activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L77).

## `domain`

<a id="api-bfc10ef924d51398"></a>
<!-- api: P:Inno.Runtime.GameCodeModule.domain 7da385a9923709cd4ba4450e8f1d3fac072b7e81f3ec82e170ed34081120948e -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Runtime.GameCodeModule.domain { get; }
```

Gets the ownership domain of this contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L67).

## `name`

<a id="api-823f8c4847e058dd"></a>
<!-- api: P:Inno.Runtime.GameCodeModule.name 37304e8e80e0a4128f3090a8509e17d14b3f744656d79a4851ad33d88ae65709 -->

```csharp
public string Inno.Runtime.GameCodeModule.name { get; }
```

Gets the stable logical module identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeModule.cs#L62).
