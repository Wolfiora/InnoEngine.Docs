---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.099ec32b005d8dea6680e672c4eae77738a0a1d68547fc8b6f8997131c5b8627
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider})
title: AudioBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
sourceFingerprint: 030bc14edd4fe42e037b7c1bfdd2685af93790fdaaf13395b652688e9da5f4ad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
