---
uid: api.inno.editor.annotations.d97698f91094c2f2
symbol: "engine:Inno.Editor.Annotations:T:Inno.Editor.Annotations.InspectorPresentationAttribute"
source: xml
reviewed: 9d6a39269b9f1eb2b439eb6718a5181493e2d395d9fca4a8bb95c388204c72e5
title: "InspectorPresentationAttribute"
kind: api
owners: [Inno.Editor.Annotations]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-annotations#loading-and-script-availability
aliases: []
---

Provides editor-only presentation metadata for one serialized field or property.

## Remarks

Presentation attributes never participate in serialization. Concrete attributes are conditional on INNO\_EDITOR, so their applications are omitted from Player script assemblies.
