---
title: "UiDocumentFontFace"
description: "Reference for UiDocumentFontFace in Inno.UI."
uid: api.inno.ui.d45614ff9380b66b
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDocumentFontFace`

This reference describes `UiDocumentFontFace` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiDocumentFontFace>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-32efc424bb84f778) | Method |
| [`Equals`](#api-9568975fd0273710) | Method |
| [`Equals`](#api-a053f5d6b16c4562) | Method |
| [`GetHashCode`](#api-88c7357c77853861) | Method |
| [`op_Equality`](#api-c610cbb88d5a004b) | Method |
| [`op_Inequality`](#api-bbb624089d83a4df) | Method |
| [`ToString`](#api-6fd3592f75a955ae) | Method |
| [`assetId`](#api-7998a102a04d78c7) | Property |
| [`family`](#api-f9d093d814b02738) | Property |
| [`style`](#api-beb361130bf7d4f4) | Property |
| [`weight`](#api-1c807062641ec23a) | Property |

## Type declaration

<a id="api-d45614ff9380b66b"></a>
<!-- api: T:Inno.UI.UiDocumentFontFace a81126aef8ddf7038664642e4789bebfe681e6e51fc4536b206de55bab43bc0d -->

```csharp
public readonly record struct Inno.UI.UiDocumentFontFace : System.IEquatable<Inno.UI.UiDocumentFontFace>
```

Identifies one imported font face owned by a single UI document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `#ctor`

<a id="api-32efc424bb84f778"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.#ctor(System.Guid,System.String,Inno.Text.TextFontStyle,System.Int32) 3b6ceaee2e8bd377bfaeada929bd6c09ae20ec1bba3d91bad5a8a0b16f50648b -->

```csharp
public Inno.UI.UiDocumentFontFace.UiDocumentFontFace(System.Guid assetId, string family, Inno.Text.TextFontStyle style, int weight)
```

Creates a font dependency with its document-private family.

**Parameter `assetId`:** Persistent font asset identity.

**Parameter `family`:** Private family referenced by canonical document text.

**Parameter `style`:** Declared face style.

**Parameter `weight`:** Declared face weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L26).

## `Equals`

<a id="api-9568975fd0273710"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.Equals(Inno.UI.UiDocumentFontFace) f2fec808bd5c802c469f3e255ca7d94bacdb63ce8e67db977db8aa8aef52d6d6 -->

```csharp
public bool Inno.UI.UiDocumentFontFace.Equals(Inno.UI.UiDocumentFontFace other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `Equals`

<a id="api-a053f5d6b16c4562"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.Equals(System.Object) 330f78955f3685ebb9847bf7d0f8d2223e35563267149c4de1faa28ad83edc6b -->

```csharp
public override bool Inno.UI.UiDocumentFontFace.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `GetHashCode`

<a id="api-88c7357c77853861"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.GetHashCode f01b3691fa081af7131a1fc12706ef2afd0cf103df538510a0c13a6fd793f8bd -->

```csharp
public override int Inno.UI.UiDocumentFontFace.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `op_Equality`

<a id="api-c610cbb88d5a004b"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.op_Equality(Inno.UI.UiDocumentFontFace,Inno.UI.UiDocumentFontFace) bd43f39f99d9500fbcbc7bb6fcb03bbb9d28782cf4a008279ed1cb8edfe70ac8 -->

```csharp
public static bool Inno.UI.UiDocumentFontFace.operator ==(Inno.UI.UiDocumentFontFace left, Inno.UI.UiDocumentFontFace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `op_Inequality`

<a id="api-bbb624089d83a4df"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.op_Inequality(Inno.UI.UiDocumentFontFace,Inno.UI.UiDocumentFontFace) 9b57296732e958d1ad103b1015c78af07b734e98a56a971601179c93c10110be -->

```csharp
public static bool Inno.UI.UiDocumentFontFace.operator !=(Inno.UI.UiDocumentFontFace left, Inno.UI.UiDocumentFontFace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `ToString`

<a id="api-6fd3592f75a955ae"></a>
<!-- api: M:Inno.UI.UiDocumentFontFace.ToString 5d41804eeddd22ef0c454ddf59fee32e6e54a3a2cc0320628d723cfe764a6258 -->

```csharp
public override string Inno.UI.UiDocumentFontFace.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L9).

## `assetId`

<a id="api-7998a102a04d78c7"></a>
<!-- api: P:Inno.UI.UiDocumentFontFace.assetId d2434c793993187206b9be777458366f0353de39f2cd501d56e54af655b65026 -->

```csharp
public System.Guid Inno.UI.UiDocumentFontFace.assetId { get; }
```

Gets the imported font asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L46).

## `family`

<a id="api-f9d093d814b02738"></a>
<!-- api: P:Inno.UI.UiDocumentFontFace.family ff05343f949d9f0b469d1340a19f42d0cc52b00206370d40914e286b6159e71c -->

```csharp
public string Inno.UI.UiDocumentFontFace.family { get; }
```

Gets the family referenced by the document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L50).

## `style`

<a id="api-beb361130bf7d4f4"></a>
<!-- api: P:Inno.UI.UiDocumentFontFace.style 1688ae646f8a79a568542add1e4ca499f2fa9d4ff75d4eec5bba15438077fc5e -->

```csharp
public Inno.Text.TextFontStyle Inno.UI.UiDocumentFontFace.style { get; }
```

Gets the declared style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L54).

## `weight`

<a id="api-1c807062641ec23a"></a>
<!-- api: P:Inno.UI.UiDocumentFontFace.weight 2d393ad09b1b7355381fba02aa9385aaae991ca7fd9941d8a25f014e0e82cead -->

```csharp
public int Inno.UI.UiDocumentFontFace.weight { get; }
```

Gets the declared weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiDocumentFontFace.cs#L58).
