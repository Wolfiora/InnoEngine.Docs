---
uid: api.2ce8d2bcbe0c61814eab35e96b9e3d9539352f39a28cc08c064c2baa0e7a1f9a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.IEditorHistory.BeginTransaction(System.String)"
source: xml
reviewed: 768b661803cafc839066d11e6695e351a65bcf0b696245e5e754afb2e70edb22
title: "IEditorHistory.BeginTransaction"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Begins an atomic group of neutral history operations.

## Parameters

**Parameter `name`:** The user-facing grouped operation name.

## Returns

A transaction that must be committed or rolled back.
