---
title: "ITypeCatalogSource"
description: "Reference for ITypeCatalogSource in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.12e9d79b81828ed4
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `ITypeCatalogSource`

This reference describes `ITypeCatalogSource` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CanCreateInstance`](#api-0fb0b51a368e8c6d) | Method |
| [`ConstructGenericType`](#api-5bd48147c0f92bc1) | Method |
| [`CreateInstance`](#api-74ef63507286056f) | Method |
| [`GetMetadata`](#api-0be779d0335aa53d) | Method |
| [`GetTypes`](#api-182aec19a607c355) | Method |

## Type declaration

<a id="api-12e9d79b81828ed4"></a>
<!-- api: T:Inno.Extensibility.Types.ITypeCatalogSource 3f9feed2499dc9e265d499208333b02246456241d75545c1ce15f2047c175626 -->

```csharp
public interface Inno.Extensibility.Types.ITypeCatalogSource
```

Provides type metadata for an explicit assembly in a candidate module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L12).

## `CanCreateInstance`

<a id="api-0fb0b51a368e8c6d"></a>
<!-- api: M:Inno.Extensibility.Types.ITypeCatalogSource.CanCreateInstance(System.Type) d82fcc2a0878a52f43f15d5d29f05e909bab2e702202c26015ac1675ed4eaa95 -->

```csharp
bool Inno.Extensibility.Types.ITypeCatalogSource.CanCreateInstance(System.Type type)
```

Determines whether this deployment supplies a parameterless factory for a declared type.

**Parameter `type`:** The declared runtime type.

**Returns:** Whether instance construction is supported by the selected deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L68).

## `ConstructGenericType`

<a id="api-5bd48147c0f92bc1"></a>
<!-- api: M:Inno.Extensibility.Types.ITypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type}) 7672376bd592a87421bc592b18d4f2a48111ae1b3982a83d94343df3e9691534 -->

```csharp
System.Type? Inno.Extensibility.Types.ITypeCatalogSource.ConstructGenericType(System.Type definition, System.Collections.Generic.IReadOnlyList<System.Type> arguments)
```

Resolves a generic construction through the deployment's linked or dynamic type mechanism.

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

**Returns:** The closed type, or null when its generic constraints reject these arguments.

**Throws `System.NotSupportedException`:** A static deployment did not link the requested construction.

**Throws `System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L54).

## `CreateInstance`

<a id="api-74ef63507286056f"></a>
<!-- api: M:Inno.Extensibility.Types.ITypeCatalogSource.CreateInstance(System.Type) 2c02ac2f404a76872da660fd51ca19d24d5a0aeba056dd0b5f5145b2181faee7 -->

```csharp
object Inno.Extensibility.Types.ITypeCatalogSource.CreateInstance(System.Type type)
```

Constructs a declared type through the selected deployment's factory mechanism.

**Parameter `type`:** The declared runtime type.

**Returns:** A new instance owned by the caller; missing factories or failed constructors throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L79).

## `GetMetadata`

<a id="api-0be779d0335aa53d"></a>
<!-- api: M:Inno.Extensibility.Types.ITypeCatalogSource.GetMetadata(System.Type) 668a7d219fc296ec0acd092a5b003fd033ba7dadaa8745a6344faaee1e877d0c -->

```csharp
Inno.Extensibility.Catalogs.TypeCatalogMetadata Inno.Extensibility.Types.ITypeCatalogSource.GetMetadata(System.Type type)
```

Resolves immutable discovery facts for a declaration in this source.

**Parameter `type`:** The declaration whose relationships and attributes are required.

**Returns:** Complete metadata owned by the caller's candidate generation; unavailable declarations throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L34).

## `GetTypes`

<a id="api-182aec19a607c355"></a>
<!-- api: M:Inno.Extensibility.Types.ITypeCatalogSource.GetTypes(System.Reflection.Assembly) d311ccd3e8f6365908e08872e487492c0f62f53c92b476d1724fcb4049f32cd6 -->

```csharp
System.Collections.Generic.IReadOnlyList<System.Type> Inno.Extensibility.Types.ITypeCatalogSource.GetTypes(System.Reflection.Assembly assembly)
```

Resolves the complete type set without publishing a partial generation.

**Parameter `assembly`:** An assembly owned by the candidate module catalog.

**Returns:** The complete type metadata for this assembly; unsupported or invalid metadata throws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/ITypeCatalogSource.cs#L23).
