---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.18c4f18ecdb285dbc534c253f463a5d7ecab9d3099685aee337d8121547bc60b
symbol: engine:Inno.Content:M:Inno.Content.ContentPackReader.Open(System.IO.Stream,Inno.Content.ContentPackDescriptor,Inno.Core.Serialization.SerializationGeneration,Inno.Content.ContentReadLimits,System.Threading.CancellationToken)
title: ContentPackReader.Open
kind: api
owners:
- Inno.Content
apiSurface: source-clr
sourceFingerprint: 227c760b89cb2ccfdeb4b7f56b2198e6a83cfab9f53c586662c26603598e6d13
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `pack`:** The owned stream; callers must not access it after this call. Failure also disposes it.

**Parameter `descriptor`:** The expected complete-pack identity received through validated deployment metadata.

**Parameter `serialization`:** The borrowed converter generation used to decode the common content index.

**Parameter `limits`:** Explicit finite reading and expansion budgets; null selects the documented defaults.

**Parameter `cancellationToken`:** Cancels validation before a store is returned.

## Returns

A caller-owned store that retains the stream until every lease and stream has retired.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The encoded hash, index, entry inventory, decoded bytes, or reading budgets are invalid.

**Exception `T:System.OperationCanceledException`:** Validation was canceled; the input stream is disposed.
