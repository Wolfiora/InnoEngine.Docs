---
uid: api.b79fdfb1915708083bd2de4c6155032ad63063e49c81f94ac24f3a92be46eca5
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.#ctor(System.String,System.Single,System.Single,System.UIntPtr)"
source: xml
reviewed: c989b147a65054e2ac7827889cf7dc459a77d3a056c9303f08fb1a70a543d5ec
title: "Constructor"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Creates inline rename presentation data.

**Parameter `id`:** The stable ImGui identifier used by the input field.

**Parameter `width`:** The requested input width in logical pixels.

**Parameter `rowHeight`:** The height of the row area in which the field is centered.

**Parameter `bufferSize`:** The maximum UTF-8 buffer size accepted by the input.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `rowHeight` is not finite and positive, or when `bufferSize` is zero.
