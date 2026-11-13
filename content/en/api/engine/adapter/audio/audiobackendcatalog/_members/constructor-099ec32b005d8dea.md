---
uid: api.099ec32b005d8dea6680e672c4eae77738a0a1d68547fc8b6f8997131c5b8627
symbol: "engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider})"
source: xml
reviewed: 8062cc58fa88f0bbc1c391cbc2e7f28ebafcf255121b4acc3417c9f01bf165c0
title: "Constructor"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
