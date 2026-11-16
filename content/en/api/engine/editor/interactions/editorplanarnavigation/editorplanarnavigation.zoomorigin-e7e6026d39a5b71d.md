---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e7e6026d39a5b71dc47daac90a9d7286d7da3654e2b2d57eb25caad5a3343aab
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single)
title: EditorPlanarNavigation.ZoomOrigin
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 8df6fb152d9191f1b63e49556e0306924082f4d8f3773482a65c2cc614301567
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
