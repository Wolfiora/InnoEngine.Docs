---
title: "TypeCatalog"
description: "Reference for TypeCatalog in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.4f0425a0e0d434d5
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `TypeCatalog`

This reference describes `TypeCatalog` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-743dc37d104eee92) | Method |
| [`AcquireOperation`](#api-a0edb47e5e220cd0) | Method |
| [`Dispose`](#api-7fe13ed42b9d3490) | Method |
| [```GetSubTypesOf``1```](#api-798af98ed61c1221) | Method |
| [`GetTypeRef`](#api-2f40d69da8247e90) | Method |
| [```GetTypesImplementing``1```](#api-961f7aac8f4cacd7) | Method |
| [```GetTypesWithAttribute``1```](#api-0acb10af2ca2d177) | Method |
| [`Rebuild`](#api-7f52128bc0237850) | Method |
| [`Resolve`](#api-653c02d85ca9ed90) | Method |
| [`TryGetTypeRef`](#api-14e66f20a7755aca) | Method |
| [`TryResolve`](#api-37a9c05e270c3057) | Method |
| [`current`](#api-f37e4c5fa46765c3) | Property |
| [`isInitialized`](#api-5c407aa03e80127d) | Property |

## Type declaration

<a id="api-4f0425a0e0d434d5"></a>
<!-- api: T:Inno.Extensibility.Types.TypeCatalog 21f253f8d269368093e242ee50ecd9ce8f5eea60876e149d4db58cd14586a6b4 -->

```csharp
public sealed class Inno.Extensibility.Types.TypeCatalog : System.IDisposable
```

Owns the active type catalog and provides all type discovery and identity queries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L13).

## `#ctor`

<a id="api-743dc37d104eee92"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.ITypeCatalogSource) 579c682ea45fe907ff08b7b4c9e0a80568b1e3462f542b52ac5c904fed60ccfa -->

```csharp
public Inno.Extensibility.Types.TypeCatalog.TypeCatalog(Inno.Extensibility.Modules.ModuleHost modules, Inno.Extensibility.Types.ITypeCatalogSource source)
```

Creates a type catalog derived transactionally from one module host.

**Parameter `modules`:** The module host that owns the assembly generations visible to this catalog.

**Throws `System.ArgumentNullException`:** Thrown when `modules` is null.

**Throws `System.InvalidOperationException`:** Thrown when `modules` has already been disposed.

**Parameter `source`:** The metadata provider selected by the composition root for every contributed assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L43).

## `AcquireOperation`

<a id="api-a0edb47e5e220cd0"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.AcquireOperation(System.String) 983c6e6e3f3f545319d63cec92c225b470df1dc5aeb35d2a092e8df9819e416f -->

```csharp
public System.IDisposable Inno.Extensibility.Types.TypeCatalog.AcquireOperation(string operation)
```

Defers automatic assembly publication until a synchronous typed operation releases its current owners.

**Parameter `operation`:** The operation name used for admission diagnostics.

**Returns:** A scope held across every access to the captured generation; publication may borrow it on its own thread.

**Throws `System.InvalidOperationException`:** The catalog is inactive, another thread is publishing, or the shared generation owner is Faulted.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Generation retirement has failed while dependent resources remain owned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L77).

## `Dispose`

<a id="api-7fe13ed42b9d3490"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.Dispose ab978efc0a777aa0037a2028faebeb59b4c08bfd179b54f3951cd356ff29402b -->

```csharp
public void Inno.Extensibility.Types.TypeCatalog.Dispose()
```

Unregisters type discovery and releases all active type-registry snapshots.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Type discovery and unfinished snapshots remain owned until host restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L112).

## ```GetSubTypesOf``1```

<a id="api-798af98ed61c1221"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.GetSubTypesOf``1 6c460f392cb7cc9cc52f4512e68058a1a468a6ec990ab85efa992a58aabf35f5 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCatalog.GetSubTypesOf<T>()
```

Gets all non-abstract discovered types assignable to `T`.

**Type parameter `T`:** The required base type.

**Returns:** The matching concrete types in stable catalog order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L148).

## `GetTypeRef`

<a id="api-2f40d69da8247e90"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.GetTypeRef(System.Type) cfe4264591993009636401692118e54328b1b379c8a6c3c4d81eac4b17c028de -->

```csharp
public Inno.Extensibility.Types.TypeRef Inno.Extensibility.Types.TypeCatalog.GetTypeRef(System.Type type)
```

Gets the reference for an active CLR type.

**Returns:** Its logical and generation-local identity.

**Throws `System.ArgumentNullException`:** Thrown when `type` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the type does not belong to the active catalog.

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L188).

## ```GetTypesImplementing``1```

<a id="api-961f7aac8f4cacd7"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.GetTypesImplementing``1 a285fc4e68c5a3bbd20aaa878bbdcd7c9054b2e20557a88270aa9effbeb35530 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCatalog.GetTypesImplementing<TInterface>()
```

Gets all non-abstract discovered types implementing `TInterface`.

**Type parameter `TInterface`:** The required interface.

**Returns:** The matching concrete types in stable catalog order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L159).

## ```GetTypesWithAttribute``1```

<a id="api-0acb10af2ca2d177"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.GetTypesWithAttribute``1 d8d05c537a0ede3364e2f3013e8f36fdc224584f2aa711129a815fcde8b9bb60 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Types.TypeRef> Inno.Extensibility.Types.TypeCatalog.GetTypesWithAttribute<TAttribute>() where TAttribute : System.Attribute
```

Gets all non-abstract discovered types marked with `TAttribute`.

**Type parameter `TAttribute`:** The required attribute type.

**Returns:** The matching concrete types in stable catalog order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L170).

## `Rebuild`

<a id="api-7f52128bc0237850"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.Rebuild 2bb4c57f7c9f55c246a3599b7d31254237311cb3afcaaa063641a871f05c599c -->

```csharp
public void Inno.Extensibility.Types.TypeCatalog.Rebuild()
```

Rebuilds the assembly catalog, type snapshot, and every registered type registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L100).

## `Resolve`

<a id="api-653c02d85ca9ed90"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.Resolve(Inno.Extensibility.Types.TypeRef) 85f73f2579d1832971ee01a869c2f4a8829e6fbc1e2cff6036e8661b6044f7d1 -->

```csharp
public System.Type Inno.Extensibility.Types.TypeCatalog.Resolve(Inno.Extensibility.Types.TypeRef typeRef)
```

Resolves a logical type reference against the active immutable generation.

**Parameter `typeRef`:** The stable type reference to resolve.

**Returns:** The CLR type owned by the active generation.

**Throws `System.InvalidOperationException`:** Thrown when the reference is empty or unavailable in the active generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L243).

## `TryGetTypeRef`

<a id="api-14e66f20a7755aca"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.TryGetTypeRef(System.Type,Inno.Extensibility.Types.TypeRef@) d037246d94e81e001b98615984455c5ce5baceeccebb47610889920e9b32c520 -->

```csharp
public bool Inno.Extensibility.Types.TypeCatalog.TryGetTypeRef(System.Type type, out Inno.Extensibility.Types.TypeRef typeRef)
```

Tries to get the reference for an active CLR type.

**Parameter `type`:** The active CLR type.

**Parameter `typeRef`:** Receives its logical and generation-local identity.

**Returns:** `true` when the type belongs to the active catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L202).

## `TryResolve`

<a id="api-37a9c05e270c3057"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCatalog.TryResolve(Inno.Extensibility.Types.TypeRef,System.Type@) 01b1b6ee4ac5b206b95958792d5ead58803ec43d255cedb8fc6b776167fd0e6a -->

```csharp
public bool Inno.Extensibility.Types.TypeCatalog.TryResolve(Inno.Extensibility.Types.TypeRef typeRef, out System.Type? type)
```

Attempts to resolve a logical type reference against the active immutable generation.

**Parameter `typeRef`:** The stable type reference to resolve.

**Parameter `type`:** Receives the active CLR type when resolution succeeds.

**Returns:** `true` when the active generation contains the logical type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L219).

## `current`

<a id="api-f37e4c5fa46765c3"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCatalog.current 24051d8a2792f4c95377618605272e16c0c85c5f1a980bafc139acf0255d1c37 -->

```csharp
public Inno.Extensibility.Types.TypeCacheSnapshot Inno.Extensibility.Types.TypeCatalog.current { get; }
```

Gets the current immutable type snapshot after applying pending host assembly changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L86).

## `isInitialized`

<a id="api-5c407aa03e80127d"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCatalog.isInitialized 9eae3ff57a8c33b371469258df830b26091699914ea01b273e2b4cfd6543646c -->

```csharp
public bool Inno.Extensibility.Types.TypeCatalog.isInitialized { get; }
```

Gets whether the type catalog is registered with an initialized `Inno.Extensibility.Modules.ModuleHost`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCatalog.cs#L60).
