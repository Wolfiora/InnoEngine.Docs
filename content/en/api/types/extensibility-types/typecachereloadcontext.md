---
title: "TypeCacheReloadContext"
description: "Reference for TypeCacheReloadContext in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.93f91626904eb114
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `TypeCacheReloadContext`

This reference describes `TypeCacheReloadContext` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsRetired`](#api-970d36570baaa10a) | Method |
| [`TryResolveReplacement`](#api-80a4e94c377477c2) | Method |
| [`candidate`](#api-adfac9a55997b588) | Property |
| [`previous`](#api-f7910fb00a5d5b26) | Property |

## Type declaration

<a id="api-93f91626904eb114"></a>
<!-- api: T:Inno.Extensibility.Types.TypeCacheReloadContext cb02f0fe43d87f722f2f489ea299e8103cba71f6de44a4968ab5dbb4628c516e -->

```csharp
public sealed class Inno.Extensibility.Types.TypeCacheReloadContext
```

Provides the previous and candidate type catalogs during an assembly reload transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheReloadContext.cs#L8).

## `IsRetired`

<a id="api-970d36570baaa10a"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheReloadContext.IsRetired(Inno.Extensibility.Types.TypeRef) 36e567dd8f52e2181495ff4cea22b0e5af69a778861a499d4892973fbdd70bd5 -->

```csharp
public bool Inno.Extensibility.Types.TypeCacheReloadContext.IsRetired(Inno.Extensibility.Types.TypeRef typeRef)
```

Determines whether a logical type belongs to the retiring generation.

**Parameter `typeRef`:** The logical type to inspect.

**Returns:** `true` when the candidate replaces or removes the type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheReloadContext.cs#L40).

## `TryResolveReplacement`

<a id="api-80a4e94c377477c2"></a>
<!-- api: M:Inno.Extensibility.Types.TypeCacheReloadContext.TryResolveReplacement(Inno.Extensibility.Types.TypeRef,Inno.Extensibility.Types.TypeRef@) 9dd59a2538dbb22dc08224f98f002dd7bb36b77d31f9456d4f1cc9bbb9527457 -->

```csharp
public bool Inno.Extensibility.Types.TypeCacheReloadContext.TryResolveReplacement(Inno.Extensibility.Types.TypeRef previousType, out Inno.Extensibility.Types.TypeRef replacement)
```

Tries to find the candidate type that preserves a retiring type's stable identity.

**Parameter `previousType`:** A type reference from the previous generation.

**Parameter `replacement`:** Receives its candidate replacement when found.

**Returns:** `true` when a distinct replacement exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheReloadContext.cs#L59).

## `candidate`

<a id="api-adfac9a55997b588"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCacheReloadContext.candidate 2519e00502b2b559d109c830ba6d92a775836c57f8ff2ae939d85d582e0f4688 -->

```csharp
public Inno.Extensibility.Types.TypeCacheSnapshot Inno.Extensibility.Types.TypeCacheReloadContext.candidate { get; }
```

Gets the validated candidate type snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheReloadContext.cs#L29).

## `previous`

<a id="api-f7910fb00a5d5b26"></a>
<!-- api: P:Inno.Extensibility.Types.TypeCacheReloadContext.previous 77c615ee54e8ecc4cca93b563fd5a5f54ac2a343f3ebcc542a60fffc7d307c00 -->

```csharp
public Inno.Extensibility.Types.TypeCacheSnapshot Inno.Extensibility.Types.TypeCacheReloadContext.previous { get; }
```

Gets the active type snapshot from before activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/TypeCacheReloadContext.cs#L24).
