---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f363347ede2df103470acaa85ae3e5e55d6e1fb0bf7cda2c83b7f713ed89c772
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Cancel
title: LifetimeScope.Cancel
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 49235ea2a728e781b3c3c719843adec348a70a114be5086a10a8968496b5d6cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Callbacks must return promptly. Dependent resources remain owned while cancellation callbacks execute, including when another thread attempts disposal. A callback reporting pending work permanently blocks release.

## Exceptions

**Exception `T:System.AggregateException`:** One or more cancellation callbacks fail.
