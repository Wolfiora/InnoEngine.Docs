---
title: "ProjectSettingComposerAttribute"
description: "Reference for ProjectSettingComposerAttribute in Inno.Core.Settings."
uid: api.inno.core.settings.0ffdb7e0fd4a3d6e
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingComposerAttribute`

This reference describes `ProjectSettingComposerAttribute` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-df6e6a0a23fded98) | Method |
| [`settingId`](#api-39987c3a1b38d6cb) | Property |

## Type declaration

<a id="api-0ffdb7e0fd4a3d6e"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingComposerAttribute 14cfb305fae8da5750bdd74d53e406a1549770b8d319b128299d309775f22b0a -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingComposerAttribute : System.Attribute
```

Declares the protocol-owned composer used to combine contributions for one project setting.
Settings without a composer retain the default whole-value replacement behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L13).

## `#ctor`

<a id="api-df6e6a0a23fded98"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingComposerAttribute.#ctor(System.String) 8669f1f1296b72188d438d52076db11d629003d8a0a2117b8a4b51cc19a66427 -->

```csharp
public Inno.Core.Settings.ProjectSettingComposerAttribute.ProjectSettingComposerAttribute(string settingId)
```

Creates a composer declaration for one stable setting protocol.

**Parameter `settingId`:** The setting protocol composed by the attributed type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L21).

## `settingId`

<a id="api-39987c3a1b38d6cb"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingComposerAttribute.settingId 383cbac147f93a348268a4b1b290f52abf40393bb896d87749c5ca16ba2fb670 -->

```csharp
public Inno.Core.Settings.ProjectSettingId Inno.Core.Settings.ProjectSettingComposerAttribute.settingId { get; }
```

Gets the stable setting protocol composed by the attributed type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L30).
