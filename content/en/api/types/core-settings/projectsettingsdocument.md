---
title: "ProjectSettingsDocument"
description: "Reference for ProjectSettingsDocument in Inno.Core.Settings."
uid: api.inno.core.settings.8c6ee1068c8ae02b
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingsDocument`

This reference describes `ProjectSettingsDocument` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-10aba3dff68843cc) | Method |
| [`overrides`](#api-5625364deded6ef8) | Property |

## Type declaration

<a id="api-8c6ee1068c8ae02b"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingsDocument 2beb946cff2993187bc7ab15adaf0669a700f1ac3b57d142acd26cc795994e4a -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingsDocument : Inno.Core.Serialization.ISerializable
```

Stores project-authored setting contributions in one native document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L129).

## `#ctor`

<a id="api-10aba3dff68843cc"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsDocument.#ctor 204c591afedb783a4b078139547b43950af4e73fa87c7a0ec6d17e02432ca636 -->

```csharp
public Inno.Core.Settings.ProjectSettingsDocument.ProjectSettingsDocument()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L129).

## `overrides`

<a id="api-5625364deded6ef8"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsDocument.overrides 3e29d83b372adedd5247cb19b49be36b4bb75b80f368af5c46a29e22a02184ae -->

```csharp
public Inno.Core.Settings.ProjectSettingRecord[] Inno.Core.Settings.ProjectSettingsDocument.overrides { get; set; }
```

Gets or sets project-authored protocol contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L135).
