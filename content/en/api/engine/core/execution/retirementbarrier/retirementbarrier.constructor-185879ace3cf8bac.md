---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.185879ace3cf8bac6e30db449a54cd0777368e967d9e639319196bcf640c1b4e
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.#ctor(System.String,System.Nullable{System.TimeSpan})
title: RetirementBarrier.Constructor
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: d500d97402c223c5341897b3840e124aa38296648cf93589b87beac940136ed7
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
