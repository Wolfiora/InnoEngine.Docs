---
title: "SettingsFileNames"
description: "Reference for SettingsFileNames in Inno.Core.Settings."
uid: api.inno.core.settings.233f9bcbbeeb513a
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `SettingsFileNames`

This reference describes `SettingsFileNames` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`build`](#api-33df9e8591ee99b7) | Field |
| [`editor`](#api-8fc9aa0e2e0b6982) | Field |
| [`project`](#api-7233442d39c027ad) | Field |

## Type declaration

<a id="api-233f9bcbbeeb513a"></a>
<!-- api: T:Inno.Core.Settings.SettingsFileNames b3eec227d090acb31d0212da6c833ef0b19eeb3551d5686c18cea883cc87d1ed -->

```csharp
public static class Inno.Core.Settings.SettingsFileNames
```

Defines the canonical project-root names of the independent settings documents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsFileNames.cs#L6).

## `build`

<a id="api-33df9e8591ee99b7"></a>
<!-- api: F:Inno.Core.Settings.SettingsFileNames.build 6deec18f3a6413cf7d8efb3a3c1a6df618fd8d00f53f3aa91d35f3b51236c52a -->

```csharp
public const string Inno.Core.Settings.SettingsFileNames.build = "Settings.Build.inno"
```

Gets the authoring build-default document name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsFileNames.cs#L21).

## `editor`

<a id="api-8fc9aa0e2e0b6982"></a>
<!-- api: F:Inno.Core.Settings.SettingsFileNames.editor 72a6a735f34905d345f9659d4bcda2190029c2b7d39a095dbdabac3bf53435b6 -->

```csharp
public const string Inno.Core.Settings.SettingsFileNames.editor = "Settings.Editor.inno"
```

Gets the machine/editor preference document name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsFileNames.cs#L11).

## `project`

<a id="api-7233442d39c027ad"></a>
<!-- api: F:Inno.Core.Settings.SettingsFileNames.project cb6bf028d1120a5c43b75a82ad9aab6952974ead92463f021f2a15bcbc422668 -->

```csharp
public const string Inno.Core.Settings.SettingsFileNames.project = "Settings.Project.inno"
```

Gets the runtime project settings document name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/SettingsFileNames.cs#L16).
