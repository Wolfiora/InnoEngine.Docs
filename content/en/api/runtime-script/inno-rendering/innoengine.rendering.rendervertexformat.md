---
title: "RenderVertexFormat"
description: "Reference for RenderVertexFormat in Inno.Rendering."
uid: api.inno.rendering.runtime-script.725ceba64ac10890
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderVertexFormat`

This reference describes `RenderVertexFormat` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Float1`](#api-353ad7e8b40c820f) | Field |
| [`Float2`](#api-2ef06a24f330a050) | Field |
| [`Float3`](#api-46c5e502047c809c) | Field |
| [`Float4`](#api-0d5e53be18c1cbae) | Field |
| [`Half2`](#api-ec844d96a342276f) | Field |
| [`Half4`](#api-adc039472193178c) | Field |
| [`Int16Integer2`](#api-cafe20f165312539) | Field |
| [`Int16Integer4`](#api-feb50e22c4a29535) | Field |
| [`Int16Normalized2`](#api-de8fffbf588faddc) | Field |
| [`Int16Normalized4`](#api-ad7619ee3d219bd2) | Field |
| [`UInt10Normalized4`](#api-c8fdacc5a81c4f40) | Field |
| [`UInt8Integer2`](#api-315bbd44f988ee63) | Field |
| [`UInt8Integer4`](#api-d7d18393829a7ce6) | Field |
| [`UInt8Normalized2`](#api-a801786bb0eaa176) | Field |
| [`UInt8Normalized4`](#api-311a65776eae418d) | Field |

## Type declaration

<a id="api-725ceba64ac10890"></a>
<!-- api: T:InnoEngine.Rendering.RenderVertexFormat a2dbed98b4db722a1d04594ca685aa9e6fa6b081a39915de7a287ec993a753b9 -->

```csharp
public enum InnoEngine.Rendering.RenderVertexFormat : int
```

Identifies one packed vertex attribute representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L89).

## `Float1`

<a id="api-353ad7e8b40c820f"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Float1 b7166531547dc11976d56c7ad4f52d1d62cd3f2a25d486a9a43328db07925805 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Float1 = 0
```

One 32-bit floating-point component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L94).

## `Float2`

<a id="api-2ef06a24f330a050"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Float2 08039446f442f4098f3f8c942b745b105787fc5d4d389605a422bcd412029398 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Float2 = 1
```

Two 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L98).

## `Float3`

<a id="api-46c5e502047c809c"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Float3 7ac046861c3af63d3bc6030343a92e56a4415f60bbb9dccdf3a9b073ec0ab423 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Float3 = 2
```

Three 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L102).

## `Float4`

<a id="api-0d5e53be18c1cbae"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Float4 c32294526c1b8357f9c2784e27c10f254c852ec568c090b9a1979a45c36552e6 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Float4 = 3
```

Four 32-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L106).

## `Half2`

<a id="api-ec844d96a342276f"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Half2 07f66f7d21f57e4fa9401ae3289fc3efd8099c9b0f15de1223c6a30f0cf85299 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Half2 = 4
```

Two 16-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L110).

## `Half4`

<a id="api-adc039472193178c"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Half4 2137c298c10f05d8056216725e4016207d69cf70dbaa634e0d9b5b0bba280dee -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Half4 = 5
```

Four 16-bit floating-point components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L114).

## `Int16Integer2`

<a id="api-cafe20f165312539"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Int16Integer2 e6835121f02245dbfb665d6021ea29bcecc6db3d7cffd20327df9099005d99a6 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Int16Integer2 = 13
```

Two signed 16-bit components interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L146).

## `Int16Integer4`

<a id="api-feb50e22c4a29535"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Int16Integer4 a7f2e4e0ea6baed55fb5518df683b1734bb76ac791e8e1e24ead48ea2204c42b -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Int16Integer4 = 14
```

Four signed 16-bit components interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L150).

## `Int16Normalized2`

<a id="api-de8fffbf588faddc"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Int16Normalized2 a18d4327338ed91bf28095cda71a6c11f932f1e86488994f09021309a114293c -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Int16Normalized2 = 11
```

Two normalized signed 16-bit components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L138).

## `Int16Normalized4`

<a id="api-ad7619ee3d219bd2"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.Int16Normalized4 d53e2b6d06cb2e88c6be6fb960606c8bb8fe39387a6a5332d1120a9606730c38 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.Int16Normalized4 = 12
```

Four normalized signed 16-bit components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L142).

## `UInt10Normalized4`

<a id="api-c8fdacc5a81c4f40"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.UInt10Normalized4 b70d8a93d98b6ee15ea18cd4ac90d540ec74cb20205e23b97e7c3a124389b804 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.UInt10Normalized4 = 10
```

Four normalized unsigned components packed into 10:10:10:2 bits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L134).

## `UInt8Integer2`

<a id="api-315bbd44f988ee63"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.UInt8Integer2 8576cc18a57a52713b3d6ca94239640526a361e56ddee2c35aa09ac46e15c267 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.UInt8Integer2 = 9
```

Two unsigned bytes interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L130).

## `UInt8Integer4`

<a id="api-d7d18393829a7ce6"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.UInt8Integer4 bc7ce7936d70b731c87d96b39532deccd951628e5f266a68e9c91fcdd39486f6 -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.UInt8Integer4 = 8
```

Four unsigned bytes interpreted as integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L126).

## `UInt8Normalized2`

<a id="api-a801786bb0eaa176"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.UInt8Normalized2 9caa12a5a9af394107e54047e6a0793c49fff6595b6cf531c2acd3a1405a222d -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.UInt8Normalized2 = 7
```

Two normalized unsigned bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L122).

## `UInt8Normalized4`

<a id="api-311a65776eae418d"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexFormat.UInt8Normalized4 c13cfb864849f118a60a7005c540d8983cfc6ab8d0beddf8e83610ed6e225c7b -->

```csharp
InnoEngine.Rendering.RenderVertexFormat.UInt8Normalized4 = 6
```

Four normalized unsigned bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L118).
