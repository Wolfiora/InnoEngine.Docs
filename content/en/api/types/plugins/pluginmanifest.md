---
title: "PluginManifest"
description: "Reference for PluginManifest in Inno.Plugins."
uid: api.inno.plugins.8610ff9ffa0c5577
kind: api
owners:
  - Inno.Plugins
apiSurface: source-clr
contracts:
  - project.inno-plugins#manifest-contract
---
# `PluginManifest`

This reference describes `PluginManifest` in `Inno.Plugins`. Read the [shared contract](../../projects/inno-plugins.md#manifest-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-858df0af83b00de6) | Method |
| [`Validate`](#api-438da519d3601df9) | Method |
| [`assemblyDefinitions`](#api-3bf6d5ca661c56b1) | Property |
| [`contentRoots`](#api-e5d210f5f60d6805) | Property |
| [`dependencies`](#api-252d68106ad2ba0d) | Property |
| [`displayName`](#api-c5f91edec0589dd8) | Property |
| [`overrides`](#api-9b44d60520625953) | Property |
| [`pluginId`](#api-7adfb7a72e7027bd) | Property |
| [`settingContributions`](#api-b56533b19e7062fe) | Property |

## Type declaration

<a id="api-8610ff9ffa0c5577"></a>
<!-- api: T:Inno.Plugins.PluginManifest 5ff9b5abbb25ae7b31426a248028e4b7b8f99ed140d76b62e407e042bc3d4a4b -->

```csharp
public sealed class Inno.Plugins.PluginManifest : Inno.Core.Serialization.ISerializable
```

Describes one local `.iplugin` package without listing discovered extension types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L12).

## `#ctor`

<a id="api-858df0af83b00de6"></a>
<!-- api: M:Inno.Plugins.PluginManifest.#ctor 5912bf76059f563aa9fca81b5ea4892c2c94cbe6b5a0fc72eade7abc8b330661 -->

```csharp
public Inno.Plugins.PluginManifest.PluginManifest()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L12).

## `Validate`

<a id="api-438da519d3601df9"></a>
<!-- api: M:Inno.Plugins.PluginManifest.Validate 52c540c0c6aa71497b868b879dae1c58ccd522631c1af00df5e4900fdbedbc54 -->

```csharp
public void Inno.Plugins.PluginManifest.Validate()
```

Validates stable identity and dependency declarations.

**Throws `System.IO.InvalidDataException`:** Thrown when manifest data is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L62).

## `assemblyDefinitions`

<a id="api-3bf6d5ca661c56b1"></a>
<!-- api: P:Inno.Plugins.PluginManifest.assemblyDefinitions cfcfcd332d1d50f17471929e3ef35eb838f33f6d31d60cc4042fba2b08ba808f -->

```csharp
public string[] Inno.Plugins.PluginManifest.assemblyDefinitions { get; set; }
```

Gets or sets source-local assembly definition entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L48).

## `contentRoots`

<a id="api-e5d210f5f60d6805"></a>
<!-- api: P:Inno.Plugins.PluginManifest.contentRoots 0dfcf5177c07fcc77c574bf3bfa359525ac9c8f25939a452f02f8038e3540eb3 -->

```csharp
public string[] Inno.Plugins.PluginManifest.contentRoots { get; set; }
```

Gets or sets source-local content roots relative to the Plugin container.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L42).

## `dependencies`

<a id="api-252d68106ad2ba0d"></a>
<!-- api: P:Inno.Plugins.PluginManifest.dependencies e2f701724c54f88f9b750a5e406a6a1bc87d4222b1a1d21283767fe3bb4c9788 -->

```csharp
public string[] Inno.Plugins.PluginManifest.dependencies { get; set; }
```

Gets or sets Plugin IDs that must activate before this Plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L30).

## `displayName`

<a id="api-c5f91edec0589dd8"></a>
<!-- api: P:Inno.Plugins.PluginManifest.displayName 9958427cb3375bb83bf43cbb6095f5201eb9cf8ea4a938736054e3c75a64325a -->

```csharp
public string Inno.Plugins.PluginManifest.displayName { get; set; }
```

Gets or sets the artist-facing display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L24).

## `overrides`

<a id="api-9b44d60520625953"></a>
<!-- api: P:Inno.Plugins.PluginManifest.overrides 5fccb93d8fc675920fddc5cbfc922d2700ce27303093065f04f7c87fc5415e01 -->

```csharp
public string[] Inno.Plugins.PluginManifest.overrides { get; set; }
```

Gets or sets dependency Plugin IDs whose contributions may be explicitly replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L36).

## `pluginId`

<a id="api-7adfb7a72e7027bd"></a>
<!-- api: P:Inno.Plugins.PluginManifest.pluginId d0dbc679bd4a190106158bfbaa28de5969e3e0d6bd0b5260301900f18d55bd54 -->

```csharp
public string Inno.Plugins.PluginManifest.pluginId { get; set; }
```

Gets or sets the globally stable lowercase Plugin ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L18).

## `settingContributions`

<a id="api-b56533b19e7062fe"></a>
<!-- api: P:Inno.Plugins.PluginManifest.settingContributions 744602be6a4c9aa12639973e6e9bde8cb8a3385cb070723cd8ecbb6690f33129 -->

```csharp
public Inno.Core.Settings.ProjectSettingRecord[] Inno.Plugins.PluginManifest.settingContributions { get; set; }
```

Gets or sets default project setting contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins/PluginManifest.cs#L54).
