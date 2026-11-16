---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6935c8572dae4ae88f8643e1a4cebf33b7138020aff94ea71cc5c00e01171341
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Input(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType)
title: ShaderIrBuilder.Input
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: f7e034f50c7ef4612f7f463843efb1f4c974b15052ddd851a42f194d209e3ff2
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

## Returns

The shared input value for this name and type.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.
