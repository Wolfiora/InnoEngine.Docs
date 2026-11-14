---
uid: api.aa880c4c194046dea5190327a153b754e7f9f9f071637611812e33b7955f1806
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureGeneration"
source: xml
reviewed: 9ebc307e3c0b2628d57bcb7afb8d9bcc2b7cfa6f26bbf8daf5ffcce396cbdbd5
title: "SerializationRegistry.CaptureGeneration"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures the currently active converter generation for deterministic work that may cross asynchronous continuations.

## Returns

An immutable serialization generation owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when serialization services have not been initialized.
