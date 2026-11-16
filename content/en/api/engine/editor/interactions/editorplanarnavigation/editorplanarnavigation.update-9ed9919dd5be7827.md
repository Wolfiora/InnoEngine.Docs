---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9ed9919dd5be78278c3d838a2acd759bd194719d6e2381e7a28a6f9d20898e84
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
title: EditorPlanarNavigation.Update
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 17b539dd4edebc36fad75f6f640b3599a2e3f35b1c1d8656492b2430c9e787c9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `hovered`:** Whether a new gesture may start in this canvas.

**Parameter `primaryPressed`:** Whether the primary button was pressed this frame.

**Parameter `middlePressed`:** Whether the middle button was pressed this frame.

**Parameter `primaryDown`:** Current global primary button state.

**Parameter `middleDown`:** Current global middle button state.

**Parameter `alt`:** Whether Alt is held when the gesture starts.

**Parameter `allowAltPrimary`:** Whether Alt-primary belongs to pan rather than another navigation mode.

## Returns

Whether this canvas owns the current pointer gesture.
