---
title: "ProjectSettingContributionSource"
description: "Reference for ProjectSettingContributionSource in Inno.Core.Settings."
uid: api.inno.core.settings.10129bf85e2235bc
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingContributionSource`

This reference describes `ProjectSettingContributionSource` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Plugin`](#api-c0c3f3ab11ada60a) | Field |
| [`Project`](#api-507386cdfed8b6f8) | Field |

## Type declaration

<a id="api-10129bf85e2235bc"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingContributionSource 5e3701e64a3ced236c8321712e1b814e2514bdcc56961f9a9702d913672e61d3 -->

```csharp
public enum Inno.Core.Settings.ProjectSettingContributionSource : int
```

Identifies where one setting contribution originated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L36).

## `Plugin`

<a id="api-c0c3f3ab11ada60a"></a>
<!-- api: F:Inno.Core.Settings.ProjectSettingContributionSource.Plugin ef0a43e3d868f501b943b6731e92f5d9d82549bf8ff482e24541fc2604063b73 -->

```csharp
Inno.Core.Settings.ProjectSettingContributionSource.Plugin = 0
```

The contribution is a default supplied by an activated Plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L41).

## `Project`

<a id="api-507386cdfed8b6f8"></a>
<!-- api: F:Inno.Core.Settings.ProjectSettingContributionSource.Project 049a8ed3fdc4f9a8a3f41b79d2997b48d6c49ba1ded062526e3ef56df61cd66f -->

```csharp
Inno.Core.Settings.ProjectSettingContributionSource.Project = 1
```

The contribution is the project-authored delta with highest precedence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L46).
