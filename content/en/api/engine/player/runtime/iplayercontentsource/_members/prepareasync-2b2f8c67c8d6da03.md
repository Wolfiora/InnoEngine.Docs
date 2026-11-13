---
uid: api.2b2f8c67c8d6da0332ccad04f649410a5835a862a831cf4eb1990c7a637ba064
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerContentSource.PrepareAsync(Inno.Content.ContentPackDescriptor,Inno.Storage.StorageScope,Inno.Core.Serialization.SerializationGeneration,System.Threading.CancellationToken)"
source: xml
reviewed: 23a9844550c505f9920fd6afa9797cc801c620a9227dbb3b8e90a157077beaf2
title: "PrepareAsync"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Prepares the exact verified pack selected by the decoded catalog.

**Parameter `pack`:** The validated pack identity; other packs must not be substituted.

**Parameter `scope`:** The application namespace used to isolate any preparation cache.

**Parameter `serialization`:** The active serialization generation borrowed until this operation completes.

**Parameter `cancellationToken`:** Cancels acquisition and preparation before ownership transfers to the caller.

**Returns:** A caller-owned immutable store whose leases pin independent readers.

**Exception `T:System.IO.InvalidDataException`:** Pack bytes, inventory, lengths, or payload hashes are invalid.
