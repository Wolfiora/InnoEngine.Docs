---
title: "UiDocumentFontDeclaration"
description: "Reference for UiDocumentFontDeclaration in Inno.UI.Assets."
uid: api.inno.ui.assets.f357a8957541e868
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentFontDeclaration`

This reference describes `UiDocumentFontDeclaration` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.UI.Assets.UiDocumentFontDeclaration>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a98da02c4c0f6e6a) | Method |
| [`Deconstruct`](#api-c03b4a516ab5cf6a) | Method |
| [`Equals`](#api-af2b6dc9ee7d8615) | Method |
| [`Equals`](#api-35b6c2a12658e33b) | Method |
| [`GetHashCode`](#api-40c0649719cf5fa6) | Method |
| [`op_Equality`](#api-ba726c93181502ed) | Method |
| [`op_Inequality`](#api-0f893c6f4432d14c) | Method |
| [`ToString`](#api-27084b1bb6fb5f7b) | Method |
| [`assetPath`](#api-017802b29733ca2e) | Property |
| [`family`](#api-5ba0bcd443f24c3d) | Property |
| [`style`](#api-3c193ee5cc09c6f4) | Property |
| [`weight`](#api-08bf7a8c9fc2ada9) | Property |

## Type declaration

<a id="api-f357a8957541e868"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentFontDeclaration e1eed83a12a10bcdbd8e4e81070d5f63b3f1aca5d2f042ec7f8803b4283aa767 -->

```csharp
public sealed record Inno.UI.Assets.UiDocumentFontDeclaration : System.IEquatable<Inno.UI.Assets.UiDocumentFontDeclaration>
```

One font asset declared by a UI document language frontend.

**Parameter `assetPath`:** Isolated font asset path.

**Parameter `family`:** Document-private physical family used in canonical text.

**Parameter `style`:** CSS-compatible face style.

**Parameter `weight`:** CSS-compatible face weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `#ctor`

<a id="api-a98da02c4c0f6e6a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.#ctor(System.String,System.String,Inno.Text.TextFontStyle,System.Int32) e6bd3c9fcd87a53931cb6ef8108bad83e37eca68a76dbece92daa3d73ac481c6 -->

```csharp
public Inno.UI.Assets.UiDocumentFontDeclaration.UiDocumentFontDeclaration(string assetPath, string family, Inno.Text.TextFontStyle style, int weight)
```

One font asset declared by a UI document language frontend.

**Parameter `assetPath`:** Isolated font asset path.

**Parameter `family`:** Document-private physical family used in canonical text.

**Parameter `style`:** CSS-compatible face style.

**Parameter `weight`:** CSS-compatible face weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `Deconstruct`

<a id="api-c03b4a516ab5cf6a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.Deconstruct(System.String@,System.String@,Inno.Text.TextFontStyle@,System.Int32@) fea74b9e0bf3cab0799ccec35feb3812a2ef669d028d5f5842de77cb6cbd4d15 -->

```csharp
public void Inno.UI.Assets.UiDocumentFontDeclaration.Deconstruct(out string assetPath, out string family, out Inno.Text.TextFontStyle style, out int weight)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `Equals`

<a id="api-af2b6dc9ee7d8615"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.Equals(Inno.UI.Assets.UiDocumentFontDeclaration) fcdcd59a605cf394da2258cf3f5cc8c3c3b925273afd70471c71a34af5f2d918 -->

```csharp
public bool Inno.UI.Assets.UiDocumentFontDeclaration.Equals(Inno.UI.Assets.UiDocumentFontDeclaration? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `Equals`

<a id="api-35b6c2a12658e33b"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.Equals(System.Object) a2ebc384fb64354f121cbdf1b6255339ff67d16b6c080e0f4d595b8a05400a25 -->

```csharp
public override bool Inno.UI.Assets.UiDocumentFontDeclaration.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `GetHashCode`

<a id="api-40c0649719cf5fa6"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.GetHashCode a422be636b55eb9fb315d0d09f0e27a688bf4f7471a48ddc4783418687e5e63f -->

```csharp
public override int Inno.UI.Assets.UiDocumentFontDeclaration.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `op_Equality`

<a id="api-ba726c93181502ed"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.op_Equality(Inno.UI.Assets.UiDocumentFontDeclaration,Inno.UI.Assets.UiDocumentFontDeclaration) 26436c0e62bfb88a528c7c79b9fbe69894212f531cadf21d590c0c3602929d06 -->

```csharp
public static bool Inno.UI.Assets.UiDocumentFontDeclaration.operator ==(Inno.UI.Assets.UiDocumentFontDeclaration? left, Inno.UI.Assets.UiDocumentFontDeclaration? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `op_Inequality`

<a id="api-0f893c6f4432d14c"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.op_Inequality(Inno.UI.Assets.UiDocumentFontDeclaration,Inno.UI.Assets.UiDocumentFontDeclaration) b6c20ee43674f0759ac262397893ceb4746e48550194f12b8006dce7fe5c61aa -->

```csharp
public static bool Inno.UI.Assets.UiDocumentFontDeclaration.operator !=(Inno.UI.Assets.UiDocumentFontDeclaration? left, Inno.UI.Assets.UiDocumentFontDeclaration? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `ToString`

<a id="api-27084b1bb6fb5f7b"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFontDeclaration.ToString b942571ce3b52dabb53959f024961735e82d18699500ae47472491ac29a29ed4 -->

```csharp
public override string Inno.UI.Assets.UiDocumentFontDeclaration.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L65).

## `assetPath`

<a id="api-017802b29733ca2e"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentFontDeclaration.assetPath da38e167c56c301ea6b1a4deafb768c1ea1e20865faedab64e95d94102fc8991 -->

```csharp
public string Inno.UI.Assets.UiDocumentFontDeclaration.assetPath { get; init; }
```

Isolated font asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L66).

## `family`

<a id="api-5ba0bcd443f24c3d"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentFontDeclaration.family 1fb53f8288a83e9e4608fdfaec1c6b556603c43b9308b1186aeb8268fcfbd30b -->

```csharp
public string Inno.UI.Assets.UiDocumentFontDeclaration.family { get; init; }
```

Document-private physical family used in canonical text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L67).

## `style`

<a id="api-3c193ee5cc09c6f4"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentFontDeclaration.style 77b0e090b567e15a84e252397c0c1d2e860468f0ad6248b451d88367a0530ffe -->

```csharp
public Inno.Text.TextFontStyle Inno.UI.Assets.UiDocumentFontDeclaration.style { get; init; }
```

CSS-compatible face style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L68).

## `weight`

<a id="api-08bf7a8c9fc2ada9"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentFontDeclaration.weight c6a0f1d9d4f2e8251847dabf08a819d72498c9d096e296fa88f33981300e0ab2 -->

```csharp
public int Inno.UI.Assets.UiDocumentFontDeclaration.weight { get; init; }
```

CSS-compatible face weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L69).
