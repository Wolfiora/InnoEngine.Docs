---
uid: api.ac435fca3cc3476a9dcc8d8403881e98791ed6350e356c1712e4e66f094b1eb8
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.MeasureWrappedText(System.String,System.Single)"
source: xml
reviewed: 263704e1cc4fd6ea64a71dbb241293c8204eb2ea5af4383149d6078292ef66da
title: "ImGui.MeasureWrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Measures literal text using the same current font and wrap width as wrapped drawing.

## Parameters

**Parameter `text`:** The literal text, including explicit line breaks.

**Parameter `wrapWidth`:** The available width in already scaled presentation coordinates.

## Returns

The copied natural text extent at the specified width.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentException`:** The text contains an embedded zero code unit.

**Exception `T:System.Text.EncoderFallbackException`:** The text contains invalid Unicode.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** No drawing scope is active on the owning UI thread and native context.

**Exception `T:System.ObjectDisposedException`:** The active UI session has retired.
