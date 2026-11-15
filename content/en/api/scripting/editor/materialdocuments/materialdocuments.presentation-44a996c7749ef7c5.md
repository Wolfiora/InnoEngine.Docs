---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.44a996c7749ef7c54d64b1093aa0405afa1b2e6ed5676570173eb2dd6025f1aa
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.MaterialDocuments.Presentation(InnoEngine.Rendering.ShaderAsset,InnoEngine.Rendering.ShaderPropertyId,System.String@)
title: MaterialDocuments.Presentation
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
reviewed: 2a8c4bb24bbfc69c512a6d043d70592ed953dc19a5c96af074e1067df521d076
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

## Returns

Detached presentation values; an unavailable graph uses the ordinary presentation defaults.
