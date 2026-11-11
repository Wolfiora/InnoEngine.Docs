---
title: "RenderGraphDiagnostic"
description: "Reference for RenderGraphDiagnostic in Inno.Rendering."
uid: api.inno.rendering.f33ae143e9fbff39
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphDiagnostic`

This reference describes `RenderGraphDiagnostic` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d4a24eaf65ecdd8a) | Method |
| [`code`](#api-560fa2defa4316a9) | Property |
| [`message`](#api-18b30b811ef8cf21) | Property |
| [`passName`](#api-0498c538c29045bb) | Property |
| [`resourceName`](#api-4483693d27cdd57b) | Property |
| [`severity`](#api-e2f11fc4d09523c0) | Property |

## Type declaration

<a id="api-f33ae143e9fbff39"></a>
<!-- api: T:Inno.Rendering.RenderGraphDiagnostic 4f0f14bc35ef78928f487fb6930369df0097138a96da501764faf7e41aa69786 -->

```csharp
public sealed class Inno.Rendering.RenderGraphDiagnostic
```

Reports one structured render-graph compilation problem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L162).

## `#ctor`

<a id="api-d4a24eaf65ecdd8a"></a>
<!-- api: M:Inno.Rendering.RenderGraphDiagnostic.#ctor(System.String,System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.String) d80cde0db6d3f7c679745b8753e20950e9fc0cb1225032617a0c8dd5eff70062 -->

```csharp
public Inno.Rendering.RenderGraphDiagnostic.RenderGraphDiagnostic(string code, string message, Inno.Core.Diagnostics.DiagnosticSeverity severity, string? passName = null, string? resourceName = null)
```

Creates a render-graph diagnostic.

**Parameter `code`:** Stable machine-readable code.

**Parameter `message`:** Actionable diagnostic text.

**Parameter `severity`:** Diagnostic impact.

**Parameter `passName`:** Optional related pass name.

**Parameter `resourceName`:** Optional related resource name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L182).

## `code`

<a id="api-560fa2defa4316a9"></a>
<!-- api: P:Inno.Rendering.RenderGraphDiagnostic.code 058fdabe3c5fb086d33d3fe25c706ded7741dd8950e1e06b16326aa8bffaba6e -->

```csharp
public string Inno.Rendering.RenderGraphDiagnostic.code { get; }
```

Gets the stable machine-readable code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L201).

## `message`

<a id="api-18b30b811ef8cf21"></a>
<!-- api: P:Inno.Rendering.RenderGraphDiagnostic.message 1f0cf498f9fb235d30c0ae8bcfe8c256b26f155f318be08cce93fb2b4fb0eaaf -->

```csharp
public string Inno.Rendering.RenderGraphDiagnostic.message { get; }
```

Gets actionable diagnostic text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L206).

## `passName`

<a id="api-0498c538c29045bb"></a>
<!-- api: P:Inno.Rendering.RenderGraphDiagnostic.passName c948428c0453a9931b65f135ab36bf7f4630a7e184db5f986b120c5fa1d12d18 -->

```csharp
public string? Inno.Rendering.RenderGraphDiagnostic.passName { get; }
```

Gets the related pass name, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L216).

## `resourceName`

<a id="api-4483693d27cdd57b"></a>
<!-- api: P:Inno.Rendering.RenderGraphDiagnostic.resourceName b642db182bb9eaeb4fd2a66f8ded411911f91702f118820fce5d29ee4dba8adf -->

```csharp
public string? Inno.Rendering.RenderGraphDiagnostic.resourceName { get; }
```

Gets the related resource name, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L221).

## `severity`

<a id="api-e2f11fc4d09523c0"></a>
<!-- api: P:Inno.Rendering.RenderGraphDiagnostic.severity b5837e2642421d18bbac7547648265ddb3ab06ea704462fe950f24811de7d32b -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Rendering.RenderGraphDiagnostic.severity { get; }
```

Gets diagnostic impact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L211).
