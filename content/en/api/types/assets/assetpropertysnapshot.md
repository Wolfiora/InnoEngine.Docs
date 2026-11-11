---
title: "AssetPropertySnapshot"
description: "Reference for AssetPropertySnapshot in Inno.Assets."
uid: api.inno.assets.9bda3cc3f893ae2f
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetPropertySnapshot`

This reference describes `AssetPropertySnapshot` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fa8426a6b257ad4d) | Method |
| [`data`](#api-7350cada5308453d) | Property |
| [`dependencies`](#api-2450970d1c993873) | Property |
| [`stableTypeId`](#api-14dbca83f3ebc991) | Property |

## Type declaration

<a id="api-9bda3cc3f893ae2f"></a>
<!-- api: T:Inno.Assets.AssetPropertySnapshot a585a42e9ce88cccf14de6f85f139da1c3bf1a31a7c890476f0e66bff1d9f939 -->

```csharp
public sealed class Inno.Assets.AssetPropertySnapshot
```

Contains native properties and automatically captured asset dependencies without retaining their owner or typed object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L10).

## `#ctor`

<a id="api-fa8426a6b257ad4d"></a>
<!-- api: M:Inno.Assets.AssetPropertySnapshot.#ctor(System.Guid,System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{Inno.Assets.AssetDependency}) 4dd743cec1c0c8e4a0ef76f05f92c31974a46d01016a890c1641fdb563b75537 -->

```csharp
public Inno.Assets.AssetPropertySnapshot.AssetPropertySnapshot(System.Guid stableTypeId, System.ReadOnlySpan<byte> data, System.Collections.Generic.IEnumerable<Inno.Assets.AssetDependency> dependencies)
```

Freezes a complete owner-produced property value.

**Parameter `stableTypeId`:** Persistent identity of the exact serialized settings type.

**Parameter `data`:** Native property payload, copied before returning.

**Parameter `dependencies`:** Direct dependencies collected during the same serialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L25).

## `data`

<a id="api-7350cada5308453d"></a>
<!-- api: P:Inno.Assets.AssetPropertySnapshot.data b628d53f1a4b65ea7c1be743a0f6cb86236e52e1c7affec4b9cea4e7f1e518ef -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Assets.AssetPropertySnapshot.data { get; }
```

Gets the frozen native property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L44).

## `dependencies`

<a id="api-2450970d1c993873"></a>
<!-- api: P:Inno.Assets.AssetPropertySnapshot.dependencies dfafdc2c8b68e593f210abaa9a9093fc35211e0da0af38df5fc20cc9b7e2f5a8 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> Inno.Assets.AssetPropertySnapshot.dependencies { get; }
```

Gets the frozen direct dependency declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L48).

## `stableTypeId`

<a id="api-14dbca83f3ebc991"></a>
<!-- api: P:Inno.Assets.AssetPropertySnapshot.stableTypeId ea78db95b31ff42e636f36baf7eeaa7458f91eced4215fc9ff83147b0e986ed0 -->

```csharp
public System.Guid Inno.Assets.AssetPropertySnapshot.stableTypeId { get; }
```

Gets the persistent settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/AssetPropertySnapshot.cs#L40).
