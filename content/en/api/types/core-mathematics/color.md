---
title: "Color"
description: "Reference for Color in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.9fd8bbef3007f39b
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Color`

This reference describes `Color` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Color>`.

## Members

| Member | Kind |
| --- | --- |
| [`a`](#api-9213464e04c9fbf1) | Field |
| [`b`](#api-4ebcd0044ecc14ab) | Field |
| [`BLACK`](#api-ad159be4e3471d21) | Field |
| [`BLUE`](#api-9b95147d09f88544) | Field |
| [`BROWN`](#api-3196c30bd24bf28b) | Field |
| [`CORNFLOWERBLUE`](#api-2a0a35ae23866066) | Field |
| [`CYAN`](#api-c67e44500d95cbcc) | Field |
| [`DARKGRAY`](#api-2b459c681e62a286) | Field |
| [`g`](#api-53968b44c1d0085a) | Field |
| [`GRAY`](#api-ecd277d2f687b4fc) | Field |
| [`GREEN`](#api-5f5d2f22a198a0ef) | Field |
| [`LIGHTGRAY`](#api-fdf33d9c6401106b) | Field |
| [`MAGENTA`](#api-8e7207d9bb52f6de) | Field |
| [`ORANGE`](#api-82d2121331c379a9) | Field |
| [`PINK`](#api-66854fdde9a985e6) | Field |
| [`PURPLE`](#api-13c64ecc015d3662) | Field |
| [`r`](#api-58f550d61324542c) | Field |
| [`RED`](#api-3a61040b99368693) | Field |
| [`TRANSPARENT`](#api-5ae00d1bcd451844) | Field |
| [`WHITE`](#api-f08a37f748858810) | Field |
| [`YELLOW`](#api-9446d1ad07333edf) | Field |
| [`#ctor`](#api-cc2fada18d2c95da) | Method |
| [`Equals`](#api-1fea311fe280b743) | Method |
| [`Equals`](#api-589bd13ad4d4ac00) | Method |
| [`FromBytes`](#api-08e4ef7a2149f4f5) | Method |
| [`GetHashCode`](#api-20a9585107dc1b60) | Method |
| [`op_Equality`](#api-52e78a68c5a4b9b3) | Method |
| [`op_Inequality`](#api-c65f0f11c05f0210) | Method |
| [`op_Multiply`](#api-648b84d905127185) | Method |
| [`ToBytes`](#api-8817b01ed55ca06e) | Method |
| [`ToString`](#api-609a07c46301e7b7) | Method |
| [`ToUInt32ARGB`](#api-a1d019090bc0c720) | Method |

## Type declaration

<a id="api-9fd8bbef3007f39b"></a>
<!-- api: T:Inno.Core.Mathematics.Color a67a5824e5eabe70ef4c326539df716a938dc31bf0d95d4bf4d2c2cf1b01dd48 -->

```csharp
public struct Inno.Core.Mathematics.Color : System.IEquatable<Inno.Core.Mathematics.Color>
```

Represents mutable RGBA channels whose constructor clamps finite inputs to [0, 1].

**Constraints:** Direct field writes bypass constructor clamping. Keep channels finite and normalized before byte conversion.
This value does not encode a color space or distinguish straight from premultiplied alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L13).

## `a`

<a id="api-9213464e04c9fbf1"></a>
<!-- api: F:Inno.Core.Mathematics.Color.a 8d9a0db0f09330202adab3e0b3dad543978aedf977ea2b52423aff9fb166ffbe -->

```csharp
public float Inno.Core.Mathematics.Color.a
```

The alpha color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L30).

## `b`

<a id="api-4ebcd0044ecc14ab"></a>
<!-- api: F:Inno.Core.Mathematics.Color.b bddc12fe85f3f719ffbfd6737e3f933b2bc33672aeb1c5b6ae3f49a5c3976578 -->

```csharp
public float Inno.Core.Mathematics.Color.b
```

The blue color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L26).

## `BLACK`

<a id="api-ad159be4e3471d21"></a>
<!-- api: F:Inno.Core.Mathematics.Color.BLACK 993e81da9d49dab96a732de02d2b543518fa3f8449eb45b1476a6eff4898f81a -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.BLACK
```

The black value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L142).

## `BLUE`

<a id="api-9b95147d09f88544"></a>
<!-- api: F:Inno.Core.Mathematics.Color.BLUE 3b4c75040da3ee8b8d4d52e97149180e9e8dd3b3a4067dd852ddd4c687358d15 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.BLUE
```

The blue value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L154).

## `BROWN`

<a id="api-3196c30bd24bf28b"></a>
<!-- api: F:Inno.Core.Mathematics.Color.BROWN cdf7504fd73bdef4dcfe29591a00d16382f5eb06281268aeb063ebc0aa6515f8 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.BROWN
```

The brown value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L194).

## `CORNFLOWERBLUE`

<a id="api-2a0a35ae23866066"></a>
<!-- api: F:Inno.Core.Mathematics.Color.CORNFLOWERBLUE f83c7c37744c1307c77e2c054b4be193e43a930445043104b3421db2fe7d7823 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.CORNFLOWERBLUE
```

The cornflowerblue value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L198).

## `CYAN`

<a id="api-c67e44500d95cbcc"></a>
<!-- api: F:Inno.Core.Mathematics.Color.CYAN 41b008825d7f9d3e72adb37615f4abf6dc310d733f41bacf4ace1e6a2ee79b40 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.CYAN
```

The cyan value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L166).

## `DARKGRAY`

<a id="api-2b459c681e62a286"></a>
<!-- api: F:Inno.Core.Mathematics.Color.DARKGRAY 6e6683f9d32a3a7c6455096d966740ada63fce54b481423906457c5d6a403cfe -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.DARKGRAY
```

The darkgray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L178).

## `g`

<a id="api-53968b44c1d0085a"></a>
<!-- api: F:Inno.Core.Mathematics.Color.g 5ec16e67aecfcd6697feb7b313812fd314052e4d79b5ca06f2ef97860d3f205e -->

```csharp
public float Inno.Core.Mathematics.Color.g
```

The green color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L22).

## `GRAY`

<a id="api-ecd277d2f687b4fc"></a>
<!-- api: F:Inno.Core.Mathematics.Color.GRAY 6191be70f98f3d0760f1d95b7e3f1c31af8fdc7acb82449df42d155bc20d91ad -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.GRAY
```

The gray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L170).

## `GREEN`

<a id="api-5f5d2f22a198a0ef"></a>
<!-- api: F:Inno.Core.Mathematics.Color.GREEN 2d1675fa2e3ff82c327dc31b838c8f614cf55f1e77586d9cbcfa265b09bbd34d -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.GREEN
```

The green value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L150).

## `LIGHTGRAY`

<a id="api-fdf33d9c6401106b"></a>
<!-- api: F:Inno.Core.Mathematics.Color.LIGHTGRAY beba7acf43940801215474b10082f52276ae88cf6c1adfe133b49b3011ab46b5 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.LIGHTGRAY
```

The lightgray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L174).

## `MAGENTA`

<a id="api-8e7207d9bb52f6de"></a>
<!-- api: F:Inno.Core.Mathematics.Color.MAGENTA da8fd0da53d5b317ff66d494df1399baeb8d2f33ae3f7ab1ad83a50ae16cd6ed -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.MAGENTA
```

The magenta value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L162).

## `ORANGE`

<a id="api-82d2121331c379a9"></a>
<!-- api: F:Inno.Core.Mathematics.Color.ORANGE e71322f6151e4c1c83b458ba47a2993465a377a483272ec8f56035d5159a972c -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.ORANGE
```

The orange value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L182).

## `PINK`

<a id="api-66854fdde9a985e6"></a>
<!-- api: F:Inno.Core.Mathematics.Color.PINK e316eed576b6ab82c277815bdd063c9fd5e28d3dca82b4784b4461ae4aa02e3f -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.PINK
```

The pink value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L186).

## `PURPLE`

<a id="api-13c64ecc015d3662"></a>
<!-- api: F:Inno.Core.Mathematics.Color.PURPLE 3fe7d96e9159559c647269ba6cd74d050ba4502bdff8a4061198e3ce58cbc33c -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.PURPLE
```

The purple value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L190).

## `r`

<a id="api-58f550d61324542c"></a>
<!-- api: F:Inno.Core.Mathematics.Color.r a96ee11a2c5ccf806f34815c0ac4039c87039901ee1f26b86e3247c3add7fe33 -->

```csharp
public float Inno.Core.Mathematics.Color.r
```

The red color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L18).

## `RED`

<a id="api-3a61040b99368693"></a>
<!-- api: F:Inno.Core.Mathematics.Color.RED 8f9dece88071060c406f1ffd09c0e0a0a6ec980e09db47767bb10557110f60d3 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.RED
```

The red value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L146).

## `TRANSPARENT`

<a id="api-5ae00d1bcd451844"></a>
<!-- api: F:Inno.Core.Mathematics.Color.TRANSPARENT 201b0f08d338f54941485ea42856bf107d8f5ecf816ed4db51c9fee2bfe6e5f3 -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.TRANSPARENT
```

The transparent value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L134).

## `WHITE`

<a id="api-f08a37f748858810"></a>
<!-- api: F:Inno.Core.Mathematics.Color.WHITE 026ec2049fc44dd97f840bd74b4298271683bc66ce519c40158b77c5177a2b1f -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.WHITE
```

The white value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L138).

## `YELLOW`

<a id="api-9446d1ad07333edf"></a>
<!-- api: F:Inno.Core.Mathematics.Color.YELLOW c263e86ffb1186a42c803e9f624d6f3d8d57db4dc511cff8aa359b1d802c4f7e -->

```csharp
public static readonly Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.YELLOW
```

The yellow value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L158).

## `#ctor`

<a id="api-cc2fada18d2c95da"></a>
<!-- api: M:Inno.Core.Mathematics.Color.#ctor(System.Single,System.Single,System.Single,System.Single) acabd169443baa0432da7409ee55cfd1c79ee2d6d4d02437e1b6983e2c56d3b2 -->

```csharp
public Inno.Core.Mathematics.Color.Color(float r, float g, float b, float a = 1)
```

Creates a color by clamping each supplied channel to [0, 1].

**Parameter `r`:** The red channel.

**Parameter `g`:** The green channel.

**Parameter `b`:** The blue channel.

**Parameter `a`:** The alpha channel; one is opaque.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L47).

## `Equals`

<a id="api-1fea311fe280b743"></a>
<!-- api: M:Inno.Core.Mathematics.Color.Equals(Inno.Core.Mathematics.Color) 4591a4e13d1bf1296c19c54bd3c03f39d47fca64cb5ee1e7cc377778abddcb24 -->

```csharp
public bool Inno.Core.Mathematics.Color.Equals(Inno.Core.Mathematics.Color other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L285).

## `Equals`

<a id="api-589bd13ad4d4ac00"></a>
<!-- api: M:Inno.Core.Mathematics.Color.Equals(System.Object) 7556790b4a0db3c5f4504f2035d0f593cf03519396453bea38709275ddef32a4 -->

```csharp
public override bool Inno.Core.Mathematics.Color.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L274).

## `FromBytes`

<a id="api-08e4ef7a2149f4f5"></a>
<!-- api: M:Inno.Core.Mathematics.Color.FromBytes(System.Byte,System.Byte,System.Byte,System.Byte) a583182778e365982f9f549aa4a6ff261605ff7af2ee61b311754042e29a8676 -->

```csharp
public static Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.FromBytes(byte r, byte g, byte b, byte a = 255)
```

Creates a normalized color from byte channel values.

**Parameter `r`:** The red byte channel.

**Parameter `g`:** The green byte channel.

**Parameter `b`:** The blue byte channel.

**Parameter `a`:** The alpha byte channel; 255 is opaque.

**Returns:** A color with each byte channel divided by 255.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L77).

## `GetHashCode`

<a id="api-20a9585107dc1b60"></a>
<!-- api: M:Inno.Core.Mathematics.Color.GetHashCode 5f78d49bfb36262323541099f19c7ee851bae83fc8b2aebb308ebf5218725afe -->

```csharp
public override int Inno.Core.Mathematics.Color.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L293).

## `op_Equality`

<a id="api-52e78a68c5a4b9b3"></a>
<!-- api: M:Inno.Core.Mathematics.Color.op_Equality(Inno.Core.Mathematics.Color,Inno.Core.Mathematics.Color) b6e4a02f78eb63d76942f4e12a2081a5966693fedb687f4c53adcbbf062b1eb7 -->

```csharp
public static bool Inno.Core.Mathematics.Color.operator ==(Inno.Core.Mathematics.Color a, Inno.Core.Mathematics.Color b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L237).

## `op_Inequality`

<a id="api-c65f0f11c05f0210"></a>
<!-- api: M:Inno.Core.Mathematics.Color.op_Inequality(Inno.Core.Mathematics.Color,Inno.Core.Mathematics.Color) 1691b53f1ebfcb5b0cddf0b1244270bc2412898944b87b3a0b22e13799c071a8 -->

```csharp
public static bool Inno.Core.Mathematics.Color.operator !=(Inno.Core.Mathematics.Color a, Inno.Core.Mathematics.Color b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L260).

## `op_Multiply`

<a id="api-648b84d905127185"></a>
<!-- api: M:Inno.Core.Mathematics.Color.op_Multiply(Inno.Core.Mathematics.Color,System.Single) 96243b7e1d0f0a7c571f8ebba8dd73de1c7caedbf0082bc87c67e5e69b5626ec -->

```csharp
public static Inno.Core.Mathematics.Color Inno.Core.Mathematics.Color.operator *(Inno.Core.Mathematics.Color c, float factor)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `c`:** The c consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `factor`:** The factor consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated color that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L212).

## `ToBytes`

<a id="api-8817b01ed55ca06e"></a>
<!-- api: M:Inno.Core.Mathematics.Color.ToBytes dbdd386e7a67fae2485ea0b9f0a4050ab0c42f7dbd245e568b3d83577f6542a3 -->

```csharp
public (byte R, byte G, byte B, byte A) Inno.Core.Mathematics.Color.ToBytes()
```

Converts normalized color channels to bytes by multiplying by 255 and truncating.

**Returns:** Red, green, blue and alpha bytes. Inputs must already be finite and in [0, 1]; conversion does not clamp field writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L92).

## `ToString`

<a id="api-609a07c46301e7b7"></a>
<!-- api: M:Inno.Core.Mathematics.Color.ToString 239f70c0a5a488989dbc2a0187d188b4176568a38575c3fd94f2d8cd29369b48 -->

```csharp
public override string Inno.Core.Mathematics.Color.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L129).

## `ToUInt32ARGB`

<a id="api-a1d019090bc0c720"></a>
<!-- api: M:Inno.Core.Mathematics.Color.ToUInt32ARGB 9a269771b6bb121e897b9a92f70ca9116daca791121284fab2c2f1300c1f0cbf -->

```csharp
public uint Inno.Core.Mathematics.Color.ToUInt32ARGB()
```

Packs normalized channels into the existing unsigned 0xAABBGGRR representation.

**Returns:** Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

**Constraints:** Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host.
Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Color.cs#L112).
