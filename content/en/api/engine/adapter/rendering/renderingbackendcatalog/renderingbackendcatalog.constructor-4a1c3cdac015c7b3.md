---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4a1c3cdac015c7b3021f73555a3fc0d6fe19e419cc8fd1e66311f0a0636a6fd1
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingBackendProvider})
title: RenderingBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
reviewed: b2a9c31549fe6605acd10c0d65b98618ee673e5e9375813889394ba495866802

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Validates and captures a complete set of runtime providers.

## Parameters

**Parameter `providers`:** Providers whose lifetime is owned by this composition generation.

## Exceptions

**Exception `T:System.ArgumentException`:** A provider is null, has no ID, or duplicates an ID.
