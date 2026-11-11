---
title: "IAssemblyCatalogSource"
description: "Reference for IAssemblyCatalogSource in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.05db74c12661c579
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `IAssemblyCatalogSource`

This reference describes `IAssemblyCatalogSource` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`changed`](#api-1c6f10e3c32c0d9d) | Event |
| [`GetAssemblies`](#api-d1468838cbc1885b) | Method |
| [`GetSharedAssemblies`](#api-99c239d44b54fb9c) | Method |
| [`IsFrameworkAssembly`](#api-9dd1d70417ea84a4) | Method |
| [`IsFrameworkReference`](#api-f89f48b9c5187baa) | Method |

## Type declaration

<a id="api-05db74c12661c579"></a>
<!-- api: T:Inno.Extensibility.Modules.IAssemblyCatalogSource 40731b14c0615f33b250fbbee7832b1e6cba34ed1bf32f4627df4ccfd0868efc -->

```csharp
public interface Inno.Extensibility.Modules.IAssemblyCatalogSource : System.IDisposable
```

Owns the host assembly source independently of any module loading implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L13).

## `changed`

<a id="api-1c6f10e3c32c0d9d"></a>
<!-- api: E:Inno.Extensibility.Modules.IAssemblyCatalogSource.changed fc823798152036efd8602b678bf9f0819a0d8020531fd298b8c72f94c96a00bc -->

```csharp
System.Action? Inno.Extensibility.Modules.IAssemblyCatalogSource.changed
```

Notifies the owner that the host assembly snapshot should be refreshed at a safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L18).

## `GetAssemblies`

<a id="api-d1468838cbc1885b"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogSource.GetAssemblies feadbead5da99338bd82c99769a526520f80790304a7ce0319b1673923cde575 -->

```csharp
System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Extensibility.Modules.IAssemblyCatalogSource.GetAssemblies()
```

Gets the complete host assemblies that participate in extension discovery.

**Returns:** The current host snapshot; the caller must not retain it beyond its catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L25).

## `GetSharedAssemblies`

<a id="api-99c239d44b54fb9c"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogSource.GetSharedAssemblies d52c028f528bd3481a953b6b3c4f0c2bf51d8eeed1a23d0ee34fc952c45a4448 -->

```csharp
System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Extensibility.Modules.IAssemblyCatalogSource.GetSharedAssemblies()
```

Gets host contracts and framework assemblies available to candidate modules.

**Returns:** A snapshot of shareable assemblies owned by the host implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L32).

## `IsFrameworkAssembly`

<a id="api-9dd1d70417ea84a4"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly) 1d47cb4349e17acad257cb5b607e821e362870ad5f79aff2b31a8691a9b0fe74 -->

```csharp
bool Inno.Extensibility.Modules.IAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly assembly)
```

Determines whether an assembly is a framework contract rather than a contributed module.

**Parameter `assembly`:** The candidate shared assembly.

**Returns:** Whether the assembly is owned by the selected managed framework.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L52).

## `IsFrameworkReference`

<a id="api-f89f48b9c5187baa"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogSource.IsFrameworkReference(System.String) 2879fe8caf86af55a64fa08e11be2bccae4fe0840e415110b5d3e6cdc88109f5 -->

```csharp
bool Inno.Extensibility.Modules.IAssemblyCatalogSource.IsFrameworkReference(string assemblyName)
```

Determines whether a referenced simple name belongs to the selected managed framework.

**Parameter `assemblyName`:** The referenced managed assembly simple name.

**Returns:** Whether the framework owns this dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogSource.cs#L42).
