---
uid: api.b1ecef145845e2ee148dbadca13db1731e415ae410fd9cb0a4a4b75838baae8f
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.RestoreDocument(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 170ec653c9a1b761e9fa8d19c4f554101753becd672bc6c914526eaefff477d2
title: "RestoreDocument"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates and atomically restores a native build settings document.

**Parameter `document`:** The complete document payload.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the document is malformed.

**Exception `T:System.IO.IOException`:** Thrown when the document cannot be committed.
