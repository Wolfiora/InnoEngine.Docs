---
uid: api.552185dd2fce1b463eabfacf8c5746b983e23d2a88c4416dea46581df525ade2
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(System.String,System.Single)"
source: xml
reviewed: 89786270e4ec8b3a3415f09cc20948cccfd94d46b17bd733e1ab2dc46ba87337
title: "WrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws literal text at an explicitly measured wrap width, independent of a scrolling window's virtual content extent.

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
