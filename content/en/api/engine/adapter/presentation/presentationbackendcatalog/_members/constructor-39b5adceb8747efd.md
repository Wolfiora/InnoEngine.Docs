---
uid: api.39b5adceb8747efde1780ee3d179d1a326ce4d1ec1339ffc667ec4a1700d6af8
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})"
source: xml
reviewed: 53fbae893bd896f180b55aff2863d1665a24485f69412236637b7ce032e12e92
title: "Constructor"
kind: api
owners: [Inno.Adapter.Presentation]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
