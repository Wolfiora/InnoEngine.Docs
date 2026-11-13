---
uid: api.b727a706ffcc873754b66042541aee24bcd5096fb57477be097e4692705a95b2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String,System.Single)"
source: xml
reviewed: 9157ef0b39ccb67322beab6929719c768822f2af41491de95166d8999aac3595
title: "WrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws literal text at an explicitly measured wrap width, independent of a scrolling window's virtual content extent.

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
