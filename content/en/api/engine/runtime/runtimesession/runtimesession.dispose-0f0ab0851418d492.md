---
uid: api.0f0ab0851418d4929c1ae0bc08f462ed65d71523b4836745a21987abff112f2b
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.Dispose"
source: xml
reviewed: 2bc78121ef582533590386cedd45ba389066f703934f9150b064719224d4646a
title: "RuntimeSession.Dispose"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Releases scene, asset, scheduling, serialization, and logging ownership for this session.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Session work has not drained or a shared generation still owns live dependencies.
