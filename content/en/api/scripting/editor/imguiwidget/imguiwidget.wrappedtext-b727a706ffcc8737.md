---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b727a706ffcc873754b66042541aee24bcd5096fb57477be097e4692705a95b2
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String,System.Single)
title: ImGuiWidget.WrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 010988c05fd8b63aa51e8966c5b97f2c51ff0f0dbee839af4fb97d684689e5ba
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
