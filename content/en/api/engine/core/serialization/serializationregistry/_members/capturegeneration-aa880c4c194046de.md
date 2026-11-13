---
uid: api.aa880c4c194046dea5190327a153b754e7f9f9f071637611812e33b7955f1806
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureGeneration"
source: xml
reviewed: 43e071437295f4b0592c60037bf8cf669bd2507f90fbe89d26ce1465ec4d0226
title: "CaptureGeneration"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures the currently active converter generation for deterministic work that may cross asynchronous continuations.

**Returns:** An immutable serialization generation owned by the caller.

**Exception `T:System.InvalidOperationException`:** Thrown when serialization services have not been initialized.
