---
uid: api.a71ebada9acb93e08c77d9a996aa5218f9c9c41fed2381c6927ec1ac7cc7083e
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.#ctor(System.String,System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: a2eb05d155179e5f1722215752cf59fab5243a723590d244595e0f39b42a4ad0
title: "Diagnostic.Constructor"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Creates a neutral diagnostic while keeping protocol, object and file identities distinct.

**Parameter `code`:** The stable issue code within its producer.

**Parameter `message`:** The actionable human-readable message.

**Parameter `severity`:** The common engine impact classification.

**Parameter `semanticId`:** An optional extension or protocol identifier, never interpreted as a file path.

**Parameter `objectId`:** An optional persistent object identity, never a runtime handle.

**Parameter `location`:** An optional actual source file location.

**Exception `T:System.ArgumentException`:** The code is empty or an object identity is empty.

**Exception `T:System.ArgumentNullException`:** The message is null.
