---
title: "ShaderDiagnostic"
description: "Reference for ShaderDiagnostic in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.250be7838e265015
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderDiagnostic`

This reference describes `ShaderDiagnostic` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9e156ff0469d5a7) | Method |
| [`code`](#api-33bf98dd23ecb300) | Property |
| [`location`](#api-c73e7fe652c6375c) | Property |
| [`message`](#api-9c92e2968b4f1f71) | Property |
| [`severity`](#api-213bfa524c41cd27) | Property |

## Type declaration

<a id="api-250be7838e265015"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderDiagnostic 12cad327e06968c294707fcbb55e871b46bc0ce0a91352bfcbf6bdc86ea9ce8a -->

```csharp
public sealed class Inno.Rendering.Assets.ShaderDiagnostic
```

Reports one structured shader validation or compilation issue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L13).

## `#ctor`

<a id="api-d9e156ff0469d5a7"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{Inno.Rendering.Assets.ShaderSourceLocation}) 997e2f841c2e322adea75f20c5d630ab953f53feabc9a30a55d7159d4d62ff9e -->

```csharp
public Inno.Rendering.Assets.ShaderDiagnostic.ShaderDiagnostic(string code, Inno.Core.Diagnostics.DiagnosticSeverity severity, string message, Inno.Rendering.Assets.ShaderSourceLocation? location = null)
```

Creates a shader diagnostic.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Artist-facing message.

**Parameter `location`:** Optional source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L30).

## `code`

<a id="api-33bf98dd23ecb300"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDiagnostic.code 4ee92809942862b0ff9fceafd790248990e49e0c43429a3b35b9e7daa0a475f4 -->

```csharp
public string Inno.Rendering.Assets.ShaderDiagnostic.code { get; }
```

Gets the stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L47).

## `location`

<a id="api-c73e7fe652c6375c"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDiagnostic.location 1a955d52beb5e46c495877a21cc5e62b115c3f0a4d6a6588162db127fa590fc7 -->

```csharp
public Inno.Rendering.Assets.ShaderSourceLocation? Inno.Rendering.Assets.ShaderDiagnostic.location { get; }
```

Gets the optional source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L62).

## `message`

<a id="api-9c92e2968b4f1f71"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDiagnostic.message aa45ba46b869764625acdcc6e355b5b12e2923c15d2cd27437a4f1d924b34731 -->

```csharp
public string Inno.Rendering.Assets.ShaderDiagnostic.message { get; }
```

Gets the artist-facing message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L57).

## `severity`

<a id="api-213bfa524c41cd27"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDiagnostic.severity 217dec9781c2bfca6dba3ee31d0afb3890b205fde525ae94bd9cf9d65930f7e1 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Rendering.Assets.ShaderDiagnostic.severity { get; }
```

Gets the diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDiagnostic.cs#L52).
