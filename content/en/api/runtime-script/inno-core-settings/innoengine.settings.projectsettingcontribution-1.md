---
title: "ProjectSettingContribution`1"
description: "Reference for ProjectSettingContribution`1 in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.75628b914f043501
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# ``ProjectSettingContribution`1``

This reference describes ``ProjectSettingContribution`1`` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a06b92ca9672fe43) | Method |
| [`context`](#api-d5c914acef0a9990) | Property |
| [`value`](#api-df663f4eb9c1f01e) | Property |

## Type declaration

<a id="api-75628b914f043501"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingContribution`1 875ade9a25a067788dab52c9819ca7e4b4eebd1ceac9f81106553f63d87cd3dc -->

```csharp
public sealed class InnoEngine.Settings.ProjectSettingContribution<TContribution> where TContribution : class, InnoEngine.Serialization.ISerializable
```

Provides one decoded contribution and its immutable composition context.

**Type parameter `TContribution`:** The protocol-owned neutral contribution type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L109).

## `#ctor`

<a id="api-a06b92ca9672fe43"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingContribution`1.#ctor 8b0192b1832ec23504366957dae9bb2c8eb55c6f95ab24806890d1f6994a41ad -->

```csharp
public InnoEngine.Settings.ProjectSettingContribution<TContribution>.ProjectSettingContribution()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L109).

## `context`

<a id="api-d5c914acef0a9990"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingContribution`1.context cb58f485365c8a614dc604764716108d50faed4af0971f88c63a96b1a7dd4264 -->

```csharp
public InnoEngine.Settings.ProjectSettingContributionContext InnoEngine.Settings.ProjectSettingContribution<TContribution>.context { get; }
```

Gets the ownership and dependency context for this contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L123).

## `value`

<a id="api-df663f4eb9c1f01e"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingContribution`1.value e1bf8aaab2589f27cbbfc557bb651cad01b268c456c6af7680ec2e2328c797b1 -->

```csharp
public TContribution InnoEngine.Settings.ProjectSettingContribution<TContribution>.value { get; }
```

Gets the decoded protocol-owned contribution value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L128).
