---
uid: api.5d6bdb77208eda49dc198af26c0eb404ee785cd3ebb63bb87d0843426b636b67
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 9c53aa872edb89efdd20cd664a1a97db250233586ae8860d11f63b53c47420d1
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
