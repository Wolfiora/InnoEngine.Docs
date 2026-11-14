---
uid: api.6d9db286685b98584d5ef4f2532407e652cbe2fd8dc41fc7c14c2e757eef19d9
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: d19cd751531ed5f069b6e2ce54b27e44042abc3d00071772c7628e1638a527fe
title: "EditorModuleAttribute.Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Creates a module registration with stable identity and deterministic lifecycle order.

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted module state.

**Parameter `order`:** The ascending order used to start and update the module.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
