---
title: "PluginBuildRequest"
description: "Reference for PluginBuildRequest in Inno.Build."
uid: api.inno.build.6c48421785e2d8ae
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `PluginBuildRequest`

This reference describes `PluginBuildRequest` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-36bc2353ccb2d8c2) | Method |
| [`Validate`](#api-f08255d86800cbcf) | Method |
| [`dependencies`](#api-c99b27fd2682424f) | Property |
| [`displayName`](#api-11c9514811418f8c) | Property |
| [`includeDependencies`](#api-2fb293f3f5cdfe9a) | Property |
| [`outputPath`](#api-7eb4301495271984) | Property |
| [`pluginId`](#api-b8fdad1f910ff64c) | Property |

## Type declaration

<a id="api-6c48421785e2d8ae"></a>
<!-- api: T:Inno.Build.PluginBuildRequest bdbd5feecb7747ee7b85a790780b2fa9e54134fc693db34e54dbd59d6f417bbc -->

```csharp
public sealed class Inno.Build.PluginBuildRequest
```

Requests one deterministic project-to-Plugin package without a companion authoring asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L11).

## `#ctor`

<a id="api-36bc2353ccb2d8c2"></a>
<!-- api: M:Inno.Build.PluginBuildRequest.#ctor efde6b73c288a64c42296652d47eaa9a6f719ac2fdbc42d77b8350151eef672b -->

```csharp
public Inno.Build.PluginBuildRequest.PluginBuildRequest()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L11).

## `Validate`

<a id="api-f08255d86800cbcf"></a>
<!-- api: M:Inno.Build.PluginBuildRequest.Validate afee44930a46819d3e2a4b93f36d79b0d8d389edfae0b0702df4374d3cc8ebd4 -->

```csharp
public void Inno.Build.PluginBuildRequest.Validate()
```

Validates package identity and destination syntax.

**Throws `System.IO.InvalidDataException`:** Thrown when the request cannot identify a portable Plugin package.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L45).

## `dependencies`

<a id="api-c99b27fd2682424f"></a>
<!-- api: P:Inno.Build.PluginBuildRequest.dependencies feb3612c41821999d4af62f071a051c4620967ea920fdba7ab3bf1a9dd5ad253 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.PluginBuildRequest.dependencies { get; init; }
```

Gets or initializes the installed plugins this package actually requires.
Their transitive dependencies are included in the package manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L37).

## `displayName`

<a id="api-11c9514811418f8c"></a>
<!-- api: P:Inno.Build.PluginBuildRequest.displayName 1d66b953d24a0fc6300a1d64bdcf8f6b7dd90ce8710004ca1e004d34d1cd1966 -->

```csharp
public required string Inno.Build.PluginBuildRequest.displayName { get; init; }
```

Gets or initializes the user-facing Plugin name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L21).

## `includeDependencies`

<a id="api-2fb293f3f5cdfe9a"></a>
<!-- api: P:Inno.Build.PluginBuildRequest.includeDependencies da0a04bb4e0e324e03f47ca49cfadcba0118a4fbc5d504ac7e86c550a2aea161 -->

```csharp
public bool Inno.Build.PluginBuildRequest.includeDependencies { get; init; }
```

Gets or initializes whether the complete transitive dependency closure is embedded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L31).

## `outputPath`

<a id="api-7eb4301495271984"></a>
<!-- api: P:Inno.Build.PluginBuildRequest.outputPath a61da8f79bd5d5171cf7f0489d783f7bfdc67e2e3be3f2d40c08b17416903110 -->

```csharp
public required string Inno.Build.PluginBuildRequest.outputPath { get; init; }
```

Gets or initializes the destination `.iplugin` package path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L26).

## `pluginId`

<a id="api-b8fdad1f910ff64c"></a>
<!-- api: P:Inno.Build.PluginBuildRequest.pluginId 8c49a0130995131515d88ed4cb7be24421ed81a6aa100d5e74d60b527d9ea423 -->

```csharp
public required string Inno.Build.PluginBuildRequest.pluginId { get; init; }
```

Gets or initializes the globally stable lowercase Plugin identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/PluginBuildRequest.cs#L16).
