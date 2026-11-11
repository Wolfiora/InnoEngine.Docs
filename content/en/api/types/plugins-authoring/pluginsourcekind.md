---
title: "PluginSourceKind"
description: "Reference for PluginSourceKind in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.aec146e1aad86277
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginSourceKind`

This reference describes `PluginSourceKind` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`EmbeddedPackage`](#api-1b2412bd05fedfb1) | Field |
| [`Package`](#api-c4dd4f471538574d) | Field |

## Type declaration

<a id="api-aec146e1aad86277"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginSourceKind 113aea6206b51047e21193d7ea19efecf8c2f56ab069e76fd0f0869e340406ef -->

```csharp
public enum Inno.Plugins.Authoring.PluginSourceKind : int
```

Identifies how an `.iplugin` package participates in one installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L13).

## `EmbeddedPackage`

<a id="api-1b2412bd05fedfb1"></a>
<!-- api: F:Inno.Plugins.Authoring.PluginSourceKind.EmbeddedPackage ac3655b2eaca3a3cf47bd52d72c19dd5e67af1fa053ebddd6f1ac0ddeed8806f -->

```csharp
Inno.Plugins.Authoring.PluginSourceKind.EmbeddedPackage = 1
```

The Plugin is embedded as one complete `.iplugin` dependency package.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L23).

## `Package`

<a id="api-c4dd4f471538574d"></a>
<!-- api: F:Inno.Plugins.Authoring.PluginSourceKind.Package 68e73b7493105b8bc83a381c5aecf333ff2091c764bcdc029281af3b59703c8c -->

```csharp
Inno.Plugins.Authoring.PluginSourceKind.Package = 0
```

The Plugin is installed as one top-level `.iplugin` package.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L18).
