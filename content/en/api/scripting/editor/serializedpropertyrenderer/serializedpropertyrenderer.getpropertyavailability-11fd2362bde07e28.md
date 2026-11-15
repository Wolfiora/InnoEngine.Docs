---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.11fd2362bde07e283653024484c4c45e356e6f3db7cc01448c817f8570be669a
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,InnoEngine.Serialization.SerializedProperty)
title: SerializedPropertyRenderer.GetPropertyAvailability
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 10b947695eb62fc6651f47686c2ddb20f0a597e290c05d5f75078191388c98d5
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

## Returns

Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.
