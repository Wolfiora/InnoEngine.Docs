---
title: "Settings"
description: "Reference for Settings in Inno.Core.Settings."
uid: api.inno.core.settings.0b7550a8dccf3dfd
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `Settings`

This reference describes `Settings` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Get``1```](#api-6dc5d0da471a26f8) | Method |
| [`QualifyId`](#api-61c68cc1d78932f6) | Method |
| [```TryGet``1```](#api-70d863d582facaef) | Method |
| [`ownerId`](#api-25f788459d2d8f55) | Property |
| [`projectId`](#api-a4e24d899ed45a37) | Property |
| [`revision`](#api-aaf42fdab9f0a098) | Property |

## Type declaration

<a id="api-0b7550a8dccf3dfd"></a>
<!-- api: T:Inno.Core.Settings.Settings f7c700f708e820ac5b02bef45d814af68f1af0e27ca7db20fff593535327bee9 -->

```csharp
public static class Inno.Core.Settings.Settings
```

Provides script-facing project settings queries through the current runtime execution context.

**Constraints:** This façade owns no settings state. Engine and Editor infrastructure should depend on an explicit
`Inno.Core.Settings.IProjectSettingsLookup` instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L14).

## ```Get``1```

<a id="api-6dc5d0da471a26f8"></a>
<!-- api: M:Inno.Core.Settings.Settings.Get``1(Inno.Core.Settings.ProjectSettingId) 46198432784a25324a33f61da627486151aedee19f41dc054ddfe86b624fb06d -->

```csharp
public static TSetting Inno.Core.Settings.Settings.Get<TSetting>(Inno.Core.Settings.ProjectSettingId id) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Gets an isolated effective setting from the current extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Returns:** An independently owned effective setting snapshot.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active or its owner is no longer initialized.

**Throws `System.Collections.Generic.KeyNotFoundException`:** Thrown by the standard project settings store when the setting is unavailable.

**Throws `System.InvalidCastException`:** Thrown by the standard project settings store when the setting does not implement the requested contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L66).

## `QualifyId`

<a id="api-61c68cc1d78932f6"></a>
<!-- api: M:Inno.Core.Settings.Settings.QualifyId(System.String) 9c43335e7e3115c98b866ac03f85f935613f7135c1509a7a953be6af6ba3a5ae -->

```csharp
public static Inno.Core.Settings.ProjectScopedId Inno.Core.Settings.Settings.QualifyId(string name)
```

Creates one complete project identity from a display or local name.

**Parameter `name`:** The project-local name.

**Returns:** The canonical `projectId.name` identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L30).

## ```TryGet``1```

<a id="api-70d863d582facaef"></a>
<!-- api: M:Inno.Core.Settings.Settings.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@) 5cda07d5166925aee495688770c91295896aa7980be4718c7641e13f897c4140 -->

```csharp
public static bool Inno.Core.Settings.Settings.TryGet<TSetting>(Inno.Core.Settings.ProjectSettingId id, out TSetting? setting) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Tries to get an isolated effective setting from the current extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists; otherwise,
    `false`.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L89).

## `ownerId`

<a id="api-25f788459d2d8f55"></a>
<!-- api: P:Inno.Core.Settings.Settings.ownerId 5f8d8e3d3d5a2645aa9f7cde1ddb1e870f4614eaf052b562a7257211d08bdf18 -->

```csharp
public static System.Guid Inno.Core.Settings.Settings.ownerId { get; }
```

Gets the current owner's lifetime identity. Pair it with revision when caching an isolated settings snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L43).

## `projectId`

<a id="api-a4e24d899ed45a37"></a>
<!-- api: P:Inno.Core.Settings.Settings.projectId f741461b69cc5fd1df1b04d4aae2cbf22f03f1115bf9c105ddc9ea25bbbcd62e -->

```csharp
public static Inno.Core.Settings.ProjectId Inno.Core.Settings.Settings.projectId { get; }
```

Gets the current project namespace used to qualify project-authored logical names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L19).

## `revision`

<a id="api-aaf42fdab9f0a098"></a>
<!-- api: P:Inno.Core.Settings.Settings.revision 8e97d9777c56cfe27ce93c7d729058b3806010793b17686de7f883f851bf61d7 -->

```csharp
public static long Inno.Core.Settings.Settings.revision { get; }
```

Gets the revision of the settings snapshot active in the current execution context.

**Throws `System.InvalidOperationException`:** Thrown when no project settings lookup is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/Settings.cs#L38).
