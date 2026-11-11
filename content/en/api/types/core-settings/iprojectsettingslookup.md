---
title: "IProjectSettingsLookup"
description: "Reference for IProjectSettingsLookup in Inno.Core.Settings."
uid: api.inno.core.settings.1b3fc87171ce8d21
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `IProjectSettingsLookup`

This reference describes `IProjectSettingsLookup` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [```Get``1```](#api-346ce592b7ab41e6) | Method |
| [```TryGet``1```](#api-d3e2f6e4a29426ef) | Method |
| [`ownerId`](#api-6c7c9f8de733843a) | Property |
| [`revision`](#api-d51558205784ed78) | Property |

## Type declaration

<a id="api-1b3fc87171ce8d21"></a>
<!-- api: T:Inno.Core.Settings.IProjectSettingsLookup 743c8a0e788fb5b29908f9f3dc980c7b90013b95db297318a275339eebf19889 -->

```csharp
public interface Inno.Core.Settings.IProjectSettingsLookup
```

Defines the read-only effective settings boundary shared by Editor and Player hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/IProjectSettingsLookup.cs#L9).

## ```Get``1```

<a id="api-346ce592b7ab41e6"></a>
<!-- api: M:Inno.Core.Settings.IProjectSettingsLookup.Get``1(Inno.Core.Settings.ProjectSettingId) 21e441f40fd56b7ac457218b631f657c83f1f4fbda3dcc480fe5333aacf0032e -->

```csharp
TSetting Inno.Core.Settings.IProjectSettingsLookup.Get<TSetting>(Inno.Core.Settings.ProjectSettingId id) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Gets an isolated effective setting from the active extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Returns:** An independently owned effective setting snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/IProjectSettingsLookup.cs#L34).

## ```TryGet``1```

<a id="api-d3e2f6e4a29426ef"></a>
<!-- api: M:Inno.Core.Settings.IProjectSettingsLookup.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@) f516a6ef4ae69874dbb8195ecc625031d3d4894ff19a4fb190949c0e3eb50b3d -->

```csharp
bool Inno.Core.Settings.IProjectSettingsLookup.TryGet<TSetting>(Inno.Core.Settings.ProjectSettingId id, out TSetting? setting) where TSetting : class, Inno.Core.Serialization.ISerializable
```

Tries to get an isolated effective setting from the active extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists; otherwise,
    `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/IProjectSettingsLookup.cs#L53).

## `ownerId`

<a id="api-6c7c9f8de733843a"></a>
<!-- api: P:Inno.Core.Settings.IProjectSettingsLookup.ownerId b43ead42e7472196ac7a9ed21b1b5e63ca0b541978bf13aa03704a04d98d8fab -->

```csharp
System.Guid Inno.Core.Settings.IProjectSettingsLookup.ownerId { get; }
```

Gets the unique lifetime identity of this settings owner; revisions from different owners are not interchangeable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/IProjectSettingsLookup.cs#L14).

## `revision`

<a id="api-d51558205784ed78"></a>
<!-- api: P:Inno.Core.Settings.IProjectSettingsLookup.revision 97da921573810d434f001b1f15370ffb461345cdcfeac2c21c032853cbeb94d0 -->

```csharp
long Inno.Core.Settings.IProjectSettingsLookup.revision { get; }
```

Gets the revision of the active effective settings snapshot, paired with ownerId.
A generation rollback may restore its previous revision with the corresponding effective values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/IProjectSettingsLookup.cs#L20).
