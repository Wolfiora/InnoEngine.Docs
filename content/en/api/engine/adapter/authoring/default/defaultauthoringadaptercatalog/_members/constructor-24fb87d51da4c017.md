---
uid: api.24fb87d51da4c0170e692e849a8831d7c1c1883931e48e9c2601cdc8515b2359
symbol: "engine:Inno.Adapter.Authoring.Default:M:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})"
source: xml
reviewed: 13ceeef7b75cfc2a88261682b2cc82a2ef4327ce3a0bcc3a4f8efa69cc586975
title: "Constructor"
kind: api
owners: [Inno.Adapter.Authoring.Default]
apiSurface: source-clr
---

Creates paired runtime and authoring registrations before any native device is initialized.

**Parameter `options`:** The host's explicit runtime service configuration.

**Parameter `authoringProviders`:** Complete matching authoring registrations with explicit product compilation targets.

**Parameter `presentationProviders`:** Explicit complete presentation registrations. An empty sequence registers none.

**Exception `T:System.ArgumentException`:** The runtime and authoring backend registrations do not match.
