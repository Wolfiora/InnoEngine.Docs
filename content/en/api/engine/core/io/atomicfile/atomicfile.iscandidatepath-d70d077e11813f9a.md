---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d70d077e11813f9ae17e1efb62b98efb9a3298d24325a8ef47e6c90320d98ab1
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.IsCandidatePath(System.String)
title: AtomicFile.IsCandidatePath
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 7b6d44e865bc9573918fd7a71719004ccfad5d165b085088f934e211a94bf20c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The file name or path to inspect without opening the file.

## Returns

True for a nonempty destination name followed by the reserved marker and a complete hexadecimal operation identity.

## Remarks

Recognition excludes transient payloads from source discovery. It does not establish ownership or authorize deletion.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The path is null.
