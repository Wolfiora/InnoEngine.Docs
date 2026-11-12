---
title: "ShaderSourcePosition"
description: "Reference for ShaderSourcePosition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.fafe92232e214a10
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourcePosition`

This reference describes `ShaderSourcePosition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourcePosition>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc55995c74ef1d10) | Method |
| [`Deconstruct`](#api-39df6172b890f1b4) | Method |
| [`Equals`](#api-e8bc14f718a51916) | Method |
| [`Equals`](#api-27eb2a18dea2f2fb) | Method |
| [`GetHashCode`](#api-2658fbc3419969a2) | Method |
| [`op_Equality`](#api-d5c78ca6f2edfa21) | Method |
| [`op_Inequality`](#api-f2782c4683171eea) | Method |
| [`ToString`](#api-400d4526cabfec40) | Method |
| [`assetPath`](#api-ba7e7d8815900f91) | Property |
| [`column`](#api-7140557a87ffe4c7) | Property |
| [`line`](#api-59e11ad48c952842) | Property |

## Type declaration

<a id="api-fafe92232e214a10"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourcePosition 6239daad2816004f6abbd93f0c873c5ebba53fd2f8f2c54bc649014a8b044a58 -->

```csharp
public readonly struct InnoEditor.Rendering.Shaders.ShaderSourcePosition : System.IEquatable<InnoEditor.Rendering.Shaders.ShaderSourcePosition>
```

Identifies an original source position, not a generated temporary compiler filename.

**Parameter `assetPath`:** Source path in the current asset mount.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `#ctor`

<a id="api-dc55995c74ef1d10"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.#ctor(System.String,System.Int32,System.Int32) e3eb9ef0290ea8cdb40f9ded3abeb40819131d476937ef4cafd0e806d1cb3a2d -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourcePosition.ShaderSourcePosition(string assetPath, int line, int column)
```

Identifies an original source position, not a generated temporary compiler filename.

**Parameter `assetPath`:** Source path in the current asset mount.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Deconstruct`

<a id="api-39df6172b890f1b4"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.Deconstruct(System.String@,System.Int32@,System.Int32@) e2c29512a043ee3d688205a35054bdf905c9db5f8fdc6593caae306c12967dd4 -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderSourcePosition.Deconstruct(out string assetPath, out int line, out int column)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Equals`

<a id="api-e8bc14f718a51916"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.Equals(InnoEditor.Rendering.Shaders.ShaderSourcePosition) b6d12824a3f78072c8272b54969072846f004dbe0ff19cbce71245d15de13eb4 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourcePosition.Equals(InnoEditor.Rendering.Shaders.ShaderSourcePosition other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Equals`

<a id="api-27eb2a18dea2f2fb"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.Equals(System.Object) f444a7d3481ec0d19fd050e61a766306b99f07a9b581b3627e9b27b3f203a4c5 -->

```csharp
public override bool InnoEditor.Rendering.Shaders.ShaderSourcePosition.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `GetHashCode`

<a id="api-2658fbc3419969a2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.GetHashCode 8ce105b5c88f4651b7af69664ef4458bf03965f0dcc9b5c0746074f4fbb70893 -->

```csharp
public override int InnoEditor.Rendering.Shaders.ShaderSourcePosition.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `op_Equality`

<a id="api-d5c78ca6f2edfa21"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.op_Equality(InnoEditor.Rendering.Shaders.ShaderSourcePosition,InnoEditor.Rendering.Shaders.ShaderSourcePosition) 36daf59f7f08d113abc387df08e8f2db7cdaa1ad1df992c6d09527426c03f350 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourcePosition.operator ==(InnoEditor.Rendering.Shaders.ShaderSourcePosition left, InnoEditor.Rendering.Shaders.ShaderSourcePosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `op_Inequality`

<a id="api-f2782c4683171eea"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.op_Inequality(InnoEditor.Rendering.Shaders.ShaderSourcePosition,InnoEditor.Rendering.Shaders.ShaderSourcePosition) 943bfb20ac97cb79fd385670627b7bdeb5006d3039fa8d8364e6e4a272ed149d -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderSourcePosition.operator !=(InnoEditor.Rendering.Shaders.ShaderSourcePosition left, InnoEditor.Rendering.Shaders.ShaderSourcePosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `ToString`

<a id="api-400d4526cabfec40"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourcePosition.ToString b8acbf20fcd2c5448070e71b5d22445dae38b4f7ec4661e1a71a0ff373a2bb40 -->

```csharp
public override string InnoEditor.Rendering.Shaders.ShaderSourcePosition.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `assetPath`

<a id="api-ba7e7d8815900f91"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourcePosition.assetPath 404be5eb4ae514d5d4098aca3eebe6d577955507d95db78e6f2e1726ff9762ae -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourcePosition.assetPath { get; set; }
```

Source path in the current asset mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L21).

## `column`

<a id="api-7140557a87ffe4c7"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourcePosition.column f6085bdfcc49a39baccc02318794df65fe9345e48f4624c132560ad4e0fbf361 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderSourcePosition.column { get; set; }
```

One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L23).

## `line`

<a id="api-59e11ad48c952842"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourcePosition.line 41a283da9d80991c01a468729061d395ee273155bcb9c7981352b06bb0da47a9 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderSourcePosition.line { get; set; }
```

One-based source line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L22).
