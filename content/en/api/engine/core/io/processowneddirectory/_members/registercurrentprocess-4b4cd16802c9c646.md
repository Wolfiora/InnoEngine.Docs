---
uid: api.4b4cd16802c9c646d1c987540f46142f289faab9e1cc46f7f57813556e8f2611
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.RegisterCurrentProcess(System.String,System.String)"
source: xml
reviewed: 56be6161682f7e56364dada1c80d3ce3c86fe41496236d31bf3aaafe5ffe2296
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
