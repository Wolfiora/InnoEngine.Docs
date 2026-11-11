---
title: "TypeRef"
description: "Reference for TypeRef in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.9b8925da12eb170b
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `TypeRef`

This reference describes `TypeRef` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Extensibility.Types.TypeRef>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f384573974f6217) | Method |
| [`Equals`](#api-329835b5642aea94) | Method |
| [`Equals`](#api-83834b7ef29b552b) | Method |
| [`GetHashCode`](#api-cfd2afd9cf297e91) | Method |
| [`IsValid`](#api-053a49db130e2e5b) | Method |
| [`op_Equality`](#api-0ed94e1a432d6672) | Method |
| [`op_Inequality`](#api-923164c9e9d833f9) | Method |
| [`Resolve`](#api-bf917aa075915655) | Method |
| [`Resolve`](#api-bbf30a5d68159544) | Method |
| [`ToString`](#api-1d5201967ee655bc) | Method |
| [`runtimeId`](#api-a33a2d2c7a746a61) | Property |
| [`stableId`](#api-795cad1418ebe6dc) | Property |

## Type declaration

<a id="api-9b8925da12eb170b"></a>
<!-- api: T:Inno.Extensibility.Types.TypeRef 6a5060e7381654d6108c9fc0cf8e25edce7980da63b9a24863ad516bd2a1b349 -->

```csharp
public readonly struct Inno.Extensibility.Types.TypeRef : System.IEquatable<Inno.Extensibility.Types.TypeRef>
```

Identifies one logical runtime type without retaining its assembly or load context.

**Constraints:** Equality and persistence use `Inno.Extensibility.Types.TypeRef.stableId`. The `Inno.Extensibility.Types.TypeRef.runtimeId` is only a
generation-local resolution hint and can become stale after an assembly reload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L12).

## `#ctor`

<a id="api-3f384573974f6217"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.#ctor(System.Guid) f693555fbf120dee3ecc6d6e67a19f010f468e50111d70bcd4f702ffc9238910 -->

```csharp
public Inno.Extensibility.Types.TypeRef.TypeRef(System.Guid stableId)
```

Creates an unresolved type reference from its persistent identity.

**Parameter `stableId`:** The persistent type identity, or an empty value for an invalid reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L20).

## `Equals`

<a id="api-329835b5642aea94"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.Equals(Inno.Extensibility.Types.TypeRef) 366a1ea75e61c810bdefb1452c3e01c4d79d4cb76827f69cb2cded1c85e6e65b -->

```csharp
public bool Inno.Extensibility.Types.TypeRef.Equals(Inno.Extensibility.Types.TypeRef other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L117).

## `Equals`

<a id="api-83834b7ef29b552b"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.Equals(System.Object) f12155220933f0e3684a9a8490092416e63900c6862604715fb33791bb2c0dec -->

```csharp
public override bool Inno.Extensibility.Types.TypeRef.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L128).

## `GetHashCode`

<a id="api-cfd2afd9cf297e91"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.GetHashCode d9f9dcebfde036fe350c61d3cbe10a1656b899129b5160fe8c9e6005966a571f -->

```csharp
public override int Inno.Extensibility.Types.TypeRef.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L136).

## `IsValid`

<a id="api-053a49db130e2e5b"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.IsValid(Inno.Extensibility.Types.TypeCatalog) 36a00c85acad266d0b97320a1bfa748bd11bfa165518ccf35de70c40914d749e -->

```csharp
public bool Inno.Extensibility.Types.TypeRef.IsValid(Inno.Extensibility.Types.TypeCatalog catalog)
```

Determines whether one type catalog currently resolves this reference.

**Parameter `catalog`:** The catalog whose active immutable generation should be queried.

**Returns:** `true` when the reference is non-empty and currently resolvable.

**Throws `System.ArgumentNullException`:** Thrown when `catalog` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L58).

## `op_Equality`

<a id="api-0ed94e1a432d6672"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.op_Equality(Inno.Extensibility.Types.TypeRef,Inno.Extensibility.Types.TypeRef) 5ac11be34a65468500b6e6fed97ac1fc9717f3b9774e843f6592b2640a6d87aa -->

```csharp
public static bool Inno.Extensibility.Types.TypeRef.operator ==(Inno.Extensibility.Types.TypeRef left, Inno.Extensibility.Types.TypeRef right)
```

Determines whether two references identify the same logical type.

**Parameter `left`:** The first reference.

**Parameter `right`:** The second reference.

**Returns:** `true` when both references have the same stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L158).

## `op_Inequality`

<a id="api-923164c9e9d833f9"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.op_Inequality(Inno.Extensibility.Types.TypeRef,Inno.Extensibility.Types.TypeRef) d36997f61963be07dfeebc8a46dfaf6df6d56178694e8b9677296b82165e7d57 -->

```csharp
public static bool Inno.Extensibility.Types.TypeRef.operator !=(Inno.Extensibility.Types.TypeRef left, Inno.Extensibility.Types.TypeRef right)
```

Determines whether two references identify different logical types.

**Parameter `left`:** The first reference.

**Parameter `right`:** The second reference.

**Returns:** `true` when the references have different stable identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L175).

## `Resolve`

<a id="api-bf917aa075915655"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCacheSnapshot) c58b7f829e300eef5ddfb87490401b4ddd279987948f6bca612cab5cca5555a5 -->

```csharp
public System.Type Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCacheSnapshot snapshot)
```

Resolves this reference against a specific immutable type-cache snapshot.

**Parameter `snapshot`:** The snapshot that defines the required assembly generation.

**Returns:** The CLR type represented by this reference in `snapshot`.

**Throws `System.ArgumentNullException`:** Thrown when `snapshot` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the reference is empty or the logical type does not exist in the snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L100).

## `Resolve`

<a id="api-bbf30a5d68159544"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCatalog) e956277b7d3fe06f9f8831c6ef32408aef26eaf8e072ff18c338b4cb962e10f0 -->

```csharp
public System.Type Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCatalog catalog)
```

Resolves this reference against one catalog's active immutable generation.

**Parameter `catalog`:** The catalog that owns the required type generation.

**Returns:** The active CLR type represented by this reference.

**Throws `System.InvalidOperationException`:** Thrown when the reference is empty, the type cache is unavailable, or the logical type is not loaded.

**Throws `System.ArgumentNullException`:** Thrown when `catalog` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L79).

## `ToString`

<a id="api-1d5201967ee655bc"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRef.ToString 8e837d999799dde53a02bdaaaa94932bc81f90dc3949bc9897ae1d160fd72a62 -->

```csharp
public override string Inno.Extensibility.Types.TypeRef.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L144).

## `runtimeId`

<a id="api-a33a2d2c7a746a61"></a>
<!-- api: P:Inno.Extensibility.Types.TypeRef.runtimeId 9e289d5ea4ff40fe98eb098fbe114bf5cceaad9c81d55648f1c5bc495f72fbe6 -->

```csharp
public int Inno.Extensibility.Types.TypeRef.runtimeId { get; }
```

Gets the generation-local lookup hint captured when this value was created.

**Constraints:** This value must not be persisted or used as logical type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L44).

## `stableId`

<a id="api-795cad1418ebe6dc"></a>
<!-- api: P:Inno.Extensibility.Types.TypeRef.stableId 63afb09f04cba9dc8ff7e035dce09317f258a9ed734af6f1a0f8e0b34685f2a0 -->

```csharp
public System.Guid Inno.Extensibility.Types.TypeRef.stableId { get; }
```

Gets the persistent identity used across assembly generations and process launches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeRef.cs#L36).
