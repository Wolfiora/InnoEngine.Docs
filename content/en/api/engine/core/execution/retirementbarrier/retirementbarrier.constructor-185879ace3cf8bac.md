---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.185879ace3cf8bac6e30db449a54cd0777368e967d9e639319196bcf640c1b4e
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.#ctor(System.String,System.Nullable{System.TimeSpan})
title: RetirementBarrier.Constructor
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: c392c1a21147a5859d8d6ffc08f200091c05f03975aeb791094621b84d6327d8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** A diagnostic name identifying the retained resource owner.

**Parameter `timeout`:** The positive maximum drain duration; omitted values use thirty seconds.

## Exceptions

**Exception `T:System.ArgumentException`:** The owner name is empty or the timeout is not positive.
