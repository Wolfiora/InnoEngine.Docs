---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cec5419e100718feab80126f3410483c42fae8ca129aacd15329c92b1882c360
symbol: engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.MaterialDocuments.Presentation(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.ShaderPropertyId,System.String@)
title: MaterialDocuments.Presentation
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: source-clr
reviewed: fad16072cf01d5d3e1329f645486bfb9395a075d3dc8eb0bf89ab7433635ce56
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

## Returns

Detached presentation values; an unavailable graph uses the ordinary presentation defaults.
