---
title: "AssetArtifactKey"
description: "Reference for AssetArtifactKey in Inno.Assets."
uid: api.inno.assets.fe5cc4e99d598cc3
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetArtifactKey`

This reference describes `AssetArtifactKey` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetArtifactKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e1ba5872e21f6082) | Method |
| [`Equals`](#api-351260a331f0fb99) | Method |
| [`Equals`](#api-1fa3f24fb64301d8) | Method |
| [`GetHashCode`](#api-e83f3e8603620d59) | Method |
| [`op_Equality`](#api-4f90ccc31919e78f) | Method |
| [`op_Inequality`](#api-5590d16970ab1d2b) | Method |
| [`ToString`](#api-a89ab6f97e8aee25) | Method |
| [`empty`](#api-54e4875f36e9ffef) | Property |
| [`isEmpty`](#api-4ceda1d86fbb8f14) | Property |
| [`value`](#api-aa52a0de9c914085) | Property |

## Type declaration

<a id="api-fe5cc4e99d598cc3"></a>
<!-- api: T:Inno.Assets.AssetArtifactKey f878c7fa0cb2dbbbe747779b03ede47565921fcf347c9ff8887b60a8ee7020ea -->

```csharp
public readonly struct Inno.Assets.AssetArtifactKey : System.IEquatable<Inno.Assets.AssetArtifactKey>
```

Identifies one immutable content-addressed artifact bundle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L8).

## `#ctor`

<a id="api-e1ba5872e21f6082"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.#ctor(System.String) 87394484e00919302b85ed5cb058fc112db2a8891cefae8d624d7f58be992a87 -->

```csharp
public Inno.Assets.AssetArtifactKey.AssetArtifactKey(string value)
```

Creates an artifact key from a hexadecimal content fingerprint.

**Parameter `value`:** The hexadecimal content fingerprint.

**Throws `System.ArgumentException`:** A non-empty value is not exactly 64 hexadecimal digits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L22).

## `Equals`

<a id="api-351260a331f0fb99"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.Equals(Inno.Assets.AssetArtifactKey) 0f4962c1f671b9a72803c3169d8c22d5848f7ee3f58c1f89bd2606c7c9d1b2bc -->

```csharp
public bool Inno.Assets.AssetArtifactKey.Equals(Inno.Assets.AssetArtifactKey other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L62).

## `Equals`

<a id="api-1fa3f24fb64301d8"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.Equals(System.Object) cb46d92d4d0552368d5399102398c3a81747c470dfe0e40a3deb6eba3344c8ba -->

```csharp
public override bool Inno.Assets.AssetArtifactKey.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L73).

## `GetHashCode`

<a id="api-e83f3e8603620d59"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.GetHashCode dc593257341756743706f7630027a3ec5d6d63327f67fbb9616230cfd83d8e79 -->

```csharp
public override int Inno.Assets.AssetArtifactKey.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L81).

## `op_Equality`

<a id="api-4f90ccc31919e78f"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.op_Equality(Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey) 1c013e9e4859aed57834d04d200cc0fc7a40dc190a2f097fd7d0626dcfa1aaa2 -->

```csharp
public static bool Inno.Assets.AssetArtifactKey.operator ==(Inno.Assets.AssetArtifactKey left, Inno.Assets.AssetArtifactKey right)
```

Determines whether two artifact keys are equal.

**Parameter `left`:** The first artifact key to compare.

**Parameter `right`:** The second artifact key to compare.

**Returns:** `true` when both keys contain the same normalized fingerprint; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L103).

## `op_Inequality`

<a id="api-5590d16970ab1d2b"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.op_Inequality(Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey) fa64d20fe2efb9d9992aa94ecc7229c920072dada561c0360a5487d99e284602 -->

```csharp
public static bool Inno.Assets.AssetArtifactKey.operator !=(Inno.Assets.AssetArtifactKey left, Inno.Assets.AssetArtifactKey right)
```

Determines whether two artifact keys differ.

**Parameter `left`:** The first artifact key to compare.

**Parameter `right`:** The second artifact key to compare.

**Returns:** `true` when the normalized fingerprints differ; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L120).

## `ToString`

<a id="api-a89ab6f97e8aee25"></a>
<!-- api: M:Inno.Assets.AssetArtifactKey.ToString 3bd50a27e50f505f6745c5417f96180631d90f3fbf76b8ba13458e5af2600400 -->

```csharp
public override string Inno.Assets.AssetArtifactKey.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L89).

## `empty`

<a id="api-54e4875f36e9ffef"></a>
<!-- api: P:Inno.Assets.AssetArtifactKey.empty f8bb2dc6c91d13d8e122bc1297d8341cf382ec5affb0ea1d599388caae6685c8 -->

```csharp
public static Inno.Assets.AssetArtifactKey Inno.Assets.AssetArtifactKey.empty { get; }
```

Gets an empty artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L41).

## `isEmpty`

<a id="api-4ceda1d86fbb8f14"></a>
<!-- api: P:Inno.Assets.AssetArtifactKey.isEmpty 1aea23c42c5b48ad17fc3491315ecdee9b6a6bc1273e5cccaf2cd855e584a26b -->

```csharp
public bool Inno.Assets.AssetArtifactKey.isEmpty { get; }
```

Gets whether the key is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L51).

## `value`

<a id="api-aa52a0de9c914085"></a>
<!-- api: P:Inno.Assets.AssetArtifactKey.value 9469930a3855eb9df166a69169fa0cc914a410d8897405aa4eaa5f12ffc95897 -->

```csharp
public string Inno.Assets.AssetArtifactKey.value { get; }
```

Gets the normalized SHA-256 hexadecimal fingerprint, or an empty value for an unassigned key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L46).
