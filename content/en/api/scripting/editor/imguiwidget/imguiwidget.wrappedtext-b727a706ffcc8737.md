---
uid: api.b727a706ffcc873754b66042541aee24bcd5096fb57477be097e4692705a95b2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String,System.Single)"
source: xml
reviewed: 2fdd14a6637905600c4d9b8d0ace14707693f4b34f5b89a2ead3040502aefc9b
title: "ImGuiWidget.WrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws literal text at an explicitly measured wrap width, independent of a scrolling window's virtual content extent.

## Parameters

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
