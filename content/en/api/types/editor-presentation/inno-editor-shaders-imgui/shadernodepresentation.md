---
title: "ShaderNodePresentation"
description: "Reference for ShaderNodePresentation in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.6e02ec22df922918
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderNodePresentation`

This reference describes `ShaderNodePresentation` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Shaders.ImGui.ShaderNodePresentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f0dcd3e2fd14d8a) | Method |
| [`Equals`](#api-6ae8bf4ba5f54ffb) | Method |
| [`Equals`](#api-55751ba560388d4d) | Method |
| [`GetHashCode`](#api-09ad5af7eb6fd55e) | Method |
| [`op_Equality`](#api-f977f6b568b7700b) | Method |
| [`op_Inequality`](#api-300445033f8c0423) | Method |
| [`ToString`](#api-16442b5b63572732) | Method |
| [`createOrder`](#api-ee464db157391efd) | Property |
| [`createPath`](#api-96637c7bcb5de9bb) | Property |
| [`displayName`](#api-d1396ce06a5585ea) | Property |
| [`separatorBefore`](#api-17c4fa62a234c44e) | Property |

## Type declaration

<a id="api-6e02ec22df922918"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderNodePresentation 928d03a9aa0231ccac01e1c342242bdc9f00a2e061285daf3f3db9013f3abcae -->

```csharp
public readonly record struct Inno.Editor.Shaders.ImGui.ShaderNodePresentation : System.IEquatable<Inno.Editor.Shaders.ImGui.ShaderNodePresentation>
```

Immutable authoring presentation contributed for one Shader node definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `#ctor`

<a id="api-3f0dcd3e2fd14d8a"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.#ctor(System.String,System.String,System.Int32,System.Boolean) cc2e527d703839dfd5bf0b7ff9c71cffa526eea23a713ebbc89783c2198b6a31 -->

```csharp
public Inno.Editor.Shaders.ImGui.ShaderNodePresentation.ShaderNodePresentation(string displayName, string createPath, int createOrder, bool separatorBefore)
```

Creates presentation metadata for one Shader node definition.

**Parameter `displayName`:** Optional artist-facing node name.

**Parameter `createPath`:** Optional slash-delimited creation-menu path.

**Parameter `createOrder`:** Stable ordering value within the creation menu.

**Parameter `separatorBefore`:** Whether the contributed group starts a visual section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L90).

## `Equals`

<a id="api-6ae8bf4ba5f54ffb"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.Equals(Inno.Editor.Shaders.ImGui.ShaderNodePresentation) 533c7e8db03868ecca60c6a1d0fcdb134c7660f9e3711448ad4b5fe0c0340742 -->

```csharp
public bool Inno.Editor.Shaders.ImGui.ShaderNodePresentation.Equals(Inno.Editor.Shaders.ImGui.ShaderNodePresentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `Equals`

<a id="api-55751ba560388d4d"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.Equals(System.Object) c26059b1e1410b36db9496f4925a89be672adad0ad3b73d5e0a8d51c00508f0f -->

```csharp
public override bool Inno.Editor.Shaders.ImGui.ShaderNodePresentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `GetHashCode`

<a id="api-09ad5af7eb6fd55e"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.GetHashCode 5337a5f7b1269adc34fe999e8bab568e07367e628d602997be463f293eec3b2e -->

```csharp
public override int Inno.Editor.Shaders.ImGui.ShaderNodePresentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `op_Equality`

<a id="api-f977f6b568b7700b"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.op_Equality(Inno.Editor.Shaders.ImGui.ShaderNodePresentation,Inno.Editor.Shaders.ImGui.ShaderNodePresentation) 213885d3390cfbfffd825646363b4f2058d1ec3312c2aa3c1e15dba763a32d79 -->

```csharp
public static bool Inno.Editor.Shaders.ImGui.ShaderNodePresentation.operator ==(Inno.Editor.Shaders.ImGui.ShaderNodePresentation left, Inno.Editor.Shaders.ImGui.ShaderNodePresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `op_Inequality`

<a id="api-300445033f8c0423"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.op_Inequality(Inno.Editor.Shaders.ImGui.ShaderNodePresentation,Inno.Editor.Shaders.ImGui.ShaderNodePresentation) 667ecdbaeecf99d42260d836b192ce1cd6a8b80c4d9293a93eae2b9b2d9b247f -->

```csharp
public static bool Inno.Editor.Shaders.ImGui.ShaderNodePresentation.operator !=(Inno.Editor.Shaders.ImGui.ShaderNodePresentation left, Inno.Editor.Shaders.ImGui.ShaderNodePresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `ToString`

<a id="api-16442b5b63572732"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.ToString acd4c52789a479f76dd029284149e78f6ab7e3a5ad86a0fe02b2cadbeb3665c5 -->

```csharp
public override string Inno.Editor.Shaders.ImGui.ShaderNodePresentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L73).

## `createOrder`

<a id="api-ee464db157391efd"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.createOrder b55290de513de58aaf2985eb7d35b0bfd7842095593c82cec16688398b9049a9 -->

```csharp
public int Inno.Editor.Shaders.ImGui.ShaderNodePresentation.createOrder { get; }
```

Gets the stable ordering value within the creation menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L113).

## `createPath`

<a id="api-96637c7bcb5de9bb"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.createPath c88baf63eda71e94c6251cc18d48bde868ae2655fa748c73b41bcf345e9a2887 -->

```csharp
public string Inno.Editor.Shaders.ImGui.ShaderNodePresentation.createPath { get; }
```

Gets the optional slash-delimited creation-menu path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L109).

## `displayName`

<a id="api-d1396ce06a5585ea"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.displayName a582beec1b2a626e484a5d9106dcad3e5341d7e7d7e31be7d5c5be380795573e -->

```csharp
public string Inno.Editor.Shaders.ImGui.ShaderNodePresentation.displayName { get; }
```

Gets the optional artist-facing node name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L105).

## `separatorBefore`

<a id="api-17c4fa62a234c44e"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodePresentation.separatorBefore 7c588e51329f73c3f602da3d0e5e1bb40973863a9ac06ae6eb041d9c8f8cd634 -->

```csharp
public bool Inno.Editor.Shaders.ImGui.ShaderNodePresentation.separatorBefore { get; }
```

Gets whether the contributed group starts a visual section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L117).
