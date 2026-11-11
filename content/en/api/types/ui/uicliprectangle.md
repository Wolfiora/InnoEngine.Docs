---
title: "UiClipRectangle"
description: "Reference for UiClipRectangle in Inno.UI."
uid: api.inno.ui.027621c659e0930a
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiClipRectangle`

This reference describes `UiClipRectangle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiClipRectangle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-96ddf7b3c5853ef5) | Method |
| [`Deconstruct`](#api-4e346cdceb679edb) | Method |
| [`Equals`](#api-cc10695fc6f2b0bb) | Method |
| [`Equals`](#api-5fd4284e7a42eddd) | Method |
| [`GetHashCode`](#api-b8797630c1f49d24) | Method |
| [`op_Equality`](#api-59497ce7cd3a17d3) | Method |
| [`op_Inequality`](#api-e696ce0667c02c57) | Method |
| [`ToString`](#api-0f0ae2b24c10ead0) | Method |
| [`height`](#api-562146061d4aeab3) | Property |
| [`width`](#api-3ccdc8137a1c195a) | Property |
| [`x`](#api-24ba5265d15341c2) | Property |
| [`y`](#api-ca76796e15c710d2) | Property |

## Type declaration

<a id="api-027621c659e0930a"></a>
<!-- api: T:Inno.UI.UiClipRectangle 1c0edeb5f5d83b556bc94220fd0a61fc57bc7faacb5d5d3237b36b6e64f5a8ed -->

```csharp
public readonly record struct Inno.UI.UiClipRectangle : System.IEquatable<Inno.UI.UiClipRectangle>
```

Defines an integer clipping rectangle in UI surface coordinates.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `#ctor`

<a id="api-96ddf7b3c5853ef5"></a>
<!-- api: M:Inno.UI.UiClipRectangle.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) a0138c53109a0057672a36aab513d37b8290ebc8b7331f74676322c1e809ccdb -->

```csharp
public Inno.UI.UiClipRectangle.UiClipRectangle(int x, int y, int width, int height)
```

Defines an integer clipping rectangle in UI surface coordinates.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Deconstruct`

<a id="api-4e346cdceb679edb"></a>
<!-- api: M:Inno.UI.UiClipRectangle.Deconstruct(System.Int32@,System.Int32@,System.Int32@,System.Int32@) 761e25947f5f4f77c348f653d217ff0d0aa9c47ade1fa5591d8eb784b4a15f9c -->

```csharp
public void Inno.UI.UiClipRectangle.Deconstruct(out int x, out int y, out int width, out int height)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Equals`

<a id="api-cc10695fc6f2b0bb"></a>
<!-- api: M:Inno.UI.UiClipRectangle.Equals(Inno.UI.UiClipRectangle) 49307b025f69d697845733465657e86976ee5930b9b3cc4340ad1fa7d9f128d9 -->

```csharp
public bool Inno.UI.UiClipRectangle.Equals(Inno.UI.UiClipRectangle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Equals`

<a id="api-5fd4284e7a42eddd"></a>
<!-- api: M:Inno.UI.UiClipRectangle.Equals(System.Object) e3d43976c93034a598e6e2e2d9f9f13ff423b2b1359cfd5b27003838442af3ad -->

```csharp
public override bool Inno.UI.UiClipRectangle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `GetHashCode`

<a id="api-b8797630c1f49d24"></a>
<!-- api: M:Inno.UI.UiClipRectangle.GetHashCode fc248735ba7bc5fd2b0765de85218c5e58b3ecaceb481210bb6a1ecd48ce77bc -->

```csharp
public override int Inno.UI.UiClipRectangle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `op_Equality`

<a id="api-59497ce7cd3a17d3"></a>
<!-- api: M:Inno.UI.UiClipRectangle.op_Equality(Inno.UI.UiClipRectangle,Inno.UI.UiClipRectangle) ef4fa77455fce09ec221dbb41ba9b7ecc94334667042e3b1de9a057784db9650 -->

```csharp
public static bool Inno.UI.UiClipRectangle.operator ==(Inno.UI.UiClipRectangle left, Inno.UI.UiClipRectangle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `op_Inequality`

<a id="api-e696ce0667c02c57"></a>
<!-- api: M:Inno.UI.UiClipRectangle.op_Inequality(Inno.UI.UiClipRectangle,Inno.UI.UiClipRectangle) b310e4c8755d3323d1c3ff80655c1fbafe1e65b82bc0f19bf28c0b2eb06d6e15 -->

```csharp
public static bool Inno.UI.UiClipRectangle.operator !=(Inno.UI.UiClipRectangle left, Inno.UI.UiClipRectangle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `ToString`

<a id="api-0f0ae2b24c10ead0"></a>
<!-- api: M:Inno.UI.UiClipRectangle.ToString 8ebe34291238409989073b144bd62b9fc2a026c68dc535c292158b04e77506e1 -->

```csharp
public override string Inno.UI.UiClipRectangle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `height`

<a id="api-562146061d4aeab3"></a>
<!-- api: P:Inno.UI.UiClipRectangle.height 23de653a7db93e546c7ddd6aabe80263c2b65cc5b313b8e0d1f2e799fbdfa7af -->

```csharp
public int Inno.UI.UiClipRectangle.height { get; init; }
```

The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L52).

## `width`

<a id="api-3ccdc8137a1c195a"></a>
<!-- api: P:Inno.UI.UiClipRectangle.width 527cda6d5fa1d73296bffb3781ccb62828c406ee3454362cf34854e194cf9294 -->

```csharp
public int Inno.UI.UiClipRectangle.width { get; init; }
```

The width in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L51).

## `x`

<a id="api-24ba5265d15341c2"></a>
<!-- api: P:Inno.UI.UiClipRectangle.x 654f06bb5f39d663a9dfac0eeb5cfba641372cd6ab5a40a8ab82ecbe3bc098d9 -->

```csharp
public int Inno.UI.UiClipRectangle.x { get; init; }
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L49).

## `y`

<a id="api-ca76796e15c710d2"></a>
<!-- api: P:Inno.UI.UiClipRectangle.y 21ed6733937130eee46b3807163ca2cb4e8e8cef3c8c21e2aa201fab96faac24 -->

```csharp
public int Inno.UI.UiClipRectangle.y { get; init; }
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L50).
