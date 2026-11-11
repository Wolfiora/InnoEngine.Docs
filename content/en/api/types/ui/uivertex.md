---
title: "UiVertex"
description: "Reference for UiVertex in Inno.UI."
uid: api.inno.ui.53981e37451785a0
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiVertex`

This reference describes `UiVertex` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiVertex>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70686e202b32a857) | Method |
| [`Deconstruct`](#api-1b2ce7a50066ed01) | Method |
| [`Equals`](#api-a6b769e150c881b9) | Method |
| [`Equals`](#api-90cccaa0ee72fa94) | Method |
| [`GetHashCode`](#api-20978900bdaa2a9c) | Method |
| [`op_Equality`](#api-c2aa824a24e6ab86) | Method |
| [`op_Inequality`](#api-ffff143e9c2d3f2d) | Method |
| [`ToString`](#api-7718521e226d4fd1) | Method |
| [`color`](#api-197818aeeb1859d0) | Property |
| [`u`](#api-9f78aab721c6b417) | Property |
| [`v`](#api-3286a7009c559745) | Property |
| [`x`](#api-3330e11b9d664a79) | Property |
| [`y`](#api-b75879f6ffefeaec) | Property |

## Type declaration

<a id="api-53981e37451785a0"></a>
<!-- api: T:Inno.UI.UiVertex 97d056f784ddc120d7287765b21ffe5aaaee215b34af5f8a37033f08dec7d5ec -->

```csharp
public readonly record struct Inno.UI.UiVertex : System.IEquatable<Inno.UI.UiVertex>
```

Describes one vertex in backend-neutral UI draw geometry.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `u`:** The float value used to initialize this instance.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `color`:** The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `#ctor`

<a id="api-70686e202b32a857"></a>
<!-- api: M:Inno.UI.UiVertex.#ctor(System.Single,System.Single,System.Single,System.Single,System.UInt32) ee3e7c34038a4d56e5019e78451fe22ace3e7afdc6175fa36cd10c40d3bab64b -->

```csharp
public Inno.UI.UiVertex.UiVertex(float x, float y, float u, float v, uint color)
```

Describes one vertex in backend-neutral UI draw geometry.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `u`:** The float value used to initialize this instance.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `color`:** The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Deconstruct`

<a id="api-1b2ce7a50066ed01"></a>
<!-- api: M:Inno.UI.UiVertex.Deconstruct(System.Single@,System.Single@,System.Single@,System.Single@,System.UInt32@) 06e3e3159c76885bab7eb15ea0379356d31fdaca91d40526d896409b0ba3763e -->

```csharp
public void Inno.UI.UiVertex.Deconstruct(out float x, out float y, out float u, out float v, out uint color)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Equals`

<a id="api-a6b769e150c881b9"></a>
<!-- api: M:Inno.UI.UiVertex.Equals(Inno.UI.UiVertex) e01562f0dec9c75d28b86b69acd32f10510b49ef3cd91fa24142655e34e4f0e3 -->

```csharp
public bool Inno.UI.UiVertex.Equals(Inno.UI.UiVertex other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `Equals`

<a id="api-90cccaa0ee72fa94"></a>
<!-- api: M:Inno.UI.UiVertex.Equals(System.Object) 52db8541664b268a003ece884b2a105c496063aba0fd7933baecdb111ee27ebc -->

```csharp
public override bool Inno.UI.UiVertex.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `GetHashCode`

<a id="api-20978900bdaa2a9c"></a>
<!-- api: M:Inno.UI.UiVertex.GetHashCode b27db223f4ecf11d380dd3d86389d4a3f7e395fdb88cb0940cb05c24ced7ea77 -->

```csharp
public override int Inno.UI.UiVertex.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `op_Equality`

<a id="api-c2aa824a24e6ab86"></a>
<!-- api: M:Inno.UI.UiVertex.op_Equality(Inno.UI.UiVertex,Inno.UI.UiVertex) 40d08563d631d7f9ca400508ff15186f8e88952ad68e6e7ccbda7f269caa8ce9 -->

```csharp
public static bool Inno.UI.UiVertex.operator ==(Inno.UI.UiVertex left, Inno.UI.UiVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `op_Inequality`

<a id="api-ffff143e9c2d3f2d"></a>
<!-- api: M:Inno.UI.UiVertex.op_Inequality(Inno.UI.UiVertex,Inno.UI.UiVertex) 16d45080166eff210bdb376395626557d294204fa864c8e476bc49e7b8464838 -->

```csharp
public static bool Inno.UI.UiVertex.operator !=(Inno.UI.UiVertex left, Inno.UI.UiVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `ToString`

<a id="api-7718521e226d4fd1"></a>
<!-- api: M:Inno.UI.UiVertex.ToString 5834924a78ab345741887954cd675105a8f0cc524392bc112d6c87dd9f9eef09 -->

```csharp
public override string Inno.UI.UiVertex.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L25).

## `color`

<a id="api-197818aeeb1859d0"></a>
<!-- api: P:Inno.UI.UiVertex.color a0c96c3b3d75efa732e49d8805ebf03203644b3f20f46c690e8acdd36699db29 -->

```csharp
public uint Inno.UI.UiVertex.color { get; init; }
```

The uint value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L30).

## `u`

<a id="api-9f78aab721c6b417"></a>
<!-- api: P:Inno.UI.UiVertex.u dbcc1937cf7665342ee0ac13a674df323665b3d050ce021d0d63a80607b4391c -->

```csharp
public float Inno.UI.UiVertex.u { get; init; }
```

The float value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L28).

## `v`

<a id="api-3286a7009c559745"></a>
<!-- api: P:Inno.UI.UiVertex.v bf246e0940de06436a604c6948fe79566cf17626f4a8089e9496d4fe903e937e -->

```csharp
public float Inno.UI.UiVertex.v { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L29).

## `x`

<a id="api-3330e11b9d664a79"></a>
<!-- api: P:Inno.UI.UiVertex.x d155caa8fca38a485da29045a1fa02cbee26c69f8820834198134ea87ff2801f -->

```csharp
public float Inno.UI.UiVertex.x { get; init; }
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L26).

## `y`

<a id="api-b75879f6ffefeaec"></a>
<!-- api: P:Inno.UI.UiVertex.y 4fc9ad4a3839fbca5b941f77e931151dd2b331ee8ad9cc93863d8714b3dd9350 -->

```csharp
public float Inno.UI.UiVertex.y { get; init; }
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L27).
