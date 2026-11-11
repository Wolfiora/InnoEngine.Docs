---
title: "ProjectSettingRecord"
description: "Reference for ProjectSettingRecord in Inno.Core.Settings."
uid: api.inno.core.settings.8008ee4a91284a0e
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingRecord`

This reference describes `ProjectSettingRecord` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3693f82c9b256316) | Method |
| [`id`](#api-097d4cad71de21db) | Property |
| [`propertyData`](#api-3769ac2cbcfd7da3) | Property |
| [`stableTypeId`](#api-69226b733f024859) | Property |

## Type declaration

<a id="api-8008ee4a91284a0e"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingRecord 992f6eca3752fe117afffe06e655af022618f5e08f67925a63612cb1faa4ddcf -->

```csharp
public struct Inno.Core.Settings.ProjectSettingRecord
```

Stores one protocol-owned neutral setting contribution for persistence and composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L82).

## `#ctor`

<a id="api-3693f82c9b256316"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingRecord.#ctor(Inno.Core.Settings.ProjectSettingId,System.Guid,System.ReadOnlySpan{System.Byte}) 1e4c4b80da05c9b32ca7896d7a98a7c6a8c6bd96fcaea911dcbf26fa92883d32 -->

```csharp
public Inno.Core.Settings.ProjectSettingRecord.ProjectSettingRecord(Inno.Core.Settings.ProjectSettingId id, System.Guid stableTypeId, System.ReadOnlySpan<byte> propertyData)
```

Creates a setting record.

**Parameter `id`:** Stable setting identity.

**Parameter `stableTypeId`:** Stable settings type identity.

**Parameter `propertyData`:** Composer-owned contribution bytes, or complete property bytes for replacement settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L96).

## `id`

<a id="api-097d4cad71de21db"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingRecord.id 18cf0e8da86c09fbf210681aab2cc7050167ee7917ab306aa889f15cb1081127 -->

```csharp
public Inno.Core.Settings.ProjectSettingId Inno.Core.Settings.ProjectSettingRecord.id { get; set; }
```

Gets or sets the stable setting identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L113).

## `propertyData`

<a id="api-3769ac2cbcfd7da3"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingRecord.propertyData 5c93b7836f3e3fd9f06715b00eb27cc6243d6f4992a63ae6f1e971f018dbd3fd -->

```csharp
public byte[] Inno.Core.Settings.ProjectSettingRecord.propertyData { get; set; }
```

Gets or sets the composer-owned payload or default complete-property payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L123).

## `stableTypeId`

<a id="api-69226b733f024859"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingRecord.stableTypeId 1aabf38c3c916c2c85397a899ce04620f18150a078b9a7654fffc431fbac4200 -->

```csharp
public System.Guid Inno.Core.Settings.ProjectSettingRecord.stableTypeId { get; set; }
```

Gets or sets the stable settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L118).
