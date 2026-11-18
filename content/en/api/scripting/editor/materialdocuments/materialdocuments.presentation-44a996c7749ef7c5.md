---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.44a996c7749ef7c54d64b1093aa0405afa1b2e6ed5676570173eb2dd6025f1aa
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.MaterialDocuments.Presentation(InnoEngine.Rendering.ShaderAsset,InnoEngine.Rendering.ShaderPropertyId,System.String@)
title: MaterialDocuments.Presentation
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
sourceFingerprint: 37f01d90e300c35544e7595ed519b8e3ceefd78a522e4ef6c1ad817bccd8ed7f
apiScope: Editor
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
