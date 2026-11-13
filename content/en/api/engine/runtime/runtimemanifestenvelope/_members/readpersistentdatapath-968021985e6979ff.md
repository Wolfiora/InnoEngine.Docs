---
uid: api.968021985e6979ffad1f73e1d568b3663ebc96a9374b3e055ae3242ea3e0a9ad
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadPersistentDataPath(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: bed0d3bab7cec477b6ccab31a05f3e1acaf76147bf38716cfb8f4beef1ad6c0a
title: "ReadPersistentDataPath"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Reads the validated writable data folder before engine serialization is initialized.

**Parameter `data`:** The complete runtime manifest envelope.

**Returns:** A portable folder path relative to the operating system's local application data directory.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or persistent data path is malformed.
