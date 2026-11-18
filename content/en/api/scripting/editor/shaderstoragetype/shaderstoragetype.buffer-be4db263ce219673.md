---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.be4db263ce21967328743bcd1d2b1de4622a217a1a62136fd897dc6723adcb2d
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Rendering.RenderStorageAccess)
title: ShaderStorageType.Buffer
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 1e1fa276e3b1d5d93d4247566de2c79ea3468c3ec6eff7ace8fab42426c1d322
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

## Returns

An immutable storage buffer description.

## Exceptions

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
