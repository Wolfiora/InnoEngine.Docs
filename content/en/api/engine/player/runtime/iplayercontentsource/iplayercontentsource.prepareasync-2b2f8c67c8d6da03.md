---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b2f8c67c8d6da0332ccad04f649410a5835a862a831cf4eb1990c7a637ba064
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerContentSource.PrepareAsync(Inno.Content.ContentPackDescriptor,Inno.Storage.StorageScope,Inno.Core.Serialization.SerializationGeneration,System.Threading.CancellationToken)
title: IPlayerContentSource.PrepareAsync
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: d53bde0a40304e754db2335c29bde90c2cd8374eb6c3c5b814bb2fa1e4fafbbe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `pack`:** The validated pack identity; other packs must not be substituted.

**Parameter `scope`:** The application namespace used to isolate any preparation cache.

**Parameter `serialization`:** The active serialization generation borrowed until this operation completes.

**Parameter `cancellationToken`:** Cancels acquisition and preparation before ownership transfers to the caller.

## Returns

A caller-owned immutable store whose leases pin independent readers.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Pack bytes, inventory, lengths, or payload hashes are invalid.
