---
title: "PluginDiagnostic"
description: "Reference for PluginDiagnostic in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.21b64646e1c7f132
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginDiagnostic`

This reference describes `PluginDiagnostic` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-00da7a5ba39278e1) | Method |
| [`message`](#api-6419e721241a44d1) | Property |
| [`sourcePath`](#api-6036d9760ea9acad) | Property |

## Type declaration

<a id="api-21b64646e1c7f132"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginDiagnostic 92cd68cc96a6a071f40c92caf445f275780696250cf097d25410749baba4ee11 -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginDiagnostic
```

Reports one Plugin discovery, validation, or dependency problem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L133).

## `#ctor`

<a id="api-00da7a5ba39278e1"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginDiagnostic.#ctor(System.String,System.String) 32961cbdc057e5fdef583c3cecc621c2245487d34f39aafa63912f83762ae58f -->

```csharp
public Inno.Plugins.Authoring.PluginDiagnostic.PluginDiagnostic(string sourcePath, string message)
```

Creates a Plugin source diagnostic.

**Parameter `sourcePath`:** Related `.iplugin` package path or invalid installation entry.

**Parameter `message`:** Actionable problem description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L144).

## `message`

<a id="api-6419e721241a44d1"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginDiagnostic.message 6b8ef951121d3d823802a0dd1583d9cf080808a68278536b406264195606f82f -->

```csharp
public string Inno.Plugins.Authoring.PluginDiagnostic.message { get; }
```

Gets the actionable problem description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L160).

## `sourcePath`

<a id="api-6036d9760ea9acad"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginDiagnostic.sourcePath 45c1b348509ca10cc59f9c7b08434b0a61d80ccf5e8cb94135f302930968a512 -->

```csharp
public string Inno.Plugins.Authoring.PluginDiagnostic.sourcePath { get; }
```

Gets the related `.iplugin` package path or invalid installation entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L155).
