---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e848f9932405f75c796f99ac8807b7fb50ba20d96d85c416814dfff41fbc2cce
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.Complete
title: ReferenceRecoveryTransaction.Complete
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 6b0095697f021657e98af1830dd33a25a09a6852d205aaf7c61285839ad8f11c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** Application is incomplete or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more completed retirement operations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Unfinished retirement retains all owners and blocks further phases.
