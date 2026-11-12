---
title: "ProjectSettingDefinitionAttribute"
description: "Reference for ProjectSettingDefinitionAttribute in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.abb2079901f5b5e4
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingDefinitionAttribute`

This reference describes `ProjectSettingDefinitionAttribute` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b14c510df2abca2f) | Method |
| [`allowPluginContributions`](#api-217ada7477cb76a9) | Property |
| [`id`](#api-52a375661b79345a) | Property |

## Type declaration

<a id="api-abb2079901f5b5e4"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingDefinitionAttribute 328c4c957be7e2facdf40b8bc7976e252fd9164a621ab4f2f14e23d5ab49b83e -->

```csharp
public sealed class InnoEngine.Settings.ProjectSettingDefinitionAttribute : System.Attribute
```

Declares a reloadable settings type under one stable protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L48).

## `#ctor`

<a id="api-b14c510df2abca2f"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingDefinitionAttribute.#ctor(System.String,System.Boolean) e0ae06486fd65b452ce387351584205b71a3b83ffd9209b319aae03bf6761a52 -->

```csharp
public InnoEngine.Settings.ProjectSettingDefinitionAttribute.ProjectSettingDefinitionAttribute(string id, bool allowPluginContributions = true)
```

Creates a project setting declaration.

**Parameter `id`:** Globally stable setting identifier.

**Parameter `allowPluginContributions`:** Whether Plugin packages may contribute values to this protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L59).

## `allowPluginContributions`

<a id="api-217ada7477cb76a9"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingDefinitionAttribute.allowPluginContributions dae60547129fc08203f4ddc8c1ec9de77b1f7174bac1d745197e4e5367ca25cd -->

```csharp
public bool InnoEngine.Settings.ProjectSettingDefinitionAttribute.allowPluginContributions { get; }
```

Gets whether Plugin packages may contribute values to this protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L76).

## `id`

<a id="api-52a375661b79345a"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingDefinitionAttribute.id a85df71c4e7172d518626b3f8b4bbcd9b682fb59820a63feb6557bbd13b3f1c2 -->

```csharp
public string InnoEngine.Settings.ProjectSettingDefinitionAttribute.id { get; }
```

Gets the globally stable setting identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L71).
