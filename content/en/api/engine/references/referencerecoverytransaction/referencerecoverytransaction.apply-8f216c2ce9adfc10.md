---
uid: api.8f216c2ce9adfc1023f5380b9289dfe4f1891d551b548059c11b848f41c72cd3
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.Apply"
source: xml
reviewed: 40e0f56496faffa4f44e1d982f938a0b53cf923a1396bbe5b1c85884e7dc0d8c
title: "ReferenceRecoveryTransaction.Apply"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Applies provisional objects and values, resolves preserved slots, and validates the candidate before commit.

**Exception `T:System.InvalidOperationException`:** Preparation is incomplete or the caller is not the owner thread.
