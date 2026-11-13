---
uid: api.5109c056525b614ca26aa5f5cb8e358fc99a95202e5ab17a5f18ff25b79a14d1
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.#ctor(System.String,System.Exception)"
source: xml
reviewed: 29aa7ebe9afe84f058baeb69295c1f7f893f84193853725e18ea91693ed032ef
title: "Constructor"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Creates a retryable retirement barrier for an owner with unfinished work.

**Parameter `message`:** The owner and work preventing synchronous release.

**Parameter `innerException`:** The original retirement failure, including any contextual wrappers, or null when there is no cause.
