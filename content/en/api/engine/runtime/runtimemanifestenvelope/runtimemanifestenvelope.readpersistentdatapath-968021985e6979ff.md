---
uid: api.968021985e6979ffad1f73e1d568b3663ebc96a9374b3e055ae3242ea3e0a9ad
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadPersistentDataPath(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 12629f416648af22cd9deed7dbd13eeaa9994a758242e1e05e15ba62359e1c14
title: "RuntimeManifestEnvelope.ReadPersistentDataPath"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Reads the validated writable data folder before engine serialization is initialized.

**Parameter `data`:** The complete runtime manifest envelope.

**Returns:** A portable folder path relative to the operating system's local application data directory.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or persistent data path is malformed.
