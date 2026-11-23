---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a71ebada9acb93e08c77d9a996aa5218f9c9c41fed2381c6927ec1ac7cc7083e
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostic.#ctor(System.String,System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{Inno.Core.Diagnostics.DiagnosticLocation})
title: Diagnostic.Constructor
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 1d4973bf3412ece3038f0216a8ef3ff956193e95b1e8d0ad80834e022a770ee0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `code`:** The stable issue code within its producer.

**Parameter `message`:** The actionable human-readable message.

**Parameter `severity`:** The common engine impact classification.

**Parameter `semanticID`:** An optional extension or protocol identifier, never interpreted as a file path.

**Parameter `objectID`:** An optional persistent object identity, never a runtime handle.

**Parameter `location`:** An optional actual source file location.

## Exceptions

**Exception `T:System.ArgumentException`:** The code is empty or an object identity is empty.

**Exception `T:System.ArgumentNullException`:** The message is null.
