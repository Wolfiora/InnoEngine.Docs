---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.26750ff6aeece0b2c90f261f51b1486f81e7cb7ad4bb4ac41886e8193cbb4449
symbol: scripting:Inno.Core.Diagnostics:M:InnoEngine.Diagnostics.Diagnostic.#ctor(System.String,System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,System.Nullable{System.Guid},System.Nullable{InnoEngine.Diagnostics.DiagnosticLocation})
title: Diagnostic.Constructor
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: editor-script
sourceFingerprint: cbeffec700d56a2e85dd85870953d8000dc6517451d6af4a9f073e2062aa767a
apiScope: Runtime
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
