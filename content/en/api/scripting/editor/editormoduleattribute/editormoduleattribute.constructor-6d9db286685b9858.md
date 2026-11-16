---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d9db286685b98584d5ef4f2532407e652cbe2fd8dc41fc7c14c2e757eef19d9
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32)
title: EditorModuleAttribute.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 9f9305792133aec0e1b8e0661a78795d98325840a0d71397b2ecbce1575c9e09
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted module state.

**Parameter `order`:** The ascending order used to start and update the module.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
