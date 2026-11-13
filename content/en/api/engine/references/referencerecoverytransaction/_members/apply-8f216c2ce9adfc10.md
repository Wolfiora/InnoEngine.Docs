---
uid: api.8f216c2ce9adfc1023f5380b9289dfe4f1891d551b548059c11b848f41c72cd3
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.Apply"
source: xml
reviewed: 8ebd94cef459b7b4957292c41c392564a1f27265d97f5bb25ad10a1b8e700bf0
title: "Apply"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Applies provisional objects and values, resolves preserved slots, and validates the candidate before commit.

**Exception `T:System.InvalidOperationException`:** Preparation is incomplete or the caller is not the owner thread.
