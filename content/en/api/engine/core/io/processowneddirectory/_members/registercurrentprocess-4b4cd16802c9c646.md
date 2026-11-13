---
uid: api.4b4cd16802c9c646d1c987540f46142f289faab9e1cc46f7f57813556e8f2611
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.RegisterCurrentProcess(System.String,System.String)"
source: xml
reviewed: 563814050e257c4e982d0bd1d525bb7037c8f2191e4aa214a6f7ce5aa65916a9
title: "RegisterCurrentProcess"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Records a subprocess lifetime while a previously claimed parent directory remains protected.

**Parameter `root`:** The producer root containing the existing current claim.

**Parameter `directory`:** The claimed directory borrowed by this process.

**Exception `T:System.IO.IOException`:** The directory is unrecorded, escapes the root, or its ownership cannot be read.

**Exception `T:System.IO.InvalidDataException`:** The existing claim is malformed or does not match this directory.

**Exception `T:System.TimeoutException`:** An exclusive owner retains retirement rights beyond the registration budget.
