---
title: "ProjectSettingContributionContext"
description: "Reference for ProjectSettingContributionContext in Inno.Core.Settings."
uid: api.inno.core.settings.3d77cd9c50932fde
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingContributionContext`

This reference describes `ProjectSettingContributionContext` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CanOverride`](#api-2be447fbd606effd) | Method |
| [`contributorId`](#api-a2d36dc8f8bf33b4) | Property |
| [`isProject`](#api-6bde92fcf8474084) | Property |
| [`source`](#api-171ddc2808d6a1f4) | Property |

## Type declaration

<a id="api-3d77cd9c50932fde"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingContributionContext be531588ed257fa8a2a46a88eec825722e70c289f59cf47e9ffa19ec37f00ff6 -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingContributionContext
```

Exposes ownership and dependency information while a protocol-owned composer combines one contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L52).

## `CanOverride`

<a id="api-2be447fbd606effd"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingContributionContext.CanOverride(System.String) 233456c42d4e50302a4092d29f54d4bcb90a2d0fc13f84b8305b1ddb7cc84586 -->

```csharp
public bool Inno.Core.Settings.ProjectSettingContributionContext.CanOverride(string ownerId)
```

Gets whether this contribution may explicitly replace data owned by another contributor.

**Parameter `ownerId`:** The stable owner whose data would be replaced.

**Returns:** `true` for project data, or when the Plugin both depends on and explicitly overrides
    `ownerId`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L94).

## `contributorId`

<a id="api-a2d36dc8f8bf33b4"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingContributionContext.contributorId 6d99d2998750f86bc68e4336aabbe5c99ddf8775eb7a58bcbe90afdffb203810 -->

```csharp
public string Inno.Core.Settings.ProjectSettingContributionContext.contributorId { get; }
```

Gets the stable Plugin ID, or `project` for the project-authored contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L72).

## `isProject`

<a id="api-6bde92fcf8474084"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingContributionContext.isProject 89b7f467e25fc119056405493b0417ea848605890981dbe568959a5123f6e6ae -->

```csharp
public bool Inno.Core.Settings.ProjectSettingContributionContext.isProject { get; }
```

Gets whether this is the project-authored highest-precedence contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L82).

## `source`

<a id="api-171ddc2808d6a1f4"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingContributionContext.source 5d27d4b988df5176e18780bf555fd791610fdc4913907614f79f25ca992e67b3 -->

```csharp
public Inno.Core.Settings.ProjectSettingContributionSource Inno.Core.Settings.ProjectSettingContributionContext.source { get; }
```

Gets the contribution source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L77).
