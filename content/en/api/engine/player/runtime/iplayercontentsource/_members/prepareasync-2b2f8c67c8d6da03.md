---
uid: api.2b2f8c67c8d6da0332ccad04f649410a5835a862a831cf4eb1990c7a637ba064
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerContentSource.PrepareAsync(Inno.Content.ContentPackDescriptor,Inno.Storage.StorageScope,Inno.Core.Serialization.SerializationGeneration,System.Threading.CancellationToken)"
source: xml
reviewed: ef8b3f6daf89271575b9bb11f83e0b769c6dca4764d03f6ff4d1af3e279f3f58
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
