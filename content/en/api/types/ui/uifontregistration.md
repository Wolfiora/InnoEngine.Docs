---
title: "UiFontRegistration"
description: "Reference for UiFontRegistration in Inno.UI."
uid: api.inno.ui.e196be1e59e1d740
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiFontRegistration`

This reference describes `UiFontRegistration` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiFontRegistration>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-86b01fdbb32d83bd) | Method |
| [`Equals`](#api-bca13c3db39a4fc2) | Method |
| [`Equals`](#api-cf8d1ae46b0992cf) | Method |
| [`GetHashCode`](#api-1ca598f0a05fed79) | Method |
| [`op_Equality`](#api-a6f6374898413e55) | Method |
| [`op_Inequality`](#api-689ccc8cfe7e56f2) | Method |
| [`ToString`](#api-99d28ef726f6304d) | Method |
| [`data`](#api-523399e450825ae5) | Property |
| [`faceIndex`](#api-b686e2fa10566d02) | Property |
| [`family`](#api-17a57ed65ece4c5d) | Property |
| [`style`](#api-d9c957e032c236e8) | Property |
| [`weight`](#api-6c0a8dfbb24e4a71) | Property |

## Type declaration

<a id="api-e196be1e59e1d740"></a>
<!-- api: T:Inno.UI.UiFontRegistration 41a19c51a22ffc55176236be31a1d2bdb3e860d7839ab66bc0e33c8b470317d3 -->

```csharp
public readonly record struct Inno.UI.UiFontRegistration : System.IEquatable<Inno.UI.UiFontRegistration>
```

Describes one encoded font face registration across the neutral backend boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `#ctor`

<a id="api-86b01fdbb32d83bd"></a>
<!-- api: M:Inno.UI.UiFontRegistration.#ctor(System.ReadOnlyMemory{System.Byte},System.Int32,System.String,Inno.Text.TextFontStyle,System.Int32) a91493bce53e78c9ebb1ecf6c27a7ff3f5c8aec3b96c3ef91735ff0bcacc1605 -->

```csharp
public Inno.UI.UiFontRegistration.UiFontRegistration(System.ReadOnlyMemory<byte> data, int faceIndex, string family, Inno.Text.TextFontStyle style, int weight)
```

Creates a validated synchronous font registration request.

**Parameter `data`:** Encoded font bytes, valid for the duration of the backend call.

**Parameter `faceIndex`:** Zero-based face index in a font collection.

**Parameter `family`:** Logical family visible to document authors.

**Parameter `style`:** Requested logical font style.

**Parameter `weight`:** CSS-compatible weight from 100 through 1000.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L30).

## `Equals`

<a id="api-bca13c3db39a4fc2"></a>
<!-- api: M:Inno.UI.UiFontRegistration.Equals(Inno.UI.UiFontRegistration) a90f53bb072a655b4ae5b2b0e40e69745ea5b3afa581badb25d41ca5dda0eef7 -->

```csharp
public bool Inno.UI.UiFontRegistration.Equals(Inno.UI.UiFontRegistration other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `Equals`

<a id="api-cf8d1ae46b0992cf"></a>
<!-- api: M:Inno.UI.UiFontRegistration.Equals(System.Object) fa7eb9cc63711876f2396e6ea0826c4f24001e561549401010f2f0f4e77b3a8a -->

```csharp
public override bool Inno.UI.UiFontRegistration.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `GetHashCode`

<a id="api-1ca598f0a05fed79"></a>
<!-- api: M:Inno.UI.UiFontRegistration.GetHashCode 0483642640ac8eb5dff3f2fa05fe7142dcf8897c1fb36a327ae764195b5285b9 -->

```csharp
public override int Inno.UI.UiFontRegistration.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `op_Equality`

<a id="api-a6f6374898413e55"></a>
<!-- api: M:Inno.UI.UiFontRegistration.op_Equality(Inno.UI.UiFontRegistration,Inno.UI.UiFontRegistration) b80806fddaf170c2e1b37fe88edbabc5f11bbd8d539b8f906a26ff57136233d1 -->

```csharp
public static bool Inno.UI.UiFontRegistration.operator ==(Inno.UI.UiFontRegistration left, Inno.UI.UiFontRegistration right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `op_Inequality`

<a id="api-689ccc8cfe7e56f2"></a>
<!-- api: M:Inno.UI.UiFontRegistration.op_Inequality(Inno.UI.UiFontRegistration,Inno.UI.UiFontRegistration) 371b8cce0d2a977653d7fffdbe07444c3d442a2ff577c41357b550e53a34b942 -->

```csharp
public static bool Inno.UI.UiFontRegistration.operator !=(Inno.UI.UiFontRegistration left, Inno.UI.UiFontRegistration right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `ToString`

<a id="api-99d28ef726f6304d"></a>
<!-- api: M:Inno.UI.UiFontRegistration.ToString 1f2ba75ca3840c1ba91aee347f38a8e1bd82f04c3c070898eb9987578d88436f -->

```csharp
public override string Inno.UI.UiFontRegistration.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L10).

## `data`

<a id="api-523399e450825ae5"></a>
<!-- api: P:Inno.UI.UiFontRegistration.data fe34b1be507c24a5204c40949090204ec92ac0170311706a5fc31424721a7e2e -->

```csharp
public System.ReadOnlyMemory<byte> Inno.UI.UiFontRegistration.data { get; }
```

Gets encoded font bytes valid for the synchronous backend call.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L53).

## `faceIndex`

<a id="api-b686e2fa10566d02"></a>
<!-- api: P:Inno.UI.UiFontRegistration.faceIndex fddff65e748b4fd198e391df6a29602de4bd36a2f335237dfc8112fe40093277 -->

```csharp
public int Inno.UI.UiFontRegistration.faceIndex { get; }
```

Gets the zero-based collection face index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L57).

## `family`

<a id="api-17a57ed65ece4c5d"></a>
<!-- api: P:Inno.UI.UiFontRegistration.family 6d2806938ff181530e16ed4f0f56b2356079acbc87cd818ee04910cd2a9b9c84 -->

```csharp
public string Inno.UI.UiFontRegistration.family { get; }
```

Gets the logical family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L61).

## `style`

<a id="api-d9c957e032c236e8"></a>
<!-- api: P:Inno.UI.UiFontRegistration.style 5bf0c157f65379a741f9611519c5a94731d15a5770c96ce868ec92c027a5f1fd -->

```csharp
public Inno.Text.TextFontStyle Inno.UI.UiFontRegistration.style { get; }
```

Gets the logical style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L65).

## `weight`

<a id="api-6c0a8dfbb24e4a71"></a>
<!-- api: P:Inno.UI.UiFontRegistration.weight 013d4d0499cce253627e1ceaaaa9d347673f41cda0f35c032b3d9c041ed01a38 -->

```csharp
public int Inno.UI.UiFontRegistration.weight { get; }
```

Gets the logical weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiFontRegistration.cs#L69).
