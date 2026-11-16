---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0b1df9804c2f9b8d124d0142b5cab4ab4e8c841147679cf6c4a0886b7dab4a78
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ReadSourceBytes(Inno.Assets.AssetPath)
title: AssetImportContext.ReadSourceBytes
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: cf254388e528ee217a2ebd491567b977095324db29fb42d818f151c2fd976f16
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
