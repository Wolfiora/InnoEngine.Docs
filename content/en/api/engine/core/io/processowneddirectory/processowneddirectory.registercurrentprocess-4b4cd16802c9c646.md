---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4b4cd16802c9c646d1c987540f46142f289faab9e1cc46f7f57813556e8f2611
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnedDirectory.RegisterCurrentProcess(System.String,System.String)
title: ProcessOwnedDirectory.RegisterCurrentProcess
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 0f74883386ceb790c088ead8966baf3f02644651788927d14603a9a88a50f53e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The producer root containing the existing current claim.

**Parameter `directory`:** The claimed directory borrowed by this process.

## Exceptions

**Exception `T:System.IO.IOException`:** The directory is unrecorded, escapes the root, or its ownership cannot be read.

**Exception `T:System.IO.InvalidDataException`:** The existing claim is malformed or does not match this directory.

**Exception `T:System.TimeoutException`:** An exclusive owner retains retirement rights beyond the registration budget.
