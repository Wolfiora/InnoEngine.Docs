---
uid: api.inno.editor.annotations.runtime-script.b99890ca836c8294
symbol: "scripting:Inno.Editor.Annotations:T:InnoEditor.Annotations.InspectorPresentationAttribute"
source: xml
reviewed: a8f4ebf02c1c149f840e1818dd1ea2662c577abe62d0f0db232775f1956bb3ee
title: "InspectorPresentationAttribute"
kind: api
owners: [Inno.Editor.Annotations]
apiSurface: editor-script
apiScope: Authoring
contracts:
- api.projects.inno-editor-annotations#loading-and-script-availability
- manual.scripting.use-script-api
aliases: []
---

Provides editor-only presentation metadata for one serialized field or property.

## Remarks

Presentation attributes never participate in serialization. Concrete attributes are conditional on INNO\_EDITOR, so their applications are omitted from Player script assemblies.
