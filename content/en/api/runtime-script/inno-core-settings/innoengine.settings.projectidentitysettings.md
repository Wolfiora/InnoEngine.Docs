---
title: "ProjectIdentitySettings"
description: "Reference for ProjectIdentitySettings in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.d59cc29de12b792c
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectIdentitySettings`

This reference describes `ProjectIdentitySettings` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-c32a43756c39d83e) | Field |
| [`#ctor`](#api-2260a741333600a0) | Method |
| [`Qualify`](#api-e3a6944b7d757aca) | Method |
| [`id`](#api-751d8f349cf1e0ee) | Property |
| [`projectId`](#api-c7181fb1158fb56f) | Property |
| [`settingId`](#api-863dc0e5ab47ec2e) | Property |

## Type declaration

<a id="api-d59cc29de12b792c"></a>
<!-- api: T:InnoEngine.Settings.ProjectIdentitySettings eda7d93c5d3197636e97428e93e15e32f2df0de8a7c87f5dd4acc616788d9e00 -->

```csharp
public sealed class InnoEngine.Settings.ProjectIdentitySettings : InnoEngine.Serialization.ISerializable
```

Stores the editable identity namespace of the current project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L260).

## `settingProtocolId`

<a id="api-c32a43756c39d83e"></a>
<!-- api: F:InnoEngine.Settings.ProjectIdentitySettings.settingProtocolId 52c3cab882dd31a42f0a03f9cd2e02526a48b3fc2712ce62d4ad0952edf7d1b3 -->

```csharp
public const string InnoEngine.Settings.ProjectIdentitySettings.settingProtocolId = "inno.project.identity"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L265).

## `#ctor`

<a id="api-2260a741333600a0"></a>
<!-- api: M:InnoEngine.Settings.ProjectIdentitySettings.#ctor 346836502e1d18521da6c201cc24112d2bfa2ffc68ea8e71c618575b440bdde5 -->

```csharp
public InnoEngine.Settings.ProjectIdentitySettings.ProjectIdentitySettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L260).

## `Qualify`

<a id="api-e3a6944b7d757aca"></a>
<!-- api: M:InnoEngine.Settings.ProjectIdentitySettings.Qualify(System.String) 41c9f57d8690ce396fc00a2ae938864e1df8a880fb2eaaac17dc4acc9ea58ff7 -->

```csharp
public InnoEngine.Settings.ProjectScopedId InnoEngine.Settings.ProjectIdentitySettings.Qualify(string name)
```

Qualifies a display name under the current project identifier.

**Parameter `name`:** The project-local display name.

**Returns:** The complete project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L298).

## `id`

<a id="api-751d8f349cf1e0ee"></a>
<!-- api: P:InnoEngine.Settings.ProjectIdentitySettings.id c23c7b5ece69317d88fb0dcca92a5176d3ef2a8ee93679c9e8a227a5919253f5 -->

```csharp
public InnoEngine.Settings.ProjectId InnoEngine.Settings.ProjectIdentitySettings.id { get; }
```

Gets the validated project identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L287).

## `projectId`

<a id="api-c7181fb1158fb56f"></a>
<!-- api: P:InnoEngine.Settings.ProjectIdentitySettings.projectId 48936101bd81485e8ec16863efd528d770abb8757eda3a0e8a2af5db749f7513 -->

```csharp
public string InnoEngine.Settings.ProjectIdentitySettings.projectId { get; set; }
```

Gets or sets the editable project namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L278).

## `settingId`

<a id="api-863dc0e5ab47ec2e"></a>
<!-- api: P:InnoEngine.Settings.ProjectIdentitySettings.settingId b7f2106c23a23265756f3f33cb013a4c5cbbaf5704b3cc3a5f6a7f771266aeda -->

```csharp
public static InnoEngine.Settings.ProjectSettingId InnoEngine.Settings.ProjectIdentitySettings.settingId { get; }
```

Gets the stable project setting protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L272).
