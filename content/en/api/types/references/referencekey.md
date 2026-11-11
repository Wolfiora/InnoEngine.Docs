---
title: "ReferenceKey"
description: "Reference for ReferenceKey in Inno.References."
uid: api.inno.references.15dcdec238303654
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `ReferenceKey`

This reference describes `ReferenceKey` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.References.ReferenceKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a1e5a44099c19f6) | Method |
| [`Equals`](#api-c8ad2136ac85ab22) | Method |
| [`Equals`](#api-0bec50fc049ca2ce) | Method |
| [`GetHashCode`](#api-84e04252a7168ca5) | Method |
| [`op_Equality`](#api-e52aa886fecb1379) | Method |
| [`op_Inequality`](#api-5ceec4608814ab52) | Method |
| [`ToString`](#api-106e9fc3ab8e4fe7) | Method |
| [`ownerPersistentId`](#api-223388bdb65271ea) | Property |
| [`path`](#api-d9c14a5e4f524ad5) | Property |

## Type declaration

<a id="api-15dcdec238303654"></a>
<!-- api: T:Inno.References.ReferenceKey b9bc5b46a022dd6a093bd18edc35f0c6e4f1ca2c00756ca13c4337e797c5e194 -->

```csharp
public readonly struct Inno.References.ReferenceKey : System.IEquatable<Inno.References.ReferenceKey>
```

Identifies one persistent reference slot owned by a logical object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L8).

## `#ctor`

<a id="api-2a1e5a44099c19f6"></a>
<!-- api: M:Inno.References.ReferenceKey.#ctor(System.Guid,System.String) 16828d41a4cfd6eda09fe017096f57f44c526bcc3c799fb95171590196fb6888 -->

```csharp
public Inno.References.ReferenceKey.ReferenceKey(System.Guid ownerPersistentId, string path)
```

Creates a key for one reference slot.

**Parameter `ownerPersistentId`:** The persistent identity of the object that owns the slot.

**Parameter `path`:** The stable property or structural path inside the owner.

**Throws `System.ArgumentException`:** Thrown when the owner identity or path is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L22).

## `Equals`

<a id="api-c8ad2136ac85ab22"></a>
<!-- api: M:Inno.References.ReferenceKey.Equals(Inno.References.ReferenceKey) d9c06b6f9706e8758e757a08cf713cf91601ad2c0323447b58fbdb7ee75aa28c -->

```csharp
public bool Inno.References.ReferenceKey.Equals(Inno.References.ReferenceKey other)
```

Determines whether two values identify the same owner slot.

**Parameter `other`:** The key to compare with this value.

**Returns:** `true` when the owner identity and path are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L53).

## `Equals`

<a id="api-0bec50fc049ca2ce"></a>
<!-- api: M:Inno.References.ReferenceKey.Equals(System.Object) 2cd8c9a32e05f93789a546f3fd5e60f59d7528eb9bed9425bf512a6381c2404a -->

```csharp
public override bool Inno.References.ReferenceKey.Equals(object? obj)
```

Determines whether an object identifies the same owner slot.

**Parameter `obj`:** The object to compare with this value.

**Returns:** `true` when the object is an equal key; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L65).

## `GetHashCode`

<a id="api-84e04252a7168ca5"></a>
<!-- api: M:Inno.References.ReferenceKey.GetHashCode 411d325ad74dcf3840a9808021be49978e75b180b0f3659ab88872f6ec8445f9 -->

```csharp
public override int Inno.References.ReferenceKey.GetHashCode()
```

Computes a hash code from the owner identity and stable path.

**Returns:** A hash code consistent with reference-key equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L73).

## `op_Equality`

<a id="api-e52aa886fecb1379"></a>
<!-- api: M:Inno.References.ReferenceKey.op_Equality(Inno.References.ReferenceKey,Inno.References.ReferenceKey) 63c6886954e3fe26eb40a618c507109f017066451f809d91cb544d363c486fe8 -->

```csharp
public static bool Inno.References.ReferenceKey.operator ==(Inno.References.ReferenceKey left, Inno.References.ReferenceKey right)
```

Determines whether two reference keys are equal.

**Parameter `left`:** The first key.

**Parameter `right`:** The second key.

**Returns:** `true` when the keys are equal; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L95).

## `op_Inequality`

<a id="api-5ceec4608814ab52"></a>
<!-- api: M:Inno.References.ReferenceKey.op_Inequality(Inno.References.ReferenceKey,Inno.References.ReferenceKey) 63e18091c35d1c6959c412cabb723094adbc3ee968626ca87f4c9db3e0d937df -->

```csharp
public static bool Inno.References.ReferenceKey.operator !=(Inno.References.ReferenceKey left, Inno.References.ReferenceKey right)
```

Determines whether two reference keys are different.

**Parameter `left`:** The first key.

**Parameter `right`:** The second key.

**Returns:** `true` when the keys are different; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L112).

## `ToString`

<a id="api-106e9fc3ab8e4fe7"></a>
<!-- api: M:Inno.References.ReferenceKey.ToString dbeaa998c2bb6ed22cd8fbf2e4a01df585f4dc1118ae76f83d8ff978c2348238 -->

```csharp
public override string Inno.References.ReferenceKey.ToString()
```

Formats this slot identity for diagnostics.

**Returns:** The owner identity followed by the stable slot path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L81).

## `ownerPersistentId`

<a id="api-223388bdb65271ea"></a>
<!-- api: P:Inno.References.ReferenceKey.ownerPersistentId 7e123ca88779f32b7170a31cece700d7920d6a86ecc67e934f734fd66db4abed -->

```csharp
public System.Guid Inno.References.ReferenceKey.ownerPersistentId { get; }
```

Gets the persistent identity of the object that owns this reference slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L37).

## `path`

<a id="api-d9c14a5e4f524ad5"></a>
<!-- api: P:Inno.References.ReferenceKey.path bc6f7b1be7d64acef88e2c81a58a59e8c954f63c2bb6f52b1dd2832321480b8b -->

```csharp
public string Inno.References.ReferenceKey.path { get; }
```

Gets the stable property or structural path inside the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/ReferenceKey.cs#L42).
