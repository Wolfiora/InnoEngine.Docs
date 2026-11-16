---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.62445ad140e3b789ffb2c47f6640025edc444707fcbb3eca194eb7456b0f14b2
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.Open(System.String)
title: IEditorSceneWorkspace.Open
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: fd4a90b1d2a316d53ac5efef9dffba39f6c0268e2846f66d4f452a1bb3e626b7
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
