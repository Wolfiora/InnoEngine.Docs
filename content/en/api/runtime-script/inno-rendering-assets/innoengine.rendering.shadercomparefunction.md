---
title: "ShaderCompareFunction"
description: "Reference for ShaderCompareFunction in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.683cc78307f6820e
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderCompareFunction`

This reference describes `ShaderCompareFunction` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-1536fe6ce1658390) | Field |
| [`Equal`](#api-04f8843c4bc2568c) | Field |
| [`Greater`](#api-e98f9a4315e73fa0) | Field |
| [`GreaterEqual`](#api-54f4e4f5a0add649) | Field |
| [`Less`](#api-f392be01aeddd5e8) | Field |
| [`LessEqual`](#api-b568694159fb8945) | Field |
| [`Never`](#api-c5b1adbc9b20825d) | Field |
| [`NotEqual`](#api-d7a5210abc00e77e) | Field |

## Type declaration

<a id="api-683cc78307f6820e"></a>
<!-- api: T:InnoEngine.Rendering.ShaderCompareFunction f786e82813fe524a028b73b007e0f5b04576e340b5b813e0c93614bf9e42650b -->

```csharp
public enum InnoEngine.Rendering.ShaderCompareFunction : int
```

Selects the comparison used by depth testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L37).

## `Always`

<a id="api-1536fe6ce1658390"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.Always 7c42f5ef81038ff44cf56bd231051905bc8f87a532ce22f55164492daa41a450 -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.Always = 7
```

Always accepts the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L70).

## `Equal`

<a id="api-04f8843c4bc2568c"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.Equal 60651c57bae73c746e39f380625022f90a03170cb9c01136c14003137c4f9a48 -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.Equal = 2
```

Accepts a fragment with an equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L50).

## `Greater`

<a id="api-e98f9a4315e73fa0"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.Greater 54b719adecf22dc39852586247c8e0fbd06bdf798735e7ffcf43169bdc1df491 -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.Greater = 4
```

Accepts a fragment with a greater depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L58).

## `GreaterEqual`

<a id="api-54f4e4f5a0add649"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.GreaterEqual d2836e80db1caf2500c27df18cfdc98c63ffac559d44845a2bd6bf5520fdfa8e -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.GreaterEqual = 6
```

Accepts a fragment with a greater or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L66).

## `Less`

<a id="api-f392be01aeddd5e8"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.Less 206a0a3bfdf2a1fd8ee249e3d56cf7df0c0a5b511b73104c8dbd32e18af65b78 -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.Less = 1
```

Accepts a fragment with a smaller depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L46).

## `LessEqual`

<a id="api-b568694159fb8945"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.LessEqual 56bfcb317773412c86a209a52cb6181a44c4f7fd7a9b24bab29d1d701969f4b1 -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.LessEqual = 3
```

Accepts a fragment with a smaller or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L54).

## `Never`

<a id="api-c5b1adbc9b20825d"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.Never 060a1142f13198116ad438860ff0bc409fc6e3dd1d81731363d203553b5c0f2b -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.Never = 0
```

Always rejects the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L42).

## `NotEqual`

<a id="api-d7a5210abc00e77e"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCompareFunction.NotEqual 2da9e1f5f8f42abcdcfe7bb9fafbb5c4a260e49502d17761d75a36745d7bfb6d -->

```csharp
InnoEngine.Rendering.ShaderCompareFunction.NotEqual = 5
```

Accepts a fragment with a different depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L62).
