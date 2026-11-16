---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.be4db263ce21967328743bcd1d2b1de4622a217a1a62136fd897dc6723adcb2d
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Rendering.RenderStorageAccess)
title: ShaderStorageType.Buffer
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: bec4a797bec592043d98390cb0d2aefc90878b4a65c6a483b8e566a1fb5774cb
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
