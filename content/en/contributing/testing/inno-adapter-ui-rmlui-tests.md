---
title: RmlUi document and native lifecycle tests
description: Verify real imports, fonts, DOM interaction and stale-handle rejection.
uid: project.inno-adapter-ui-rmlui-tests
kind: project
owners:
  - Inno.Adapter.UI.RmlUi.Tests
---
# RmlUi document and native lifecycle tests

`Inno.Adapter.UI.RmlUi.Tests` owns the implementation assertions separated from the backend-neutral UI suite. It tests the actual [RmlUi adapter](../../api/projects/inno-adapter-ui-rmlui.md), rather than replacing native defects with fake domain behavior.

## Behavior and ownership

`UiServiceTests` covers the real RML frontend, importers, font family/weight selection, DOM events, hit testing, context/document/texture release and rejection of stale native handles. It uses the runtime and authoring adapters, asset import, and .NET type/serialization discovery. Font inputs come from read-only third-party samples.

Each fixture owns its temporary project, Identity scope, ModuleHost, TypeCatalog and SerializationRegistry, releasing them in dependency-reverse order. Its public test methods are discovery entries, not product extension APIs.

## Required product and execution

The native-layer project requests the `player` product in the selected native-host environment. Use [the unified plan](../validate-change.md#native-and-process-requirements) to prepare the matching `inno-ui` library and dependency deployment. Missing libraries, incorrect ABI and lifecycle failures cannot be treated as passes.

A direct testhost diagnostic is valid only with those exact target/configuration/deployment prerequisites already prepared. Keep complete native assertions and the independent [UI frame-context suite](inno-ui-tests.md); a test filter cannot replace their build-dependency separation.

[Browse the pinned UI fixtures](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/backends/RmlUi/tests/Inno.Adapter.UI.RmlUi.Tests).
