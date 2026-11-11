---
title: "ProjectSettingsContributor"
description: "Reference for ProjectSettingsContributor in Inno.Core.Settings."
uid: api.inno.core.settings.34f6535854d32230
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingsContributor`

This reference describes `ProjectSettingsContributor` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-151bd0d92eddf735) | Method |
| [`dependencies`](#api-1825de11c11fcdcc) | Property |
| [`id`](#api-f9b999b7a030b6cd) | Property |
| [`overrides`](#api-c0348ac83c93076e) | Property |
| [`settings`](#api-aac779f3d6dfd466) | Property |

## Type declaration

<a id="api-34f6535854d32230"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingsContributor 592d2a8d3d684478057a9d94d5d547ba76a575b452a2fb281d2945ddf029a2e9 -->

```csharp
public sealed class Inno.Core.Settings.ProjectSettingsContributor
```

Describes one dependency-ordered provider of default setting values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L141).

## `#ctor`

<a id="api-151bd0d92eddf735"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingsContributor.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Core.Settings.ProjectSettingRecord}) 1889eacdf12e348932fdf0f342daf9566081fc4a45c18b5e9ca824ffe7f4a4fa -->

```csharp
public Inno.Core.Settings.ProjectSettingsContributor.ProjectSettingsContributor(string id, System.Collections.Generic.IEnumerable<string> dependencies, System.Collections.Generic.IEnumerable<string> overrides, System.Collections.Generic.IEnumerable<Inno.Core.Settings.ProjectSettingRecord> settings)
```

Creates one settings contributor.

**Parameter `id`:** Stable contributor identity.

**Parameter `dependencies`:** Contributors that must precede this contributor.

**Parameter `overrides`:** Dependencies whose defaults may be explicitly replaced.

**Parameter `settings`:** Default setting contributions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L160).

## `dependencies`

<a id="api-1825de11c11fcdcc"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsContributor.dependencies a0d26825fe2866e80bf87d0217900901f30a428dabe80c5847b7247d1b6f7219 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Core.Settings.ProjectSettingsContributor.dependencies { get; }
```

Gets contributors that must precede this contributor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L184).

## `id`

<a id="api-f9b999b7a030b6cd"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsContributor.id dc6b0e914ede0954bf49f578dc8e909363c17a4a53c4f05dd1952a950a0cddf6 -->

```csharp
public string Inno.Core.Settings.ProjectSettingsContributor.id { get; }
```

Gets the stable contributor identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L179).

## `overrides`

<a id="api-c0348ac83c93076e"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsContributor.overrides 762c68fda0a23baa2e7dc40e5947b2bb0dbe5d2e4a5c0ce85e46f293fea01a26 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Core.Settings.ProjectSettingsContributor.overrides { get; }
```

Gets dependencies whose defaults may be replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L189).

## `settings`

<a id="api-aac779f3d6dfd466"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingsContributor.settings 7ac76dcd62f5f1546ec3047afd6e0a9212db7ca253cc89e70b4842fba0b02559 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Settings.ProjectSettingRecord> Inno.Core.Settings.ProjectSettingsContributor.settings { get; }
```

Gets a detached read-only contribution snapshot, including independently owned payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L194).
