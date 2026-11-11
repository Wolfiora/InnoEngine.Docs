---
title: "ContentKey"
description: "Reference for ContentKey in Inno.Content."
uid: api.inno.content.e2a8347d1bec4d8a
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentKey`

This reference describes `ContentKey` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Content.ContentKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3bebb0de27d03c24) | Method |
| [`Equals`](#api-10a3386a12a3991f) | Method |
| [`Equals`](#api-a9b5263e2b2f9817) | Method |
| [`GetHashCode`](#api-24a69277d12f716c) | Method |
| [`op_Equality`](#api-5c59f87ab4f8a113) | Method |
| [`op_Inequality`](#api-89ac5d29dfe3f13f) | Method |
| [`ToString`](#api-684e70b1ea6ff9f9) | Method |
| [`value`](#api-2af027371085ee05) | Property |

## Type declaration

<a id="api-e2a8347d1bec4d8a"></a>
<!-- api: T:Inno.Content.ContentKey b5281256626517c46582303ba312381c415b2fadb59273481e36e0063e37b16f -->

```csharp
public readonly record struct Inno.Content.ContentKey : System.IEquatable<Inno.Content.ContentKey>
```

Identifies one content entry with case-sensitive, portable, slash-separated segments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `#ctor`

<a id="api-3bebb0de27d03c24"></a>
<!-- api: M:Inno.Content.ContentKey.#ctor(System.String) 2d3f72b384910e3050f3b62e280b4621854f8f41318c40e2760db8984d87fee0 -->

```csharp
public Inno.Content.ContentKey.ContentKey(string value)
```

Validates a logical key without interpreting it as a host filesystem path.

**Parameter `value`:** A nonempty relative key with no traversal, ambiguous segments, or platform-reserved names.

**Throws `System.ArgumentException`:** The key cannot be represented consistently by supported content sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L19).

## `Equals`

<a id="api-10a3386a12a3991f"></a>
<!-- api: M:Inno.Content.ContentKey.Equals(Inno.Content.ContentKey) b084810f2092690a9c0c1b800ade3bd8b9ca4f94e78fb94a69368f8876b7d565 -->

```csharp
public bool Inno.Content.ContentKey.Equals(Inno.Content.ContentKey other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `Equals`

<a id="api-a9b5263e2b2f9817"></a>
<!-- api: M:Inno.Content.ContentKey.Equals(System.Object) e2378172afb16577bee517b064c7338f416405e4cccec14d8ad9ba8d12131bb2 -->

```csharp
public override bool Inno.Content.ContentKey.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `GetHashCode`

<a id="api-24a69277d12f716c"></a>
<!-- api: M:Inno.Content.ContentKey.GetHashCode e318a298632687dbb4c3a2283776f38ea737bce277a13eeda557ce1f7a2e322f -->

```csharp
public override int Inno.Content.ContentKey.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `op_Equality`

<a id="api-5c59f87ab4f8a113"></a>
<!-- api: M:Inno.Content.ContentKey.op_Equality(Inno.Content.ContentKey,Inno.Content.ContentKey) 330bda2664a1224ef08d5a12b35ac7f8f655022b2d952c59705b20ca4488cac5 -->

```csharp
public static bool Inno.Content.ContentKey.operator ==(Inno.Content.ContentKey left, Inno.Content.ContentKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `op_Inequality`

<a id="api-89ac5d29dfe3f13f"></a>
<!-- api: M:Inno.Content.ContentKey.op_Inequality(Inno.Content.ContentKey,Inno.Content.ContentKey) 73a9d60129a03d66e678282df1df1a4fd25777ee46e16c1483a3691d5641d173 -->

```csharp
public static bool Inno.Content.ContentKey.operator !=(Inno.Content.ContentKey left, Inno.Content.ContentKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L8).

## `ToString`

<a id="api-684e70b1ea6ff9f9"></a>
<!-- api: M:Inno.Content.ContentKey.ToString 8d21587b8dabd04cd3084261abf82b64bc884bb83534a63f6f8c4146dbda0334 -->

```csharp
public override string Inno.Content.ContentKey.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L42).

## `value`

<a id="api-2af027371085ee05"></a>
<!-- api: P:Inno.Content.ContentKey.value b420072ed712b457db56de043afa7dfcd96b744ad03e84ded613b55f116f13a1 -->

```csharp
public string? Inno.Content.ContentKey.value { get; }
```

Gets the exact logical key; a default value is unassigned and cannot be read from a store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentKey.cs#L39).
