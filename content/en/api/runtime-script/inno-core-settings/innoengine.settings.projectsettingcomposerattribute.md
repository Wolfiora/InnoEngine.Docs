---
title: "ProjectSettingComposerAttribute"
description: "Reference for ProjectSettingComposerAttribute in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.3c064706608bc743
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingComposerAttribute`

This reference describes `ProjectSettingComposerAttribute` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1f4ddccac10d6acd) | Method |
| [`settingId`](#api-c2954d4b77a4882b) | Property |

## Type declaration

<a id="api-3c064706608bc743"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingComposerAttribute a64fbc6028174499cde328e6c22cb84fedbb2b906fd8ebce9df15292695b3c80 -->

```csharp
public sealed class InnoEngine.Settings.ProjectSettingComposerAttribute : System.Attribute
```

Declares the protocol-owned composer used to combine contributions for one project setting.
Settings without a composer retain the default whole-value replacement behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L13).

## `#ctor`

<a id="api-1f4ddccac10d6acd"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingComposerAttribute.#ctor(System.String) 07e0ad75594eab2d68ec5e96925ec0044647bb511ccfb971b94f94fec391e922 -->

```csharp
public InnoEngine.Settings.ProjectSettingComposerAttribute.ProjectSettingComposerAttribute(string settingId)
```

Creates a composer declaration for one stable setting protocol.

**Parameter `settingId`:** The setting protocol composed by the attributed type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L21).

## `settingId`

<a id="api-c2954d4b77a4882b"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingComposerAttribute.settingId b296e2f536c826c211b26c253565760aeec9408282aeffe2a6124f767c353bc2 -->

```csharp
public InnoEngine.Settings.ProjectSettingId InnoEngine.Settings.ProjectSettingComposerAttribute.settingId { get; }
```

Gets the stable setting protocol composed by the attributed type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingComposition.cs#L30).
