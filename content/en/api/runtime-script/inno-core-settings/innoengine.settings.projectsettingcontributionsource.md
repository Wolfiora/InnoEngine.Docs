---
title: "ProjectSettingContributionSource"
description: "Reference for ProjectSettingContributionSource in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.b4ee0c45c50f945d
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingContributionSource`

This reference describes `ProjectSettingContributionSource` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Plugin`](#api-510b4e537835a636) | Field |
| [`Project`](#api-e280fd237b0d3921) | Field |

## Type declaration

<a id="api-b4ee0c45c50f945d"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingContributionSource d15bb3fe0da50309130ed9100790c3f757d4d9d2a337762917e30c163082bc92 -->

```csharp
public enum InnoEngine.Settings.ProjectSettingContributionSource : int
```

Identifies where one setting contribution originated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L36).

## `Plugin`

<a id="api-510b4e537835a636"></a>
<!-- api: F:InnoEngine.Settings.ProjectSettingContributionSource.Plugin cb26fb2abae20be63fa180be844eb68cdabe7f1b38623b6e6c82cf4226137882 -->

```csharp
InnoEngine.Settings.ProjectSettingContributionSource.Plugin = 0
```

The contribution is a default supplied by an activated Plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L41).

## `Project`

<a id="api-e280fd237b0d3921"></a>
<!-- api: F:InnoEngine.Settings.ProjectSettingContributionSource.Project 7368e9a89b437b85a06a4da01ad83b03e9c81ba03a4da05909d944b6ff3cab8e -->

```csharp
InnoEngine.Settings.ProjectSettingContributionSource.Project = 1
```

The contribution is the project-authored delta with highest precedence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L46).
