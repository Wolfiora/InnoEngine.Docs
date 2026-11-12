---
title: "UiVertex"
description: "Reference for UiVertex in Inno.UI."
uid: api.inno.ui.runtime-script.a78f65dc5357e256
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiVertex`

This reference describes `UiVertex` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiVertex>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-17b25626ce7b1682) | Method |
| [`Deconstruct`](#api-18cec6da254aef2c) | Method |
| [`Equals`](#api-15b042b08f436c38) | Method |
| [`Equals`](#api-8659c409713f104c) | Method |
| [`GetHashCode`](#api-668e3657da7c8602) | Method |
| [`op_Equality`](#api-b039409a415039e9) | Method |
| [`op_Inequality`](#api-7fd5a1cbd3e8ad87) | Method |
| [`ToString`](#api-2ba666cc07c50c1f) | Method |
| [`color`](#api-b5752578d34c59b4) | Property |
| [`u`](#api-824911d952eb45e4) | Property |
| [`v`](#api-053e8af25e4137b2) | Property |
| [`x`](#api-156f40fab1b91239) | Property |
| [`y`](#api-a6e9971bdf07d224) | Property |

## Type declaration

<a id="api-a78f65dc5357e256"></a>
<!-- api: T:InnoEngine.UI.UiVertex 2b333f25eaa7f55c59cc3366e30281a832b4cf04f1f0f57b188169dd6224ff2e -->

```csharp
public readonly struct InnoEngine.UI.UiVertex : System.IEquatable<InnoEngine.UI.UiVertex>
```

Describes one vertex in backend-neutral UI draw geometry.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `u`:** The float value used to initialize this instance.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `color`:** The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `#ctor`

<a id="api-17b25626ce7b1682"></a>
<!-- api: M:InnoEngine.UI.UiVertex.#ctor(System.Single,System.Single,System.Single,System.Single,System.UInt32) 1c7e908569aea03eec862416bf31ff127e3d2a65d34e25d15ec6a046767e3bcd -->

```csharp
public InnoEngine.UI.UiVertex.UiVertex(float x, float y, float u, float v, uint color)
```

Describes one vertex in backend-neutral UI draw geometry.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `u`:** The float value used to initialize this instance.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `color`:** The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Deconstruct`

<a id="api-18cec6da254aef2c"></a>
<!-- api: M:InnoEngine.UI.UiVertex.Deconstruct(System.Single@,System.Single@,System.Single@,System.Single@,System.UInt32@) 9ab65c46e32cf862869c057e52d5168513299207839d22d3014ccbd50ae20591 -->

```csharp
public void InnoEngine.UI.UiVertex.Deconstruct(out float x, out float y, out float u, out float v, out uint color)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Equals`

<a id="api-15b042b08f436c38"></a>
<!-- api: M:InnoEngine.UI.UiVertex.Equals(InnoEngine.UI.UiVertex) a090b6dd4df8c73a280886d22006d7204d3d8b25236b3da2ac4a42c132309f8d -->

```csharp
public bool InnoEngine.UI.UiVertex.Equals(InnoEngine.UI.UiVertex other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Equals`

<a id="api-8659c409713f104c"></a>
<!-- api: M:InnoEngine.UI.UiVertex.Equals(System.Object) b2c0551df15491d5c97d0fc57d1549b3793535a51b5d4d2a58d4cdd87d2134c6 -->

```csharp
public override bool InnoEngine.UI.UiVertex.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `GetHashCode`

<a id="api-668e3657da7c8602"></a>
<!-- api: M:InnoEngine.UI.UiVertex.GetHashCode a33a2235b0b24fb9bb40ef44dfc65f4193bd121e7a5ccac0cb8bf229d39fe4a5 -->

```csharp
public override int InnoEngine.UI.UiVertex.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `op_Equality`

<a id="api-b039409a415039e9"></a>
<!-- api: M:InnoEngine.UI.UiVertex.op_Equality(InnoEngine.UI.UiVertex,InnoEngine.UI.UiVertex) ca878d283ec44b453b8b91c352c488f9643c8d90945187e5a928a4b39a427fe1 -->

```csharp
public static bool InnoEngine.UI.UiVertex.operator ==(InnoEngine.UI.UiVertex left, InnoEngine.UI.UiVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `op_Inequality`

<a id="api-7fd5a1cbd3e8ad87"></a>
<!-- api: M:InnoEngine.UI.UiVertex.op_Inequality(InnoEngine.UI.UiVertex,InnoEngine.UI.UiVertex) 7013b29c4ed7178728b7a7a692a4f2ee12d4f34a775a0fdb9b754c6991d45bc3 -->

```csharp
public static bool InnoEngine.UI.UiVertex.operator !=(InnoEngine.UI.UiVertex left, InnoEngine.UI.UiVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `ToString`

<a id="api-2ba666cc07c50c1f"></a>
<!-- api: M:InnoEngine.UI.UiVertex.ToString bbfbbd3a1e233d82c86835abc74a1da21a09180cb87fafb07cfa29fdc2de99a4 -->

```csharp
public override string InnoEngine.UI.UiVertex.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `color`

<a id="api-b5752578d34c59b4"></a>
<!-- api: P:InnoEngine.UI.UiVertex.color 45567b00a3bb3455de2ab8f77799ce5f4083f2d5b126cfcbfddcf501e0ebf213 -->

```csharp
public uint InnoEngine.UI.UiVertex.color { get; set; }
```

The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L30).

## `u`

<a id="api-824911d952eb45e4"></a>
<!-- api: P:InnoEngine.UI.UiVertex.u d21702cc550f82f87d5f9133a6961d4f81a2b6ad2950e8f62a904bce76a4e8a9 -->

```csharp
public float InnoEngine.UI.UiVertex.u { get; set; }
```

The float value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L28).

## `v`

<a id="api-053e8af25e4137b2"></a>
<!-- api: P:InnoEngine.UI.UiVertex.v 257bdf8fb2eb669d9a5a5d7938ee83690e2089a6edadda8bd131a62b34499a8e -->

```csharp
public float InnoEngine.UI.UiVertex.v { get; set; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L29).

## `x`

<a id="api-156f40fab1b91239"></a>
<!-- api: P:InnoEngine.UI.UiVertex.x f60795d432495d44a81034e569896c16896f5e741ae1087e351375f723ba2737 -->

```csharp
public float InnoEngine.UI.UiVertex.x { get; set; }
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L26).

## `y`

<a id="api-a6e9971bdf07d224"></a>
<!-- api: P:InnoEngine.UI.UiVertex.y ca85b1af3fd1e773036238783c5a168a263fcc3ca82fc6b6672a67425edc7717 -->

```csharp
public float InnoEngine.UI.UiVertex.y { get; set; }
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L27).
