---
title: "ShaderSourceFile"
description: "Reference for ShaderSourceFile in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.27768f2ed216c4cb
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceFile`

This reference describes `ShaderSourceFile` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceFile>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c170b98e3d4ee1c8) | Method |
| [`Deconstruct`](#api-520640d9e7245c48) | Method |
| [`Equals`](#api-51ed6c274bbc0c38) | Method |
| [`Equals`](#api-29ce76655237b12b) | Method |
| [`GetHashCode`](#api-7eb4dc461454eacb) | Method |
| [`op_Equality`](#api-68c02423a4e98dfb) | Method |
| [`op_Inequality`](#api-f03e7f8d0f347c4b) | Method |
| [`ToString`](#api-1a7674fd06636f1e) | Method |
| [`assetPath`](#api-9f3be30f225128ae) | Property |
| [`text`](#api-fbcf04b75d9d2f5f) | Property |

## Type declaration

<a id="api-27768f2ed216c4cb"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceFile 9337aa11c414999bc5590b26f25ae325b6e6ffc9a98974bc21f0c3de0c658d8b -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceFile : System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourceFile>
```

Contains immutable source text supplied by the asset candidate's controlled source resolver.

**Parameter `assetPath`:** Resolved asset mount path.

**Parameter `text`:** UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `#ctor`

<a id="api-c170b98e3d4ee1c8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.#ctor(System.String,System.String) 576ccd1496746c0ced55a4f6718db7ef49fa729a38514fbab3aa1ce05707c9de -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFile.ShaderSourceFile(string assetPath, string text)
```

Contains immutable source text supplied by the asset candidate's controlled source resolver.

**Parameter `assetPath`:** Resolved asset mount path.

**Parameter `text`:** UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Deconstruct`

<a id="api-520640d9e7245c48"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.Deconstruct(System.String@,System.String@) a28e55be918bc19a3193bb0a54bac8b76c51ba219c6741882627dfd96b69c4ce -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderSourceFile.Deconstruct(out string assetPath, out string text)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Equals`

<a id="api-51ed6c274bbc0c38"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.Equals(InnoEditor.Rendering.Shaders.ShaderSourceFile) 627569f95f8ee46d3089f16d55f41378758d41b6c9b93265cd16ac44372f2b5c -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceFile.Equals(InnoEditor.Rendering.Shaders.ShaderSourceFile? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Equals`

<a id="api-29ce76655237b12b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.Equals(System.Object) b52024d6cf839147012d201a4b44c105da6cde374845639cd5c0499c342f6eb9 -->

```csharp
public override bool InnoEditor.Rendering.Shaders.ShaderSourceFile.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `GetHashCode`

<a id="api-7eb4dc461454eacb"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.GetHashCode 7517a202f0ed4ef67c6335417daeaf4a802a022f6fe99bf4312e69f3690afe46 -->

```csharp
public override int InnoEditor.Rendering.Shaders.ShaderSourceFile.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `op_Equality`

<a id="api-68c02423a4e98dfb"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.op_Equality(InnoEditor.Rendering.Shaders.ShaderSourceFile,InnoEditor.Rendering.Shaders.ShaderSourceFile) 8d6ecde83a676c0591dbfe264a579238dd8de3e817ac93dbe68e0543b0cd2726 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceFile.operator ==(InnoEditor.Rendering.Shaders.ShaderSourceFile? left, InnoEditor.Rendering.Shaders.ShaderSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `op_Inequality`

<a id="api-f03e7f8d0f347c4b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.op_Inequality(InnoEditor.Rendering.Shaders.ShaderSourceFile,InnoEditor.Rendering.Shaders.ShaderSourceFile) bf46911739ad4ac7d8f8f7fd1ce17bf0ebf615b35c3481cda1ce288ec5a09997 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourceFile.operator !=(InnoEditor.Rendering.Shaders.ShaderSourceFile? left, InnoEditor.Rendering.Shaders.ShaderSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `ToString`

<a id="api-1a7674fd06636f1e"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFile.ToString 26c7aad84f39830bb843dbde29893770db9e1eb8cfe23357f1146703a96b629a -->

```csharp
public override string InnoEditor.Rendering.Shaders.ShaderSourceFile.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `assetPath`

<a id="api-9f3be30f225128ae"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFile.assetPath 181e0694f50799f31090fe9350346faaaae9f343f670ea1997ca8c51a6637323 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceFile.assetPath { get; set; }
```

Resolved asset mount path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L58).

## `text`

<a id="api-fbcf04b75d9d2f5f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFile.text 7dd7b971212721425a96a61cc649cc1bf7c90d7297f872bf62f7ea661a7efbc2 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceFile.text { get; set; }
```

UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L59).
