---
title: "StaticTypeCatalogSource"
description: "Reference for StaticTypeCatalogSource in Inno.Runtime."
uid: api.inno.runtime.2e6fb5db9ad312de
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `StaticTypeCatalogSource`

This reference describes `StaticTypeCatalogSource` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Types.ITypeCatalogSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5c1285e1823143ff) | Method |
| [`CanCreateInstance`](#api-d731a4aa84c0bcaf) | Method |
| [`ConstructGenericType`](#api-64ecf2ed92547df2) | Method |
| [`CreateInstance`](#api-d356130202d5ab50) | Method |
| [`GetMetadata`](#api-84b799bd972ae235) | Method |
| [`GetTypes`](#api-9a915f8bb2969980) | Method |

## Type declaration

<a id="api-2e6fb5db9ad312de"></a>
<!-- api: T:Inno.Runtime.StaticTypeCatalogSource 10f72f1edd9567edf740a4032c328d5cba3c066f102b545f12b1eab7c569c5bd -->

```csharp
public sealed class Inno.Runtime.StaticTypeCatalogSource : Inno.Extensibility.Types.ITypeCatalogSource
```

Resolves type metadata and factories from linked registrations without runtime type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L14).

## `#ctor`

<a id="api-5c1285e1823143ff"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{Inno.Extensibility.Catalogs.ITypeCatalogRegistrar}}) 8f29d4802968e14fbb33f7c4e61ba5099df36bbb4deae3a1135eb35cbfdfafda -->

```csharp
public Inno.Runtime.StaticTypeCatalogSource.StaticTypeCatalogSource(System.Collections.Generic.IReadOnlyList<System.Action<Inno.Extensibility.Catalogs.ITypeCatalogRegistrar>> catalogs)
```

Executes generated contributions once and freezes the resulting metadata and factory closure.

**Parameter `catalogs`:** Assembly-local registration methods. Callbacks and the registrar are released after construction.

**Throws `System.ArgumentException`:** A declaration is registered twice, a generic construction lacks its definition, or a contributor is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L31).

## `CanCreateInstance`

<a id="api-d731a4aa84c0bcaf"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.CanCreateInstance(System.Type) 5edd711f12045ba04e4905388cd32c04b8a4d8e42be8471da475cff4b73f454c -->

```csharp
public bool Inno.Runtime.StaticTypeCatalogSource.CanCreateInstance(System.Type type)
```

Determines whether this deployment supplies a parameterless factory for a declared type.

**Parameter `type`:** The declared runtime type.

**Returns:** Whether instance construction is supported by the selected deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L110).

## `ConstructGenericType`

<a id="api-64ecf2ed92547df2"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type}) e51125bd89f62d8cef9e98407a7c078bd47a318a2fd097bb71666799b52af6ba -->

```csharp
public System.Type? Inno.Runtime.StaticTypeCatalogSource.ConstructGenericType(System.Type definition, System.Collections.Generic.IReadOnlyList<System.Type> arguments)
```

Resolves a generic construction through the deployment's linked or dynamic type mechanism.

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

**Returns:** The closed type, or null when its generic constraints reject these arguments.

**Throws `System.NotSupportedException`:** A static deployment did not link the requested construction.

**Throws `System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L87).

## `CreateInstance`

<a id="api-d356130202d5ab50"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.CreateInstance(System.Type) ea90b75d56b0f781db0ff5105104071c498e9a823b7b34234e1d6847a84183ce -->

```csharp
public object Inno.Runtime.StaticTypeCatalogSource.CreateInstance(System.Type type)
```

Constructs a declared type through the selected deployment's factory mechanism.

**Parameter `type`:** The declared runtime type.

**Returns:** A new instance owned by the caller; missing factories or failed constructors throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L114).

## `GetMetadata`

<a id="api-84b799bd972ae235"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.GetMetadata(System.Type) cde402621faf0cc9c16a15572667d72c6505a9bf5691f10e44c663a68718a67f -->

```csharp
public Inno.Extensibility.Catalogs.TypeCatalogMetadata Inno.Runtime.StaticTypeCatalogSource.GetMetadata(System.Type type)
```

Resolves immutable discovery facts for a declaration in this source.

**Parameter `type`:** The declaration whose relationships and attributes are required.

**Returns:** Complete metadata owned by the caller's candidate generation; unavailable declarations throw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L82).

## `GetTypes`

<a id="api-9a915f8bb2969980"></a>
<!-- api: M:Inno.Runtime.StaticTypeCatalogSource.GetTypes(System.Reflection.Assembly) 26eb3a42094c1bf78478ded0c0f1be407402a249e82bf5805f9f0e05934a1b16 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Type> Inno.Runtime.StaticTypeCatalogSource.GetTypes(System.Reflection.Assembly assembly)
```

Resolves the complete type set without publishing a partial generation.

**Parameter `assembly`:** An assembly owned by the candidate module catalog.

**Returns:** The complete type metadata for this assembly; unsupported or invalid metadata throws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticTypeCatalogSource.cs#L77).
