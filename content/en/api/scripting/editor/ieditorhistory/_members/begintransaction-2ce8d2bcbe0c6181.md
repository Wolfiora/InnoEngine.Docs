---
uid: api.2ce8d2bcbe0c61814eab35e96b9e3d9539352f39a28cc08c064c2baa0e7a1f9a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.IEditorHistory.BeginTransaction(System.String)"
source: xml
reviewed: 189199c1b3a7732c5beb61cba000a35fc2c8dc6d40d7e25e4c6f4d59759a320e
title: "BeginTransaction"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Begins an atomic group of neutral history operations.

**Parameter `name`:** The user-facing grouped operation name.

**Returns:** A transaction that must be committed or rolled back.
