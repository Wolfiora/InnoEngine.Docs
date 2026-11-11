---
title: "ModuleCatalogContribution"
description: "Reference for ModuleCatalogContribution in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.5cc4bb19163a4efb
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `ModuleCatalogContribution`

This reference describes `ModuleCatalogContribution` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e769e1b71ba06622) | Method |
| [`assemblies`](#api-7aa08496eea66227) | Property |
| [`assemblyScopes`](#api-3d04d9d3b4ea0c03) | Property |
| [`domain`](#api-9e3a3567b5024e2c) | Property |
| [`lifetime`](#api-b5908828cbc9fd32) | Property |
| [`moduleName`](#api-43596464bf75dbd4) | Property |
| [`scope`](#api-20754bf13a3eb73b) | Property |

## Type declaration

<a id="api-5cc4bb19163a4efb"></a>
<!-- api: T:Inno.Extensibility.Modules.ModuleCatalogContribution 89f1ddba06451a3e497bdf328fcee0d0ec802ffa5272b66c3d5e1177b6c009af -->

```csharp
public sealed class Inno.Extensibility.Modules.ModuleCatalogContribution
```

Freezes the assemblies, classification and lifetime of one acquired module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L13).

## `#ctor`

<a id="api-e769e1b71ba06622"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleCatalogContribution.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyDictionary{System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyScope},Inno.Extensibility.Modules.IModuleLifetime) 428ab49eb78ff6e1535ad755f3bc04ad7ed85dd9fc191a065a34d9dc31467f2f -->

```csharp
public Inno.Extensibility.Modules.ModuleCatalogContribution.ModuleCatalogContribution(string moduleName, Inno.Extensibility.Modules.AssemblyDomain domain, Inno.Extensibility.Modules.AssemblyScope scope, System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> assemblies, System.Collections.Generic.IReadOnlyDictionary<System.Reflection.Assembly, Inno.Extensibility.Modules.AssemblyScope> assemblyScopes, Inno.Extensibility.Modules.IModuleLifetime? lifetime = null)
```

Acquires immutable views while transferring the generation lifetime to the contribution.

**Parameter `moduleName`:** The stable module name.

**Parameter `domain`:** The ownership domain.

**Parameter `scope`:** The module's default dependency scope.

**Parameter `assemblies`:** The complete acquired assembly set.

**Parameter `assemblyScopes`:** The actual dependency scope of every acquired assembly.

**Parameter `lifetime`:** The transferred generation owner; null denotes externally owned static code.

**Throws `System.ArgumentException`:** The name is empty, the assembly set is empty or contains duplicates, or scope metadata is incomplete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L39).

## `assemblies`

<a id="api-7aa08496eea66227"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.assemblies f9c5433f8af33a476a20482bf01122a344c9dc90664144e66a3472845e5fe950 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Extensibility.Modules.ModuleCatalogContribution.assemblies { get; }
```

Gets the immutable owned assembly set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L78).

## `assemblyScopes`

<a id="api-3d04d9d3b4ea0c03"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.assemblyScopes 4a50bc20d368db688d4268d480b13d995589b6c885ca9ea98ae919b1b459468f -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<System.Reflection.Assembly, Inno.Extensibility.Modules.AssemblyScope> Inno.Extensibility.Modules.ModuleCatalogContribution.assemblyScopes { get; }
```

Gets the complete per-assembly scope map.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L82).

## `domain`

<a id="api-9e3a3567b5024e2c"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.domain c0ec173594c358e9beb19b15c26ae0b35fc1eb7ec8faf0479958ef74316474c9 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Extensibility.Modules.ModuleCatalogContribution.domain { get; }
```

Gets the ownership domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L70).

## `lifetime`

<a id="api-b5908828cbc9fd32"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.lifetime 17c0215b3a7bfb11762843b5406ad9c5fd09086b8d841b23648b8eb5568378af -->

```csharp
public Inno.Extensibility.Modules.IModuleLifetime? Inno.Extensibility.Modules.ModuleCatalogContribution.lifetime { get; }
```

Gets the owned generation lifetime, or null for externally owned code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L86).

## `moduleName`

<a id="api-43596464bf75dbd4"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.moduleName 858aae5058f587ce9935a9e7dcdefd3dbd877244d10ffb353c6f31d3e2b343d1 -->

```csharp
public string Inno.Extensibility.Modules.ModuleCatalogContribution.moduleName { get; }
```

Gets the stable module name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L66).

## `scope`

<a id="api-20754bf13a3eb73b"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleCatalogContribution.scope 3027ccb727e3c4c9ccfce9a20aeb72b322cbfc6e7dc2accd72b4ca8d462d035b -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Extensibility.Modules.ModuleCatalogContribution.scope { get; }
```

Gets the default dependency scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleCatalogContribution.cs#L74).
