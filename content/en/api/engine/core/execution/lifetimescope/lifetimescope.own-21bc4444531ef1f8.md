---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.21bc4444531ef1f825a6ccc49a38754ecba6c1e735cef19196f467a35ef239f2
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Own``1(``0)
title: LifetimeScope.Own
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 7b17238e66cd5bdd95e8fac153f2753f1a58eb63e776702d3df19ae94b79980d

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TResource`:** The disposable resource type.

## Parameters

**Parameter `resource`:** The resource to release in reverse registration order.

## Returns

The same resource for explicit dependency wiring.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The resource is null.

**Exception `T:System.InvalidOperationException`:** Retirement has already started.
