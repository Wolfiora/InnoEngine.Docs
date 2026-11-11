---
title: "GameRuntimeModule"
description: "Reference for GameRuntimeModule in Inno.Runtime."
uid: api.inno.runtime.ab9be9549997e631
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameRuntimeModule`

This reference describes `GameRuntimeModule` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9f2699b2babfee41) | Method |
| [`Validate`](#api-e0e2c4503e268f26) | Method |
| [`assemblies`](#api-43f601118dfb0401) | Property |
| [`dependencies`](#api-d416f3bea7c6288a) | Property |
| [`domain`](#api-c7f2cd065da5ef9f) | Property |
| [`name`](#api-1c2ee4615fc86b37) | Property |

## Type declaration

<a id="api-ab9be9549997e631"></a>
<!-- api: T:Inno.Runtime.GameRuntimeModule 4b82d0ff2df681db6971fc8620367592d6d0205df5416f55de52ce9ba75e78ae -->

```csharp
public sealed class Inno.Runtime.GameRuntimeModule : Inno.Core.Serialization.ISerializable
```

Describes one dependency-ordered managed module in a frozen Player generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L13).

## `#ctor`

<a id="api-9f2699b2babfee41"></a>
<!-- api: M:Inno.Runtime.GameRuntimeModule.#ctor fef57f6423001ce7af8e1cbe56c21c1f58ddf8001b8b3cfef3b829b3d10d0daf -->

```csharp
public Inno.Runtime.GameRuntimeModule.GameRuntimeModule()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L13).

## `Validate`

<a id="api-e0e2c4503e268f26"></a>
<!-- api: M:Inno.Runtime.GameRuntimeModule.Validate 8aa55bbc8b68a251d1b51d2753486d6093e92281bf9bf6d860afb9626418cca5 -->

```csharp
public void Inno.Runtime.GameRuntimeModule.Validate()
```

Validates module identity, ownership, file names, and dependency declarations.

**Throws `System.IO.InvalidDataException`:** Thrown when the module cannot be activated as part of a frozen Player generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L45).

## `assemblies`

<a id="api-43f601118dfb0401"></a>
<!-- api: P:Inno.Runtime.GameRuntimeModule.assemblies 83b9ea9fe207b1fe0a48a3d9b43ae11da7feb95aad2bd10380e11004fba02cea -->

```csharp
public Inno.Runtime.GameRuntimeAssembly[] Inno.Runtime.GameRuntimeModule.assemblies { get; set; }
```

Gets or sets the exact ordered code identities contributed by this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L31).

## `dependencies`

<a id="api-d416f3bea7c6288a"></a>
<!-- api: P:Inno.Runtime.GameRuntimeModule.dependencies eb2487cf92e122619ebf143289df9368744f97c79783f83480ebbbd2ecb7e206 -->

```csharp
public string[] Inno.Runtime.GameRuntimeModule.dependencies { get; set; }
```

Gets or sets stable module names that must be active before this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L37).

## `domain`

<a id="api-c7f2cd065da5ef9f"></a>
<!-- api: P:Inno.Runtime.GameRuntimeModule.domain c579092bb3365cdd9edf7c7d2432bfc602052bea47d6c03329a8fffbeb009521 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Runtime.GameRuntimeModule.domain { get; set; }
```

Gets or sets the ownership domain declared by the deployed module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L25).

## `name`

<a id="api-1c2ee4615fc86b37"></a>
<!-- api: P:Inno.Runtime.GameRuntimeModule.name 452b3b4c4a7f90539b0b3f3b751d2b24ffbc244d9d3bda5b93408ab5dfe138a8 -->

```csharp
public string Inno.Runtime.GameRuntimeModule.name { get; set; }
```

Gets or sets the stable module name used by the managed module host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameRuntimeModule.cs#L19).
