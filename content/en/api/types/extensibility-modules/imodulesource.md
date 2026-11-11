---
title: "IModuleSource"
description: "Reference for IModuleSource in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.015e4ec8cc593d69
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `IModuleSource`

This reference describes `IModuleSource` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetAssemblyNames`](#api-f3cf8bff91d4c102) | Method |
| [`Prepare`](#api-74f937d662853ef8) | Method |
| [`assemblyScopes`](#api-90626979d81babce) | Property |
| [`collectible`](#api-94d66b2f9dd0d61f) | Property |
| [`domain`](#api-af6341f3bdc5f8c6) | Property |
| [`moduleName`](#api-a4efa3d214f65f07) | Property |
| [`scope`](#api-081ae2c9a58b59b1) | Property |
| [`upstreamModuleNames`](#api-8537f73b9775a921) | Property |

## Type declaration

<a id="api-015e4ec8cc593d69"></a>
<!-- api: T:Inno.Extensibility.Modules.IModuleSource 789591045b610f8aed9f8ddf822efca7cd0c60720719adfd7fcdf7857f48a8b1 -->

```csharp
public interface Inno.Extensibility.Modules.IModuleSource
```

Prepares one module generation without publishing it to the owning catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L13).

## `GetAssemblyNames`

<a id="api-f3cf8bff91d4c102"></a>
<!-- api: M:Inno.Extensibility.Modules.IModuleSource.GetAssemblyNames 6b6968c55ad5b753866fbfc56cd4d813b46627398ef592fe908d4c9d662d5071 -->

```csharp
System.Collections.Generic.IReadOnlyList<string> Inno.Extensibility.Modules.IModuleSource.GetAssemblyNames()
```

Reads the complete owned assembly identities before any generation is acquired.

**Returns:** Distinct, nonempty simple names; invalid or unavailable source data causes an exception.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L45).

## `Prepare`

<a id="api-74f937d662853ef8"></a>
<!-- api: M:Inno.Extensibility.Modules.IModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext) ef4a35f9cea3b867fb972d1206140cd97c6b8e03a7b2e3be789ad05f3ce91326 -->

```csharp
Inno.Extensibility.Modules.ModuleCatalogContribution Inno.Extensibility.Modules.IModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext context)
```

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L55).

## `assemblyScopes`

<a id="api-90626979d81babce"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.assemblyScopes bf41f12b54e8574d18dde589ca3a70863e0c8f15d7741831702de6d2d63e78d6 -->

```csharp
System.Collections.Generic.IReadOnlyDictionary<string, Inno.Extensibility.Modules.AssemblyScope> Inno.Extensibility.Modules.IModuleSource.assemblyScopes { get; }
```

Gets explicit scope overrides keyed by contributed assembly simple name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L38).

## `collectible`

<a id="api-94d66b2f9dd0d61f"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.collectible ab2467b17b6bbb6a5548c88be8a4772ee2e1fc0196d197cd3ce48868bf8ecc66 -->

```csharp
bool Inno.Extensibility.Modules.IModuleSource.collectible { get; }
```

Gets whether retirement can release this source's code generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L30).

## `domain`

<a id="api-af6341f3bdc5f8c6"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.domain 9b468f677bd78df08080796a1a330e0b9855e0b57bcd13dcbf25f2cd7eb599cd -->

```csharp
Inno.Extensibility.Modules.AssemblyDomain Inno.Extensibility.Modules.IModuleSource.domain { get; }
```

Gets the ownership domain of the contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L22).

## `moduleName`

<a id="api-a4efa3d214f65f07"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.moduleName 709d91a9d1d6033a839127d2900f52a0b83a74c8bc299012021979842ca5444a -->

```csharp
string Inno.Extensibility.Modules.IModuleSource.moduleName { get; }
```

Gets the stable logical name used by dependency ordering and replacement transactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L18).

## `scope`

<a id="api-081ae2c9a58b59b1"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.scope 8974ad3f5e15ce5315f37c57d89f13b00bf93399d77d0af1e724a31e8c2a595c -->

```csharp
Inno.Extensibility.Modules.AssemblyScope Inno.Extensibility.Modules.IModuleSource.scope { get; }
```

Gets the default dependency scope of contributed assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L26).

## `upstreamModuleNames`

<a id="api-8537f73b9775a921"></a>
<!-- api: P:Inno.Extensibility.Modules.IModuleSource.upstreamModuleNames fe1dfcd3fc128b7622a41b39b136959e588f427f9436839050b44e7db4e2bc0b -->

```csharp
System.Collections.Generic.IReadOnlyList<string> Inno.Extensibility.Modules.IModuleSource.upstreamModuleNames { get; }
```

Gets the explicit logical upstream module names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleSource.cs#L34).
