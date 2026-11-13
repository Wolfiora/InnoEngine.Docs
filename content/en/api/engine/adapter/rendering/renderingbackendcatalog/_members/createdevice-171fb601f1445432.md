---
uid: api.171fb601f14454321d2867a574e85a953a9fc40b8770b052a8be36311d5b9c08
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions)"
source: xml
reviewed: 08d6c931a5e1c13ffe3c2ab0b6ae5d695a9119a346baffcf7c894bc335bcecc2
title: "CreateDevice"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Creates a device using this implementation's validated inputs.

**Parameter `backend`:** The backend consumed by create device; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated irender device that represents the completed operation.

**Exception `T:System.NotSupportedException`:** No provider is registered for this exact backend ID.
