---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6ed863ebd93c50c89ed48fa9dc1819dc6cd71c63c389c88af9ed754744968502
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateUniformBinding(Inno.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte})
title: RenderResourceProvider.CreateUniformBinding
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: ab3255b9946e72e3c04e67601887cdbbc17ac0e3b396c9578dd5373832cc5b26

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a protected uniform binding value.

## Parameters

**Parameter `id`:** The stable shader binding identifier.

**Parameter `data`:** The complete encoded uniform bytes.

## Returns

A binding token accepted by the material-pass construction helpers.
