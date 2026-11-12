---
title: "ShaderPropertyType"
description: "Reference for ShaderPropertyType in Inno.Rendering."
uid: api.inno.rendering.runtime-script.eb7264955ebe0f7f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderPropertyType`

This reference describes `ShaderPropertyType` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Buffer`](#api-b1cf998528348f76) | Field |
| [`Color`](#api-2fb1bd114b27ce97) | Field |
| [`Float`](#api-9ab123eab26ddd53) | Field |
| [`Matrix4x4`](#api-4683f55deb6af7ad) | Field |
| [`Texture2D`](#api-4538c7b6d6686ee2) | Field |
| [`Texture2DArray`](#api-33b378d1db4924e0) | Field |
| [`Texture3D`](#api-8b7e464a89a9c81a) | Field |
| [`TextureCube`](#api-47f34bd967ba768d) | Field |
| [`Vector2`](#api-bf2f132c0eabb0de) | Field |
| [`Vector3`](#api-6d0703ed1455f16b) | Field |
| [`Vector4`](#api-b8a5098afb0de8af) | Field |

## Type declaration

<a id="api-eb7264955ebe0f7f"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPropertyType 179847a4dec68230fff4fb87786f7e89a04134aec5b0540a39336a9fdb00a0f0 -->

```csharp
public enum InnoEngine.Rendering.ShaderPropertyType : int
```

Identifies an artist-facing shader property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L14).

## `Buffer`

<a id="api-b1cf998528348f76"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Buffer dd94b734a12ed916b677b046bf625627191f3de1062d194c4087b746aa8bb055 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Buffer = 10
```

Read-only or read-write buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L59).

## `Color`

<a id="api-2fb1bd114b27ce97"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Color 5bae12d6adfde982a28221837cebf3e0e7f8141af16729afe3dc9431226b1c25 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Color = 4
```

Linear RGBA color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L35).

## `Float`

<a id="api-9ab123eab26ddd53"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Float 54e4c63df441e1666ec28e3520ef5a8cd3b88927994edffd5682dd0b66beab82 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Float = 0
```

Scalar floating-point value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L19).

## `Matrix4x4`

<a id="api-4683f55deb6af7ad"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Matrix4x4 2b282096ead579ad20f11b036bb34d07b76afea46f13b30e2bd10f9d97d42f70 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Matrix4x4 = 5
```

Four-by-four matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L39).

## `Texture2D`

<a id="api-4538c7b6d6686ee2"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Texture2D 6ea1398c4ca4821aacbf06742b4474d02aa1dd8f951aa5967b8a23664c87950c -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Texture2D = 6
```

Two-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L43).

## `Texture2DArray`

<a id="api-33b378d1db4924e0"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Texture2DArray 423fd864a47518fabe46b0dd5d1d6218c0213a95a0c307032bff9324273fafc3 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Texture2DArray = 7
```

Layered two-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L47).

## `Texture3D`

<a id="api-8b7e464a89a9c81a"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Texture3D 975f76881b4331547513694a67d9c5d91a1bc5c7185c67ea2af4b61f4f5f3238 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Texture3D = 8
```

Three-dimensional volume texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L51).

## `TextureCube`

<a id="api-47f34bd967ba768d"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.TextureCube 32ace69710e922c697fb2539172f4720cc080c0638e13ab5f2ac9b85829f685e -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.TextureCube = 9
```

Cube texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L55).

## `Vector2`

<a id="api-bf2f132c0eabb0de"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Vector2 18631ce658f5f69493358445accfed357e7580bee0e00bf712ee6494e01ef083 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Vector2 = 1
```

Two-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L23).

## `Vector3`

<a id="api-6d0703ed1455f16b"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Vector3 9354c63daf56c48a90849e567e50fd75cc26fe286b88ea72f7dbe9705da168e2 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Vector3 = 2
```

Three-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L27).

## `Vector4`

<a id="api-b8a5098afb0de8af"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyType.Vector4 ad7341e26f865dd2a228d445cd6199c3441cc33cc17565acbec57e4a190a6b87 -->

```csharp
InnoEngine.Rendering.ShaderPropertyType.Vector4 = 3
```

Four-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L31).
