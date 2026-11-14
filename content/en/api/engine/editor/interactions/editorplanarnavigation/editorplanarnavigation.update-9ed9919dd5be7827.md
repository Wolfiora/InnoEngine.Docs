---
uid: api.9ed9919dd5be78278c3d838a2acd759bd194719d6e2381e7a28a6f9d20898e84
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 8d4319f9103457a25ee8f9c8cb86a0282c0fa582359911107dbb51aacfccda6a
title: "EditorPlanarNavigation.Update"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Advances pointer capture using logical button state rather than window-local release events.

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
