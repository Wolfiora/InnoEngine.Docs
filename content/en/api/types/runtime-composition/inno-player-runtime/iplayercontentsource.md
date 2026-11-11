---
title: "IPlayerContentSource"
description: "Reference for IPlayerContentSource in Inno.Player.Runtime."
uid: api.inno.player.runtime.57d300520a527e31
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `IPlayerContentSource`

This reference describes `IPlayerContentSource` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`PrepareAsync`](#api-6107eea71d3ffff4) | Method |
| [`ReadMetadataAsync`](#api-eb04f3bbb638fb5a) | Method |

## Type declaration

<a id="api-57d300520a527e31"></a>
<!-- api: T:Inno.Player.Runtime.IPlayerContentSource af0b31fc472b9fa253a8809ea9fe144ce31baa14ff540c6cbadf35ef2a31dfd6 -->

```csharp
public interface Inno.Player.Runtime.IPlayerContentSource
```

Supplies deployment metadata and verified content without prescribing a physical layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/IPlayerContentSource.cs#L13).

## `PrepareAsync`

<a id="api-6107eea71d3ffff4"></a>
<!-- api: M:Inno.Player.Runtime.IPlayerContentSource.PrepareAsync(Inno.Content.ContentPackDescriptor,Inno.Storage.StorageScope,Inno.Core.Serialization.SerializationGeneration,System.Threading.CancellationToken) 822747a7ae795c163685b1dbb6e97602493791be39d10760afc437d579b93108 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Content.IRuntimeContentStore> Inno.Player.Runtime.IPlayerContentSource.PrepareAsync(Inno.Content.ContentPackDescriptor pack, Inno.Storage.StorageScope scope, Inno.Core.Serialization.SerializationGeneration serialization, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares the exact verified pack selected by the decoded catalog.

**Parameter `pack`:** The validated pack identity; other packs must not be substituted.

**Parameter `scope`:** The application namespace used to isolate any preparation cache.

**Parameter `serialization`:** The active serialization generation borrowed until this operation completes.

**Parameter `cancellationToken`:** Cancels acquisition and preparation before ownership transfers to the caller.

**Returns:** A caller-owned immutable store whose leases pin independent readers.

**Throws `System.IO.InvalidDataException`:** Pack bytes, inventory, lengths, or payload hashes are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/IPlayerContentSource.cs#L47).

## `ReadMetadataAsync`

<a id="api-eb04f3bbb638fb5a"></a>
<!-- api: M:Inno.Player.Runtime.IPlayerContentSource.ReadMetadataAsync(System.Threading.CancellationToken) 437463fd909e8843b2ab4ca99319b56ec3939715f689ac22035987f0b3f8b4af -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Player.Runtime.PlayerContentMetadata> Inno.Player.Runtime.IPlayerContentSource.ReadMetadataAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads the bounded deployment manifest and content catalog before serialization starts.

**Parameter `cancellationToken`:** Cancels metadata acquisition before content preparation starts.

**Returns:** Independently owned metadata bytes; missing or unreadable metadata fails the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/IPlayerContentSource.cs#L24).
