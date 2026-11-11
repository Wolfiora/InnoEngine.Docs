---
title: "TypeCatalogMetadata"
description: "Reference for TypeCatalogMetadata in Inno.Extensibility.Catalogs."
uid: api.inno.extensibility.catalogs.43e36eec7b98f7f7
kind: api
owners:
  - Inno.Extensibility.Catalogs
apiSurface: source-clr
contracts:
  - project.inno-extensibility-catalogs#composition-and-factory-contract
---
# `TypeCatalogMetadata`

This reference describes `TypeCatalogMetadata` in `Inno.Extensibility.Catalogs`. Read the [shared contract](../../projects/inno-extensibility-catalogs.md#composition-and-factory-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ad0229f445032706) | Method |
| [`baseTypes`](#api-05c82d23fce9c40c) | Property |
| [`declaredAttributes`](#api-e5afe2d435b1099f) | Property |
| [`inheritedAttributes`](#api-ebd79da2076efdcb) | Property |
| [`interfaces`](#api-8c5cad816b73eec6) | Property |
| [`parameterlessOverrides`](#api-24292b889ef6d56a) | Property |
| [`type`](#api-7411abb258f56958) | Property |

## Type declaration

<a id="api-43e36eec7b98f7f7"></a>
<!-- api: T:Inno.Extensibility.Catalogs.TypeCatalogMetadata e6b887f02cbc4d6276a16dfaa37cafac7005d1a635f2907aae91ec03699bab8b -->

```csharp
public sealed class Inno.Extensibility.Catalogs.TypeCatalogMetadata
```

Freezes a declaration's discovery facts independently of its runtime's reflection implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L10).

## `#ctor`

<a id="api-ad0229f445032706"></a>
<!-- api: M:Inno.Extensibility.Catalogs.TypeCatalogMetadata.#ctor(System.Type,System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.ValueTuple{System.String,System.Type}}) 5f24c3565575eff0108f353df59d8eb3f8b5bd231ac12218e8592baecb946516 -->

```csharp
public Inno.Extensibility.Catalogs.TypeCatalogMetadata.TypeCatalogMetadata(System.Type type, System.Collections.Generic.IReadOnlyList<System.Type> baseTypes, System.Collections.Generic.IReadOnlyList<System.Type> interfaces, System.Collections.Generic.IReadOnlyList<System.Attribute> declaredAttributes, System.Collections.Generic.IReadOnlyList<System.Attribute> inheritedAttributes, System.Collections.Generic.IReadOnlyList<(string name, System.Type declaringBase)> parameterlessOverrides)
```

Captures type relationships and attributes for one candidate generation.

**Parameter `type`:** The declared type belonging to the contributing assembly.

**Parameter `baseTypes`:** Ordered base types, starting with the immediate base and excluding System.Object.

**Parameter `interfaces`:** All implemented interfaces, including inherited interfaces.

**Parameter `declaredAttributes`:** Attributes declared directly on this type.

**Parameter `inheritedAttributes`:** The effective attributes after applying inheritance and multiplicity rules.

**Parameter `parameterlessOverrides`:** Effective parameterless instance overrides, paired with the declaration owning their virtual slot.

**Throws `System.ArgumentNullException`:** A required declaration or collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L36).

## `baseTypes`

<a id="api-05c82d23fce9c40c"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.baseTypes d5da597d50fd2afd345835e8fcc483dfcc78bccdf5818eec60ea7a86bd77873e -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Type> Inno.Extensibility.Catalogs.TypeCatalogMetadata.baseTypes { get; }
```

Gets the ordered inheritance chain, excluding System.Object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L66).

## `declaredAttributes`

<a id="api-e5afe2d435b1099f"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.declaredAttributes 1804a50ee2f2a5a2736c974c28fa0272c1d3f404f01e04418f39a3cec4ba058b -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Attribute> Inno.Extensibility.Catalogs.TypeCatalogMetadata.declaredAttributes { get; }
```

Gets directly declared attribute instances owned by this generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L76).

## `inheritedAttributes`

<a id="api-ebd79da2076efdcb"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.inheritedAttributes 2d2dd25e29661d46615adc2f01bf41e283a757a041a8c54968948f934fe80988 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Attribute> Inno.Extensibility.Catalogs.TypeCatalogMetadata.inheritedAttributes { get; }
```

Gets the effective attribute set used by inherited extension discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L81).

## `interfaces`

<a id="api-8c5cad816b73eec6"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.interfaces 72c93e4edadb1324d15d3c3e8f4fd8bf12409b7f40558467f8e4f42d8e59579c -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Type> Inno.Extensibility.Catalogs.TypeCatalogMetadata.interfaces { get; }
```

Gets the complete implemented interface set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L71).

## `parameterlessOverrides`

<a id="api-24292b889ef6d56a"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.parameterlessOverrides 6a42b14ac9e913772a840f7e83ec250cff4d3adb16849ebbde6a77e45e8e10b0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<(string name, System.Type declaringBase)> Inno.Extensibility.Catalogs.TypeCatalogMetadata.parameterlessOverrides { get; }
```

Gets effective parameterless overrides without retaining runtime MethodInfo objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L86).

## `type`

<a id="api-7411abb258f56958"></a>
<!-- api: P:Inno.Extensibility.Catalogs.TypeCatalogMetadata.type d5a9c01629cfc9ca7bd660302880e6f5582ee11cb541c28ab5135da5754d39fe -->

```csharp
public System.Type Inno.Extensibility.Catalogs.TypeCatalogMetadata.type { get; }
```

Gets the declaration whose metadata is owned by this generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/TypeCatalogMetadata.cs#L61).
