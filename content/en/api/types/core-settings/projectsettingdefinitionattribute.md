---
title: "ProjectSettingDefinitionAttribute"
description: "Reference for ProjectSettingDefinitionAttribute in Inno.Core.Settings."
uid: api.inno.core.settings.7f6e807f6978a3fc
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingDefinitionAttribute`

This reference describes `ProjectSettingDefinitionAttribute` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5d3def9af670778e) | Method |
| [`allowPluginContributions`](#api-be469d4c65024a1a) | Property |
| [`id`](#api-662ad2858db0d9a2) | Property |

## Type declaration

<a id="api-7f6e807f6978a3fc"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingDefinitionAttribute b41303ae105ff6c93398fbba9a96dd674d7e6272b8282d1eaf1e280516ef45c8 -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingDefinitionAttribute : System.Attribute
```

Declares a reloadable settings type under one stable protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L48).

## `#ctor`

<a id="api-5d3def9af670778e"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingDefinitionAttribute.#ctor(System.String,System.Boolean) 2bbc77253bb0d65af4671d6eb775c91e9f2a0158401ebf5b1f6b5b5019a38002 -->

```csharp
public Inno.Core.Settings.ProjectSettingDefinitionAttribute.ProjectSettingDefinitionAttribute(string id, bool allowPluginContributions = true)
```

Creates a project setting declaration.

**Parameter `id`:** Globally stable setting identifier.

**Parameter `allowPluginContributions`:** Whether Plugin packages may contribute values to this protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L59).

## `allowPluginContributions`

<a id="api-be469d4c65024a1a"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingDefinitionAttribute.allowPluginContributions 5d952cdf8eb777925d0c6dff57cc43a39ade3ef1ef28048b6669a97759ba92cd -->

```csharp
public bool Inno.Core.Settings.ProjectSettingDefinitionAttribute.allowPluginContributions { get; }
```

Gets whether Plugin packages may contribute values to this protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L76).

## `id`

<a id="api-662ad2858db0d9a2"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingDefinitionAttribute.id edef209397de44f43e1851a508075ad10185625ff9e7aeb516a47deac4a8ed94 -->

```csharp
public string Inno.Core.Settings.ProjectSettingDefinitionAttribute.id { get; }
```

Gets the globally stable setting identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L71).
