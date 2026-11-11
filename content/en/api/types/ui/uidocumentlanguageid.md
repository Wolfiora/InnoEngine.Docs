---
title: "UiDocumentLanguageId"
description: "Reference for UiDocumentLanguageId in Inno.UI."
uid: api.inno.ui.c6c7334fcce1811d
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentLanguageId`

This reference describes `UiDocumentLanguageId` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiDocumentLanguageId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d502e9991c748c78) | Method |
| [`Equals`](#api-83a343f4739d0500) | Method |
| [`Equals`](#api-d0c29954072d5143) | Method |
| [`GetHashCode`](#api-30e1809a576198da) | Method |
| [`op_Equality`](#api-e9347ed6a949b91b) | Method |
| [`op_Inequality`](#api-865adde901788408) | Method |
| [`ToString`](#api-4c9e1ab2dcf575b4) | Method |
| [`isValid`](#api-8d7009482a84f53c) | Property |
| [`value`](#api-82a278fd0c5e9afe) | Property |

## Type declaration

<a id="api-c6c7334fcce1811d"></a>
<!-- api: T:Inno.UI.UiDocumentLanguageId fcfbcf7b3095c1f84b6a307af36db246ca17ab9e641f5f2fc5d93b133d95b10f -->

```csharp
public readonly record struct Inno.UI.UiDocumentLanguageId : System.IEquatable<Inno.UI.UiDocumentLanguageId>
```

Identifies a document source language independently from any UI backend implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `#ctor`

<a id="api-d502e9991c748c78"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.#ctor(System.String) d84e8fc958512cb9678e3800cb60d230748b4a15011b0835b01aa3bc1a555ac1 -->

```csharp
public Inno.UI.UiDocumentLanguageId.UiDocumentLanguageId(string value)
```

Creates a stable, ordinal language identifier.

**Parameter `value`:** Provider-qualified nonempty identifier without whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L16).

## `Equals`

<a id="api-83a343f4739d0500"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.Equals(Inno.UI.UiDocumentLanguageId) f775690ee5c497a721699aa1832ab672c1871b5ef558e46857a9a49e03680c3f -->

```csharp
public bool Inno.UI.UiDocumentLanguageId.Equals(Inno.UI.UiDocumentLanguageId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `Equals`

<a id="api-d0c29954072d5143"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.Equals(System.Object) d197ac7bb4c04da537487ac580d9a826bc8a3bdfe0d37d1e0bcffd5e58fb5eef -->

```csharp
public override bool Inno.UI.UiDocumentLanguageId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `GetHashCode`

<a id="api-30e1809a576198da"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.GetHashCode d6b0216409590bb88688e5ffbdbb0074d1d08b883ddfedba5a0d11aa85df9381 -->

```csharp
public override int Inno.UI.UiDocumentLanguageId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `op_Equality`

<a id="api-e9347ed6a949b91b"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.op_Equality(Inno.UI.UiDocumentLanguageId,Inno.UI.UiDocumentLanguageId) f528ac3ef2c5ff78e694559f012feb90bcb51e61228323608cf4d49e3c56b490 -->

```csharp
public static bool Inno.UI.UiDocumentLanguageId.operator ==(Inno.UI.UiDocumentLanguageId left, Inno.UI.UiDocumentLanguageId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `op_Inequality`

<a id="api-865adde901788408"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.op_Inequality(Inno.UI.UiDocumentLanguageId,Inno.UI.UiDocumentLanguageId) e29af3d01fd95d89f6b7c3c42e64779c83d3adc65409503a4b3cc9d351a2d20a -->

```csharp
public static bool Inno.UI.UiDocumentLanguageId.operator !=(Inno.UI.UiDocumentLanguageId left, Inno.UI.UiDocumentLanguageId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `ToString`

<a id="api-4c9e1ab2dcf575b4"></a>
<!-- api: M:Inno.UI.UiDocumentLanguageId.ToString 54e7f6468f202b183a5483b2f0bcdea991996adce6724b1bad4b356f7d38110a -->

```csharp
public override string Inno.UI.UiDocumentLanguageId.ToString()
```

Returns the stable identifier.

**Returns:** The identifier, or an empty string for an unassigned value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L41).

## `isValid`

<a id="api-8d7009482a84f53c"></a>
<!-- api: P:Inno.UI.UiDocumentLanguageId.isValid 4c71808f8ab8536d85e5c04d79d74b0ae61841ee5e895f386de96b66dc511686 -->

```csharp
public bool Inno.UI.UiDocumentLanguageId.isValid { get; }
```

Gets whether the identifier is assigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L33).

## `value`

<a id="api-82a278fd0c5e9afe"></a>
<!-- api: P:Inno.UI.UiDocumentLanguageId.value 2334a0e8f541660626ea848230a428bb8e8c12aeb415832dc6a1fa1e6a1e9f77 -->

```csharp
public string Inno.UI.UiDocumentLanguageId.value { get; }
```

Gets the stable language identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L28).
