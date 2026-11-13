---
uid: api.5d6bdb77208eda49dc198af26c0eb404ee785cd3ebb63bb87d0843426b636b67
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 4e48ec9e6fd2f9448ff6fb1a2fa5fd65e26592e8fbb3732cf8443370ca922f99
title: "Update"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Advances pointer capture using logical button state rather than window-local release events.

**Parameter `hovered`:** Whether a new gesture may start in this canvas.

**Parameter `primaryPressed`:** Whether the primary button was pressed this frame.

**Parameter `middlePressed`:** Whether the middle button was pressed this frame.

**Parameter `primaryDown`:** Current global primary button state.

**Parameter `middleDown`:** Current global middle button state.

**Parameter `alt`:** Whether Alt is held when the gesture starts.

**Parameter `allowAltPrimary`:** Whether Alt-primary belongs to pan rather than another navigation mode.

**Returns:** Whether this canvas owns the current pointer gesture.
