---
title: "ShaderStageArtifact"
description: "Reference for ShaderStageArtifact in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.b01453ada7b45b93
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderStageArtifact`

This reference describes `ShaderStageArtifact` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-92c106426327670d) | Method |
| [`bytes`](#api-f194f28a18fac526) | Property |
| [`sourceLocation`](#api-23e2a70a658751f9) | Property |
| [`stage`](#api-b3f0638e18d02cd6) | Property |

## Type declaration

<a id="api-b01453ada7b45b93"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderStageArtifact d6176d8b9fb9d1c1c7bfa9d0a122b6b932886f2d8994e5dd2c91a6d04c84f2f3 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderStageArtifact
```

Stores one immutable target stage binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L77).

## `#ctor`

<a id="api-92c106426327670d"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageArtifact.#ctor(Inno.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte},Inno.Rendering.Assets.ShaderSourceLocation) f9803e66bd792a5486314b742bac835d0a3ebd31cb3ce5a89e611a0a9b84e505 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderStageArtifact.ShaderStageArtifact(Inno.Rendering.ShaderStage stage, System.ReadOnlySpan<byte> bytes, Inno.Rendering.Assets.ShaderSourceLocation sourceLocation)
```

Creates a stage artifact.

**Parameter `stage`:** Single compiled shader stage.

**Parameter `bytes`:** Target binary bytes.

**Parameter `sourceLocation`:** Original source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L93).

## `bytes`

<a id="api-f194f28a18fac526"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageArtifact.bytes 56ecae19ae06771d3e75ce3ca5beffc79745202b10194dceab67b354983f6613 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.Assets.Authoring.ShaderStageArtifact.bytes { get; }
```

Gets immutable target binary bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L116).

## `sourceLocation`

<a id="api-23e2a70a658751f9"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageArtifact.sourceLocation 4d263ad15b29e44dfc16510dd4fa0e56bd2e1e8c4e9060803f3b20556fbe02fe -->

```csharp
public Inno.Rendering.Assets.ShaderSourceLocation Inno.Rendering.Assets.Authoring.ShaderStageArtifact.sourceLocation { get; }
```

Gets the original source mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L121).

## `stage`

<a id="api-b3f0638e18d02cd6"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageArtifact.stage 23f7fffddb23dcb606c28e1dcc7acb6bbf1abe1978610341b180bcbec1bec285 -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Assets.Authoring.ShaderStageArtifact.stage { get; }
```

Gets the compiled shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L111).
