---
title: "ShaderGraphInputSettings"
description: "Reference for ShaderGraphInputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.c55e8d8f995224cb
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphInputSettings`

This reference describes `ShaderGraphInputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a1debd79f724fe27) | Method |
| [`CreateBinding`](#api-d9c88a613c34bdab) | Method |
| [`id`](#api-7e367f69eec39ea1) | Property |
| [`kind`](#api-78511e33d4ee09f7) | Property |
| [`location`](#api-ba668626a8c44aa0) | Property |
| [`semantic`](#api-f0a13ae09f1f50a9) | Property |
| [`type`](#api-adba0f9bda63b724) | Property |

## Type declaration

<a id="api-c55e8d8f995224cb"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings 30c440c6aad49e97a786126f5dbc1eae1cc74c37582a81cef9a458d64b411b4a -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphInputSettings : InnoEngine.Serialization.ISerializable
```

Stores a stage input node's logical interface without native names or GPU handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L285).

## `#ctor`

<a id="api-a1debd79f724fe27"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.#ctor 4c01389bf9f42da626716f513ac69c62f90cbcfb4f34ba34119e199191bb5fed -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.ShaderGraphInputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L285).

## `CreateBinding`

<a id="api-d9c88a613c34bdab"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.CreateBinding 4f7952deeb0c090012a68cb1d7b5111668aae3d8e30808659e18c0bfaaa62775 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrStageInput InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.CreateBinding()
```

Validates the persisted descriptor and freezes its stage binding.

**Returns:** An immutable backend-neutral input binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L314).

## `id`

<a id="api-7e367f69eec39ea1"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.id ced9e4b032b99e72e81e85303a95676376646c43244d53ca299576142138b6cd -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.id { get; set; }
```

Gets or sets the stable logical binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L290).

## `kind`

<a id="api-78511e33d4ee09f7"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.kind a478ba4fa74eae74a4a9409ecc0bd72630647197930afa0206dff59191c4e90e -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrInputKind InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.kind { get; set; }
```

Gets or sets the stage input category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L298).

## `location`

<a id="api-ba668626a8c44aa0"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.location 7f25a1c0e18d3835d314003d1834a968a6ff05d303599ee6515c647bad66b99d -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.location { get; set; }
```

Gets or sets the interface index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L306).

## `semantic`

<a id="api-f0a13ae09f1f50a9"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.semantic 35e7a31457ab08d67bd8f6f026aba6d5faae886bc318dfddd2f10ef12b7530b3 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.semantic { get; set; }
```

Gets or sets the target semantic, not a native expression.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L302).

## `type`

<a id="api-adba0f9bda63b724"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.type be257117c5253b4f52127d05682bfd7a21a3e9952699554e39040276e837f5e9 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType InnoEditor.Rendering.Shaders.ShaderGraphInputSettings.type { get; set; }
```

Gets or sets the complete neutral type descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L294).
