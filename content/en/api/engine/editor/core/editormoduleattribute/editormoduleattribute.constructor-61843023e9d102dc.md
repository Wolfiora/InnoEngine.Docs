---
uid: api.61843023e9d102dc60a0c56f02e64f73cf30ec41c38cc7ea17f4fb89c8587abb
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 7d199376ffd60165ec1c791a436e83ba6a66887573743517e8bde2b35d120cd8
title: "EditorModuleAttribute.Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates a module registration with stable identity and deterministic lifecycle order.

## Parameters

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted module state.

**Parameter `order`:** The ascending order used to start and update the module.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
