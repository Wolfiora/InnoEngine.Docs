---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3279299170cb40e11587fd130ba1da9d2a1a1f6d654667a10a717801491b8730
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single)
title: EditorPlanarNavigation.ZoomOrigin
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 097c821a892bce16f22f15598e561d236d5ecd3694816bf8b5f51ae1ef1f2788
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `origin`:** Current logical-pixel content origin.

**Parameter `pivot`:** Logical-pixel cursor position relative to the canvas.

**Parameter `previousScale`:** Previous positive content magnification.

**Parameter `nextScale`:** New positive content magnification after clamping.

## Returns

The origin preserving the pivot's content coordinate.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** An input is non-finite or a scale is not positive.
