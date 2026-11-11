---
title: "ReflectionTypeCatalogSource"
description: "Reference for ReflectionTypeCatalogSource in Inno.Adapter.Modules.DotNet."
uid: api.inno.adapter.modules.dotnet.73a53bb99a5acbe8
kind: api
owners:
  - Inno.Adapter.Modules.DotNet
apiSurface: source-clr
contracts:
  - project.inno-adapter-modules-dotnet
---
# `ReflectionTypeCatalogSource`

This reference describes `ReflectionTypeCatalogSource` in `Inno.Adapter.Modules.DotNet`. Read the [shared contract](../../../projects/inno-adapter-modules-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Types.ITypeCatalogSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-abac8cbcd79a12d7) | Method |
| [`CanCreateInstance`](#api-c60b0a689bc7995d) | Method |
| [`ConstructGenericType`](#api-01688ef5890c1d32) | Method |
| [`CreateInstance`](#api-bb14f6d93566778a) | Method |
| [`GetMetadata`](#api-caf6f94f7c72224e) | Method |
| [`GetTypes`](#api-cd97f776b3584c5d) | Method |

## Type declaration

<a id="api-73a53bb99a5acbe8"></a>
<!-- api: T:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource c8f75709a9ac0f8ad2b80024a977a0e3b2ee609db12763fefb6c159b5ae999de -->

```csharp
public sealed class Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource : Inno.Extensibility.Types.ITypeCatalogSource
```

Discovers desktop authoring types through the selected managed runtime's reflection service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L15).

## `#ctor`

<a id="api-abac8cbcd79a12d7"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.#ctor 5418b3c4801e37efa27c17350a3b8df9c8bb678d853504bbf6865801382d4947 -->

```csharp
public Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.ReflectionTypeCatalogSource()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L15).

## `CanCreateInstance`

<a id="api-c60b0a689bc7995d"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.CanCreateInstance(System.Type) c3354ecd1e2fd60dabaaf36bdb05cfd65c604f77d5565c14c7c7a789ba1ab520 -->

```csharp
public bool Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.CanCreateInstance(System.Type type)
```

Determines whether this deployment supplies a parameterless factory for a declared type.

**Parameter `type`:** The declared runtime type.

**Returns:** Whether instance construction is supported by the selected deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L62).

## `ConstructGenericType`

<a id="api-01688ef5890c1d32"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type}) 5432f7c9e24615145d7b9a160f0126951dc5c671a6b2c14dd73a2c41223c2296 -->

```csharp
public System.Type? Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.ConstructGenericType(System.Type definition, System.Collections.Generic.IReadOnlyList<System.Type> arguments)
```

Resolves a generic construction through the deployment's linked or dynamic type mechanism.

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

**Returns:** The closed type, or null when its generic constraints reject these arguments.

**Throws `System.NotSupportedException`:** A static deployment did not link the requested construction.

**Throws `System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L40).

## `CreateInstance`

<a id="api-bb14f6d93566778a"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.CreateInstance(System.Type) 90e771697235c90f48304b19c0a712fbe403b5fb2161bc9e5d1d627b81d1bc98 -->

```csharp
public object Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.CreateInstance(System.Type type)
```

Constructs a declared type through the selected deployment's factory mechanism.

**Parameter `type`:** The declared runtime type.

**Returns:** A new instance owned by the caller; missing factories or failed constructors throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L71).

## `GetMetadata`

<a id="api-caf6f94f7c72224e"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.GetMetadata(System.Type) 4ba30deb4b18e5696ebec2a3513628ec656975623b4d8a891663080eb8031819 -->

```csharp
public Inno.Extensibility.Catalogs.TypeCatalogMetadata Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.GetMetadata(System.Type type)
```

Resolves immutable discovery facts for a declaration in this source.

**Parameter `type`:** The declaration whose relationships and attributes are required.

**Returns:** Complete metadata owned by the caller's candidate generation; unavailable declarations throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L25).

## `GetTypes`

<a id="api-cd97f776b3584c5d"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.GetTypes(System.Reflection.Assembly) 715bab55ccd81bbed8b4d43714c71e4c44a17112f494e2d26901cb8eb55eec83 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Type> Inno.Adapter.Modules.DotNet.ReflectionTypeCatalogSource.GetTypes(System.Reflection.Assembly assembly)
```

Resolves the complete type set without publishing a partial generation.

**Parameter `assembly`:** An assembly owned by the candidate module catalog.

**Returns:** The complete type metadata for this assembly; unsupported or invalid metadata throws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Discovery/ReflectionTypeCatalogSource.cs#L18).
