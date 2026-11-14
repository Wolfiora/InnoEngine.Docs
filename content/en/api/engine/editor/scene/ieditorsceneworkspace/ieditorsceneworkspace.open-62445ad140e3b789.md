---
uid: api.62445ad140e3b789ffb2c47f6640025edc444707fcbb3eca194eb7456b0f14b2
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.Open(System.String)"
source: xml
reviewed: f797ea9824e430c1cbe6bcd1a5fc4fe18efb0aaf4579267480710d1a7a3a7b86
title: "IEditorSceneWorkspace.Open"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Opens a scene asset additively as the active editor scene.

## Parameters

**Parameter `relativePath`:** The source-relative scene asset path.

## Returns

The existing loaded instance or newly loaded scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
