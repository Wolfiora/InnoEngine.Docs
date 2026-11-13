---
uid: api.185879ace3cf8bac6e30db449a54cd0777368e967d9e639319196bcf640c1b4e
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.#ctor(System.String,System.Nullable{System.TimeSpan})"
source: xml
reviewed: a0511a36905bc4530005ebed47097a7b62d106ba8eee871a9672fd3f380f6afb
title: "Constructor"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Creates a deadline that starts with the first retirement attempt.

**Parameter `owner`:** A diagnostic name identifying the retained resource owner.

**Parameter `timeout`:** The positive maximum drain duration; omitted values use thirty seconds.

**Exception `T:System.ArgumentException`:** The owner name is empty or the timeout is not positive.
