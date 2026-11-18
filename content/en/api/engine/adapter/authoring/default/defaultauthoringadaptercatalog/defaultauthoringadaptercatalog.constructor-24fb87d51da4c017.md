---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.24fb87d51da4c0170e692e849a8831d7c1c1883931e48e9c2601cdc8515b2359
symbol: engine:Inno.Adapter.Authoring.Default:M:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})
title: DefaultAuthoringAdapterCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Authoring.Default
apiSurface: source-clr
sourceFingerprint: 5b9417583daec1636a63f64485bd0b9585b9d2d6712e7fbeed7ee0ff7c933b98
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The host's explicit runtime service configuration.

**Parameter `authoringProviders`:** Complete matching authoring registrations with explicit product compilation targets.

**Parameter `presentationProviders`:** Explicit complete presentation registrations. An empty sequence registers none.

## Exceptions

**Exception `T:System.ArgumentException`:** The runtime and authoring backend registrations do not match.
