---
title: "ContentPackDescriptor"
description: "Reference for ContentPackDescriptor in Inno.Content."
uid: api.inno.content.aed87967c441d4fe
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `ContentPackDescriptor`

This reference describes `ContentPackDescriptor` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Content.ContentPackDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ebc1fd9b59136eb3) | Method |
| [`Equals`](#api-e161167b9c0339f4) | Method |
| [`Equals`](#api-2b2b24d746c188b2) | Method |
| [`GetHashCode`](#api-f0d6f20a15d22a1f) | Method |
| [`op_Equality`](#api-f541cba3cd3cf70c) | Method |
| [`op_Inequality`](#api-6881108dab4b68dd) | Method |
| [`ToString`](#api-eb31b9aafb1d170c) | Method |
| [`contentHash`](#api-fa459c32a2e5e657) | Property |
| [`fileName`](#api-3d823a44bf7f9ee3) | Property |

## Type declaration

<a id="api-aed87967c441d4fe"></a>
<!-- api: T:Inno.Content.ContentPackDescriptor 90b9f2b1f3459deed3553f0d8c391595568b215d856f7d7572ab869899b392d7 -->

```csharp
public sealed record Inno.Content.ContentPackDescriptor : System.IEquatable<Inno.Content.ContentPackDescriptor>
```

Identifies the complete encoded pack independently of its physical source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `#ctor`

<a id="api-ebc1fd9b59136eb3"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.#ctor(System.String,System.String) 0513f92c0a46164687c4399a528e2382b4bcf92350506459a0749532c2fb9901 -->

```csharp
public Inno.Content.ContentPackDescriptor.ContentPackDescriptor(string contentHash, string fileName)
```

Validates the complete pack identity and its single portable file name.

**Parameter `contentHash`:** The SHA-256 of the complete pack bytes.

**Parameter `fileName`:** The name `content-{uppercase SHA-256}.pack` relative to the source.

**Throws `System.ArgumentException`:** The hash or file name does not identify one current-format pack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L22).

## `Equals`

<a id="api-e161167b9c0339f4"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.Equals(Inno.Content.ContentPackDescriptor) be9ac43459df6aad26623c0941675330e3830683f6e635bf594980dd574a2615 -->

```csharp
public bool Inno.Content.ContentPackDescriptor.Equals(Inno.Content.ContentPackDescriptor? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `Equals`

<a id="api-2b2b24d746c188b2"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.Equals(System.Object) 4ee9b3dda9f9433236eebdf6f6c77d98569321586e52ae44c24cd3fd8e730463 -->

```csharp
public override bool Inno.Content.ContentPackDescriptor.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `GetHashCode`

<a id="api-f0d6f20a15d22a1f"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.GetHashCode a374407c638ce5d9714c40d1684d0637b2f9f4372119326063cd27327f9497e5 -->

```csharp
public override int Inno.Content.ContentPackDescriptor.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `op_Equality`

<a id="api-f541cba3cd3cf70c"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.op_Equality(Inno.Content.ContentPackDescriptor,Inno.Content.ContentPackDescriptor) 83f92eb91de424a7c11948ad5db5ccc616ca1637e7aff8946890785e8276f62c -->

```csharp
public static bool Inno.Content.ContentPackDescriptor.operator ==(Inno.Content.ContentPackDescriptor? left, Inno.Content.ContentPackDescriptor? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `op_Inequality`

<a id="api-6881108dab4b68dd"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.op_Inequality(Inno.Content.ContentPackDescriptor,Inno.Content.ContentPackDescriptor) 41f98f7825c3e63e9918bb1b0093cc50f11b3e35fea456d5fb086418ed891ebe -->

```csharp
public static bool Inno.Content.ContentPackDescriptor.operator !=(Inno.Content.ContentPackDescriptor? left, Inno.Content.ContentPackDescriptor? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `ToString`

<a id="api-eb31b9aafb1d170c"></a>
<!-- api: M:Inno.Content.ContentPackDescriptor.ToString 08e509efa904976250b08730f1e1f8a88801dc117d15a6db0ba764fce601fe00 -->

```csharp
public override string Inno.Content.ContentPackDescriptor.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L8).

## `contentHash`

<a id="api-fa459c32a2e5e657"></a>
<!-- api: P:Inno.Content.ContentPackDescriptor.contentHash e6243a13ca9ef1ea9fd638f7a7b43ac41a8734135e1b5e6e251e7d088accb864 -->

```csharp
public string Inno.Content.ContentPackDescriptor.contentHash { get; }
```

Gets the SHA-256 of all encoded bytes, including the index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L35).

## `fileName`

<a id="api-3d823a44bf7f9ee3"></a>
<!-- api: P:Inno.Content.ContentPackDescriptor.fileName f3baf9cfad39db493eec90936e5650df6754380ac05f2466ffac4d5f6dab1fa3 -->

```csharp
public string Inno.Content.ContentPackDescriptor.fileName { get; }
```

Gets the validated single file name used by the selected content source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/ContentPackDescriptor.cs#L40).
