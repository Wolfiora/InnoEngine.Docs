---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c43a877d83dd2481ee51f62a66bd449dff56462c6794310cfb83a15f5bc66571
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderMaterialPass.UsesBinding(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderShaderBindingKind)
title: RenderMaterialPass.UsesBinding
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 429002f49c8732bf8b54ab032e29a9a6dca03190d9f8f87d027b7f92bb421afb
apiScope: Runtime
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
