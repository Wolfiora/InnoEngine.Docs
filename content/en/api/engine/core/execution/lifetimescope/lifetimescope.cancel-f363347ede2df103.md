---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f363347ede2df103470acaa85ae3e5e55d6e1fb0bf7cda2c83b7f713ed89c772
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Cancel
title: LifetimeScope.Cancel
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 480d6e241d3efe54b2c947819805551efe5c5f328817b8f2c60fed8ffd04a12b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.AggregateException`:** One or more cancellation callbacks fail.

## Remarks

Callbacks must return promptly. Dependent resources remain owned while cancellation callbacks execute, including when another thread attempts disposal. A callback reporting pending work permanently blocks release.
