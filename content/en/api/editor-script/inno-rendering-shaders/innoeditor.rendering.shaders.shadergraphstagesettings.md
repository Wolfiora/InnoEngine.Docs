---
title: "ShaderGraphStageSettings"
description: "Reference for ShaderGraphStageSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.78486ae0125d7167
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphStageSettings`

This reference describes `ShaderGraphStageSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5cd32f2402a410ac) | Method |
| [`outputs`](#api-26c5dd5f76cda51c) | Property |
| [`stage`](#api-f7d9de7771453000) | Property |
| [`threadsX`](#api-1c7913c953b208ad) | Property |
| [`threadsY`](#api-66583bf7442d9997) | Property |
| [`threadsZ`](#api-e3eb11b3c9ca28db) | Property |

## Type declaration

<a id="api-78486ae0125d7167"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings cbe00c31f332fd7c3ddd7faf93f8cacf76f99c65432922bb18e97f5255642353 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphStageSettings : InnoEngine.Serialization.ISerializable
```

Stores one stage's explicit output interface and compute dimensions inside its output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L235).

## `#ctor`

<a id="api-5cd32f2402a410ac"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.#ctor 40c9922f7a2b6d7922f4ddd1f7e2220b35f3b75910ef570cf80e8b7825ebcf35 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.ShaderGraphStageSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L235).

## `outputs`

<a id="api-26c5dd5f76cda51c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.outputs f8a3ed50c0fe354e390de8a217bd8bbcf1c28416b19c3a6455c89388d50be4ce -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphOutput[] InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.outputs { get; set; }
```

Gets or sets output ports and their GPU destinations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L244).

## `stage`

<a id="api-f7d9de7771453000"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.stage ac9d503270fa3681a63ac09d192896fee1d73f729f74864dc8ca751f4139a864 -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.stage { get; set; }
```

Gets or sets the programmable stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L240).

## `threadsX`

<a id="api-1c7913c953b208ad"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsX eff343d336f2ae454cc829f497229c6aec0c1abd99ab01a269b469c0fd5f4153 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsX { get; set; }
```

Gets or sets compute workgroup width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L248).

## `threadsY`

<a id="api-66583bf7442d9997"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsY 23de8e079900f140ac4e58bc75edb8f55ecfac27621024fa008267edca2718fe -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsY { get; set; }
```

Gets or sets compute workgroup height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L252).

## `threadsZ`

<a id="api-e3eb11b3c9ca28db"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsZ 3fc9e3dea2b02fa4ece9ade3d4c2a568e926411b2a9758d05f5cd34780831445 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphStageSettings.threadsZ { get; set; }
```

Gets or sets compute workgroup depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L256).
