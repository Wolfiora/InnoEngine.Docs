---
uid: api.d58eaf7e87f940f74986d55f1c6eecd69b87335c485c7a64054065ae5ba53063
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Update(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: f72b2cb11ddf7689b578ab90571989e83411f7129639d91ded1d6f6f64fe1ba7
title: "Update"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Updates the module once per editor frame before panels and modals are drawn.

**Parameter `context`:** The shared editor context containing the current frame state.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is not started.
