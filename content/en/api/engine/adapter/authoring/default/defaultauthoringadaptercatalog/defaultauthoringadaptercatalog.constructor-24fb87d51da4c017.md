---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.24fb87d51da4c0170e692e849a8831d7c1c1883931e48e9c2601cdc8515b2359
symbol: engine:Inno.Adapter.Authoring.Default:M:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})
title: DefaultAuthoringAdapterCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Authoring.Default
apiSurface: source-clr
reviewed: e9afc90226817bdcd6d343de13e2ae7038ab9a894acb7ee942ffc2ee49844c9a
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
