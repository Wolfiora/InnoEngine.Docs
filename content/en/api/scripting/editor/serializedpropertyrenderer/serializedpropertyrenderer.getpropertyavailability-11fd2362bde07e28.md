---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.11fd2362bde07e283653024484c4c45e356e6f3db7cc01448c817f8570be669a
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,InnoEngine.Serialization.SerializedProperty)
title: SerializedPropertyRenderer.GetPropertyAvailability
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: b3576d6ef01e2d63622af0666f57dce61c4a89b7e08d841dc468acba94227f42
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
