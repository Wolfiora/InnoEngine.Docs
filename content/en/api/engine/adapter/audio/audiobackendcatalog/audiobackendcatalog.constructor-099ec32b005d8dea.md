---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.099ec32b005d8dea6680e672c4eae77738a0a1d68547fc8b6f8997131c5b8627
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider})
title: AudioBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
reviewed: 094a317f0a71eba45281fa25128b8add5abf813ac434e7d3a1a2d23fb8b55d4c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Validates and captures a complete provider set without creating any service.

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
