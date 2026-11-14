---
uid: api.b1ecef145845e2ee148dbadca13db1731e415ae410fd9cb0a4a4b75838baae8f
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.RestoreDocument(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: a55e93f4bc1fe5038ca1bb5b3fee82bc1888f4acfe5d32c17dbd3706862f7693
title: "BuildSettingsStore.RestoreDocument"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates and atomically restores a native build settings document.

**Parameter `document`:** The complete document payload.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the document is malformed.

**Exception `T:System.IO.IOException`:** Thrown when the document cannot be committed.
