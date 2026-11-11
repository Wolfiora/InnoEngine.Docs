---
title: "StaticModuleSource"
description: "Reference for StaticModuleSource in Inno.Runtime."
uid: api.inno.runtime.431dd5b2af473d0e
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `StaticModuleSource`

This reference describes `StaticModuleSource` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Modules.IModuleSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0110e25775e3a282) | Method |
| [`GetAssemblyNames`](#api-c8f2249f460c17f0) | Method |
| [`Prepare`](#api-4101d7eaa8f2de4c) | Method |
| [`assemblyScopes`](#api-79e2e3c28053822f) | Property |
| [`collectible`](#api-c13e9df78fe6213c) | Property |
| [`domain`](#api-7772a066831ae3c1) | Property |
| [`moduleName`](#api-07265119a97c365f) | Property |
| [`scope`](#api-89c2292eb2a94516) | Property |
| [`upstreamModuleNames`](#api-74a65504c0ba8496) | Property |

## Type declaration

<a id="api-431dd5b2af473d0e"></a>
<!-- api: T:Inno.Runtime.StaticModuleSource c82881142826800025676ea2a2dd31068bfbc7065ce96fda167a35ec514ce023 -->

```csharp
public sealed class Inno.Runtime.StaticModuleSource : Inno.Extensibility.Modules.IModuleSource
```

Contributes statically linked module code to the same catalog transactions used by authoring hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L13).

## `#ctor`

<a id="api-0110e25775e3a282"></a>
<!-- api: M:Inno.Runtime.StaticModuleSource.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyList{System.String}) 22d91b7376ed85dff3e279105c5aad629e478645bd3e0f8e6723108cac48e60b -->

```csharp
public Inno.Runtime.StaticModuleSource.StaticModuleSource(string moduleName, Inno.Extensibility.Modules.AssemblyDomain domain, Inno.Extensibility.Modules.AssemblyScope scope, System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> assemblies, System.Collections.Generic.IReadOnlyList<string> dependencies)
```

Freezes a linked module's explicit assemblies and logical dependencies.

**Parameter `moduleName`:** The stable logical module name.

**Parameter `domain`:** The code ownership domain.

**Parameter `scope`:** The dependency scope of every supplied assembly.

**Parameter `assemblies`:** The linked assemblies; the runtime owns their process lifetime.

**Parameter `dependencies`:** The explicitly declared logical upstream modules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L35).

## `GetAssemblyNames`

<a id="api-c8f2249f460c17f0"></a>
<!-- api: M:Inno.Runtime.StaticModuleSource.GetAssemblyNames e6ee281219d205dffe1ef552bad61bae9647bffb481bacee3dede4b22a273588 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Runtime.StaticModuleSource.GetAssemblyNames()
```

Reads the complete owned assembly identities before any generation is acquired.

**Returns:** Distinct, nonempty simple names; invalid or unavailable source data causes an exception.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L66).

## `Prepare`

<a id="api-4101d7eaa8f2de4c"></a>
<!-- api: M:Inno.Runtime.StaticModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext) 724a858983dda57b578dd88822d8b180809dc8202e40a7b30c9c9cd5bf2bc4a9 -->

```csharp
public Inno.Extensibility.Modules.ModuleCatalogContribution Inno.Runtime.StaticModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext context)
```

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L69).

## `assemblyScopes`

<a id="api-79e2e3c28053822f"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.assemblyScopes 959ec3e62eee5e178226a0b8d6a65d49a144989948f3717056e9d11e6351cec2 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Extensibility.Modules.AssemblyScope> Inno.Runtime.StaticModuleSource.assemblyScopes { get; }
```

Gets explicit scope overrides keyed by contributed assembly simple name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L64).

## `collectible`

<a id="api-c13e9df78fe6213c"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.collectible b678f42573ca5f95339b983e3413d95d4ec18d4ee79c799d9ac0f21eea3f3072 -->

```csharp
public bool Inno.Runtime.StaticModuleSource.collectible { get; }
```

Gets whether retirement can release this source's code generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L60).

## `domain`

<a id="api-7772a066831ae3c1"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.domain 9902d3577770257e8bc6d45ca36d4834d37dadcce3c056800c3c3e43132ec912 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Runtime.StaticModuleSource.domain { get; }
```

Gets the ownership domain of the contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L56).

## `moduleName`

<a id="api-07265119a97c365f"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.moduleName 9ea95f2f8f96735c56bee34300e1b4cc7777815603d9f27c291261b36620c5fc -->

```csharp
public string Inno.Runtime.StaticModuleSource.moduleName { get; }
```

Gets the stable logical name used by dependency ordering and replacement transactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L54).

## `scope`

<a id="api-89c2292eb2a94516"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.scope 0b14ab5b857fc71698b23fafa0ab14f97fe030c5cfe6cf1f89b5350d2f60273f -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Runtime.StaticModuleSource.scope { get; }
```

Gets the default dependency scope of contributed assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L58).

## `upstreamModuleNames`

<a id="api-74a65504c0ba8496"></a>
<!-- api: P:Inno.Runtime.StaticModuleSource.upstreamModuleNames ef39976cb1c765679b6d5c973761a1daae366bc473f44e2abb4d315db0a95bda -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Runtime.StaticModuleSource.upstreamModuleNames { get; }
```

Gets the explicit logical upstream module names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticModuleSource.cs#L62).
