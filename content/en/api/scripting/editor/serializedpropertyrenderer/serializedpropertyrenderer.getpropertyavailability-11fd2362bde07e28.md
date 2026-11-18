---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.11fd2362bde07e283653024484c4c45e356e6f3db7cc01448c817f8570be669a
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,InnoEngine.Serialization.SerializedProperty)
title: SerializedPropertyRenderer.GetPropertyAvailability
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
sourceFingerprint: d72da8d4b1e5dd4728cd1c7f673f865630a98c9b0a93d53ee61d192d111f6a3b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

## Returns

Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.
