---
title: "BuildResult"
description: "Reference for BuildResult in Inno.Build."
uid: api.inno.build.fb2ad29b55151462
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildResult`

This reference describes `BuildResult` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`artifactBundleCount`](#api-c84fbd497497d411) | Property |
| [`assetCount`](#api-bc0394211ddf876f) | Property |
| [`contentHash`](#api-78e9747d904e3e9a) | Property |
| [`diagnostics`](#api-5ab8d2716d199435) | Property |
| [`embeddedPluginCount`](#api-8f0bd8539464132e) | Property |
| [`outputPath`](#api-8a0662ef753aa5c9) | Property |
| [`runtimeAssemblyCount`](#api-4b630013ee9c2220) | Property |
| [`succeeded`](#api-438494eec0823345) | Property |
| [`target`](#api-397d8afea76f3071) | Property |

## Type declaration

<a id="api-fb2ad29b55151462"></a>
<!-- api: T:Inno.Build.BuildResult dd70536121ce32599e23ca5c14beb78d704b69eecd356aaae811e136c1ee21c8 -->

```csharp
public sealed class Inno.Build.BuildResult
```

Reports the immutable outcome, diagnostics, and optional durable output of one build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L9).

## `artifactBundleCount`

<a id="api-c84fbd497497d411"></a>
<!-- api: P:Inno.Build.BuildResult.artifactBundleCount cb9c730f64c7b78795b94fd029788f1841e122a53722e30c1176a075e040c5ca -->

```csharp
public int Inno.Build.BuildResult.artifactBundleCount { get; }
```

Gets the number of content-addressed artifact bundles represented by the output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L61).

## `assetCount`

<a id="api-bc0394211ddf876f"></a>
<!-- api: P:Inno.Build.BuildResult.assetCount 6b476a5d229c10fde5bf86ec9826cf3161aec8119f9036778903c1c609649f30 -->

```csharp
public int Inno.Build.BuildResult.assetCount { get; }
```

Gets the number of deployed runtime assets or packaged source assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L56).

## `contentHash`

<a id="api-78e9747d904e3e9a"></a>
<!-- api: P:Inno.Build.BuildResult.contentHash d65b0d849ac3ebe81ee7f96699c8b2b50d05b1001ff9a4970fed95a173878713 -->

```csharp
public string? Inno.Build.BuildResult.contentHash { get; }
```

Gets the deterministic content identity, or `null` when the build failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L51).

## `diagnostics`

<a id="api-5ab8d2716d199435"></a>
<!-- api: P:Inno.Build.BuildResult.diagnostics 56f8d1a28aaa014716b6fbf3c9f93b7902cce5f22ddfa95d413c467f5b0352d7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.BuildDiagnostic> Inno.Build.BuildResult.diagnostics { get; }
```

Gets structured diagnostics emitted during the build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L76).

## `embeddedPluginCount`

<a id="api-8f0bd8539464132e"></a>
<!-- api: P:Inno.Build.BuildResult.embeddedPluginCount f2f85cc00cdacfe16ab295cc1c0fcd8d0ebd3f9bce7a34ca84e9a4611451958b -->

```csharp
public int Inno.Build.BuildResult.embeddedPluginCount { get; }
```

Gets the number of embedded dependency Plugin packages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L71).

## `outputPath`

<a id="api-8a0662ef753aa5c9"></a>
<!-- api: P:Inno.Build.BuildResult.outputPath d5d1b976f46a9ea187558f395f219d52e40cafe5b46149347091252447bafe0f -->

```csharp
public string? Inno.Build.BuildResult.outputPath { get; }
```

Gets the atomically committed output path, or `null` when the build failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L41).

## `runtimeAssemblyCount`

<a id="api-4b630013ee9c2220"></a>
<!-- api: P:Inno.Build.BuildResult.runtimeAssemblyCount e7bc1d8c2fe712b68adf62c0ae9d08164fa670bdd04e985e6c20687c86b21fdd -->

```csharp
public int Inno.Build.BuildResult.runtimeAssemblyCount { get; }
```

Gets the number of deployed runtime assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L66).

## `succeeded`

<a id="api-438494eec0823345"></a>
<!-- api: P:Inno.Build.BuildResult.succeeded 4ff4fbb4ef44d068e7b4ee9d41848eacaaac3b5ed9c99d3f6901ae53d0ca041c -->

```csharp
public bool Inno.Build.BuildResult.succeeded { get; }
```

Gets whether the build committed a complete output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L36).

## `target`

<a id="api-397d8afea76f3071"></a>
<!-- api: P:Inno.Build.BuildResult.target 45efd01921696da5b744feae408870d8e96fbb9d34428f3d2fb8dbfd7accd6f9 -->

```csharp
public Inno.Build.BuildTargetId? Inno.Build.BuildResult.target { get; }
```

Gets the game target, or `null` for a Plugin package.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildResult.cs#L46).
