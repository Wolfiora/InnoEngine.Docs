---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0b1df9804c2f9b8d124d0142b5cab4ab4e8c841147679cf6c4a0886b7dab4a78
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ReadSourceBytes(Inno.Assets.AssetPath)
title: AssetImportContext.ReadSourceBytes
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 96e207cf5d9d4e68ba4fd65ad370e83f5637248a5b46bf2a8e5d85f2bc3d23cb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** An isolated path whose mount dependency was declared when it crosses Plugin boundaries.

## Returns

An immutable source snapshot owned by the import operation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the source crosses an undeclared mount boundary or references the writable Project from a Plugin.

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the resolved source does not exist.
