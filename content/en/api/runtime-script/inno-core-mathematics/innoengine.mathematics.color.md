---
title: "Color"
description: "Reference for Color in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.b459d9015ed5b820
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Color`

This reference describes `Color` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Color>`.

## Members

| Member | Kind |
| --- | --- |
| [`a`](#api-1ccd9dcaf4091279) | Field |
| [`b`](#api-c679428662716566) | Field |
| [`BLACK`](#api-438ebe933c9130bd) | Field |
| [`BLUE`](#api-289524fbe57cc94e) | Field |
| [`BROWN`](#api-063c9b20a1d472ae) | Field |
| [`CORNFLOWERBLUE`](#api-8e58c794258b1767) | Field |
| [`CYAN`](#api-1c05d88451686a24) | Field |
| [`DARKGRAY`](#api-5047db709fa32a55) | Field |
| [`g`](#api-5f4dfdd932f4a78c) | Field |
| [`GRAY`](#api-d30697fb5e1d30b0) | Field |
| [`GREEN`](#api-f17d788b0c3280f1) | Field |
| [`LIGHTGRAY`](#api-aa825bd22e7c4c81) | Field |
| [`MAGENTA`](#api-2a17baea035cd30d) | Field |
| [`ORANGE`](#api-9286b78600af5ff8) | Field |
| [`PINK`](#api-429662a7d83c9e09) | Field |
| [`PURPLE`](#api-e703ded586f4edb0) | Field |
| [`r`](#api-754f28f93bd29f1f) | Field |
| [`RED`](#api-d21a231080acc08e) | Field |
| [`TRANSPARENT`](#api-6c684b784cb9376c) | Field |
| [`WHITE`](#api-e3092e4804aa4dd6) | Field |
| [`YELLOW`](#api-c9eeaea4349b0e7e) | Field |
| [`#ctor`](#api-47f4e59d56fd6824) | Method |
| [`Equals`](#api-d73be99773bb0e49) | Method |
| [`Equals`](#api-79c15ecb51552311) | Method |
| [`FromBytes`](#api-796abfd173ded488) | Method |
| [`GetHashCode`](#api-b3816e2eb6021f3c) | Method |
| [`op_Equality`](#api-45408e3077be3561) | Method |
| [`op_Inequality`](#api-7a9572092164e6ad) | Method |
| [`op_Multiply`](#api-a2e7ebf16eda329b) | Method |
| [`ToBytes`](#api-c1de39cb7c9e4a3e) | Method |
| [`ToString`](#api-b77b604ceaa84ea4) | Method |
| [`ToUInt32ARGB`](#api-3028afb2a031c0d7) | Method |

## Type declaration

<a id="api-b459d9015ed5b820"></a>
<!-- api: T:InnoEngine.Mathematics.Color 11a8091589179e4b21d16f3b49d6c638ffec121a6c0f570517703b4fcc6aca18 -->

```csharp
public struct InnoEngine.Mathematics.Color : System.IEquatable<InnoEngine.Mathematics.Color>
```

Represents mutable RGBA channels whose constructor clamps finite inputs to [0, 1].

**Constraints:** Direct field writes bypass constructor clamping. Keep channels finite and normalized before byte conversion.
This value does not encode a color space or distinguish straight from premultiplied alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L13).

## `a`

<a id="api-1ccd9dcaf4091279"></a>
<!-- api: F:InnoEngine.Mathematics.Color.a b88710cf9882db15e70459cf0cb193ab2acf29db4ff738e2f01a8f73a3c2c75b -->

```csharp
public float InnoEngine.Mathematics.Color.a
```

The alpha color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L30).

## `b`

<a id="api-c679428662716566"></a>
<!-- api: F:InnoEngine.Mathematics.Color.b 2201cfa1d2fae728f76263d35f6f6796fe39f4954b234558de03df169efd574a -->

```csharp
public float InnoEngine.Mathematics.Color.b
```

The blue color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L26).

## `BLACK`

<a id="api-438ebe933c9130bd"></a>
<!-- api: F:InnoEngine.Mathematics.Color.BLACK 4919ce8ac2e8fd11ba8e5ac29279603a382e909cd568b4ad432e141f5a6c3d6a -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.BLACK
```

The black value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L142).

## `BLUE`

<a id="api-289524fbe57cc94e"></a>
<!-- api: F:InnoEngine.Mathematics.Color.BLUE 0f6f4edfbf72db0de53ee523c42bfc31bbe213417000f4cf5383178fd5233b42 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.BLUE
```

The blue value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L154).

## `BROWN`

<a id="api-063c9b20a1d472ae"></a>
<!-- api: F:InnoEngine.Mathematics.Color.BROWN 94c1ca131851cda048d2778895979a114f5d78f262dbbf129d8b06b198f12241 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.BROWN
```

The brown value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L194).

## `CORNFLOWERBLUE`

<a id="api-8e58c794258b1767"></a>
<!-- api: F:InnoEngine.Mathematics.Color.CORNFLOWERBLUE e7483f0c15b2ac2ef610fe3850e87534b3a4a820ff564f5c92dc3f3ccc5bb688 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.CORNFLOWERBLUE
```

The cornflowerblue value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L198).

## `CYAN`

<a id="api-1c05d88451686a24"></a>
<!-- api: F:InnoEngine.Mathematics.Color.CYAN c787a810b6b74895bfc8627b6b730c06f897816502e82c89e11c6e7e3281d8a9 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.CYAN
```

The cyan value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L166).

## `DARKGRAY`

<a id="api-5047db709fa32a55"></a>
<!-- api: F:InnoEngine.Mathematics.Color.DARKGRAY 2bd2b013aeafb42728ac92fa326e65cdcbf5fe7603c511d70f6896a89df657d4 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.DARKGRAY
```

The darkgray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L178).

## `g`

<a id="api-5f4dfdd932f4a78c"></a>
<!-- api: F:InnoEngine.Mathematics.Color.g 081abc47e8ac0ca8c6b5ab3ea898b641d08a3f02fa256e518dee2c52f6357d0e -->

```csharp
public float InnoEngine.Mathematics.Color.g
```

The green color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L22).

## `GRAY`

<a id="api-d30697fb5e1d30b0"></a>
<!-- api: F:InnoEngine.Mathematics.Color.GRAY 3525fe9d3916257c83ddf2aa2a5ff9fa3d91288776e2f6047352ed603cf70471 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.GRAY
```

The gray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L170).

## `GREEN`

<a id="api-f17d788b0c3280f1"></a>
<!-- api: F:InnoEngine.Mathematics.Color.GREEN 28dfaf47e9e74550b734b47424e6ddbf3afd7d44e4d416cfd9c48acd3348ad87 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.GREEN
```

The green value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L150).

## `LIGHTGRAY`

<a id="api-aa825bd22e7c4c81"></a>
<!-- api: F:InnoEngine.Mathematics.Color.LIGHTGRAY ab20a562d7760c0fe6e692088e4362f272daadd2e70942d308bbda37a4d366e4 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.LIGHTGRAY
```

The lightgray value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L174).

## `MAGENTA`

<a id="api-2a17baea035cd30d"></a>
<!-- api: F:InnoEngine.Mathematics.Color.MAGENTA eed2d98903d209b4afcb48c6fd3fe1b9f9c1b5df748c9562cd025377ef41dd23 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.MAGENTA
```

The magenta value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L162).

## `ORANGE`

<a id="api-9286b78600af5ff8"></a>
<!-- api: F:InnoEngine.Mathematics.Color.ORANGE c937e6dd80371dfe2678bef0eb0c61b93a38d70a7ef1712bfefaefbbf29b8893 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.ORANGE
```

The orange value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L182).

## `PINK`

<a id="api-429662a7d83c9e09"></a>
<!-- api: F:InnoEngine.Mathematics.Color.PINK 3a9bd0ae87c660ec759941d38e57dc578efc69e26050b5ae078cdedf45c65bec -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.PINK
```

The pink value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L186).

## `PURPLE`

<a id="api-e703ded586f4edb0"></a>
<!-- api: F:InnoEngine.Mathematics.Color.PURPLE 9c53c36b775febc60800c0b08391a675a2a6e7c91057f8db2147cf3b86da9398 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.PURPLE
```

The purple value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L190).

## `r`

<a id="api-754f28f93bd29f1f"></a>
<!-- api: F:InnoEngine.Mathematics.Color.r 55026b296f49336ec35ebfca3467c1baae1bbbea8ebddfe113908a9bea6e8309 -->

```csharp
public float InnoEngine.Mathematics.Color.r
```

The red color component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L18).

## `RED`

<a id="api-d21a231080acc08e"></a>
<!-- api: F:InnoEngine.Mathematics.Color.RED 484bf0175c4fa671996e7108ed48b6a5a0b4bd7d76978634b1ee92f99281eb29 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.RED
```

The red value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L146).

## `TRANSPARENT`

<a id="api-6c684b784cb9376c"></a>
<!-- api: F:InnoEngine.Mathematics.Color.TRANSPARENT 46d929fc1b7d13707dd7c7ae7174aa3d76da509f6a34a772d29b3300c73a68ba -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.TRANSPARENT
```

The transparent value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L134).

## `WHITE`

<a id="api-e3092e4804aa4dd6"></a>
<!-- api: F:InnoEngine.Mathematics.Color.WHITE 926e828785420294e038e7b92b1c440fee1f1806fcf008b417d063a7005c0294 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.WHITE
```

The white value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L138).

## `YELLOW`

<a id="api-c9eeaea4349b0e7e"></a>
<!-- api: F:InnoEngine.Mathematics.Color.YELLOW c044c9e1aaa01b9eb7196fcb30faff96ab8d0b591ecc3b677301f89d2eaa1822 -->

```csharp
public static readonly InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.YELLOW
```

The yellow value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L158).

## `#ctor`

<a id="api-47f4e59d56fd6824"></a>
<!-- api: M:InnoEngine.Mathematics.Color.#ctor(System.Single,System.Single,System.Single,System.Single) c66ccdd08c25044fd31f5039781568af20b319ed8aa756d232cb8b934a671aa3 -->

```csharp
public InnoEngine.Mathematics.Color.Color(float r, float g, float b, float a = 1)
```

Creates a color by clamping each supplied channel to [0, 1].

**Parameter `r`:** The red channel.

**Parameter `g`:** The green channel.

**Parameter `b`:** The blue channel.

**Parameter `a`:** The alpha channel; one is opaque.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L47).

## `Equals`

<a id="api-d73be99773bb0e49"></a>
<!-- api: M:InnoEngine.Mathematics.Color.Equals(InnoEngine.Mathematics.Color) 6c385a1a2618f3ca2255310fdad96de153ae3f90986a1589782fb79da58fe878 -->

```csharp
public bool InnoEngine.Mathematics.Color.Equals(InnoEngine.Mathematics.Color other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L285).

## `Equals`

<a id="api-79c15ecb51552311"></a>
<!-- api: M:InnoEngine.Mathematics.Color.Equals(System.Object) f145ceb924535d6ddb8744973ea6aeb8e9cebca896e7d3b763dfe419169ff9c6 -->

```csharp
public override bool InnoEngine.Mathematics.Color.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L274).

## `FromBytes`

<a id="api-796abfd173ded488"></a>
<!-- api: M:InnoEngine.Mathematics.Color.FromBytes(System.Byte,System.Byte,System.Byte,System.Byte) 62d51fc6c4e910b9b9f2fede35f99de1faca4fd5eaa7c0eabba76e2f5c8b7f02 -->

```csharp
public static InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.FromBytes(byte r, byte g, byte b, byte a = 255)
```

Creates a normalized color from byte channel values.

**Parameter `r`:** The red byte channel.

**Parameter `g`:** The green byte channel.

**Parameter `b`:** The blue byte channel.

**Parameter `a`:** The alpha byte channel; 255 is opaque.

**Returns:** A color with each byte channel divided by 255.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L77).

## `GetHashCode`

<a id="api-b3816e2eb6021f3c"></a>
<!-- api: M:InnoEngine.Mathematics.Color.GetHashCode 4cc23941b016afcff52e5ed0350e40b515108465235e4827a62dfe696c8edbd7 -->

```csharp
public override int InnoEngine.Mathematics.Color.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L293).

## `op_Equality`

<a id="api-45408e3077be3561"></a>
<!-- api: M:InnoEngine.Mathematics.Color.op_Equality(InnoEngine.Mathematics.Color,InnoEngine.Mathematics.Color) 7d9387896a74ae56ca790e20fdb4e53349d6ca2fd2ed5f949b9136836d5b4339 -->

```csharp
public static bool InnoEngine.Mathematics.Color.operator ==(InnoEngine.Mathematics.Color a, InnoEngine.Mathematics.Color b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L237).

## `op_Inequality`

<a id="api-7a9572092164e6ad"></a>
<!-- api: M:InnoEngine.Mathematics.Color.op_Inequality(InnoEngine.Mathematics.Color,InnoEngine.Mathematics.Color) fb9864f0e4435fae59378b74bff79ed46981c9635a905799da4ee1794e0e2e43 -->

```csharp
public static bool InnoEngine.Mathematics.Color.operator !=(InnoEngine.Mathematics.Color a, InnoEngine.Mathematics.Color b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L260).

## `op_Multiply`

<a id="api-a2e7ebf16eda329b"></a>
<!-- api: M:InnoEngine.Mathematics.Color.op_Multiply(InnoEngine.Mathematics.Color,System.Single) 210b313a6f0a8d188eacc3d73160e0f93c2a5f4e7701e3c7a731d0a18a910ad5 -->

```csharp
public static InnoEngine.Mathematics.Color InnoEngine.Mathematics.Color.operator *(InnoEngine.Mathematics.Color c, float factor)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `c`:** The c consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `factor`:** The factor consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated color that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L212).

## `ToBytes`

<a id="api-c1de39cb7c9e4a3e"></a>
<!-- api: M:InnoEngine.Mathematics.Color.ToBytes c8fa1479de842e3433e2c140019dcc3c7879e7f1c0c08bef2ff7c6701b5537b9 -->

```csharp
public (byte, byte, byte, byte) InnoEngine.Mathematics.Color.ToBytes()
```

Converts normalized color channels to bytes by multiplying by 255 and truncating.

**Returns:** Red, green, blue and alpha bytes. Inputs must already be finite and in [0, 1]; conversion does not clamp field writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L92).

## `ToString`

<a id="api-b77b604ceaa84ea4"></a>
<!-- api: M:InnoEngine.Mathematics.Color.ToString 72d6280f374326d7aa97ba64d7dd3bc8001d14df10ef920f2bbb01cfced02d7c -->

```csharp
public override string InnoEngine.Mathematics.Color.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L129).

## `ToUInt32ARGB`

<a id="api-3028afb2a031c0d7"></a>
<!-- api: M:InnoEngine.Mathematics.Color.ToUInt32ARGB 86530df74799b6fbc3c69559acb2996c0001fb65418a8053ad27fe7a1e583e71 -->

```csharp
public uint InnoEngine.Mathematics.Color.ToUInt32ARGB()
```

Packs normalized channels into the existing unsigned 0xAABBGGRR representation.

**Returns:** Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

**Constraints:** Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host.
Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Color.cs#L112).
