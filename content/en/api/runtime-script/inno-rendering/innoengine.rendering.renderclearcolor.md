---
title: "RenderClearColor"
description: "Reference for RenderClearColor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.3509e37fbdb64dd6
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderClearColor`

This reference describes `RenderClearColor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderClearColor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-580f8cb0b4081d2a) | Method |
| [`Equals`](#api-749aa41b058731ff) | Method |
| [`Equals`](#api-2c30a5a259327aab) | Method |
| [`GetHashCode`](#api-d56ed20cd4936d0c) | Method |
| [`op_Equality`](#api-1195c3c357b0c5d7) | Method |
| [`op_Inequality`](#api-04bd7a0980f6fa66) | Method |
| [`ToString`](#api-271f7192d0a880e5) | Method |
| [`a`](#api-b3777c75d45819a7) | Property |
| [`b`](#api-e4028b5e083a105d) | Property |
| [`g`](#api-b94553f41daab130) | Property |
| [`r`](#api-f0e2a2afd21685ee) | Property |

## Type declaration

<a id="api-3509e37fbdb64dd6"></a>
<!-- api: T:InnoEngine.Rendering.RenderClearColor 544196be7fe3190b510c3554371c33b38424cfb760ebe1cb9c54cf14236c2f3e -->

```csharp
public readonly struct InnoEngine.Rendering.RenderClearColor : System.IEquatable<InnoEngine.Rendering.RenderClearColor>
```

Stores a linear clear color without depending on an engine math assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `#ctor`

<a id="api-580f8cb0b4081d2a"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.#ctor(System.Single,System.Single,System.Single,System.Single) d4346b5b09d13e22c0b57b0186cee89516290afb5d9efb2f0e3d395e7e963dca -->

```csharp
public InnoEngine.Rendering.RenderClearColor.RenderClearColor(float r, float g, float b, float a = 1)
```

Creates a linear clear color.

**Parameter `r`:** Red channel.

**Parameter `g`:** Green channel.

**Parameter `b`:** Blue channel.

**Parameter `a`:** Alpha channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L126).

## `Equals`

<a id="api-749aa41b058731ff"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.Equals(InnoEngine.Rendering.RenderClearColor) 238f9f683a8daec6d791cedeb167b4c097fa411831ee7e5dd3f2a913015ee88e -->

```csharp
public bool InnoEngine.Rendering.RenderClearColor.Equals(InnoEngine.Rendering.RenderClearColor other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `Equals`

<a id="api-2c30a5a259327aab"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.Equals(System.Object) 4c8235ed62cc930706a52ade6064c911636db02fa2808e5034a291846e72acf1 -->

```csharp
public override bool InnoEngine.Rendering.RenderClearColor.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `GetHashCode`

<a id="api-d56ed20cd4936d0c"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.GetHashCode 37a6fa07a30863de16698d98c2bf59ded543f71007e16184bbf09e40480e6d47 -->

```csharp
public override int InnoEngine.Rendering.RenderClearColor.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `op_Equality`

<a id="api-1195c3c357b0c5d7"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.op_Equality(InnoEngine.Rendering.RenderClearColor,InnoEngine.Rendering.RenderClearColor) 598af2adcfa614315d916541eb048ae2c4b94dadfbb38af496b2d2f2b359940e -->

```csharp
public static bool InnoEngine.Rendering.RenderClearColor.operator ==(InnoEngine.Rendering.RenderClearColor left, InnoEngine.Rendering.RenderClearColor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `op_Inequality`

<a id="api-04bd7a0980f6fa66"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.op_Inequality(InnoEngine.Rendering.RenderClearColor,InnoEngine.Rendering.RenderClearColor) 5f1a14bc805d7b9a883652044b386e173242ba956caf79d0ec5e1421f595a865 -->

```csharp
public static bool InnoEngine.Rendering.RenderClearColor.operator !=(InnoEngine.Rendering.RenderClearColor left, InnoEngine.Rendering.RenderClearColor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `ToString`

<a id="api-271f7192d0a880e5"></a>
<!-- api: M:InnoEngine.Rendering.RenderClearColor.ToString aed94193448d883e4f3611c578eeeb8250fb456c24c8087914aefd532982dc40 -->

```csharp
public override string InnoEngine.Rendering.RenderClearColor.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `a`

<a id="api-b3777c75d45819a7"></a>
<!-- api: P:InnoEngine.Rendering.RenderClearColor.a 4183eb371befadafff2edea793976a333974649dd8a6fe2ac6c4cb5cb99aa8af -->

```csharp
public float InnoEngine.Rendering.RenderClearColor.a { get; }
```

Gets the alpha channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L156).

## `b`

<a id="api-e4028b5e083a105d"></a>
<!-- api: P:InnoEngine.Rendering.RenderClearColor.b d1d0dbbf6e285787a6f86f40651a8683c2fb330dba40dad91a45403b1c2ed064 -->

```csharp
public float InnoEngine.Rendering.RenderClearColor.b { get; }
```

Gets the blue channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L151).

## `g`

<a id="api-b94553f41daab130"></a>
<!-- api: P:InnoEngine.Rendering.RenderClearColor.g c895807d8ed838de7881fc013b08699ec460475042c961a85d58e396b62ffee7 -->

```csharp
public float InnoEngine.Rendering.RenderClearColor.g { get; }
```

Gets the green channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L146).

## `r`

<a id="api-f0e2a2afd21685ee"></a>
<!-- api: P:InnoEngine.Rendering.RenderClearColor.r 7e0a2073d0c2f53cfc3045287a626cab3a20ce72e17e2ba099a57b57266e05da -->

```csharp
public float InnoEngine.Rendering.RenderClearColor.r { get; }
```

Gets the red channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L141).
