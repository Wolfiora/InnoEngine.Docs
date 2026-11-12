---
title: "ShaderDiagnostic"
description: "Reference for ShaderDiagnostic in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.68d76c6fc16f35d6
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderDiagnostic`

This reference describes `ShaderDiagnostic` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-18af9ad1c41aa3ed) | Method |
| [`code`](#api-7eac70d07f64519a) | Property |
| [`location`](#api-fba115c42ea62e47) | Property |
| [`message`](#api-5d091fda9e767a3d) | Property |
| [`severity`](#api-a239f29f3d42f41d) | Property |

## Type declaration

<a id="api-68d76c6fc16f35d6"></a>
<!-- api: T:InnoEngine.Rendering.ShaderDiagnostic ca2b018bc1494b5c4bf241fc45f254647be092c9804b6cf0029289de4a9e9ab1 -->

```csharp
public sealed class InnoEngine.Rendering.ShaderDiagnostic
```

Reports one structured shader validation or compilation issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L13).

## `#ctor`

<a id="api-18af9ad1c41aa3ed"></a>
<!-- api: M:InnoEngine.Rendering.ShaderDiagnostic.#ctor(System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{InnoEngine.Rendering.ShaderSourceLocation}) 6ccf6141c9bbf692ae99d0e0761f860b8d36200fa2b42257e07887515eaed769 -->

```csharp
public InnoEngine.Rendering.ShaderDiagnostic.ShaderDiagnostic(string code, InnoEngine.Diagnostics.DiagnosticSeverity severity, string message, InnoEngine.Rendering.ShaderSourceLocation? location = null)
```

Creates a shader diagnostic.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Artist-facing message.

**Parameter `location`:** Optional source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L30).

## `code`

<a id="api-7eac70d07f64519a"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDiagnostic.code c2e45c0e6f77125c233eaf7daa9196c79318336f42a1221ad29da5a9c0487cbc -->

```csharp
public string InnoEngine.Rendering.ShaderDiagnostic.code { get; }
```

Gets the stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L47).

## `location`

<a id="api-fba115c42ea62e47"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDiagnostic.location 2b7064ad260e2c1f8983fbb54bc38d73d573064bdb09a5946bf3ecd68b6a5677 -->

```csharp
public InnoEngine.Rendering.ShaderSourceLocation? InnoEngine.Rendering.ShaderDiagnostic.location { get; }
```

Gets the optional source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L62).

## `message`

<a id="api-5d091fda9e767a3d"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDiagnostic.message 65b533eba38c3464e15aa7b43a561906ccfa3962abefc695d491c277bb40a564 -->

```csharp
public string InnoEngine.Rendering.ShaderDiagnostic.message { get; }
```

Gets the artist-facing message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L57).

## `severity`

<a id="api-a239f29f3d42f41d"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDiagnostic.severity 869319fd5e273943673cb84704b6b2076ed7ac3d02f7839c2f7190eb9b685ca9 -->

```csharp
public InnoEngine.Diagnostics.DiagnosticSeverity InnoEngine.Rendering.ShaderDiagnostic.severity { get; }
```

Gets the diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L52).
