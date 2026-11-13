---
uid: api.5dd3fe4a04446aa46f1e5aaecae8da4c4a5e2c357bf8d80c4b9ccbc6428b2b42
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.RetireResource(System.String,System.Action)"
source: xml
reviewed: 847792dd82c7459724e9c21b4100cb35dd82721337e4e2e71bfc616b80e9bf55
title: "RetireResource"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Drains one retryable lifecycle operation at the control-thread safe point before releasing dependencies.

**Parameter `owner`:** The resource or extension identifier included in deadline diagnostics.

**Parameter `retire`:** The retirement operation, including owner-thread completion pumping when required.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** The operation exceeded its deadline. Its closure stays owned and further retirement or refresh is blocked.
