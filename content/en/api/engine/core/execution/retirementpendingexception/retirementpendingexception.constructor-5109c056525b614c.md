---
uid: api.5109c056525b614ca26aa5f5cb8e358fc99a95202e5ab17a5f18ff25b79a14d1
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.#ctor(System.String,System.Exception)"
source: xml
reviewed: 5caf7ccdd566be43d357590540393818b8a4dace615f651de4edb7b3311b2855
title: "RetirementPendingException.Constructor"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Creates a retryable retirement barrier for an owner with unfinished work.

**Parameter `message`:** The owner and work preventing synchronous release.

**Parameter `innerException`:** The original retirement failure, including any contextual wrappers, or null when there is no cause.
