---
title: "ITypeCatalogRegistrar"
description: "Reference for ITypeCatalogRegistrar in Inno.Extensibility.Catalogs."
uid: api.inno.extensibility.catalogs.3c11be680076b4b1
kind: api
owners:
  - Inno.Extensibility.Catalogs
apiSurface: source-clr
contracts:
  - project.inno-extensibility-catalogs#composition-and-factory-contract
---
# `ITypeCatalogRegistrar`

This reference describes `ITypeCatalogRegistrar` in `Inno.Extensibility.Catalogs`. Read the [shared contract](../../projects/inno-extensibility-catalogs.md#composition-and-factory-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Register`](#api-b7648c1df4753ed4) | Method |
| [`RegisterFactory`](#api-7618258ec059790b) | Method |
| [`RejectGenericConstruction`](#api-d08b97d5bfbcd615) | Method |

## Type declaration

<a id="api-3c11be680076b4b1"></a>
<!-- api: T:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar 4d156d218d3770bc3bfe49d50d760bfc14de006a5c27a487b7cf853aab90a3fe -->

```csharp
public interface Inno.Extensibility.Catalogs.ITypeCatalogRegistrar
```

Accepts explicit declarations and linked generic factories while a static catalog is being composed.

**Constraints:** Generated contributors run synchronously on the composition thread and must not retain the registrar.
Its registrations belong to the resulting generation. Constructors execute only when requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/ITypeCatalogRegistrar.cs#L13).

## `Register`

<a id="api-b7648c1df4753ed4"></a>
<!-- api: M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.Register(Inno.Extensibility.Catalogs.TypeCatalogMetadata,System.Func{System.Object}) cb36f9187c466801ecdab92ba8c7c4ba1ff9da2cc647eb15cd6a4d2e4dc0fec6 -->

```csharp
void Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.Register(Inno.Extensibility.Catalogs.TypeCatalogMetadata metadata, System.Func<object>? factory)
```

Registers immutable discovery metadata and an optional parameterless construction function.

**Parameter `metadata`:** Complete discovery facts for one assembly-local declaration.

**Parameter `factory`:** Creates a new instance, or null when the declaration is not constructible.

**Throws `System.ArgumentException`:** The declaration has already been registered.

**Throws `System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/ITypeCatalogRegistrar.cs#L30).

## `RegisterFactory`

<a id="api-7618258ec059790b"></a>
<!-- api: M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RegisterFactory(System.Type,System.Func{System.Object}) 3747f7891a68f57870793b8f51dc84e912565eb0d2d29caba70d1a75a06c0375 -->

```csharp
void Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RegisterFactory(System.Type type, System.Func<object> factory)
```

Registers a closed generic construction linked by the contributing assembly.

**Parameter `type`:** A fully closed generic type whose definition is contributed by the completed catalog.

**Parameter `factory`:** Creates a new instance of the linked construction without dynamic code generation.

**Throws `System.ArgumentException`:** The type is not a fully closed generic construction.

**Constraints:** Repeated registrations of the same closed construction are idempotent; the first factory is retained.

**Throws `System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/ITypeCatalogRegistrar.cs#L53).

## `RejectGenericConstruction`

<a id="api-d08b97d5bfbcd615"></a>
<!-- api: M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RejectGenericConstruction(System.Type,System.Collections.Generic.IReadOnlyList{System.Type}) 2a342742f74bf53d8ca9442947da2aba638b778ab744db40ef4d5011f2a9f42d -->

```csharp
void Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RejectGenericConstruction(System.Type definition, System.Collections.Generic.IReadOnlyList<System.Type> arguments)
```

Records a construction whose argument set was rejected by the declaration's compile-time constraints.

**Parameter `definition`:** The generic declaration contributed by the completed catalog.

**Parameter `arguments`:** The complete closed argument set. The registrar copies this collection during registration.

**Constraints:** This fact lets static resolution skip an inapplicable converter without attempting dynamic generic creation.
Unknown constructions remain explicit deployment errors. Repeated rejections are idempotent.

**Throws `System.ArgumentException`:** The declaration or argument set is incomplete, open, or conflicts with a registered factory.

**Throws `System.ArgumentNullException`:** The declaration or argument collection is null.

**Throws `System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Catalogs/ITypeCatalogRegistrar.cs#L80).
