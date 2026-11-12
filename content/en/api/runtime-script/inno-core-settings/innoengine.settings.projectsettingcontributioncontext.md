---
title: "ProjectSettingContributionContext"
description: "Reference for ProjectSettingContributionContext in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.760de9736bd66d8e
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingContributionContext`

This reference describes `ProjectSettingContributionContext` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf002f5853b85674) | Method |
| [`CanOverride`](#api-cb963f3de19dbbfe) | Method |
| [`contributorId`](#api-f8e71d8b31034b6c) | Property |
| [`isProject`](#api-ae7960ad6df78798) | Property |
| [`source`](#api-f30b9e43f0a946b0) | Property |

## Type declaration

<a id="api-760de9736bd66d8e"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingContributionContext 77f6060e0d9331ef230c345416f91f97768b5df025ee085932efbc6b9c314f6e -->

```csharp
public sealed class InnoEngine.Settings.ProjectSettingContributionContext
```

Exposes ownership and dependency information while a protocol-owned composer combines one contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L52).

## `#ctor`

<a id="api-cf002f5853b85674"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingContributionContext.#ctor 8f55a3040fa6dc9aee2d713406d57db725df5d161921a7253963658c39a1f750 -->

```csharp
public InnoEngine.Settings.ProjectSettingContributionContext.ProjectSettingContributionContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L52).

## `CanOverride`

<a id="api-cb963f3de19dbbfe"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(System.String) 2aec3bc84c20f5094963326ea179dcc1f843bebc9c6f910f9d3df19ffa9a0124 -->

```csharp
public bool InnoEngine.Settings.ProjectSettingContributionContext.CanOverride(string ownerId)
```

Gets whether this contribution may explicitly replace data owned by another contributor.

**Parameter `ownerId`:** The stable owner whose data would be replaced.

**Returns:** `true` for project data, or when the Plugin both depends on and explicitly overrides
            `ownerId`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L94).

## `contributorId`

<a id="api-f8e71d8b31034b6c"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingContributionContext.contributorId 0b906cdb1ef4a476f4f519ea674949c8b254dc484737f2be617df2c2cdd6ae91 -->

```csharp
public string InnoEngine.Settings.ProjectSettingContributionContext.contributorId { get; }
```

Gets the stable Plugin ID, or `project` for the project-authored contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L72).

## `isProject`

<a id="api-ae7960ad6df78798"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingContributionContext.isProject d82e0316c65639271382585c346e58c591b6d8012a7ee704b76fcac243be6e1d -->

```csharp
public bool InnoEngine.Settings.ProjectSettingContributionContext.isProject { get; }
```

Gets whether this is the project-authored highest-precedence contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L82).

## `source`

<a id="api-f30b9e43f0a946b0"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingContributionContext.source 988b62b2ef97eea21579b69808509b80868524a1239e5800bcdb4195c8cbbf42 -->

```csharp
public InnoEngine.Settings.ProjectSettingContributionSource InnoEngine.Settings.ProjectSettingContributionContext.source { get; }
```

Gets the contribution source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L77).
