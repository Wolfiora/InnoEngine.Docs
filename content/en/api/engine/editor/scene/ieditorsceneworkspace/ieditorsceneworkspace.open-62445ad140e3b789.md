---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.62445ad140e3b789ffb2c47f6640025edc444707fcbb3eca194eb7456b0f14b2
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.Open(System.String)
title: IEditorSceneWorkspace.Open
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 29b5e475e966416a2d1c206e44b8529f06ae340feb5fd490200d25e7ae95c64e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `relativePath`:** The source-relative scene asset path.

## Returns

The existing loaded instance or newly loaded scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
