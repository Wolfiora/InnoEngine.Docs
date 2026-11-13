---
uid: api.5df6f4bb936838ae88a6726aba7056791fceaa98b1216c46b32958e51aa4ccb4
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementTimeoutException.#ctor(System.String,System.Exception)"
source: xml
reviewed: 2b8fd3560ca9ae5eb4f63c1d6c2ac0c39fdec67166c098e6c9dc95d77f70eb55
title: "Constructor"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Creates a terminal retirement failure whose owner must remain retained until host shutdown.

**Parameter `message`:** The owner and unfinished work that exceeded the deadline.

**Parameter `innerException`:** The complete failure that prevented retirement, or null when no underlying exception is available.
