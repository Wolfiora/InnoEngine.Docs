---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5a532437cb2c58913222644fc011255a6e728e69da9ff5a6b5ed1591aab54956
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.ReadSourceBytes(InnoEngine.Assets.AssetPath)
title: AssetImportContext.ReadSourceBytes
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: db075eef605594360ad6b680501bfc58fb36aae5763626c3c9f5b331b6bb146e
apiScope: Editor
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
