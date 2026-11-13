---
uid: api.27c8a5caf61f632424b0cc63771c0bb34665ad32b1b384988d771540b31a338d
symbol: "engine:Inno.Adapter.Rendering.Authoring:M:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.#ctor(Inno.Adapter.Rendering.IRenderingBackendFactory,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider})"
source: xml
reviewed: edc314de5bed6b47e3dfbfbbb6f349414515b573ef4298906211393cbdab73b4
title: "Constructor"
kind: api
owners: [Inno.Adapter.Rendering.Authoring]
apiSurface: source-clr
---

Validates that every runtime backend has exactly one matching authoring provider.

**Parameter `runtime`:** Runtime provider snapshot paired with these authoring tools.

**Parameter `providers`:** Complete authoring provider set owned by this composition generation.

**Exception `T:System.ArgumentException`:** Provider IDs are missing, duplicated, or do not match the runtime set.
