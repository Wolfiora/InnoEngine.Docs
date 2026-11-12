---
title: "Settings"
description: "Reference for Settings in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.03801f8d3af31d98
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `Settings`

This reference describes `Settings` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Get``1```](#api-5aa03c25c95e346e) | Method |
| [`QualifyId`](#api-5d04569bd7c1aaa5) | Method |
| [```TryGet``1```](#api-a370c44cd104718b) | Method |
| [`ownerId`](#api-ca9541f4c0cd5207) | Property |
| [`projectId`](#api-65de8fac8db7c0b7) | Property |
| [`revision`](#api-67a1552eefaf180b) | Property |

## Type declaration

<a id="api-03801f8d3af31d98"></a>
<!-- api: T:InnoEngine.Settings.Settings 2428c1fd914bcb8e8675d0786b3c32059da9278a07f6147ed1fc93d3d16e440b -->

```csharp
public static class InnoEngine.Settings.Settings
```

Provides script-facing project settings queries through the current runtime execution context.

**Constraints:** This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit
`InnoEngine.Settings.IProjectSettingsLookup` instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L14).

## ```Get``1```

<a id="api-5aa03c25c95e346e"></a>
<!-- api: M:InnoEngine.Settings.Settings.Get``1(InnoEngine.Settings.ProjectSettingId) 373087e7d50df97ec2d163005c483198bf78f262f37625f7d1d9b34e406b9ba1 -->

```csharp
public static TSetting InnoEngine.Settings.Settings.Get<TSetting>(InnoEngine.Settings.ProjectSettingId id) where TSetting : class, InnoEngine.Serialization.ISerializable
```

Gets an isolated effective setting from the current extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Returns:** An independently owned effective setting snapshot.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active or its owner is no longer initialized.

**Throws `System.Collections.Generic.KeyNotFoundException`:** Thrown by the standard project settings store when the setting is unavailable.

**Throws `System.InvalidCastException`:** Thrown by the standard project settings store when the setting does not implement the requested contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L66).

## `QualifyId`

<a id="api-5d04569bd7c1aaa5"></a>
<!-- api: M:InnoEngine.Settings.Settings.QualifyId(System.String) c5c63fac7e8680385910d069275dba68ab83202fbee8722788158bf5b8f0da74 -->

```csharp
public static InnoEngine.Settings.ProjectScopedId InnoEngine.Settings.Settings.QualifyId(string name)
```

Creates one complete project identity from a display or local name.

**Parameter `name`:** The project-local name.

**Returns:** The canonical `projectId.name` identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L30).

## ```TryGet``1```

<a id="api-a370c44cd104718b"></a>
<!-- api: M:InnoEngine.Settings.Settings.TryGet``1(InnoEngine.Settings.ProjectSettingId,``0@) 4e2a9564e4e0cc9b506b11b3afa48e9ea581886bc88b93ba2f13cfe695254394 -->

```csharp
public static bool InnoEngine.Settings.Settings.TryGet<TSetting>(InnoEngine.Settings.ProjectSettingId id, out TSetting? setting) where TSetting : class, InnoEngine.Serialization.ISerializable
```

Tries to get an isolated effective setting from the current extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists; otherwise,
            `false`.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L89).

## `ownerId`

<a id="api-ca9541f4c0cd5207"></a>
<!-- api: P:InnoEngine.Settings.Settings.ownerId 982523e71723bd3a3c7ce7051c17809eb8e8b8417ff0f43ad2d818761fb51463 -->

```csharp
public static System.Guid InnoEngine.Settings.Settings.ownerId { get; }
```

Gets the current owner's lifetime identity. Pair it with revision when caching an isolated settings snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L43).

## `projectId`

<a id="api-65de8fac8db7c0b7"></a>
<!-- api: P:InnoEngine.Settings.Settings.projectId 89460ae54f67bf8481d8d82cffef10e9af39e4d495d0dca858d0404a1385589c -->

```csharp
public static InnoEngine.Settings.ProjectId InnoEngine.Settings.Settings.projectId { get; }
```

Gets the current project namespace used to qualify project-authored logical names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L19).

## `revision`

<a id="api-67a1552eefaf180b"></a>
<!-- api: P:InnoEngine.Settings.Settings.revision 185d9072c6b694138f7e9cd6934b5f8c4952c760483e77d8c398ff05b4215fc2 -->

```csharp
public static long InnoEngine.Settings.Settings.revision { get; }
```

Gets the revision of the settings snapshot active in the current execution context.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/Settings.cs#L38).
