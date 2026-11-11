---
title: "PluginScanResult"
description: "Reference for PluginScanResult in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.2f8d5da8ac401f9a
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginScanResult`

This reference describes `PluginScanResult` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`candidates`](#api-8e49e8533ace5142) | Property |
| [`diagnostics`](#api-90f3af7bc8255981) | Property |

## Type declaration

<a id="api-2f8d5da8ac401f9a"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginScanResult a555a4fcb67421a0d8bd36b3a4e46cd3cdde3bcc5eedefeb63991c7123815807 -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginScanResult
```

Contains a complete immutable Plugin discovery result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L166).

## `candidates`

<a id="api-8e49e8533ace5142"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginScanResult.candidates 1c84f82b2e80ac3c85d0fe118c9f7c7d88dd46275f48908a8a5278036fc46574 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Plugins.Authoring.PluginCandidate> Inno.Plugins.Authoring.PluginScanResult.candidates { get; }
```

Gets dependency-ordered valid candidates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L179).

## `diagnostics`

<a id="api-90f3af7bc8255981"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginScanResult.diagnostics 8b1479e53012e1a7794f5dc6461b709c9f55c0ea48ed8a8e32d70a9ef524688a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Plugins.Authoring.PluginDiagnostic> Inno.Plugins.Authoring.PluginScanResult.diagnostics { get; }
```

Gets isolated diagnostics for rejected candidates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L184).
