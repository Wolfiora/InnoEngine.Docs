---
title: "RenderStencilFaceState"
description: "Reference for RenderStencilFaceState in Inno.Rendering."
uid: api.inno.rendering.e530a8a5c379cb20
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStencilFaceState`

This reference describes `RenderStencilFaceState` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderStencilFaceState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b014c96485c6e080) | Method |
| [`Equals`](#api-4f163aeb3b0fe02c) | Method |
| [`Equals`](#api-2fc59c4d06a3922a) | Method |
| [`GetHashCode`](#api-847c5bf0dd2b853b) | Method |
| [`op_Equality`](#api-1f53d6f889039141) | Method |
| [`op_Inequality`](#api-0c4a115155f24741) | Method |
| [`ToString`](#api-0ef6c13f56da17ea) | Method |
| [`compare`](#api-ff5ebd3a84eac0e6) | Property |
| [`depthFail`](#api-6d6a0917659eb4d6) | Property |
| [`fail`](#api-3147b811fd278c5a) | Property |
| [`pass`](#api-653fd3a6834961f1) | Property |

## Type declaration

<a id="api-e530a8a5c379cb20"></a>
<!-- api: T:Inno.Rendering.RenderStencilFaceState d9d8616669fb5a30492d44df82ef12d61db5b81331f67130a5366c5a95c2ad5c -->

```csharp
public readonly record struct Inno.Rendering.RenderStencilFaceState : System.IEquatable<Inno.Rendering.RenderStencilFaceState>
```

Describes stencil behavior for one triangle face orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `#ctor`

<a id="api-b014c96485c6e080"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.#ctor(Inno.Rendering.RenderStencilCompare,Inno.Rendering.RenderStencilOperation,Inno.Rendering.RenderStencilOperation,Inno.Rendering.RenderStencilOperation) 5584f4905710e87ed04ee5ed11c4ad4748ab52eac2645516424189d4e75f49b8 -->

```csharp
public Inno.Rendering.RenderStencilFaceState.RenderStencilFaceState(Inno.Rendering.RenderStencilCompare compare, Inno.Rendering.RenderStencilOperation fail, Inno.Rendering.RenderStencilOperation depthFail, Inno.Rendering.RenderStencilOperation pass)
```

Creates one face stencil state.

**Parameter `compare`:** Stencil comparison.

**Parameter `fail`:** Operation after stencil comparison failure.

**Parameter `depthFail`:** Operation after stencil success and depth failure.

**Parameter `pass`:** Operation after stencil and depth success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L105).

## `Equals`

<a id="api-4f163aeb3b0fe02c"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.Equals(Inno.Rendering.RenderStencilFaceState) 75505a08156977d1d66fd51a28404cee018dc21f46110f48223c45d8a6566e81 -->

```csharp
public bool Inno.Rendering.RenderStencilFaceState.Equals(Inno.Rendering.RenderStencilFaceState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `Equals`

<a id="api-2fc59c4d06a3922a"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.Equals(System.Object) 026c2cd27f4bdc9829309fcc81e096d0e4af02dedf91b940445fd02dc8d243d5 -->

```csharp
public override bool Inno.Rendering.RenderStencilFaceState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `GetHashCode`

<a id="api-847c5bf0dd2b853b"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.GetHashCode e071ef0a392b3e58767d89d3a1a6ab3d765deb241fe4dfcad2abd5634dccfa19 -->

```csharp
public override int Inno.Rendering.RenderStencilFaceState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `op_Equality`

<a id="api-1f53d6f889039141"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.op_Equality(Inno.Rendering.RenderStencilFaceState,Inno.Rendering.RenderStencilFaceState) 7480c5097d910b3976ae53fc27251859f47a09de8380ac458e345cf7b5a2594f -->

```csharp
public static bool Inno.Rendering.RenderStencilFaceState.operator ==(Inno.Rendering.RenderStencilFaceState left, Inno.Rendering.RenderStencilFaceState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `op_Inequality`

<a id="api-0c4a115155f24741"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.op_Inequality(Inno.Rendering.RenderStencilFaceState,Inno.Rendering.RenderStencilFaceState) 3e473f04f7c5e48156c73f6d5a309dabb975675f3134b8de2bcd0f42ce4b1765 -->

```csharp
public static bool Inno.Rendering.RenderStencilFaceState.operator !=(Inno.Rendering.RenderStencilFaceState left, Inno.Rendering.RenderStencilFaceState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `ToString`

<a id="api-0ef6c13f56da17ea"></a>
<!-- api: M:Inno.Rendering.RenderStencilFaceState.ToString 9acc2da760e0ba699909ab77c63ad02f4cb9a19258be5814dc14f3a74a50321c -->

```csharp
public override string Inno.Rendering.RenderStencilFaceState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `compare`

<a id="api-ff5ebd3a84eac0e6"></a>
<!-- api: P:Inno.Rendering.RenderStencilFaceState.compare 6cb8c6d273375cffc70b5342fc6af070692c2610c63470b94d082a2229290ffb -->

```csharp
public Inno.Rendering.RenderStencilCompare Inno.Rendering.RenderStencilFaceState.compare { get; }
```

Gets stencil comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L120).

## `depthFail`

<a id="api-6d6a0917659eb4d6"></a>
<!-- api: P:Inno.Rendering.RenderStencilFaceState.depthFail 9f7beb1a13d5b192b5f294373667d27dd12842615b3a372855fc30ae210324fe -->

```csharp
public Inno.Rendering.RenderStencilOperation Inno.Rendering.RenderStencilFaceState.depthFail { get; }
```

Gets the depth-failure operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L130).

## `fail`

<a id="api-3147b811fd278c5a"></a>
<!-- api: P:Inno.Rendering.RenderStencilFaceState.fail f4390737ec5f4d7e73dcf9922786b385b4d93802439580f32d077967dc26f41e -->

```csharp
public Inno.Rendering.RenderStencilOperation Inno.Rendering.RenderStencilFaceState.fail { get; }
```

Gets the stencil-failure operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L125).

## `pass`

<a id="api-653fd3a6834961f1"></a>
<!-- api: P:Inno.Rendering.RenderStencilFaceState.pass 6ad0cc7424722ca26cc2251abfd5ba3449b78f07cf35c49672a083d9c481ceb1 -->

```csharp
public Inno.Rendering.RenderStencilOperation Inno.Rendering.RenderStencilFaceState.pass { get; }
```

Gets the complete-pass operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L135).
