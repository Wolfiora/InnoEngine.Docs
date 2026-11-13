---
uid: api.inno.editor.annotations.runtime-script.b99890ca836c8294
symbol: "scripting:Inno.Editor.Annotations:T:InnoEditor.Annotations.InspectorPresentationAttribute"
source: xml
reviewed: 22be94d08f83fc43705c35419a98549964d840531db473ad661e443581ac1a06
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
