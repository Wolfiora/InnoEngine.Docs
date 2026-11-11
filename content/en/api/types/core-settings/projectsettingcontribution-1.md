---
title: "ProjectSettingContribution`1"
description: "Reference for ProjectSettingContribution`1 in Inno.Core.Settings."
uid: api.inno.core.settings.36e02a41adb13bbe
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# ``ProjectSettingContribution`1``

This reference describes ``ProjectSettingContribution`1`` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`context`](#api-462d0b3bc7c92bc6) | Property |
| [`value`](#api-177d3c0614f4efc3) | Property |

## Type declaration

<a id="api-36e02a41adb13bbe"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingContribution`1 20c3a6c4b80cbf9ea0f8a455882028c439a32fd32cfb1008d68132a95550b73a -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingContribution<TContribution> where TContribution : class, Inno.Core.Serialization.ISerializable
```

Provides one decoded contribution and its immutable composition context.

**Type parameter `TContribution`:** The protocol-owned neutral contribution type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L109).

## `context`

<a id="api-462d0b3bc7c92bc6"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingContribution`1.context 63c9b9fb826075d2a2492d3279433e26bfa369c5aeca54879bd20abcc130b2b8 -->

```csharp
public Inno.Core.Settings.ProjectSettingContributionContext Inno.Core.Settings.ProjectSettingContribution<TContribution>.context { get; }
```

Gets the ownership and dependency context for this contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L123).

## `value`

<a id="api-177d3c0614f4efc3"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingContribution`1.value 5c15f8af057cb42d94ceed3f47cb7a04e52cad46024bffeae96550f50022caee -->

```csharp
public TContribution Inno.Core.Settings.ProjectSettingContribution<TContribution>.value { get; }
```

Gets the decoded protocol-owned contribution value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L128).
