---
title: "RenderVertexFormat"
description: "Reference for RenderVertexFormat in Inno.Rendering."
uid: api.inno.rendering.15a98858ef746e5a
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderVertexFormat`

This reference describes `RenderVertexFormat` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Float1`](#api-6f3bd9e72fe29ae5) | Field |
| [`Float2`](#api-bcf682ab7fed10b4) | Field |
| [`Float3`](#api-7e623ec071e9db95) | Field |
| [`Float4`](#api-270ecdade78a3c7a) | Field |
| [`Half2`](#api-d7950cd58f428b8e) | Field |
| [`Half4`](#api-9d58a120f93d0d07) | Field |
| [`Int16Integer2`](#api-fc74b5d9c742767f) | Field |
| [`Int16Integer4`](#api-42642eaa0e8f875f) | Field |
| [`Int16Normalized2`](#api-db3e301596d7b3b3) | Field |
| [`Int16Normalized4`](#api-8e117395d9409716) | Field |
| [`UInt10Normalized4`](#api-c45faf9891906f58) | Field |
| [`UInt8Integer2`](#api-45f96a8ca928a5b2) | Field |
| [`UInt8Integer4`](#api-a477680502f9c288) | Field |
| [`UInt8Normalized2`](#api-cffc05e43b67c49d) | Field |
| [`UInt8Normalized4`](#api-cedf516b9cb5d69a) | Field |

## Type declaration

<a id="api-15a98858ef746e5a"></a>
<!-- api: T:Inno.Rendering.RenderVertexFormat 52796eec0214f6d7dea11c8c0657c21c4a57f4932744c5353b2b3f883745e649 -->

```csharp
public enum Inno.Rendering.RenderVertexFormat : int
```

Identifies one packed vertex attribute representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L89).

## `Float1`

<a id="api-6f3bd9e72fe29ae5"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Float1 45359b2a20fc49681740d115c5da2160077a9426cbea146b5723111e7dcc2c12 -->

```csharp
Inno.Rendering.RenderVertexFormat.Float1 = 0
```

One 32-bit floating-point component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L94).

## `Float2`

<a id="api-bcf682ab7fed10b4"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Float2 cb111c39c4880db929381830876e50a0e1882b7d64294819f41493a0e8d40bae -->

```csharp
Inno.Rendering.RenderVertexFormat.Float2 = 1
```

Two 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L98).

## `Float3`

<a id="api-7e623ec071e9db95"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Float3 a85145980a49ecbe6e219f62f61d8eb1b87270b06467d5fc347a2f779a6be87d -->

```csharp
Inno.Rendering.RenderVertexFormat.Float3 = 2
```

Three 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L102).

## `Float4`

<a id="api-270ecdade78a3c7a"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Float4 bef7339e3deb7aa84028e5283c1489fb82f4b1a0fbb7c02f28a7fe5bfa5fd435 -->

```csharp
Inno.Rendering.RenderVertexFormat.Float4 = 3
```

Four 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L106).

## `Half2`

<a id="api-d7950cd58f428b8e"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Half2 5791c2378bce9f483be30b6df78fcc1d45b5a08819ea72a0255762ad8e1f9b07 -->

```csharp
Inno.Rendering.RenderVertexFormat.Half2 = 4
```

Two 16-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L110).

## `Half4`

<a id="api-9d58a120f93d0d07"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Half4 36546c23911f21156ea203b81ec629afcd16a9c80c22aabd814ecab1735c7289 -->

```csharp
Inno.Rendering.RenderVertexFormat.Half4 = 5
```

Four 16-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L114).

## `Int16Integer2`

<a id="api-fc74b5d9c742767f"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Int16Integer2 3aa1acbfcdb666ad63505a2fcf038fc4c471e52b185bd7a8469d7180c886a0ce -->

```csharp
Inno.Rendering.RenderVertexFormat.Int16Integer2 = 13
```

Two signed 16-bit components interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L146).

## `Int16Integer4`

<a id="api-42642eaa0e8f875f"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Int16Integer4 8fb44802b46f30ce04ed78d0ec02fec45f22e918bcc1b6142cd3b23a889edbae -->

```csharp
Inno.Rendering.RenderVertexFormat.Int16Integer4 = 14
```

Four signed 16-bit components interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L150).

## `Int16Normalized2`

<a id="api-db3e301596d7b3b3"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Int16Normalized2 919ff274bba2a241ef31284db0ef9fd61f96198864f470108e96d6fde8415cca -->

```csharp
Inno.Rendering.RenderVertexFormat.Int16Normalized2 = 11
```

Two normalized signed 16-bit components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L138).

## `Int16Normalized4`

<a id="api-8e117395d9409716"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.Int16Normalized4 57ee0e0ebb82635ecb02f241bb584b45dd683342caa258f73c2e68ea2eed694e -->

```csharp
Inno.Rendering.RenderVertexFormat.Int16Normalized4 = 12
```

Four normalized signed 16-bit components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L142).

## `UInt10Normalized4`

<a id="api-c45faf9891906f58"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.UInt10Normalized4 ade9ab3bb597e9606f7d29830d309f00eb4058f528a5de609f0e1093ab66111d -->

```csharp
Inno.Rendering.RenderVertexFormat.UInt10Normalized4 = 10
```

Four normalized unsigned components packed into 10:10:10:2 bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L134).

## `UInt8Integer2`

<a id="api-45f96a8ca928a5b2"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.UInt8Integer2 0512fba537fc68bec16ce50dfacf69fb7801fc60120da2fd6480893b5ba57e3b -->

```csharp
Inno.Rendering.RenderVertexFormat.UInt8Integer2 = 9
```

Two unsigned bytes interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L130).

## `UInt8Integer4`

<a id="api-a477680502f9c288"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.UInt8Integer4 57e7a8f05049a72dd1d86e8d0396d073833acc0c7ebbdfda3bf79d8893422148 -->

```csharp
Inno.Rendering.RenderVertexFormat.UInt8Integer4 = 8
```

Four unsigned bytes interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L126).

## `UInt8Normalized2`

<a id="api-cffc05e43b67c49d"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.UInt8Normalized2 c000071dddf2f6c620ed34f7824c49e35145d0663142de02c59210edd64611c2 -->

```csharp
Inno.Rendering.RenderVertexFormat.UInt8Normalized2 = 7
```

Two normalized unsigned bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L122).

## `UInt8Normalized4`

<a id="api-cedf516b9cb5d69a"></a>
<!-- api: F:Inno.Rendering.RenderVertexFormat.UInt8Normalized4 a05f8491e16fd16bf13b0c80cbe7026bdf5e2fe2d3db7ee64a18f417f87b2a97 -->

```csharp
Inno.Rendering.RenderVertexFormat.UInt8Normalized4 = 6
```

Four normalized unsigned bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L118).
