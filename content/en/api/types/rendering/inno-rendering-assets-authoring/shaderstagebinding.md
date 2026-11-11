---
title: "ShaderStageBinding"
description: "Reference for ShaderStageBinding in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.fe6c6fcbef1f0bc3
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderStageBinding`

This reference describes `ShaderStageBinding` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.Authoring.ShaderStageBinding>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-86e0823cedf7ae48) | Method |
| [`Deconstruct`](#api-0587b477465da81f) | Method |
| [`Equals`](#api-dd3eb9314ad4ca62) | Method |
| [`Equals`](#api-db0455d07b84e7c0) | Method |
| [`GetHashCode`](#api-da7d798c073a0983) | Method |
| [`op_Equality`](#api-2bc3fc12f3ef102b) | Method |
| [`op_Inequality`](#api-b24d015a02432b70) | Method |
| [`ToString`](#api-787c43f55a7a9b68) | Method |
| [`id`](#api-cc229949e92b785f) | Property |
| [`location`](#api-83a098bea29747bb) | Property |
| [`nativeName`](#api-8cc0fcff47f62bb6) | Property |

## Type declaration

<a id="api-fe6c6fcbef1f0bc3"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderStageBinding 0c2bd9993e5eb8912c8e0570649eeb44ededc1a0f8bffbabb77ca766c1887d9d -->

```csharp
public sealed record Inno.Rendering.Assets.Authoring.ShaderStageBinding : System.IEquatable<Inno.Rendering.Assets.Authoring.ShaderStageBinding>
```

Maps one logical binding to the adapter-generated native name, without exposing a GPU handle.

**Parameter `id`:** Stable logical binding identity from the typed stage.

**Parameter `nativeName`:** Generated name used for reflection and runtime uniform binding.

**Parameter `location`:** Assigned texture slot; uniform locations are resolved by the runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `#ctor`

<a id="api-86e0823cedf7ae48"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.#ctor(System.String,System.String,System.Int32) 5aaefe95527439495ecee27d2a57c0356a2a8bfa8f230ebcbadb204abce3973e -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderStageBinding.ShaderStageBinding(string id, string nativeName, int location)
```

Maps one logical binding to the adapter-generated native name, without exposing a GPU handle.

**Parameter `id`:** Stable logical binding identity from the typed stage.

**Parameter `nativeName`:** Generated name used for reflection and runtime uniform binding.

**Parameter `location`:** Assigned texture slot; uniform locations are resolved by the runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `Deconstruct`

<a id="api-0587b477465da81f"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.Deconstruct(System.String@,System.String@,System.Int32@) 366ae960082e9519d97dc1fb0472760b7d67c5af0733536458626e8063b4fb59 -->

```csharp
public void Inno.Rendering.Assets.Authoring.ShaderStageBinding.Deconstruct(out string id, out string nativeName, out int location)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `Equals`

<a id="api-dd3eb9314ad4ca62"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.Equals(Inno.Rendering.Assets.Authoring.ShaderStageBinding) f58be4bdbc429b75296159baa37a8e17bce50b9b18fbaee1409a56176ce2986b -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderStageBinding.Equals(Inno.Rendering.Assets.Authoring.ShaderStageBinding? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `Equals`

<a id="api-db0455d07b84e7c0"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.Equals(System.Object) 3d217c3ca8b8d49812b5ef84f67cf692b9c379529b2f38e39f3b7c6e4ced2a3f -->

```csharp
public override bool Inno.Rendering.Assets.Authoring.ShaderStageBinding.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `GetHashCode`

<a id="api-da7d798c073a0983"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.GetHashCode 97565e4a40ef48df413eac31beaf45558801ce1b3bd8cb14abf66e83adf48083 -->

```csharp
public override int Inno.Rendering.Assets.Authoring.ShaderStageBinding.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `op_Equality`

<a id="api-2bc3fc12f3ef102b"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.op_Equality(Inno.Rendering.Assets.Authoring.ShaderStageBinding,Inno.Rendering.Assets.Authoring.ShaderStageBinding) 91070642ff365f3402677a79a7b5937a9d0301e37397e572adb8c2a489b6c2bb -->

```csharp
public static bool Inno.Rendering.Assets.Authoring.ShaderStageBinding.operator ==(Inno.Rendering.Assets.Authoring.ShaderStageBinding? left, Inno.Rendering.Assets.Authoring.ShaderStageBinding? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `op_Inequality`

<a id="api-b24d015a02432b70"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.op_Inequality(Inno.Rendering.Assets.Authoring.ShaderStageBinding,Inno.Rendering.Assets.Authoring.ShaderStageBinding) 11ee680bb4b73e4d048ca1a3187a47d5b41fe91cea32ed0c6f12a15c65fd450a -->

```csharp
public static bool Inno.Rendering.Assets.Authoring.ShaderStageBinding.operator !=(Inno.Rendering.Assets.Authoring.ShaderStageBinding? left, Inno.Rendering.Assets.Authoring.ShaderStageBinding? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `ToString`

<a id="api-787c43f55a7a9b68"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageBinding.ToString 70fa520309f9cd97e638ed418d764923bf3835fa18ced070e0630544783be0b3 -->

```csharp
public override string Inno.Rendering.Assets.Authoring.ShaderStageBinding.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L40).

## `id`

<a id="api-cc229949e92b785f"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageBinding.id c4656dd268ee715ce88e1e039e04173117b49220bb345b6969cb7656ee395617 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderStageBinding.id { get; init; }
```

Stable logical binding identity from the typed stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L41).

## `location`

<a id="api-83a098bea29747bb"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageBinding.location f319306a6af96dfca14fe083c5918954b5315a1241f060d367bc1d1cdbe3689a -->

```csharp
public int Inno.Rendering.Assets.Authoring.ShaderStageBinding.location { get; init; }
```

Assigned texture slot; uniform locations are resolved by the runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L43).

## `nativeName`

<a id="api-8cc0fcff47f62bb6"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageBinding.nativeName 7fd237d8ff048e4354d3d2bcbb2d7874dfcf1f7ab622f659a54042aed9edff5e -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderStageBinding.nativeName { get; init; }
```

Generated name used for reflection and runtime uniform binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L42).
