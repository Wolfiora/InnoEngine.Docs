---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-ui-rmlui-native-tests
symbol: project:Inno.Adapter.UI.RmlUi.Native.Tests
title: Inno.Adapter.UI.RmlUi.Native.Tests
kind: project
owners:
- Inno.Adapter.UI.RmlUi.Native.Tests
sourceFingerprint: b424100d42995b2abd5e05e4c0a248273363b6c559f4c94dda21532cab5f9e1e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify real imports, fonts, DOM interaction and stale-handle rejection.
outdated: false
---
# Inno.Adapter.UI.RmlUi.Native.Tests

`Inno.Adapter.UI.RmlUi.Native.Tests` owns the implementation assertions separated from the backend-neutral UI suite. It tests the actual [RmlUi adapter](../../../backends/projects/inno-adapter-ui-rmlui.md), rather than replacing native defects with fake domain behavior.

## Behavior and ownership

`UIServiceTests` covers the real RML frontend, importers, font family/weight selection, DOM events, hit testing, context/document/texture release and rejection of stale native handles. It uses the runtime and authoring adapters, asset import, and .NET type/serialization discovery. Font inputs come from read-only third-party samples.

Each fixture owns its temporary project, Identity scope, ModuleHost, TypeCatalog and SerializationRegistry, releasing them in dependency-reverse order. Its public test methods are discovery entries, not product extension APIs.

## Required product and execution

The native-layer project requests the `player` product in the selected native-host environment. Use [the unified plan](../../validate-change.md#native-and-process-requirements) to prepare the matching `inno-ui` library and dependency deployment. Missing libraries, incorrect ABI and lifecycle failures cannot be treated as passes.

A direct testhost diagnostic is valid only with those exact target/configuration/deployment prerequisites already prepared. Keep complete native assertions and the independent [UI frame-context suite](inno-ui-tests.md); a test filter cannot replace their build-dependency separation.

[Browse the pinned UI fixtures](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Native.Tests).
