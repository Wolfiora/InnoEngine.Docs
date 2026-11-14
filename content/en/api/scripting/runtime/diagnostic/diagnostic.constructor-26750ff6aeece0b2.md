---
uid: api.26750ff6aeece0b2c90f261f51b1486f81e7cb7ad4bb4ac41886e8193cbb4449
symbol: "scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.#ctor(System.String,System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})"
source: xml
reviewed: 4592a20ea3c6757d555edc92e7e385ebd9399103aa8b91ba253ac6263f514112
title: "Diagnostic.Constructor"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a neutral diagnostic while keeping protocol, object and file identities distinct.

## Parameters

**Parameter `code`:** The stable issue code within its producer.

**Parameter `message`:** The actionable human-readable message.

**Parameter `severity`:** The common engine impact classification.

**Parameter `semanticId`:** An optional extension or protocol identifier, never interpreted as a file path.

**Parameter `objectId`:** An optional persistent object identity, never a runtime handle.

**Parameter `location`:** An optional actual source file location.

## Exceptions

**Exception `T:System.ArgumentException`:** The code is empty or an object identity is empty.

**Exception `T:System.ArgumentNullException`:** The message is null.
