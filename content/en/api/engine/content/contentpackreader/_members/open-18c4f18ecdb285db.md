---
uid: api.18c4f18ecdb285dbc534c253f463a5d7ecab9d3099685aee337d8121547bc60b
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackReader.Open(System.IO.Stream,Inno.Content.ContentPackDescriptor,Inno.Core.Serialization.SerializationGeneration,Inno.Content.ContentReadLimits,System.Threading.CancellationToken)"
source: xml
reviewed: 32bd0bf5ee43ca3de929e33b74e63de6559d3f4ee18225a034220286701715db
title: "Open"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Takes ownership of a readable seekable pack and validates all bytes, entries, and budgets.

**Parameter `pack`:** The owned stream; callers must not access it after this call. Failure also disposes it.

**Parameter `descriptor`:** The expected complete-pack identity received through validated deployment metadata.

**Parameter `serialization`:** The borrowed converter generation used to decode the common content index.

**Parameter `limits`:** Explicit finite reading and expansion budgets; null selects the documented defaults.

**Parameter `cancellationToken`:** Cancels validation before a store is returned.

**Returns:** A caller-owned store that retains the stream until every lease and stream has retired.

**Exception `T:System.IO.InvalidDataException`:** The encoded hash, index, entry inventory, decoded bytes, or reading budgets are invalid.

**Exception `T:System.OperationCanceledException`:** Validation was canceled; the input stream is disposed.
