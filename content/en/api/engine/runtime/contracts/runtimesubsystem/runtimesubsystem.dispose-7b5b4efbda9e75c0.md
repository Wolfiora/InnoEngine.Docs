---
uid: api.7b5b4efbda9e75c0d6a5d3fb067972da2f49e9249913cbc7a40133e3cf743844
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.Dispose"
source: xml
reviewed: a35914ef5b527609b4bc2922c9d5709f18b96d77e8f4878648887435e85995a8
title: "RuntimeSubsystem.Dispose"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Releases this owner's registrations and resources exactly once.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Tracked work, the stop hook or a child resource is still draining. Retry without releasing dependencies.

**Exception `T:System.AggregateException`:** Retirement failed after every cleanup stage was attempted.
