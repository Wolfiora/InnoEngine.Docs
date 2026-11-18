---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.21bc4444531ef1f825a6ccc49a38754ecba6c1e735cef19196f467a35ef239f2
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Own``1(``0)
title: LifetimeScope.Own
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: a067a8344f68abf7516cfffa37c412db4aef73b0703f0f4aec091f476d3abce9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
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
