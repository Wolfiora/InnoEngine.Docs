---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.daa62cde8fb3b1be0e7e18180a84a4e7863603d519dbbf0c77c81e10e2eb74ed
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderMaterialPass.UsesBinding(InnoEngine.Rendering.RenderBindingID,InnoEngine.Rendering.RenderShaderBindingKind)
title: RenderMaterialPass.UsesBinding
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 4756812c6b6751f261908cd0c1d7f3174dd328a18419d4c3f8e5b139b93e51b8
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
