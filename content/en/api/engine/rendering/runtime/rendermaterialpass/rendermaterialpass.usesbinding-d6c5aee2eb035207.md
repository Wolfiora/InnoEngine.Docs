---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d6c5aee2eb0352075dbf18b400d0ac4deb31ae82082d9b36f91c231b20454e12
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingID,Inno.Rendering.RenderShaderBindingKind)
title: RenderMaterialPass.UsesBinding
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 42d61662ec60329bef76df0f22efe7ee845c26b44642ee8dd0bb49b17e51108c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `binding`:** Stable binding declared by the shader contract.

**Parameter `kind`:** Expected command-binding domain.

## Returns

`true` when the final compiled pass reflects the binding; otherwise, `false` when the compiler proved the declared binding unused and removed it.

## Exceptions

**Exception `T:System.ArgumentException`:** The binding is not declared by the shader, or its declared kind differs from `kind`.
