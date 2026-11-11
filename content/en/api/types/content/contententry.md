---
title: "ContentEntry"
description: "Reference for ContentEntry in Inno.Content."
uid: api.inno.content.d7aeb77ac09608e2
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentEntry`

This reference describes `ContentEntry` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Content.ContentEntry>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-efa69590cc799319) | Method |
| [`Equals`](#api-0b73fc4466797440) | Method |
| [`Equals`](#api-f802a4dc83ad7d3a) | Method |
| [`GetHashCode`](#api-e534d0722169859a) | Method |
| [`op_Equality`](#api-32ae1e71b440c5d6) | Method |
| [`op_Inequality`](#api-02c9f1dd4535a869) | Method |
| [`ToString`](#api-f6192812f6cce0bf) | Method |
| [`contentHash`](#api-8a1c1ce588142e94) | Property |
| [`key`](#api-627530ca8b0defde) | Property |
| [`length`](#api-ee999adab93c2814) | Property |

## Type declaration

<a id="api-d7aeb77ac09608e2"></a>
<!-- api: T:Inno.Content.ContentEntry 10a54653ba16f56f75d410b039b542106e21ec1dcee9da49a9fc41931f41e691 -->

```csharp
public sealed record Inno.Content.ContentEntry : System.IEquatable<Inno.Content.ContentEntry>
```

Describes the exact uncompressed bytes of one immutable content entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `#ctor`

<a id="api-efa69590cc799319"></a>
<!-- api: M:Inno.Content.ContentEntry.#ctor(Inno.Content.ContentKey,System.Int64,System.String) f0329ebb807dbd50ffe2748d3c73e817d6addd4a729295c2ed6e58504e633e39 -->

```csharp
public Inno.Content.ContentEntry.ContentEntry(Inno.Content.ContentKey key, long length, string contentHash)
```

Freezes a portable key, byte length, and SHA-256 identity.

**Parameter `key`:** The assigned logical content key.

**Parameter `length`:** The exact nonnegative decoded byte count.

**Parameter `contentHash`:** The hexadecimal SHA-256 of decoded bytes, normalized to uppercase.

**Throws `System.ArgumentException`:** The key is unassigned or the hash is malformed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L25).

## `Equals`

<a id="api-0b73fc4466797440"></a>
<!-- api: M:Inno.Content.ContentEntry.Equals(Inno.Content.ContentEntry) b39a605a45a7a76700dea96de75164518c3f3218fac54fa1a1e5670259eb6c7b -->

```csharp
public bool Inno.Content.ContentEntry.Equals(Inno.Content.ContentEntry? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `Equals`

<a id="api-f802a4dc83ad7d3a"></a>
<!-- api: M:Inno.Content.ContentEntry.Equals(System.Object) 2e54e60a13a764fd257de3e5f8196339f9874ac1407b1f41c159ded4b088a750 -->

```csharp
public override bool Inno.Content.ContentEntry.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `GetHashCode`

<a id="api-e534d0722169859a"></a>
<!-- api: M:Inno.Content.ContentEntry.GetHashCode 73aa87e65f90064ac18ed66055ac77b9891149f86aaadf0c86926a617a0faafc -->

```csharp
public override int Inno.Content.ContentEntry.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `op_Equality`

<a id="api-32ae1e71b440c5d6"></a>
<!-- api: M:Inno.Content.ContentEntry.op_Equality(Inno.Content.ContentEntry,Inno.Content.ContentEntry) c54dcf1a3f491b6039e70e4be47db8fa4c9dc046b3b2b20698a3626fe968db5d -->

```csharp
public static bool Inno.Content.ContentEntry.operator ==(Inno.Content.ContentEntry? left, Inno.Content.ContentEntry? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `op_Inequality`

<a id="api-02c9f1dd4535a869"></a>
<!-- api: M:Inno.Content.ContentEntry.op_Inequality(Inno.Content.ContentEntry,Inno.Content.ContentEntry) 8438864278cfc4cedf34dca2cec0ee0aa4585fbb5b0d5d87b1ecb7f7cddf1c15 -->

```csharp
public static bool Inno.Content.ContentEntry.operator !=(Inno.Content.ContentEntry? left, Inno.Content.ContentEntry? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `ToString`

<a id="api-f6192812f6cce0bf"></a>
<!-- api: M:Inno.Content.ContentEntry.ToString 000f7ac910cbf073a009d00a5dcd436d27ead4202301c8ac3c597d2113bb65a7 -->

```csharp
public override string Inno.Content.ContentEntry.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L8).

## `contentHash`

<a id="api-8a1c1ce588142e94"></a>
<!-- api: P:Inno.Content.ContentEntry.contentHash f1478211b51504c4d61d04f3d5ef6a6ebfa2c6ec9d0f17fe0277b49acc6f8f49 -->

```csharp
public string Inno.Content.ContentEntry.contentHash { get; }
```

Gets the uppercase SHA-256 of decoded bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L51).

## `key`

<a id="api-627530ca8b0defde"></a>
<!-- api: P:Inno.Content.ContentEntry.key 0a186cfce392465084f45a3f13e859c3836f79c32feb0cbde185236ee68623c9 -->

```csharp
public Inno.Content.ContentKey Inno.Content.ContentEntry.key { get; }
```

Gets the portable entry identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L41).

## `length`

<a id="api-ee999adab93c2814"></a>
<!-- api: P:Inno.Content.ContentEntry.length e081f4b803fda884c5eb14c18ca5dbeaa47646f2330953dc7eaa415a1efa8aab -->

```csharp
public long Inno.Content.ContentEntry.length { get; }
```

Gets the exact decoded byte count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentEntry.cs#L46).
