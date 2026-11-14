---
uid: api.3635ee2bd174755325ea2a9ae9189d27b28430a5a7abd8084dfb6a5dc83287ad
symbol: "engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.NativeBindingGenerationResult.Item(System.String)"
source: xml
reviewed: d249f1ea39ee6352e3f4a763b403305a3ead045ad3f156ca9e67280ada3cc290
title: "NativeBindingGenerationResult.Item"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Gets a borrowed descriptor whose outputs remain protected until this result is disposed.

## Parameters

**Parameter `key`:** The checkout-relative Native owner project.

## Returns

The selected generation; neither its paths nor retained descriptors extend reading ownership.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Reading ownership has ended.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** The project is outside this closure.
