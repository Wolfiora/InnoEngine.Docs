---
uid: api.f01af125bc6fbd7391919b4a313a047f5f9b8092c05c54a3f5488cf79c160c7e
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.PrepareForActivation"
source: xml
reviewed: 4829837b7d7a526936299f16c9d769d1644deae855690d116f1381388568cd84
title: "PrepareForActivation"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Quiesces domain owners while the previous type and serialization publication is still active.

**Exception `T:System.InvalidOperationException`:** The phase is out of order or the caller is not the owner thread.
