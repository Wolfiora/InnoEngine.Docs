---
uid: api.cc4925ab9aaf370ea2fe98f8862b1f203751a00109fd84bcde50b150f13bc7d5
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Platform.PlatformBackendProvider})"
source: xml
reviewed: 21818fc8425f520a11072ed7c97aaf0e804f419b2841ee5ff8b63e40b57300d3
title: "Constructor"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
