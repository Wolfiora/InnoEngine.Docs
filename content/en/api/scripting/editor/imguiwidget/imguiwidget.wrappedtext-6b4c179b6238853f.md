---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6b4c179b6238853f6ee3286ff4ff230bd1c83472e1e83075b27418a740b87684
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String)
title: ImGuiWidget.WrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 8e14627bfed625f84d20e79e3f535bd0ae1b8af875cb822bf0f2af4ab7c20594
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** The literal text to draw.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
