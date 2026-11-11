---
title: "ProjectIdentitySettings"
description: "Reference for ProjectIdentitySettings in Inno.Core.Settings."
uid: api.inno.core.settings.68a262c4cb1153c6
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectIdentitySettings`

This reference describes `ProjectIdentitySettings` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-1ea517f2564ade3e) | Field |
| [`#ctor`](#api-022a997a62a16490) | Method |
| [`Qualify`](#api-5da1d122153820c7) | Method |
| [`id`](#api-1306929530e8430e) | Property |
| [`projectId`](#api-0da70cc19b4e1040) | Property |
| [`settingId`](#api-251f16d464830833) | Property |

## Type declaration

<a id="api-68a262c4cb1153c6"></a>
<!-- api: T:Inno.Core.Settings.ProjectIdentitySettings f3de0bf998899b67e63a7843ff5e7c7b9240d22d252ba0eeb4f6dbc20f91a4b6 -->

```csharp
public sealed class Inno.Core.Settings.ProjectIdentitySettings : Inno.Core.Serialization.ISerializable
```

Stores the editable identity namespace of the current project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L260).

## `settingProtocolId`

<a id="api-1ea517f2564ade3e"></a>
<!-- api: F:Inno.Core.Settings.ProjectIdentitySettings.settingProtocolId 3a18c2df8c332452b2b0f3a2ffc2952762f14eca1d52f55f28229854d0f05e1c -->

```csharp
public const string Inno.Core.Settings.ProjectIdentitySettings.settingProtocolId = "inno.project.identity"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L265).

## `#ctor`

<a id="api-022a997a62a16490"></a>
<!-- api: M:Inno.Core.Settings.ProjectIdentitySettings.#ctor 341bc7b4c60f3ff8bbff3378345bd4919295dd74279a399db2de197fcc6f6b69 -->

```csharp
public Inno.Core.Settings.ProjectIdentitySettings.ProjectIdentitySettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L260).

## `Qualify`

<a id="api-5da1d122153820c7"></a>
<!-- api: M:Inno.Core.Settings.ProjectIdentitySettings.Qualify(System.String) 6aa9fb61b0a73fc5c3e6d4225062fb6dbe018b697e7b83b56b16aa0a0a7c56c7 -->

```csharp
public Inno.Core.Settings.ProjectScopedId Inno.Core.Settings.ProjectIdentitySettings.Qualify(string name)
```

Qualifies a display name under the current project identifier.

**Parameter `name`:** The project-local display name.

**Returns:** The complete project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L298).

## `id`

<a id="api-1306929530e8430e"></a>
<!-- api: P:Inno.Core.Settings.ProjectIdentitySettings.id 3a4bcf25e57d0ce8b772be806d056f99e4a300f0ad4453ce19e635dffa798056 -->

```csharp
public Inno.Core.Settings.ProjectId Inno.Core.Settings.ProjectIdentitySettings.id { get; }
```

Gets the validated project identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L287).

## `projectId`

<a id="api-0da70cc19b4e1040"></a>
<!-- api: P:Inno.Core.Settings.ProjectIdentitySettings.projectId 798dbc8d3e36b40d651349e24db9b4b1c97a72975c686dee0df10d940f169273 -->

```csharp
public string Inno.Core.Settings.ProjectIdentitySettings.projectId { get; set; }
```

Gets or sets the editable project namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L278).

## `settingId`

<a id="api-251f16d464830833"></a>
<!-- api: P:Inno.Core.Settings.ProjectIdentitySettings.settingId bc195d41c75656ee17f79672af04d279f57443ef737e5175f591b819c11612a1 -->

```csharp
public static Inno.Core.Settings.ProjectSettingId Inno.Core.Settings.ProjectIdentitySettings.settingId { get; }
```

Gets the stable project setting protocol identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L272).
