---
title: "RenderGraphValidationResult"
description: "Reference for RenderGraphValidationResult in Inno.Rendering."
uid: api.inno.rendering.382e7acb537faea1
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphValidationResult`

This reference describes `RenderGraphValidationResult` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`bufferCount`](#api-d1789ae0f3ceee25) | Property |
| [`culledPassCount`](#api-cde0979d238f4c6e) | Property |
| [`diagnostics`](#api-0f5467756d65e2d3) | Property |
| [`isValid`](#api-89d7a597ec032199) | Property |
| [`passCount`](#api-01722367c559ed5d) | Property |
| [`scheduledPassCount`](#api-653f073fdc40435e) | Property |
| [`textureCount`](#api-6ff00d918ecf8005) | Property |

## Type declaration

<a id="api-382e7acb537faea1"></a>
<!-- api: T:Inno.Rendering.RenderGraphValidationResult b52703c92ca391b5686edbac607d9d5692415a2df587fe398204bb19b6349583 -->

```csharp
public sealed class Inno.Rendering.RenderGraphValidationResult
```

Describes graph validity and scheduling counts without creating resources or executable callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L10).

## `bufferCount`

<a id="api-d1789ae0f3ceee25"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.bufferCount 77abf4b4e088000e81393bce0c6fcbb1cc58995dc80582b95b488a4cc5292276 -->

```csharp
public int Inno.Rendering.RenderGraphValidationResult.bufferCount { get; }
```

Gets the number of declared transient and imported buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L61).

## `culledPassCount`

<a id="api-cde0979d238f4c6e"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.culledPassCount 654ff3c0ee9019bdf8ff3ca3d78e84105f3c9f6efc960ca5a4b3e191ff4c1354 -->

```csharp
public int Inno.Rendering.RenderGraphValidationResult.culledPassCount { get; }
```

Gets passes removed by valid output and side-effect analysis; returns zero for an invalid graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L51).

## `diagnostics`

<a id="api-0f5467756d65e2d3"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.diagnostics 3666d5f03fee068ff25a004430158839ce863879deb8d8c530238000b3b46748 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderGraphDiagnostic> Inno.Rendering.RenderGraphValidationResult.diagnostics { get; }
```

Gets frozen deterministic diagnostics for the validated revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L36).

## `isValid`

<a id="api-89d7a597ec032199"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.isValid 06ce8543550307b4d860954731e5e2e16f4e065066dbc816978f457829d4ab5e -->

```csharp
public bool Inno.Rendering.RenderGraphValidationResult.isValid { get; }
```

Gets whether the current graph satisfies device, dependency and presentation limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L31).

## `passCount`

<a id="api-01722367c559ed5d"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.passCount 6e01ebd74517e5d9979074924209c875b7d7457b6e633796d8d7fd153c3d0742 -->

```csharp
public int Inno.Rendering.RenderGraphValidationResult.passCount { get; }
```

Gets the number of declared passes, including passes not contributing to an output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L41).

## `scheduledPassCount`

<a id="api-653f073fdc40435e"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.scheduledPassCount fb16101e565dedc05673ed3c79677221491f965ee9455aa99f47999bb66b7b98 -->

```csharp
public int Inno.Rendering.RenderGraphValidationResult.scheduledPassCount { get; }
```

Gets scheduled passes, or zero when validation could not produce a valid schedule.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L46).

## `textureCount`

<a id="api-6ff00d918ecf8005"></a>
<!-- api: P:Inno.Rendering.RenderGraphValidationResult.textureCount e0cc081254fe0174a918ffddc84a7405dd57cb5a7eddd75ce65c4d218553f8e2 -->

```csharp
public int Inno.Rendering.RenderGraphValidationResult.textureCount { get; }
```

Gets the number of declared transient and imported textures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphValidationResult.cs#L56).
