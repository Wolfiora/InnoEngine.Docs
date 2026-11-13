---
uid: api.094dd14a2f69060c65543010365f67ad2d9e0136464903c660c077415007fdf3
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.MeasureWrappedText(System.String,System.Single)"
source: xml
reviewed: 9f14de333d500370e2f6044e5bc2418a3da84f22bda789672ed95aeae2b6d5d8
title: "MeasureWrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Measures literal text using the same current font and wrap width as wrapped drawing.

**Parameter `text`:** The literal text, including explicit line breaks.

**Parameter `wrapWidth`:** The available width in already scaled presentation coordinates.

**Returns:** The copied natural text extent at the specified width.

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentException`:** The text contains an embedded zero code unit.

**Exception `T:System.Text.EncoderFallbackException`:** The text contains invalid Unicode.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** No drawing scope is active on the owning UI thread and native context.

**Exception `T:System.ObjectDisposedException`:** The active UI session has retired.
