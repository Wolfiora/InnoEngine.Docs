---
uid: api.6b4c179b6238853f6ee3286ff4ff230bd1c83472e1e83075b27418a740b87684
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.WrappedText(System.String)"
source: xml
reviewed: 0684108a8f98fdbdc179f1fdaeb57281f17b98f94cba0d3513113583372db1d5
title: "WrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws literal text wrapped to the remaining content width without using a native variadic formatting entry point.

**Parameter `text`:** The literal text to draw.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
