---
uid: api.61843023e9d102dc60a0c56f02e64f73cf30ec41c38cc7ea17f4fb89c8587abb
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 283a0bdca8e75c3b7700486fc5a70c040670b7ee68f5a35718041b782c6b3413
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates a module registration with stable identity and deterministic lifecycle order.

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted module state.

**Parameter `order`:** The ascending order used to start and update the module.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
