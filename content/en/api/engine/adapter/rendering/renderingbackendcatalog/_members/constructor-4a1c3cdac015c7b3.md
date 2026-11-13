---
uid: api.4a1c3cdac015c7b3021f73555a3fc0d6fe19e419cc8fd1e66311f0a0636a6fd1
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingBackendProvider})"
source: xml
reviewed: b2a9c31549fe6605acd10c0d65b98618ee673e5e9375813889394ba495866802
title: "Constructor"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Validates and captures a complete set of runtime providers.

**Parameter `providers`:** Providers whose lifetime is owned by this composition generation.

**Exception `T:System.ArgumentException`:** A provider is null, has no ID, or duplicates an ID.
