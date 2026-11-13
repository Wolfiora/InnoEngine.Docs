---
uid: api.196b3474e8a6b8e881f78923e4da0c1c4a8cf8004ca25f2973b6f1235e835b46
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.ValidateDocument(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: c3257172e62fde51017bd097934da788280a65d2a1bfa18de0c3ec0c401aba7b
title: "ValidateDocument"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates a native build settings document without changing the active file.

**Parameter `document`:** The document payload to inspect.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the document is malformed.
