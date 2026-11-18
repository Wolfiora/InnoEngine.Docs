---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5d6bdb77208eda49dc198af26c0eb404ee785cd3ebb63bb87d0843426b636b67
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
title: EditorPlanarNavigation.Update
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 10dd6e7510707c054d07a37d4702f1b998cd70ddfa02fe9217f41e52c6eac20b
apiScope: Editor
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
