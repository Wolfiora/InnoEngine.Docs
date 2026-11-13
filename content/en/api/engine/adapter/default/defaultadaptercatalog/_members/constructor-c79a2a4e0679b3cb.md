---
uid: api.c79a2a4e0679b3cb66b7d1b26cf8f9bf5a0ea945e59f0b062e1e13a9f4b2ca98
symbol: "engine:Inno.Adapter.Default:M:Inno.Adapter.Default.DefaultAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.UI.UiBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider})"
source: xml
reviewed: 1f5f60d8cfa9bc2e5e2d3d819c6f3ad3ba223553a773ae0c667fccaafc3190d5
title: "Constructor"
kind: api
owners: [Inno.Adapter.Default]
apiSurface: source-clr
---

Captures each domain registration snapshot without initializing native services.

**Parameter `options`:** Explicit host configuration for location-dependent services.

**Parameter `uiProviders`:** Complete ui registrations, or null to use the bundled implementation.

**Parameter `inputProviders`:** Complete input registrations, or null to use the bundled implementation.

**Parameter `audioProviders`:** Complete audio registrations, or null to use the bundled implementation.

**Parameter `textProviders`:** Complete text registrations, or null to use the bundled implementation.
