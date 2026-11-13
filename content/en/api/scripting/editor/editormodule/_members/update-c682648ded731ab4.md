---
uid: api.c682648ded731ab44088ddc7de653561f9f811db3f70e2c125d920e0d48bf0ed
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Update(InnoEditor.Core.EditorContext)"
source: xml
reviewed: 6e5707555a21068fd9094822c73744a85b13a6a82192645d2dc51feeda9d96ed
title: "Update"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Updates the module once per editor frame before panels and modals are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is not started.
