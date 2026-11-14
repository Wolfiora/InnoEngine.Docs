---
uid: api.24fb87d51da4c0170e692e849a8831d7c1c1883931e48e9c2601cdc8515b2359
symbol: "engine:Inno.Adapter.Authoring.Default:M:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})"
source: xml
reviewed: 04395ca5e9e85afd40f129da3503bb810ccc933758e225f1235b2221e2c263c2
title: "DefaultAuthoringAdapterCatalog.Constructor"
kind: api
owners: [Inno.Adapter.Authoring.Default]
apiSurface: source-clr
---

Creates paired runtime and authoring registrations before any native device is initialized.

## Parameters

**Parameter `options`:** The host's explicit runtime service configuration.

**Parameter `authoringProviders`:** Complete matching authoring registrations with explicit product compilation targets.

**Parameter `presentationProviders`:** Explicit complete presentation registrations. An empty sequence registers none.

## Exceptions

**Exception `T:System.ArgumentException`:** The runtime and authoring backend registrations do not match.
