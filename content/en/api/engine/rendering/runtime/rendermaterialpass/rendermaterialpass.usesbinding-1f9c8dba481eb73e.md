---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1f9c8dba481eb73ed823af2ce7f3879f8f80cf172f479d4b437464de111a2283
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind)
title: RenderMaterialPass.UsesBinding
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 8ae47064b016d3db38d66303845fa64f5a058fa1790ad3beb14f261bebcbbe8b
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
