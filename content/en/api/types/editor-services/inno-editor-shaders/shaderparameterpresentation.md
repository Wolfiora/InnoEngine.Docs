---
title: "ShaderParameterPresentation"
description: "Reference for ShaderParameterPresentation in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.e23a4c6f42c32517
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `ShaderParameterPresentation`

This reference describes `ShaderParameterPresentation` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5916bcf5fdb517f3) | Method |
| [`Read`](#api-c7993f1d4d510246) | Method |
| [`Write`](#api-c8029dc6f11147fd) | Method |
| [`description`](#api-fd0476de74326342) | Property |
| [`group`](#api-0d132986831bde97) | Property |
| [`hasRange`](#api-eb971e371f6ecc11) | Property |
| [`maximum`](#api-76f06870eba00aa9) | Property |
| [`minimum`](#api-f2b0e4d2b1208ef3) | Property |
| [`visible`](#api-9cc39cd1353549be) | Property |

## Type declaration

<a id="api-e23a4c6f42c32517"></a>
<!-- api: T:Inno.Editor.Shaders.ShaderParameterPresentation bf055a131ee27d3be6127dbce06f81fd4836b3d77def0cb7bb3c7c49cdaad273 -->

```csharp
public sealed class Inno.Editor.Shaders.ShaderParameterPresentation : Inno.Core.Serialization.ISerializable
```

Stores Editor-only parameter presentation by stable binding identity in the Shader's authoring graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L12).

## `#ctor`

<a id="api-5916bcf5fdb517f3"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderParameterPresentation.#ctor e4bb5c5c18bdc71df51dcb600dace4c21ddf7e2feb3675304fb17bac97e1df2c -->

```csharp
public Inno.Editor.Shaders.ShaderParameterPresentation.ShaderParameterPresentation()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L12).

## `Read`

<a id="api-c7993f1d4d510246"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderParameterPresentation.Read(Inno.Core.Graphs.GraphDocument,Inno.Rendering.ShaderPropertyId,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) aec7eac40d00ef2d240e16e021a6c100b5e20f1d87dd85cf0024f6f5c53b7e17 -->

```csharp
public static Inno.Editor.Shaders.ShaderParameterPresentation Inno.Editor.Shaders.ShaderParameterPresentation.Read(Inno.Core.Graphs.GraphDocument graph, Inno.Rendering.ShaderPropertyId propertyId, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads detached presentation for one binding, defaulting only when no presentation was authored.

**Parameter `graph`:** Authoring graph, not a runtime Shader program.

**Parameter `propertyId`:** Stable parameter identity shared by all its nodes.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Returns:** The authored presentation, or ordinary visible, unbounded defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L59).

## `Write`

<a id="api-c8029dc6f11147fd"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderParameterPresentation.Write(Inno.Core.Graphs.GraphDocument,Inno.Rendering.ShaderPropertyId,Inno.Editor.Shaders.ShaderParameterPresentation,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 2149ba4eee00a0f7cd562ab135733f0ea4753816e240d7f0afbfee6a5ebc0fea -->

```csharp
public static void Inno.Editor.Shaders.ShaderParameterPresentation.Write(Inno.Core.Graphs.GraphDocument graph, Inno.Rendering.ShaderPropertyId propertyId, Inno.Editor.Shaders.ShaderParameterPresentation presentation, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Writes presentation to a detached graph without changing any default, Material, or compiled program.

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Throws `System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L92).

## `description`

<a id="api-fd0476de74326342"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.description 21f76d15b10c89b3636e512554731ba98162fff735f9404c80aebb776edef66d -->

```csharp
public string Inno.Editor.Shaders.ShaderParameterPresentation.description { get; set; }
```

Gets or sets the hover description without adding a permanent paragraph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L23).

## `group`

<a id="api-0d132986831bde97"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.group aec8914f4237a9e3104b0974134deb6f88a282ffb170940825c89b9e7b68aaa3 -->

```csharp
public string Inno.Editor.Shaders.ShaderParameterPresentation.group { get; set; }
```

Gets or sets the Material Inspector section; empty uses the standard Parameters section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L19).

## `hasRange`

<a id="api-eb971e371f6ecc11"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.hasRange fa225d762d527e6de8eda33abc506ca93bfdb87ccc930e862779f0e04f29ae4a -->

```csharp
public bool Inno.Editor.Shaders.ShaderParameterPresentation.hasRange { get; set; }
```

Gets or sets whether a scalar Float control uses the declared editing bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L31).

## `maximum`

<a id="api-76f06870eba00aa9"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.maximum e58585bd246ba115c3a6d0d0722de27f7757a3d11ab7a8071cf6f58cc0b8fa74 -->

```csharp
public double Inno.Editor.Shaders.ShaderParameterPresentation.maximum { get; set; }
```

Gets or sets the inclusive editing maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L39).

## `minimum`

<a id="api-f2b0e4d2b1208ef3"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.minimum 58f04d36948dc7ca2478047dd1ea776fb2be837c333165119a7be272d6b5afec -->

```csharp
public double Inno.Editor.Shaders.ShaderParameterPresentation.minimum { get; set; }
```

Gets or sets the inclusive editing minimum; existing values are not changed by presentation metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L35).

## `visible`

<a id="api-9cc39cd1353549be"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderParameterPresentation.visible 77ef7951f58952276b51f602d1a30c4c4cb00ac412fe733be08030658af8a815 -->

```csharp
public bool Inno.Editor.Shaders.ShaderParameterPresentation.visible { get; set; }
```

Gets or sets whether this Material-owned parameter appears in ordinary Material Inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L27).
