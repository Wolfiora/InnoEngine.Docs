---
uid: api.5dd3fe4a04446aa46f1e5aaecae8da4c4a5e2c357bf8d80c4b9ccbc6428b2b42
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.RetireResource(System.String,System.Action)"
source: xml
reviewed: 8c62e9009961f058d8239a8c381b2ccc89fc81ae068baa207705922f4f4ac5af
title: "TypeRegistry\u003CTSnapshot\u003E.RetireResource"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Drains one retryable lifecycle operation at the control-thread safe point before releasing dependencies.

**Parameter `owner`:** The resource or extension identifier included in deadline diagnostics.

**Parameter `retire`:** The retirement operation, including owner-thread completion pumping when required.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** The operation exceeded its deadline. Its closure stays owned and further retirement or refresh is blocked.
