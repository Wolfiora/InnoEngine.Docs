---
uid: api.196b3474e8a6b8e881f78923e4da0c1c4a8cf8004ca25f2973b6f1235e835b46
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.ValidateDocument(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 2a592415bc0463335233de97138ab2ac8c3bc61260a3cc4559940ea53428b85a
title: "ValidateDocument"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates a native build settings document without changing the active file.

**Parameter `document`:** The document payload to inspect.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the document is malformed.
