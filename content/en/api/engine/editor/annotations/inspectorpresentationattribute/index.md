---
uid: api.inno.editor.annotations.d97698f91094c2f2
symbol: "engine:Inno.Editor.Annotations:T:Inno.Editor.Annotations.InspectorPresentationAttribute"
source: xml
reviewed: b8f98326b7b3a899ed37abad5b13f0ac36b1859584977b1da41973d115d18851
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
